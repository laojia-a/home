# www.jclaw.top 发布记录（进行中）

- 源码：`feat/immersive-tv-material-20260917`，`cbc8cd66c73f790627a5b6f53d2f72cb962c4b3e`；该分支已推送，未合并到 `main`。
- 构建：15 项单元检查、`scripts/build.py`、`scripts/verify.py` 通过。
- 发布包：`release/www-jclaw-top/cbc8cd66/index.html`，仅 1 个文件；SHA-256 `acd8e51ec5cf62fb6f3410f030a0576bdb72e914f31103609051343b755646dd`，与 `dist/index.html` 一致。`release/` 在 `.gitignore` 中。
- Cloudflare Pages 项目：`jclaw-home`；Production 分支为 `feat/immersive-tv-material-20260917`。
- Pages 部署：`0d0b2617-b136-45a7-8b8a-897a53e6b451`；`https://jclaw-home.pages.dev/` 返回 HTTP 200 和 `JCLAW TV · S10 节目精修` 标题。此响应可能经过 Cloudflare HTML 注入，未声称与本地 HTML 逐字节相同。
- 自定义域名：`www.jclaw.top` 已添加到该 Pages 项目，但当前状态为 `pending`，验证错误为 `CNAME record not set`；从本机访问该域名返回 HTTP 525。**目标域名尚未发布成功。**

待办：取得 `jclaw.top` 的 DNS Read/Write 后，先读取并保存当前 `www` 记录，再将其指向 `jclaw-home.pages.dev` 并核对 Pages 域名状态、HTTPS 页面、频道操作。不要在未读取现有 DNS 记录时盲目覆盖。当前 API 令牌具有 Pages 操作权限，但 DNS 读取返回 403。

令牌权限变更需账户持有人在 Cloudflare 控制台完成；不要把令牌内容贴到聊天或提交到仓库。建议只为 `jclaw.top` Zone 增加 DNS Read 与 DNS Edit（写入）权限，完成后再次检查 API 读取能力。
