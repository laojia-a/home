# JCLAW TV 全站接入配置

## 范围

- 频道接入地址与启用状态由 Cloudflare Pages Function 读取和写入 Workers KV，所有访客读取同一份配置。
- 机身“设置”在托管站点需要管理员密码。密码仅在当前菜单打开期间保留在页面内存中，关闭菜单即清除。访客不能通过网页或 API 写入全站配置。
- 播放速度、亮度等画面偏好仍是每个浏览器的本地偏好，不属于全站配置。
- 独立 HTML / 无 Pages API 的本地预览仍使用原有浏览器本地配置；这不是线上管理员机制。

## 部署资源

- Pages 项目：`jclaw-home`，发布目录 `dist/`；构建时生成 `dist/_worker.js` 和 `dist/server/config-api.js`。
- KV：`jclaw-home-site-config`，绑定名 `SITE_CONFIG`，键 `site-config-v1`；绑定 ID 在 `wrangler.jsonc`。
- Secret：`ADMIN_PASSWORD`，仅在 Cloudflare 生产环境配置。密码本机备查文件为 Git 忽略的 `.secrets/admin-password.txt`，不得提交或复制到发布目录。
- `GET /api/config` 返回公开频道配置；`POST /api/admin/auth` 验证密码；`PUT /api/admin/config` 验证密码、同源 Origin、七频道 HTTPS 地址和版本号后保存。

## 行为与限制

- 页面在读取服务端配置前禁用工具跳转和设置；线上 API 出错时不回退到浏览器本地接入地址。
- 版本号用于阻止基于旧配置的覆盖。Workers KV 有传播延迟；低频管理配置适用，跨地区并发写入不提供强一致事务。
- 管理员密码必须保持强随机且仅由受信任的管理员保管。若泄露，应更换 Cloudflare Secret 并删除旧本地备份。
- 仅使用 HTTPS 全站接入地址；浏览器本地预览仍可使用 localhost HTTP。

## 验证

`npm test`、`py -3 scripts/build.py`、`py -3 scripts/verify.py`，以及 `npx wrangler pages dev dist`。线上发布后核对：公开 GET、未授权写入 401、正确密码解锁和保存、另一个浏览器读取同一配置、电视画面与换台。

## 2026-09-17 发布结果

- 实现经 [PR #16](https://github.com/laojia-a/home/pull/16) 的完整 CI 检查通过并快进合并到 `main`。Wrangler 配置兼容修复后，发布源码为 `fa5ccc75b45cb3a3c3b6a0162c72885b3f4df2f7`。
- Pages 生产分支已改为 `main`；生产部署为 `https://980f2abb.jclaw-home.pages.dev/`，自定义域名仍为 `https://www.jclaw.top/`。
- KV 初始值已写入：三个既有 HTTPS 接入地址启用，其余四个频道未配置；公开 API 返回 revision 1。
- 线上验证：主页与公开 API 均 HTTP 200；错误密码 HTTP 401；本机备查密码验证 HTTP 200；Edge 观察到机身设置打开后仅显示管理员密码入口。
- 密码备查仅在当前机器的 `.secrets/admin-password.txt`，Git 忽略；发布后不要将该文件放入任何公开同步目录。
