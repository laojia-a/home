# 历史动态分镜：16幕SVG及可重现原始源码

本目录恢复的是之前交付的 `JCLAW-TV-动态分镜与源码.zip` 中的16个SVG节目。**不是当前S10的16幕Canvas，也不是新一轮视觉精修或生产SVG接口已经完成。**

来源ZIP SHA-256：`b8cc56e33897b39841d5d37109b1f4207f21439f48ee30ba95c17a824888929f`。原始Python生成器及元数据保持原字节；重建SVG逐文件匹配原交付。清单见MANIFEST.json，预期哈希见EXPECTED.json。

## 使用与重建

`assets/programmes/` 中有真实SVG文件，支持SVG动画的浏览器可读取；仓库网页预览可能只显示静态画面，不能因此判断动画已失效。未自动接入生产TV。

从仓库根目录运行：

```sh
python3 scripts/restore_cinematic.py
python3 tests/archived_svg.py --artifacts /tmp/home-svg-qa
```

第一条只使用本目录两个已固定哈希的原始源文件，在临时目录执行生成，再验证16个输出；不需要聊天附件、不访问网络、不修改生产src。不要直接在原生成器目录手造programs.js：封装脚本会提供所需临时引导文件。Python与Node是构建工具，Playwright/Chromium仅用于第二条浏览器检查。

## 网站分组

CTH六幕；临研知视三幕；Workbench三幕；EZCTD、Solo、Oracle、学习资料各一幕。历史文件前缀gcp对应学习资料主题，名称原样保留；不能把历史ID静默改成当前Canvas ID。复用时需显式映射到 `src/animations/sites/` 的相应网站模块，并满足正式宿主的时间/销毁协议。

## 实际验证与限制

恢复提交 `f716a432487be055520dee70242508780e3a40f0`；GitHub Actions run `34939772081` 成功。16文件字节/哈希相同，Chromium逐个检查了seek产生像素变化、暂停像素冻结、继续时钟推进及向后seek重现。现有生产19浏览器流程和128固定帧同时通过。证据见 `docs/evidence/cinematic-recovery-20260915/`。

这些是本轮新运行产生的验证材料，不是假装恢复了旧聊天录屏。没有证明最终审美获用户确认，没有证明远程字体、直播或CSS三维宿主已实现。没有字体二进制。
