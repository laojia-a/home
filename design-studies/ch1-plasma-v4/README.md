# CH01 血浆分装流程动画 v4

用户指出前版没有理解物资与操作语义，明确要求彻底换成：采血管离心后，用移液器或滴管吸取上清血浆，分别置于待测与备份两个冻存管。本版选择移液器，重做器材与流程，保留电视外壳和简洁暖色风格。

## 可见流程

1. 闭合盖内的离心示意，转子中对称放置样本。
2. 切到离心后的抗凝采血管：淡黄色上清血浆、薄分界和下层细胞。
3. 移开采血管盖，移液器吸头进入上清；液面随吸取下降，吸头不越过分界。
4. 先退出采血管再横向转移，进入“待测”冻存管内排液。
5. 回到同一血样，再次吸取上清，转移到“备份”冻存管。
6. 两支冻存管盖好，留下待测和备份标识。

长身圆底采血管、细长移液器吸头、短粗螺纹口冻存管分别绘制。采血管有独立支座，冻存管有自立底座。没有百分比、离心参数、采样体积或保存温度；28 秒仅是动画时长。

此处是独立流程审阅样稿，尚未替换生产模块。绘制比例与过程简化用于说明语义，不是可执行的实验 SOP。

## 语义核对来源

- [Thermo Fisher：Blood Plasma and Serum Preparation](https://www.thermofisher.com/hk/zt/home/references/protocols/cell-and-tissue-analysis/elisa-protocol/elisa-sample-preparation-protocols/blood-plasma-serum-preparation.html)：抗凝血离心，取上清血浆并分装。
- [Thermo Fisher：Blood Fractionation Protocol](https://www.thermofisher.com/fr/fr/home/references/protocols/nucleic-acid-purification-and-analysis/rna-protocol/blood-fractionation-protocol-for-collection-of-white-blood-cells.html)：上层血浆、下层红细胞和薄界面；本版参考检索到的同名官方页面内容，仅用于分层示意。
- [Thermo Fisher：Cryogenic Storage Vials](https://www.thermofisher.com/search/browse/category/us/en/90168052)：冻存管形态与螺纹盖。器材为简化造型，不指向具体型号。

## 构建与检查

在本目录运行 `npm ci`、`npm run build`；从仓库根启动 HTTP 服务，访问本目录。`node --test process.test.js` 检查每个取样时间点的示意量守恒、吸头始终位于血浆层、冻存管仅在吸头进入管口后注液。

浏览器已逐段查看离心、分层、吸取、待测注液、备份注液、双管封盖；检查桌面与 390 × 844 小屏。源管的下层细胞保持在原处，两次分装与吸头内液体变化关联。最终观感待用户审阅。
