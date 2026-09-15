# 给下一个工作区

直接连接并拉取laojia-a/home。已授权的工作区不需要用户再下载源码上传；但GitHub接续只能读取仓库实物，不能凭它访问旧聊天的sandbox附件。

1. 先读AGENTS.md和STATUS，核对当前HEAD和工作树。af23c76是已完成核心导入的基准，不要按旧PLAN重复导入旧src。
2. 读DECISIONS/REJECTED/EVOLUTION，了解为什么是S10、为什么不回到OS、为什么鹈鹕不是角色。
3. 根据STATUS补仍缺的历史实物；没有源字节不能造占位文件或声称归档成功。不要覆盖src、根index、reference或冻结基线。
4. 每网站目录独立迭代，其内再按分幕组织。统一实例合同已用于Canvas；扩展SVG/CSS三维须真实实现验证。
5. 先拆接入设置面板/草稿服务，再拆播放器/导航/时钟/输入。保持同时间画面和既有行为；视觉打磨另开提交。
6. 每批实际构建、交互/固定帧及异常测试，记录环境限制。完成后回读远端commit和文件，再改STATUS/PLAN/Issue，不重复作宏大路线图。

默认不增加新功能、不改线上站点/DNS、不部署全部历史主题。现有包的媒体和字体能力仅作参考，不虚称当前支持。

## 当前命令

```sh
npm run check
python3 tests/browser.py --content
python3 tests/parity.py
python3 tests/collection.py
```

核对package.json与脚本参数再运行。file://使用构建后的dist/index.html；root index为ES模块开发入口。archive/earlier-tv.html真实存在后才能构建完整portable页。

## 收尾必须回答

什么实际进入了哪个commit；哪些代码/视觉没动；实际测试结果；还缺哪些资产/模块；接手是否仍依赖聊天附件。不要让用户再去追问“到底入库了吗”。
