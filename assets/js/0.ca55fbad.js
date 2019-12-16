(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(t,e,r){"use strict";r.r(e);var i=r(0),a=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),r("p",[t._v("用户可以自定义过滤器，对任务／日程／文章进行过滤，甚至是分类聚合计数／求值。\n目标用户：开发人员，设计师，项目经理，测试人员。目前这个TQL对普通用户还有一定门槛，但通过自动补充，弹出可选项等功能，能使大部分用户对其无明显痛感。")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),r("p",[t._v("可以由以下任意一种格式表达(此处字段表达式仍需要优化，尽量缩短简明表达字段含义)：")]),t._m(14),t._m(15),r("p",[t._v("可以由以下任意一种格式表达：")]),r("ul",[r("li",[t._v("固定字段：\n"),r("ul",[t._m(16),r("li",[t._v("字段根据搜索类型不同而不同，详见"),r("router-link",{attrs:{to:"./fields.html"}},[t._v("fields")])],1)])]),t._m(17)]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),r("p",[t._v("目前内建有以下函数")]),t._m(25),t._m(26),r("p",[t._v("GROUP [groupFn [DESC|ASC] [, ...]] BY groupAgg [, ...]")]),t._m(27),r("p",[t._v("说明：未来将只支持一个聚合分类，不支持多个聚合分类。当聚合函数有多个的情况下，仅能按照第一个聚合函数的值进行排序。")]),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),r("p",[t._v("ORDER BY field [ASC|DESC] [, ...]")]),t._m(33),t._m(34),t._m(35)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"teambition-query-laguage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#teambition-query-laguage","aria-hidden":"true"}},[this._v("#")]),this._v(" Teambition Query Laguage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"summary-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary-简介","aria-hidden":"true"}},[this._v("#")]),this._v(" Summary 简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("TQL是一种"),e("code",[this._v("搜索DSL")]),this._v("(Domain Specific Language). 用于简化搜索语句，扩大搜索场景的基础工程。\n是基于"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/SQL",target:"_blank",rel:"noopener noreferrer"}},[this._v("SQL")]),this._v(", 参考"),e("a",{attrs:{href:"https://confluence.atlassian.com/jiracore/blog/2015/07/search-jira-like-a-boss-with-jql",target:"_blank",rel:"noopener noreferrer"}},[this._v("JQL")]),this._v(", 取SQL的部分条件语句语法(WHERE condition)，以及聚合语句语法(GROUP BY groupElment), 排序语句语法(ORDER BY orderElement), 并优化部分内容，创造出来的查询语句。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何写tql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何写tql","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何写TQL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("详见 Thoughts 文档 "),e("a",{attrs:{href:"https://thoughts.teambition.com/workspaces/5ae456381cb236e769050120/docs/5a38b234aa4a210001927f59",target:"_blank",rel:"noopener noreferrer"}},[this._v("Search-Lab 101")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example-案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-案例","aria-hidden":"true"}},[this._v("#")]),this._v(" Example 案例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# 空查询也是允许的\ndueDate < 7d # 一周内截止的任务\ndueDate < 7d AND executorId = currentUser() # 一周内截止的我的任务\ntext ~ 任务 # 查询含有‘任务’关键词的任务\nc:数字字段 > 0 # 查询某一个数字字段大于0的任务\nc:59e98ee5ecaa69324136c8e2 > 0 # 查询某一个数字字段大于0的任务\nc:数字字段 > 0 AND isDone = true\nprojectId = 58d8ca99816927c3a051dfcf\nprojectId = 58d8ca99816927c3a051dfcf GROUP BY executorId\nGROUP BY executorId\nGROUP SUM(storyPoint) BY executorId\nGROUP SUM(storyPoint) BY executorId,projectId\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"设计目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计目标","aria-hidden":"true"}},[this._v("#")]),this._v(" 设计目标")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"表达式-tql-specification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表达式-tql-specification","aria-hidden":"true"}},[this._v("#")]),this._v(" 表达式 TQL Specification")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("TQL由"),e("code",[this._v("条件表达式")]),this._v("和"),e("code",[this._v("聚合表达式")]),this._v("以及"),e("code",[this._v("排序表达式")]),this._v("组合, 可以是空的, 表达式如下：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[conditionExpr] [groupExpr] [orderExpr]\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"comment-注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comment-注释","aria-hidden":"true"}},[this._v("#")]),this._v(" Comment 注释")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("行内注释，从"),e("code",[this._v("#")]),this._v("开始到行结尾，都是算注释。注释代码不参与执行。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"conditionexpr-条件表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conditionexpr-条件表达式","aria-hidden":"true"}},[this._v("#")]),this._v(" conditionExpr 条件表达式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("field operation value")]),e("li",[this._v("conditionExpr AND|OR conditionExpr")]),e("li",[this._v("(conditionExpr)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"field-字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#field-字段","aria-hidden":"true"}},[this._v("#")]),this._v(" field 字段")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("text: 只能用于"),e("code",[this._v("~")]),this._v("语句, 在搜索Task时等价于 (title ~ XX OR content ~ XX OR activityContent ~ XX)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("自定义字段：\n"),e("ul",[e("li",[this._v("cf:自定义名")]),e("li",[this._v("cf:自定义字段ID")]),e("li",[e("s",[this._v("ccf:计算字段名")])]),e("li",[e("s",[this._v("ccf:计算字段ID")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"operation-操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#operation-操作符","aria-hidden":"true"}},[this._v("#")]),this._v(" operation 操作符")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("code",[t._v("(>|>=|<|<=|=|!=)")]),t._v(" 分别表示大于, 大于等于, 小于, 小于等于, 等于 和 不等于。")]),r("li",[r("code",[t._v("~")]),t._v(" 表示 LIKE 近似搜索，用于全文搜索。")]),r("li",[r("s",[t._v("[not ] between 右侧只能是numberRange 或 dateRange")])]),r("li",[r("code",[t._v("[NOT] IN")]),t._v(": 表示是否在一个集合中")]),r("li",[r("code",[t._v("[NOT] CONTAIN")]),t._v(": 表示是否含有某一个值")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"value-值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#value-值","aria-hidden":"true"}},[this._v("#")]),this._v(" value 值")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("null: "),r("code",[t._v("null")]),t._v(": 表示此字段无值，只能是"),r("code",[t._v("=")]),t._v("或者"),r("code",[t._v("!=")]),t._v(", 对所有字段都有效，判定字段是否有值, 例如: "),r("code",[t._v("dueDate = null")]),t._v("表示没有dueDate的任务")]),r("li",[t._v("word: "),r("code",[t._v("[^symbol]+")]),t._v(" 非保留符号组成的word, 可以直接视为string或number值")]),r("li",[t._v("string: "),r("code",[t._v("['|\"]{character+}['|\"]")]),t._v(" 字符串, 任何非保留字, 或者以成对的引号引用的值. 如果中间需要出现单引号则需要用反斜杠 "),r("code",[t._v("\\")]),t._v(" escape.")]),r("li",[t._v("function: "),r("code",[t._v("word([value[, value [, ...] ]])")]),t._v(" 函数, 详见函数")]),r("li",[t._v("number: "),r("code",[t._v("[-](0|1-9[0-9...])[.0-9...]")]),t._v(" 数字")]),r("li",[t._v("dateOffset: "),r("code",[t._v("number(d|day|m|month|y|year|h|hour|min|minute|s|second)")]),t._v(" 表示时间断")]),r("li",[t._v("date: "),r("code",[t._v("dateOffset|ISO8601_TIME_FORMAT")]),t._v(" 相对当前时间或者绝对时间 eg."),r("code",[t._v("2017-01-02T01:23:45:000+8:00")]),t._v(", "),r("code",[t._v("-7d")])]),r("li",[t._v("rangeValue: "),r("code",[t._v("(value [, ...])")]),t._v(" 数据集合")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"string-双引号和单引号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-双引号和单引号","aria-hidden":"true"}},[this._v("#")]),this._v(" string 双引号和单引号")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("双引号表示"),r("code",[t._v("词组查询")]),t._v("，完全匹配该词组。例如：搜索"),r("code",[t._v("招商银行")]),t._v("， 可以搜出"),r("code",[t._v("招商证券")]),t._v(", 搜索"),r("code",[t._v('"招商银行"')]),t._v("，只能搜出"),r("code",[t._v("招商银行")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"function-函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function-函数","aria-hidden":"true"}},[this._v("#")]),this._v(" function 函数")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("currentUser() 搜索者")]),r("li",[t._v("me() 搜索者, 等价于currentUser()")]),r("li",[t._v("now() 当前时间")]),r("li",[t._v("startOf(unit [[, offset], time]) 某个时间关于某个单位的开始, 可以设置偏移值, 亦可添加起算时间，例如: "),r("code",[t._v("startOf(d)")]),t._v("表达今天凌晨，"),r("code",[t._v("startOf(d, 8h)")]),t._v("表达今天8点. "),r("code",[t._v("startOf(month, 5d, -1month)")]),t._v("表达上月第5日凌晨")]),r("li",[t._v("endOf(unit [, offset] [, time]) 某个时间关于某个单位的结束，例如: "),r("code",[t._v("endOf(d)")]),t._v(" 今天晚上23:59:59:999.")]),r("li",[r("s",[t._v("offset(time, period) 某个时间的偏移，例如："),r("code",[t._v("offset(now(), -7d)")]),t._v("表示距离现在7天前，等价于"),r("code",[t._v("-7d")])])]),r("li",[t._v("tql(type, tqlString) 根据type和tql语句查询一组数据Id 用于"),r("code",[t._v("IN")]),t._v("和"),r("code",[t._v("NOT IN")]),t._v("操作，需要调用方实现方法")]),r("li",[t._v("api(url, options...) 根据url查询一组数据Id 用于"),r("code",[t._v("IN")]),t._v("和"),r("code",[t._v("NOT IN")]),t._v("操作，需要调用方实现方法")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"groupexpr-聚合表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#groupexpr-聚合表达式","aria-hidden":"true"}},[this._v("#")]),this._v(" groupExpr 聚合表达式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("聚合函数，按照聚合分类进行聚合；聚合值必定包含数量，可以省略；聚合分类是一个"),e("code",[this._v("field")]),this._v(", 则可以按照聚合函数的值进行排序，排序方式紧跟函数后面，默认将以聚合分类的命中数量倒序排。例如："),e("code",[this._v("GROUP SUM(storyPoint) DESC BY projectId")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"groupfn-聚合函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#groupfn-聚合函数","aria-hidden":"true"}},[this._v("#")]),this._v(" groupFn 聚合函数")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("COUNT() 计数函数, 可省略, 例如: "),r("code",[t._v("GROUP BY executorId")]),t._v(" 等价于 "),r("code",[t._v("GROUP COUNT() BY executorId")]),t._v(", 即使不写COUNT函数，每一个桶结果还是会返回聚合数量")]),r("li",[t._v("SUM(field) 求和函数")]),r("li",[t._v("AVG(field) 求平均值函数")]),r("li",[t._v("MAX(field) 求最大值函数")]),r("li",[t._v("MIN(field) 求最小值函数")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"groupagg-聚合分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#groupagg-聚合分类","aria-hidden":"true"}},[this._v("#")]),this._v(" groupAgg 聚合分类")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("field 按字段聚合")]),r("li",[t._v("DATE_HISTOGRAM(field, interval [, offset]) 按时间interval聚合，例如: "),r("code",[t._v("DATE_HISTOGRAM(created, month)")]),t._v(" 按照自然月1月，2月进行聚合，注意，目前还不支持offset，所以所有时间均是UTC时间。")]),r("li",[t._v("DATE 等价于 DATE_HISTOGRAM")]),r("li",[t._v("HISTOGRAM(field, interval) 按数字字段的interval聚合, 例如: "),r("code",[t._v("HISTOGRAM(storyPoint, 1)")])]),r("li",[r("strong",[t._v("NOT DONE")]),t._v(" FILTERS(conditionExpr [, ...]) 自定义聚合 未完成")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"orderexpr-排序表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#orderexpr-排序表达式","aria-hidden":"true"}},[this._v("#")]),this._v(" orderExpr 排序表达式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("按某一个字段正序"),e("code",[this._v("ASC")]),this._v("或倒序"),e("code",[this._v("DESC")]),this._v("排序，默认按倒序排序。若没有排序表达式，默认按分数(_score)倒序，即"),e("code",[this._v("ORDER BY _score DESC")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"已知缺陷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#已知缺陷","aria-hidden":"true"}},[this._v("#")]),this._v(" 已知缺陷")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("中文输入法: 由于95%使用者是中文母语，中文母语的输入者都必须使用输入法，TQL部分内容有中英文混排，用户会有明显障碍。")]),r("li",[t._v("全角／半角: 输入法存在全角半角，相同符号 例如"),r("code",[t._v("～")]),t._v("和"),r("code",[t._v("~")]),t._v("，对于用户很难辨识清楚自己使用的是全角还是半角。")]),r("li",[t._v("字段名: 我们自身字段名的取名可能并非“表意”，甚至是有一些为了程序方便做的字段，用户用起来可能使用不便。")]),r("li",[t._v("ObjectId: 我们在自定义字段和部分值中使用ObjectId，长达24位的ID对用户记忆和表达式的表意都不友好。")])])}],!1,null,null,null);e.default=a.exports}}]);