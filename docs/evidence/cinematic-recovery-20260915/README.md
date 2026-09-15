# 2026-09-15：历史SVG恢复与当前TV回归证据

产生于GitHub Actions run [34939772081](https://github.com/laojia-a/home/actions/runs/34939772081)，输入提交见source-commit.txt，恢复输出提交f716a432487be055520dee70242508780e3a40f0。Ubuntu runner、Node22、Python3、Playwright1.56.0、Chromium；采用set_content载入实际构建HTML/原始SVG。无浏览器插件，使用普通Playwright。

- svg-results.json：16个历史SVG，与原交付哈希一致；seek改变像素，暂停时间与像素冻结，继续推进，向后seek同帧可重现。
- interaction-results.json：当前TV的19条实际浏览器检查，无页面脚本错误。
- parity-results.json：当前Canvas16幕×2视口×4时刻，共128帧与冻结基线结果一致。
- cth-contract/cth-supplies/learn-design/workbench-nca.png：本次对历史SVG重新渲染的代表静帧，不是原聊天截图或生产TV的新画面。
- parity-1440/parity-390.png：当前TV桌面和手机固定时间截图。

工作流还运行了10项单元测试、构建、源码边界及原始基线哈希检查。未改生产src、根index、reference、baseline。测试通过仅说明对应行为与像素比较，不是最终视觉批准。

完整旧合集仍未恢复，本轮没有把collection.py的缺档跳过视为“档案往返通过”。file://、用户电脑、线上工具登录、远程字体和直播未由这组测试验证。录屏未在本轮生成，不把PNG或时间戳称实录。
