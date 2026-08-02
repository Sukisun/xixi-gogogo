/* ====== 西西gogogo - 产品级应用 ====== */
'use strict';

// ========== 存储 ==========
const Store = {
  get(key, def) {
    try { const v = localStorage.getItem('xixi_' + key); return v ? JSON.parse(v) : def; }
    catch(e) { return def; }
  },
  set(key, val) {
    try { localStorage.setItem('xixi_' + key, JSON.stringify(val)); } catch(e) {}
  }
};

// ========== 主题配色（10大模块多巴胺色）==========
const THEMES = {
  english:  { bg1:'#c8e0f5', bg2:'#91c0e8', accent:'#3a7bd5', soft:'#a8c8f0', text:'#122a4a' },
  blog:     { bg1:'#d4f0e8', bg2:'#7ecdc0', accent:'#2db8a3', soft:'#a8e4d8', text:'#0a3a30' },
  express:  { bg1:'#fce5c8', bg2:'#f0b878', accent:'#e8920c', soft:'#fcdcb0', text:'#4a2a00' },
  books:    { bg1:'#f5dcc0', bg2:'#e8b888', accent:'#d4884a', soft:'#f5d4b0', text:'#4a2a10' },
  ai:       { bg1:'#e0d0f0', bg2:'#c0a0e0', accent:'#7b54c4', soft:'#c8b3e8', text:'#2a0a4a' },
  news:     { bg1:'#f5d0cb', bg2:'#e8a89f', accent:'#c4302b', soft:'#f4a4a0', text:'#4a1414' },
  finance:  { bg1:'#c8e8d8', bg2:'#8fd4b0', accent:'#2a9d8f', soft:'#b8e0d2', text:'#0a3a2f' },
  douyin:   { bg1:'#f0d0e0', bg2:'#e88ab0', accent:'#ec4899', soft:'#f5c0d0', text:'#4a1030' },
  beauty:   { bg1:'#f0d0d4', bg2:'#d8a0a8', accent:'#c1666b', soft:'#e8c0c4', text:'#3a1015' },
  history:  { bg1:'#e8dcc8', bg2:'#c8a878', accent:'#a07840', soft:'#dcc8a8', text:'#3a2a10' },
};

// ========== 模块定义 ==========
const MODULES = {
  // 1. 英语学习
  english: {
    title: '英语学习', sub: 'DAILY ENGLISH', icon: '🔤',
    quote: { tag:'今日金句', text:'Keep going - 每天进步一点点', isQuote:true },
    stats: [ {num:'15',label:'已学短句',cls:'stat-green'}, {num:'3',label:'连续打卡',cls:'stat-blue'}, {num:'5',label:'收藏句型',cls:'stat-yellow'} ],
    todos: [
      { title:'背诵今日金句并造句', time:'08:00' },
      { title:'复习昨日短语 4 条', time:'21:00' },
    ],
    done: [ { title:'跟读练习 10 分钟', time:'07:00' } ],
    phrases: [
      { en:'Practice makes perfect.', cn:'熟能生巧。', note:'鼓励坚持练习' },
      { en:'Actions speak louder than words.', cn:'事实胜于雄辩。', note:'强调行动' },
      { en:'Better late than never.', cn:'迟做总比不做好。', note:'安慰迟到' },
      { en:"Where there's a will, there's a way.", cn:'有志者事竟成。', note:'励志表达' },
    ],
    // 学习内容：语法小课堂
    lessons: [
      { title:'📍 一般现在时 vs 现在进行时', content:'一般现在时表示习惯性动作：I drink coffee every morning.（我每天早上喝咖啡）\n现在进行时表示此刻正在发生：I am drinking coffee now.（我现在正在喝咖啡）\n记忆口诀：经常用一般，正在用进行。' },
      { title:'📍 可数 vs 不可数名词', content:'可数名词有复数形式：apple→apples, book→books\n不可数名词没有复数：water, money, information, advice\n注意：information 和 advice 是不可数名词，不能加s！正确：a piece of advice（一条建议）' },
      { title:'📍 常用口语短句 10 句', content:"1. How's it going? 最近怎么样？\n2. I'm just looking. 我只是随便看看（逛街）\n3. It's on me. 这次我请客。\n4. Take your time. 慢慢来。\n5. No worries. 没关系/别担心。\n6. That makes sense. 有道理。\n7. I'll take it. 我买了/我要了。\n8. Just in case. 以防万一。\n9. It depends. 看情况。\n10. Sounds good! 听起来不错！" },
    ],
  },
  // 2. 博客精选
  blog: {
    title: '博客精选', sub: 'BLOG PICKS', icon: '✍️',
    quote: { tag:'本周精选', text:'写作是思考的最高形式——把模糊的念头变成清晰的文字' },
    stats: [ {num:'6',label:'精选文章',cls:'stat-green'}, {num:'2',label:'已收藏',cls:'stat-blue'}, {num:'1',label:'已读完',cls:'stat-yellow'} ],
    blogs: [
      { title:'为什么我劝你尽早开始写作', author:'辉哥奇谭', cat:'个人成长', time:'8分钟', desc:'写作不是因为有灵感才写，而是写了才有灵感。每天 500 字，一年就是一本书。' },
      { title:'30 岁后，我学会了说"不"', author:'L先生说', cat:'自我管理', time:'12分钟', desc:'精力管理比时间管理更重要。学会拒绝低价值的事。' },
      { title:'普通人如何建立个人品牌', author:'粥左罗', cat:'个人品牌', time:'10分钟', desc:'让别人在需要某个领域时第一个想到你。' },
      { title:'我用了 3 年才明白的复利思维', author:'孤独大脑', cat:'思维模型', time:'15分钟', desc:'阅读、写作、人脉、健康都是复利游戏。关键是持续小步。' },
      { title:'一个人的商业模式：把自己当公司经营', author:'商业人物', cat:'商业认知', time:'11分钟', desc:'你的时间就是产品，你的能力就是护城河。' },
      { title:'如何高效阅读：三遍阅读法', author:'书单来了', cat:'阅读方法', time:'7分钟', desc:'快翻→精读笔记→输出总结。读完不是终点，用上才是。' },
    ],
    // 学习内容：写作技巧
    lessons: [
      { title:'✍️ 金字塔写作法', content:'结论先行：文章第一句话就告诉读者核心观点。\n然后逐层展开：支撑论点1 → 论点2 → 论点3。\n最后总结呼应。读者最关心"所以呢"，先回答这个问题。\n\n示例：\n❌ 我昨天去了趟超市，买了菜，遇到老王，聊了会天，发现他跳槽了…\n✅ 老王跳槽了！昨天在超市碰到他，他说去了新公司，工资涨了30%。' },
      { title:'✍️ 让文章好读的 5 个技巧', content:'1. 短句优先：一句话不超过25字，读者不累。\n2. 多用具体数字：不说"很多人"，说"1000万人"。\n3. 多举例子：抽象概念用故事解释。\n4. 小标题分段：每300字一个小标题。\n5. 开头抓人：用问题、反常识或故事开头。' },
    ],
  },
  // 3. 表达能力
  express: {
    title: '表达能力', sub: 'EXPRESSION', icon: '🎤',
    quote: { tag:'今日重点', text:'会表达的人，机会多一倍——说话是门手艺' },
    stats: [ {num:'5',label:'表达技巧',cls:'stat-green'}, {num:'3',label:'练习记录',cls:'stat-blue'}, {num:'2',label:'收藏话术',cls:'stat-yellow'} ],
    todos: [
      { title:'今日录音练习：3 分钟自我介绍', time:'12:30' },
      { title:'拆解一段优秀演讲并做笔记', time:'20:00' },
    ],
    done: [ { title:'朗读练习 10 分钟', time:'07:30' } ],
    path: [
      { name:'结构化表达', desc:'金字塔原理：结论先行→分组→排序' },
      { name:'讲故事能力', desc:'STAR 法则：情境→任务→行动→结果' },
      { name:'即兴发言', desc:'PREP 公式：观点→理由→例子→重申' },
      { name:'高情商沟通', desc:'先认同再引导，倾听比说更重要' },
      { name:'镜头表现力', desc:'眼神、手势、语速节奏的刻意练习' },
    ],
    pathColor: '',
    // 学习内容：表达实战话术
    lessons: [
      { title:'🎤 PREP 即兴发言公式', content:'P - Point（观点）：先说你的结论\nR - Reason（理由）：为什么这么说\nE - Example（例子）：举个具体例子\nP - Point（重申）：再次强调观点\n\n示例：\n【观点】我认为远程办公会越来越普及。\n【理由】因为它降低了企业成本，也提高了员工幸福感。\n【例子】我朋友公司实行远程后，离职率从20%降到了5%。\n【重申】所以远程办公是未来趋势。' },
      { title:'🎤 高情商拒绝话术', content:'1. 缓冲法：这个我得看看日程，晚点答复你。\n2. 替代法：这事我帮不上，但我知道谁可以——推荐小王。\n3. 条件法：可以，但需要再给我三天时间。\n4. 共情法：我理解你的急迫，但我现在手头有更紧急的事。\n5. 直接法（少用）：谢谢想到我，但我这次确实没法参与。\n\n核心：拒绝事情，不拒绝人。' },
      { title:'🎤 自我介绍万能模板', content:'30秒版：\n"你好，我是XXX，目前在XX公司做XX岗位，主要负责XX。之前在XX领域有X年经验，擅长XX和XX。很高兴认识你！"\n\n关键三要素：\n1. 我是谁（身份标签）\n2. 我做过什么（实力背书）\n3. 我能提供什么价值（让对方记住你的理由）' },
    ],
  },
  // 4. 读书推荐
  books: {
    title: '读书推荐', sub: 'BOOKS', icon: '📚',
    quote: { tag:'本月主题', text:'向内生长：30 岁的精神独立与自我和解' },
    stats: [ {num:'8',label:'本月书目',cls:'stat-green'}, {num:'1',label:'在读',cls:'stat-blue'}, {num:'0',label:'已读完',cls:'stat-yellow'} ],
    books: [
      { title:'《被讨厌的勇气》', author:'岸见一郎', cat:'自我成长', rating:'⭐ 9.0', desc:'阿德勒心理学入门。放下他人期待，活出真正的自己。' },
      { title:'《向前一步》', author:'桑德伯格', cat:'女性成长', rating:'⭐ 8.4', desc:'Facebook COO 写给职场女性的勇气之书。' },
      { title:'《非暴力沟通》', author:'卢森堡', cat:'沟通关系', rating:'⭐ 8.7', desc:'观察-感受-需要-请求，四步法则让你被听见。' },
      { title:'《金钱心理学》', author:'豪泽尔', cat:'财富认知', rating:'⭐ 8.5', desc:'时间自由才是真正的财富自由。' },
      { title:'《倦怠社会》', author:'韩炳哲', cat:'哲学思辨', rating:'⭐ 8.2', desc:'为什么越努力越空虚？薄薄一本击中当代人。' },
      { title:'《那不勒斯四部曲》', author:'费兰特', cat:'文学小说', rating:'⭐ 9.2', desc:'两个女孩跨越 60 年的友谊与竞争。' },
      { title:'《身体由我》', author:'恩德斯', cat:'健康科普', rating:'⭐ 8.3', desc:'了解自己的身体是爱自己的开始。' },
      { title:'《悉达多》', author:'黑塞', cat:'文学小说', rating:'⭐ 9.0', desc:'30 岁重读，读出完全不同的味道。' },
    ],
    // 学习内容：阅读方法论
    lessons: [
      { title:'📖 三遍阅读法', content:'第一遍：快速翻阅（10分钟）\n看目录、序言、每章开头结尾。建立整体框架，判断是否值得精读。\n\n第二遍：精读+笔记（1-2小时）\n逐章阅读，用笔标记关键句。每章读完写一句话总结。折页或贴标签标记重要段落。\n\n第三遍：输出回顾（30分钟）\n合上书，用自己的话写读书笔记。找出3个可以应用到生活中的点。一周后翻看笔记巩固。' },
      { title:'📖 如何选到好书', content:'1. 看豆瓣评分：8.0以上基本不会踩雷。\n2. 看版次和印次：重印多次=经受住了时间考验。\n3. 看出版社：中信、广西师大、三联的书品质较高。\n4. 看作者背景：是领域专家还是蹭热度的？\n5. 看参考文献：好书一定有扎实的引用来源。\n6. 逛实体店翻一翻：手感、排版、文笔是否对味。' },
    ],
  },
  // 5. AI 学习
  ai: {
    title: 'AI 学习', sub: 'AI LEARNING · LIVE', icon: '🤖',
    quote: { tag:'AI 速报', text:'一句话调 500 个 Agent，一个人顶一家公司' },
    stats: [ {num:'12',label:'今日 AI 资讯',cls:'stat-green'}, {num:'3',label:'已读',cls:'stat-blue'}, {num:'2',label:'收藏工具',cls:'stat-yellow'} ],
    live: 'ai',
    path: [
      { name:'AI 是什么', desc:'机器学习、深度学习、大模型区别' },
      { name:'大模型原理', desc:'Transformer、Token、上下文窗口' },
      { name:'主流模型', desc:'GPT / Claude / Gemini / DeepSeek' },
      { name:'Prompt 工程', desc:'角色设定、思维链、Few-shot' },
      { name:'AI 应用实战', desc:'Agent / RAG / AI 绘画 / AI 编程' },
    ],
    pathColor: 'purple',
    // 学习内容：AI 实用教程
    lessons: [
      { title:'🤖 Prompt 万能公式', content:'角色 + 任务 + 背景 + 格式 + 示例\n\n❌ 差的提示词：帮我写个文案\n✅ 好的提示词：\n【角色】你是一个有10年经验的新媒体文案专家\n【任务】为一款粉色保温杯写小红书种草文案\n【背景】目标用户是25-35岁女性，卖点：高颜值、保温12小时、轻便\n【格式】标题+正文，300字以内，3个emoji\n【示例】参考小红书爆款"今天也要好好喝水"风格\n\n技巧：越具体，AI 回答越好。' },
      { title:'🤖 5 个 AI 工具推荐', content:'1. ChatGPT/Claude：万能助手，写文案、分析、编程\n2. DeepSeek：国产免费，中文能力强\n3. Midjourney/Nano Banana：AI 绘画，输入文字生成图片\n4. Gamma：AI 一键生成 PPT\n5. Kimi：长文档总结，上传PDF自动分析\n\n使用场景：\n• 写周报 → 让AI帮你列框架\n• 做PPT → Gamma 30秒出初稿\n• 读书 → Kimi 总结核心观点\n• 配图 → AI绘画生成素材' },
      { title:'🤖 AI 术语速查', content:'Token：AI处理文本的最小单位，1个汉字≈1-2个token\n上下文窗口：AI一次能记住的内容长度，GPT-4支持12万字\n幻觉：AI一本正经说假话，重要信息务必核实\nFine-tuning：用自定义数据训练模型，让它更专业\nRAG：检索增强生成，让AI基于你的文档回答\nAgent：AI智能体，能自主规划和执行多步任务\nMCP：模型上下文协议，让AI连接外部工具和数据' },
    ],
  },
  // 6. 新闻资讯
  news: {
    title: '新闻资讯', sub: 'NEWS · LIVE', icon: '📺',
    quote: { tag:'每日金句', text:'让优秀成为一种习惯。' },
    stats: [ {num:'+8',sub:'-2',label:'今日要闻',cls:'stat-green'}, {num:'5',label:'已读新闻',cls:'stat-blue'}, {num:'3',label:'收藏话题',cls:'stat-yellow'} ],
    todos: [
      { title:'完成今日新闻浏览', time:'09:00' },
      { title:'精读一条国际新闻并做笔记', time:'20:00' },
    ],
    done: [ { title:'早 7 点浏览头条要闻', time:'07:00' } ],
    live: 'cctv',
  },
  // 7. 学理财
  finance: {
    title: '学理财', sub: 'FINANCE · 小白课堂', icon: '💰',
    quote: { tag:'今日行情', text:'人民币中间价 加载中…', isLive:'rmb' },
    stats: [ {num:'--',label:'上证',cls:'stat-green',live:'sh000001'}, {num:'--',label:'深证',cls:'stat-blue',live:'sz399001'}, {num:'--',label:'创业板',cls:'stat-yellow',live:'sz399006'} ],
    todos: [
      { title:'搞懂 M2 与 M1 剪刀差', time:'小白路径 03' },
      { title:'读完一篇央行货币政策解读', time:'19:30' },
    ],
    done: [ { title:'查看今日三大指数开盘', time:'09:30' } ],
    path: [
      { name:'入门概念', desc:'GDP、CPI、通货膨胀、三驾马车' },
      { name:'看懂股市', desc:'A股/港股/美股、K线、PE、PB' },
      { name:'货币政策', desc:'降准降息、LPR、MLF、逆回购' },
      { name:'投资框架', desc:'美林时钟、资产配置、定投' },
      { name:'进阶工具', desc:'夏普比率、最大回撤、基金筛选' },
    ],
    pathColor: '',
    // 学习内容：理财知识详解
    lessons: [
      { title:'💰 通货膨胀：钱为什么越来越不值钱', content:'通货膨胀 = 物价持续上涨，钱购买力下降。\n\n例子：10年前一碗面5元，现在15元。面没变，但钱贬值了。\n\n衡量指标：CPI（居民消费价格指数）\n• CPI > 3%：通胀明显，钱缩水快\n• CPI 2%左右：正常水平，经济健康增长\n\n应对方法：\n1. 不要把所有钱放活期（利息跑不赢通胀）\n2. 学会投资：基金、债券、股票\n3. 买抗通胀资产：黄金、房产、优质股票\n4. 投资自己：技能提升=收入提升，最抗通胀' },
      { title:'💰 基金定投：最适合新手的投资方式', content:'定投 = 每月固定时间、固定金额买入同一只基金。\n\n为什么有效？\n• 摊平成本：贵的时候少买点，便宜的时候多买点\n• 克服人性：不用择时，不追涨杀跌\n• 复利效应：长期坚持，收益可观\n\n操作步骤：\n1. 选指数基金（如沪深300、中证500）\n2. 设定每月发工资后第二天自动扣款\n3. 金额：月收入的10%-20%\n4. 坚持3-5年，不要中途停止\n5. 达到目标收益（如20%）再分批赎回\n\n注意：定投亏钱是正常的！下跌是积攒便宜筹码的机会。' },
      { title:'💰 看懂股票基础：PE 和 PB', content:'PE（市盈率）= 股价 ÷ 每股收益\n含义：你花多少年能赚回投资。\n• PE 10倍：10年回本，估值较低\n• PE 50倍：50年回本，估值较高\n• 但成长股PE高也正常，关键看增速\n\nPB（市净率）= 股价 ÷ 每股净资产\n含义：你买入的价格是公司净资产的几倍。\n• PB < 1：破净，股价低于账面价值\n• 银行股常破净，不代表一定划算\n\n口诀：PE看盈利能力，PB看资产价值。两者要结合行业看，不能孤立判断。' },
      { title:'💰 资产配置：不要把鸡蛋放一个篮子', content:'标准普尔家庭资产象限图：\n\n1. 日常开销（10%）：活期/余额宝，3-6个月生活费\n2. 保命钱（20%）：意外险+重疾险，应对突发大事\n3. 生钱的钱（30%）：股票/基金，高风险高收益\n4. 保本钱（40%）：债券/定期/年金，长期稳健\n\n核心原则：\n• 收益和风险成正比\n• 分散投资降低风险\n• 用闲钱投资，不要借钱炒股\n• 先保障后投资（先买保险再理财）' },
    ],
  },
  // 8. 抖音飙升榜
  douyin: {
    title: '抖音飙升榜', sub: 'DOUYIN HOT', icon: '🎵',
    quote: { tag:'今日热榜', text:'跟着趋势走，流量自然来' },
    stats: [ {num:'10',label:'飙升视频',cls:'stat-green'}, {num:'3',label:'已收藏',cls:'stat-blue'}, {num:'2',label:'灵感记录',cls:'stat-yellow'} ],
    todos: [
      { title:'分析今日 Top3 飙升视频的爆款逻辑', time:'12:00' },
      { title:'记录 1 个可借鉴的选题方向', time:'21:00' },
    ],
    done: [ { title:'浏览今日热搜榜', time:'08:00' } ],
    hotList: [
      { rank:1, title:'夏日清凉穿搭挑战', hot:'892万', tag:'生活' },
      { rank:2, title:'打工人的周一实录', hot:'756万', tag:'搞笑' },
      { rank:3, title:'30秒学会一个Excel技巧', hot:'634万', tag:'知识' },
      { rank:4, title:'这个家常菜绝了', hot:'521万', tag:'美食' },
      { rank:5, title:'带爸妈去旅行', hot:'487万', tag:'情感' },
      { rank:6, title:'夏日饮品3秒搞定', hot:'412万', tag:'美食' },
      { rank:7, title:'每天一个变美小习惯', hot:'356万', tag:'美妆' },
      { rank:8, title:'这首歌怎么这么好听', hot:'298万', tag:'音乐' },
    ],
    // 学习内容：抖音运营技巧
    lessons: [
      { title:'🔥 爆款视频 3 秒法则', content:'前3秒决定用户划走还是看完。\n\n黄金开头模板：\n1. 悬念式："你绝对想不到…" / "99%的人不知道"\n2. 冲突式："月薪3000 vs 月薪3万的生活"\n3. 反常识："别再每天喝8杯水了！"\n4. 痛点式："总是存不下钱？因为你犯了这3个错"\n5. 数字式："3个动作，告别颈椎病"\n\n关键：前3秒必须给出"为什么要看下去"的理由。' },
      { title:'🔥 抖音选题方法论', content:'好选题 = 痛点 + 情绪 + 价值\n\n5大爆款选题方向：\n1. 教程类："30秒学会XX" → 提供实用价值\n2. 对比类："月薪3千vs3万" → 制造反差冲突\n3. 挑战类："7天打卡XX" → 引发参与感\n4. 情感类："写给30岁的自己" → 引发共鸣\n5. 盘点类："2024最值得买的10样" → 满足好奇\n\n选题自检：用户看完能学到什么/感受到什么/转发给谁？三个问题都有答案就是好选题。' },
    ],
  },
  // 9. 医美知识及销售技巧
  beauty: {
    title: '医美知识及销售技巧', sub: 'MEDICAL BEAUTY', icon: '💄',
    quote: { tag:'今日重点', text:'光电抗衰三件套：热玛吉 + 超声炮 + Fotona 4D 差异与适配' },
    stats: [ {num:'8',label:'知识点',cls:'stat-green'}, {num:'3',label:'话术卡片',cls:'stat-blue'}, {num:'2',label:'客户案例',cls:'stat-yellow'} ],
    todos: [
      { title:'背熟玻尿酸分子量与适用层次', time:'注射类' },
      { title:'练习 SPIN 提问法话术 3 组', time:'销售技巧' },
    ],
    done: [ { title:'热玛吉 vs 超声炮对比笔记', time:'08:30' } ],
    // 学习内容：医美知识 + 销售话术
    lessons: [
      { title:'💉 注射类：玻尿酸知识体系', content:'按分子量分三类：\n\n1. 大分子（交联度高）\n• 特点：硬度高、维持久（12-18个月）\n• 适用：隆鼻、垫下巴、丰太阳穴\n• 品牌：乔雅登极致、瑞蓝丽瑅\n\n2. 中分子\n• 特点：软硬适中、塑形+填充\n• 适用：苹果肌、法令纹、唇珠\n• 品牌：乔雅登雅致、瑞蓝2号\n\n3. 小分子（非交联/低交联）\n• 特点：柔软、适合浅层细纹\n• 适用：泪沟、颈纹、手背\n• 品牌：嗨体、瑞蓝唯瑅\n\n记忆口诀：大塑形、中填充、小细纹。' },
      { title:'💡 光电抗衰三件套对比', content:'1. 热玛吉（射频类）\n• 原理：射频加热真皮层，刺激胶原蛋白再生\n• 优势：全脸紧致、无创无恢复期\n• 适合：面部松弛、轮廓模糊\n• 价格：1-3万/次，维持1-2年\n\n2. 超声炮（超声类）\n• 原理：聚焦超声作用于SMAS筋膜层\n• 优势：深层提拉、可精准定位\n• 适合：下颌线松垂、双下巴\n• 价格：1-2万/次\n\n3. Fotona 4D（激光类）\n• 原理：多波长激光，从口内到口外分层治疗\n• 优势：改善肤色+紧致，口内治疗提升明显\n• 适合：法令纹深、肤色暗沉\n• 价格：0.5-1.5万/次\n\n销售要点：根据客户主要诉求推荐，不是越贵越好。' },
      { title:'💼 SPIN 销售提问法', content:'S - Situation（现状）\n"您目前有在做哪些皮肤管理吗？"\n"您之前了解过哪些医美项目？"\n\nP - Problem（问题/痛点）\n"您觉得脸上最困扰您的是什么？"\n"法令纹/松弛是什么时候开始注意到的？"\n\nI - Implication（影响）\n"这个问题对您日常生活/拍照有影响吗？"\n"如果不处理，您觉得会越来越明显吗？"\n\nN - Need-payoff（需求-回报）\n"如果有个方案能改善法令纹，您会感兴趣吗？"\n"做完后看起来年轻3-5岁，对您意味着什么？"\n\n核心：让客户自己说出需求，而不是你推销。问 > 说。' },
      { title:'💼 常见客户异议处理话术', content:'异议1："太贵了"\n话术："理解您的感受。我们可以拆开看——这个项目维持18个月，每天不到XX元，比一杯咖啡还便宜。而且效果是持续的，不像护肤品用完就没了。"\n\n异议2："我怕有副作用"\n话术："这个担心很正常。我们医生有X年经验，做过XXX例。而且这个产品有NMPA认证，我会给您看资质。我们先做皮测，确保安全再开始。"\n\n异议3："我考虑考虑"\n话术："好的，不着急。您主要考虑哪方面呢？是价格、效果还是安全性？我针对性给您解答，帮您做参考。"（找到真实顾虑再解决）\n\n核心：先认同情绪，再提供信息，最后给台阶。' },
    ],
  },
  // 10. 学历史
  history: {
    title: '学历史', sub: 'HISTORY', icon: '📜',
    quote: { tag:'历史今日', text:'以史为鉴，可以知兴替——读懂过去，才能看清未来' },
    stats: [ {num:'5',label:'今日史事',cls:'stat-green'}, {num:'2',label:'已精读',cls:'stat-blue'}, {num:'1',label:'重点标注',cls:'stat-yellow'} ],
    todos: [
      { title:'了解今日历史大事件', time:'09:00' },
      { title:'精读一段历史故事并做笔记', time:'20:00' },
    ],
    done: [ { title:'浏览今日历史热搜', time:'07:00' } ],
    path: [
      { name:'中国通史', desc:'从夏商周到近现代，梳理五千年脉络' },
      { name:'王朝兴衰', desc:'汉唐宋元明清，每个王朝的崛起与覆灭' },
      { name:'世界历史', desc:'古埃及、古希腊、罗马帝国、大航海时代' },
      { name:'关键人物', desc:'帝王将相、思想先驱、改变历史走向的人' },
      { name:'历史启示', desc:'历史不会重复，但会押韵——给当下的启发' },
    ],
    pathColor: 'red',
    live: 'gov',
    // 学习内容：历史故事
    lessons: [
      { title:'📜 朝代记忆口诀', content:'三皇五帝夏商周，\n春秋战国乱悠悠。\n秦汉三国二晋收，\n南北朝并隋唐继。\n五代十国宋元明，\n清帝退位民国兴。\n中华人民共和国立，\n五千余年传到今。\n\n记忆技巧：\n• 夏商周：最早三个朝代，周最长（800年）\n• 秦：第一个大一统帝国（公元前221年）\n• 汉：分为西汉、东汉，中间夹着王莽新朝\n• 唐：最繁荣的朝代，贞观之治+开元盛世\n• 宋：经济文化巅峰，但军事弱\n• 元：蒙古帝国，疆域最大\n• 明：朱元璋草根逆袭\n• 清：最后一个王朝，1912年灭亡' },
      { title:'📜 改变中国历史的 5 场战争', content:'1. 长平之战（公元前260年）\n秦 vs 赵，白起坑杀40万赵军。秦国统一再无对手，六国注定灭亡。\n\n2. 赤壁之战（公元208年）\n孙刘联军火烧曹操舰队。三国鼎立格局形成，中国分裂了70年。\n\n3. 淝水之战（公元383年）\n东晋8万兵 vs 前秦80万兵。以少胜多，保住了南方汉文化，南北朝对峙开始。\n\n4. 鸦片战争（1840年）\n英国坚船利炮打开中国大门。中国从天朝上国沦为半殖民地，近代史开端。\n\n5. 抗日战争（1937-1945）\n中华民族最危险的8年。最终胜利，中国成为联合国五常，国际地位重塑。\n\n启示：战争改变的不只是疆域，更是文明的走向。' },
      { title:'📜 历史上的女性力量', content:'1. 武则天（624-705）\n中国唯一女皇帝。从才人到皇后到皇帝，67岁称帝改国号为周。能力极强，科举选材、发展经济。\n\n2. 孝庄太后（1613-1688）\n辅佐顺治、康熙两代皇帝。稳住清初局面，培养出康熙大帝。\n\n3. 李清照（1084-1155）\n千古第一才女。"寻寻觅觅，冷冷清清，凄凄惨惨戚戚"——宋词婉约派巅峰。\n\n4. 花木兰（南北朝）\n替父从军12年。"万里赴戎机，关山度若飞"——巾帼英雄代名词。\n\n5. 慈禧（1835-1908）\n实际统治中国近半个世纪。权谋手段一流，但误国误民，争议极大。\n\n启示：历史不只是男人的故事，女性同样在塑造历史。' },
    ],
  },
};

// ========== 状态 ==========
let currentTab = Store.get('tab', 'english');
let todoState = Store.get('todos', {});

Object.keys(MODULES).forEach(tab => {
  if (!todoState[tab]) {
    todoState[tab] = (MODULES[tab].todos || []).map(t => ({ ...t, done: false, id: Date.now() + Math.random() }));
  }
  if (!todoState[tab + '_done']) {
    todoState[tab + '_done'] = (MODULES[tab].done || []).map(t => ({ ...t, id: Date.now() + Math.random() }));
  }
});
Store.set('todos', todoState);

// ========== 工具 ==========
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// 将 \n 转换为 <br>，保留文本安全
const fmtContent = s => esc(s).replace(/\n/g, '<br>');

// ========== 时钟 ==========
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  $('#clock').textContent = `${hh}:${mm}`;
  const M = now.getMonth() + 1, D = now.getDate();
  const weeks = ['周日','周一','周二','周三','周四','周五','周六'];
  $('#dateMain').textContent = `${M}月${D}日`;
  $('#dateSub').textContent = `${weeks[now.getDay()]} · ${now.getFullYear()}-${String(M).padStart(2,'0')}-${String(D).padStart(2,'0')}`;
  if (navigator.getBattery) {
    navigator.getBattery().then(b => { $('#battery').textContent = Math.round(b.level*100) + '%'; });
  } else { $('#battery').textContent = ''; }
}

// ========== 切换主题 ==========
function applyTheme(tab) {
  const t = THEMES[tab] || THEMES.english;
  const app = $('#app');
  app.style.setProperty('--theme-bg1', t.bg1);
  app.style.setProperty('--theme-bg2', t.bg2);
  app.style.setProperty('--theme-accent', t.accent);
  app.style.setProperty('--theme-soft', t.soft);
  app.style.setProperty('--theme-text', t.text);
  app.className = 'app theme-' + tab;
}

// ========== 渲染面板 ==========
function renderPanel(tab) {
  const m = MODULES[tab];
  if (!m) return '';
  let html = '';

  // 金句卡
  if (m.quote) {
    html += `<div class="quote-card">
      <div class="quote-tag"><span class="quote-dot"></span>${m.quote.tag}</div>
      <div class="quote-text" id="quoteText_${tab}">${esc(m.quote.text)}</div>
      ${m.quote.isQuote ? `<div class="quote-meta" id="quoteMeta_${tab}"></div>` : ''}
    </div>`;
  }

  // 三列统计
  if (m.stats) {
    html += `<div class="stats-row">`;
    m.stats.forEach(s => {
      const liveAttr = s.live ? `id="stat_${s.live}"` : '';
      html += `<div class="stat-card ${s.cls}" ${liveAttr}>
        ${s.sub ? `<div class="stat-num-up">${s.num}</div><div class="stat-num-down">${s.sub}</div>` : `<div class="stat-num">${s.num}</div>`}
        <div class="stat-label">${s.label}</div>
      </div>`;
    });
    html += `</div>`;
  }

  // 实时新闻列表
  if (m.live) {
    html += `<div class="todo-card">
      <div class="card-head">
        <div class="card-title"><span class="card-ic">${m.icon}</span>${m.title} · 实时</div>
        <span class="refresh-btn" onclick="loadLive('${m.live}',true)">↻ 刷新</span>
      </div>
      <div id="live_${m.live}"><div class="loading-dot">加载中…</div></div>
    </div>`;
  }

  // 学习内容卡片（知识点详解）
  if (m.lessons) {
    m.lessons.forEach((lesson, i) => {
      html += `<div class="lesson-card" onclick="toggleLesson(this)">
        <div class="lesson-head">
          <div class="lesson-title">${esc(lesson.title)}</div>
          <span class="lesson-arrow">▾</span>
        </div>
        <div class="lesson-body">${fmtContent(lesson.content)}</div>
      </div>`;
    });
  }

  // 今日待办
  const todos = todoState[tab] || [];
  if (todos.length || m.todos) {
    html += `<div class="todo-card">
      <div class="card-head">
        <div class="card-title"><span class="card-ic">📋</span>今日待办</div>
        <button class="add-btn" onclick="addTodo('${tab}')">+ 新增</button>
      </div>
      <div id="todoList_${tab}">${renderTodoItems(tab)}</div>
    </div>`;
  }

  // 已完成
  const dones = todoState[tab + '_done'] || [];
  if (dones.length || m.done) {
    html += `<div class="done-card">
      <div class="card-head">
        <div class="card-title"><span class="card-ic">✓</span>今日已完成 (${dones.length})</div>
      </div>
      ${dones.map(d => `<div class="done-item">
        <span class="check-done">✓</span>
        <div><div class="done-title">${esc(d.title)}</div><div class="done-time">${esc(d.time||'')}</div></div>
      </div>`).join('')}
    </div>`;
  }

  // 明日预备
  if (tab === 'news') {
    const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate()+1);
    const ts = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth()+1).padStart(2,'0')}-${String(tomorrow.getDate()).padStart(2,'0')}`;
    html += `<div class="next-card">
      <div class="card-head"><div class="card-title"><span class="card-ic">🗓</span>明日预备 (${ts})</div></div>
      <div class="empty-text">暂无预备事项</div>
    </div>`;
  }

  // 英语短语
  if (m.phrases) {
    m.phrases.forEach(p => {
      html += `<div class="phrase-card">
        <div class="phrase-en">${esc(p.en)}</div>
        <div class="phrase-cn">${esc(p.cn)}</div>
        <div class="phrase-note">💡 ${esc(p.note)}</div>
      </div>`;
    });
  }

  // 学习路径
  if (m.path) {
    const pc = m.pathColor || '';
    const pathTitle = `📖 从零开始${m.title.includes('理财')?'学理财':m.title.includes('AI')?'懂 AI':m.title.includes('表达')?'练表达':'学习'}`;
    html += `<div class="learn-path">
      <div class="path-title ${pc}">${pathTitle}</div>`;
    m.path.forEach((s, i) => {
      html += `<div class="path-step">
        <div class="step-num ${pc}">${i+1}</div>
        <div class="step-content">
          <div class="step-name">${esc(s.name)}</div>
          <div class="step-desc">${esc(s.desc)}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  // 书单
  if (m.books) {
    m.books.forEach(b => {
      html += `<div class="book-card">
        <div class="book-head">
          <div class="book-title">${esc(b.title)}</div>
          <div class="book-rating">${b.rating}</div>
        </div>
        <div class="book-author">${esc(b.author)}</div>
        <div class="book-cat">${esc(b.cat)}</div>
        <div class="book-desc">${esc(b.desc)}</div>
      </div>`;
    });
  }

  // 博客精选
  if (m.blogs) {
    m.blogs.forEach(b => {
      html += `<div class="book-card" style="border-left-color:#2db8a3">
        <div class="book-head">
          <div class="book-title">${esc(b.title)}</div>
          <div class="book-rating" style="color:#2a8a7a">${b.time}</div>
        </div>
        <div class="book-author">${esc(b.author)}</div>
        <div class="book-cat" style="background:#d4f0e8;color:#1a6a5a">${esc(b.cat)}</div>
        <div class="book-desc">${esc(b.desc)}</div>
      </div>`;
    });
  }

  // 抖音飙升榜
  if (m.hotList) {
    html += `<div class="todo-card">
      <div class="card-head">
        <div class="card-title"><span class="card-ic">🔥</span>今日飙升榜</div>
        <span class="refresh-btn">↻ 刷新</span>
      </div>`;
    m.hotList.forEach(h => {
      const medal = h.rank <= 3 ? ['🥇','🥈','🥉'][h.rank-1] : `${h.rank}`;
      html += `<div class="hot-item">
        <div class="hot-rank">${medal}</div>
        <div class="hot-body">
          <div class="hot-title">${esc(h.title)}</div>
          <div class="hot-meta"><span class="hot-tag">${esc(h.tag)}</span> 🔥 ${h.hot}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  return html;
}

// 展开/收起学习内容
function toggleLesson(el) {
  el.classList.toggle('expanded');
}

function renderTodoItems(tab) {
  const todos = todoState[tab] || [];
  if (!todos.length) return '<div class="empty-text">暂无待办，点击新增</div>';
  return todos.map((t, i) => `<div class="todo-item" data-id="${t.id}">
    <div class="todo-left">
      <span class="checkbox ${t.done?'checked':''}" onclick="toggleTodo('${tab}',${i})"></span>
      <div>
        <div class="todo-title">${esc(t.title)}</div>
        ${t.time ? `<div class="todo-time">${esc(t.time)}</div>` : ''}
      </div>
    </div>
    <div class="todo-actions">
      <button class="act-btn act-edit" onclick="editTodo('${tab}',${i})">编辑</button>
      <button class="act-btn act-del" onclick="delTodo('${tab}',${i})">删</button>
    </div>
  </div>`).join('');
}

// ========== 待办操作 ==========
function toggleTodo(tab, idx) {
  todoState[tab][idx].done = !todoState[tab][idx].done;
  if (todoState[tab][idx].done) {
    const done = todoState[tab].splice(idx, 1)[0];
    done.doneTime = new Date().toTimeString().slice(0,5);
    todoState[tab + '_done'] = todoState[tab + '_done'] || [];
    todoState[tab + '_done'].unshift({ title: done.title, time: done.doneTime });
    toast('✅ 已完成！');
  }
  Store.set('todos', todoState);
  renderCurrentPanel();
}

function addTodo(tab) {
  const text = prompt('新增待办内容：');
  if (!text || !text.trim()) return;
  const time = prompt('时间/标签（可留空）：', new Date().toTimeString().slice(0,5));
  todoState[tab] = todoState[tab] || [];
  todoState[tab].unshift({ title: text.trim(), time: time||'', done: false, id: Date.now() });
  Store.set('todos', todoState);
  renderCurrentPanel();
  toast('已新增');
}

function editTodo(tab, idx) {
  const cur = todoState[tab][idx];
  const text = prompt('修改内容：', cur.title);
  if (!text || !text.trim()) return;
  cur.title = text.trim();
  const time = prompt('时间/标签：', cur.time || '');
  if (time !== null) cur.time = time;
  Store.set('todos', todoState);
  renderCurrentPanel();
}

function delTodo(tab, idx) {
  if (!confirm('确定删除？')) return;
  todoState[tab].splice(idx, 1);
  Store.set('todos', todoState);
  renderCurrentPanel();
  toast('已删除');
}

function renderCurrentPanel() {
  $('#panels').innerHTML = renderPanel(currentTab);
}

// ========== Toast ==========
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 1500);
}

// ========== Tab 切换 ==========
function switchTab(tab) {
  currentTab = tab;
  Store.set('tab', tab);
  $$('.menu-item').forEach(m => m.classList.toggle('active', m.dataset.tab === tab));
  applyTheme(tab);
  renderCurrentPanel();
  $('#content').scrollTop = 0;
  loadTabData(tab);
}

// ========== 实时数据加载 ==========
async function loadTabData(tab) {
  const m = MODULES[tab];
  if (!m) return;
  if (m.quote && m.quote.isQuote) loadDailyQuote(tab);
  if (m.live) loadLive(m.live);
  if (m.stats && m.stats.some(s => s.live)) loadStocks();
}

async function loadDailyQuote(tab) {
  try {
    const res = await fetch('https://v1.hitokoto.cn/?c=i');
    const data = await res.json();
    const el = $(`#quoteText_${tab}`);
    if (el) {
      el.textContent = data.hitokoto || 'Keep going.';
      const meta = $(`#quoteMeta_${tab}`);
      if (meta) meta.textContent = `— ${data.from_who || ''} 《${data.from || ''}》`;
    }
  } catch(e) {
    const phrases = MODULES.english.phrases;
    const p = phrases[Math.floor(Math.random()*phrases.length)];
    const el = $(`#quoteText_${tab}`);
    if (el) el.textContent = p.en + ' — ' + p.cn;
  }
}

async function loadStocks() {
  const codes = ['sh000001','sz399001','sz399006'];
  const proxies = [
    u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
    u => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
    u => `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(u)}`,
  ];
  for (const code of codes) {
    const el = $(`#stat_${code}`);
    if (!el) continue;
    for (let i = 0; i < proxies.length; i++) {
      try {
        const res = await fetch(proxies[i](`http://qt.gtimg.cn/q=${code}`));
        const text = await res.text();
        const m = text.match(new RegExp('v_' + code + '="([^"]+)"'));
        if (m) {
          const fields = m[1].split('~');
          if (fields.length > 32) {
            const price = fields[3];
            const pct = parseFloat(fields[32]);
            const isUp = pct >= 0;
            el.innerHTML = `<div class="${isUp?'stat-num-up':'stat-num-down'}">${isUp?'+':''}${pct}%</div><div class="stat-label">${fields[1]} ${price}</div>`;
          }
          break;
        }
      } catch(e) {}
    }
  }
}

async function loadLive(type, force) {
  const el = $(`#live_${type}`);
  if (!el) return;
  el.innerHTML = '<div class="loading-dot">加载中…</div>';

  const sources = {
    cctv: { url: 'https://plink.anyfeeder.com/weixin/cctvnewscenter', name: '央视新闻' },
    ai: { url: 'https://plink.anyfeeder.com/weixin/AI_era', name: 'AI 时讯' },
    gov: { url: 'https://plink.anyfeeder.com/qstheory', name: '求是网' },
  };
  const src = sources[type];
  if (!src) return;

  const cacheKey = 'live_' + type;
  if (!force) {
    const cached = Store.get(cacheKey);
    if (cached && (Date.now() - cached.time < 1800000)) {
      renderLiveItems(el, cached.items, src.name);
      return;
    }
  }

  const proxies = [
    u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
    u => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
    u => `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(u)}`,
  ];

  for (let i = 0; i < proxies.length; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);
      const res = await fetch(proxies[i](src.url), { signal: controller.signal });
      clearTimeout(timeoutId);
      const text = await res.text();
      const items = parseRSS(text);
      if (items.length) {
        Store.set(cacheKey, { items, time: Date.now() });
        renderLiveItems(el, items, src.name);
        return;
      }
    } catch(e) {}
  }
  el.innerHTML = getFallbackLive(type);
}

function parseRSS(xml) {
  const items = [];
  try {
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    const nodes = doc.querySelectorAll('item');
    nodes.forEach((node, i) => {
      if (i >= 8) return;
      const title = node.querySelector('title')?.textContent?.trim() || '';
      const desc = node.querySelector('description')?.textContent?.trim() || '';
      const pub = node.querySelector('pubDate')?.textContent?.trim() || '';
      const cleanDesc = desc.replace(/<[^>]+>/g, '').slice(0, 100);
      if (title) items.push({ title, desc: cleanDesc, pub });
    });
  } catch(e) {}
  return items;
}

function renderLiveItems(el, items, source) {
  const tags = ['red','orange','blue','green'];
  el.innerHTML = items.slice(0, 6).map((it, i) => `
    <div class="news-item-dyn">
      ${source === '央视新闻' ? `<span class="news-tag ${tags[i%4]}">${['时政','财经','国际','社会'][i%4]}</span>` : ''}
      <div class="n-title">${esc(it.title)}</div>
      ${it.desc ? `<div class="n-desc">${esc(it.desc)}</div>` : ''}
      <div class="n-meta">${source} · ${esc(it.pub || '今日')}</div>
    </div>
  `).join('');
}

function getFallbackLive(type) {
  const fallbacks = {
    cctv: [
      { title: '国务院常务会议部署进一步稳就业稳经济政策措施', tag: '时政' },
      { title: '央行下调存款准备金率0.5个百分点 释放长期资金', tag: '财经' },
      { title: '联合国大会通过多项决议 聚焦可持续发展', tag: '国际' },
    ],
    ai: [
      { title: '一句话调 500 个 Agent，一个人顶一家公司', tag: '' },
      { title: 'OpenAI 开源了！', tag: '' },
      { title: '北大校友翁荔入职 OpenAI', tag: '' },
    ],
    gov: [
      { title: '二十届三中全会部署进一步全面深化改革', tag: '' },
      { title: '房地产认房不认贷全面落地', tag: '' },
    ],
  };
  const items = fallbacks[type] || [];
  return items.map(it => `<div class="news-item-dyn">
    ${it.tag ? `<span class="news-tag red">${it.tag}</span>` : ''}
    <div class="n-title">${esc(it.title)}</div>
    <div class="n-meta">暂为离线数据 · 联网后刷新</div>
  </div>`).join('');
}

// ========== 搜索 ==========
function initSearch() {
  const overlay = $('#searchOverlay');
  $('#searchBtn').addEventListener('click', () => {
    overlay.style.display = 'flex';
    setTimeout(() => $('#searchInput').focus(), 100);
  });
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.style.display = 'none';
  });
  $('#searchInput').addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) { $('#searchResults').innerHTML = ''; return; }
    let results = [];
    Object.keys(todoState).forEach(key => {
      if (key.endsWith('_done')) return;
      (todoState[key] || []).forEach(t => {
        if (t.title.toLowerCase().includes(q)) results.push({ tab: key, ...t });
      });
    });
    $('#searchResults').innerHTML = results.length ? results.map(r => `
      <div class="search-result" onclick="switchTab('${r.tab}');document.getElementById('searchOverlay').style.display='none'">
        <span class="sr-tab">${MODULES[r.tab]?.title || r.tab}</span>
        <span class="sr-title">${esc(r.title)}</span>
        ${r.done ? '<span class="sr-done">✓</span>' : ''}
      </div>
    `).join('') : '<div class="empty-text">无匹配结果</div>';
  });
}

// ========== 悬浮 + ==========
function initFab() {
  $('#fab').addEventListener('click', () => {
    if (MODULES[currentTab].todos !== undefined || todoState[currentTab]) {
      addTodo(currentTab);
    } else {
      toast('当前模块不支持新增');
    }
  });
}

// ========== 下拉刷新 ==========
function initPullRefresh() {
  let startY = 0, pulling = false;
  const content = $('#content');
  content.addEventListener('touchstart', e => {
    if (content.scrollTop === 0) { startY = e.touches[0].clientY; pulling = true; }
  });
  content.addEventListener('touchmove', e => {
    if (!pulling) return;
    const diff = e.touches[0].clientY - startY;
    if (diff > 60 && !content.dataset.refreshing) {
      content.dataset.refreshing = '1';
      toast('🔄 刷新中…');
      loadTabData(currentTab);
      setTimeout(() => { delete content.dataset.refreshing; }, 1500);
      pulling = false;
    }
  });
  content.addEventListener('touchend', () => { pulling = false; });
}

// ========== PWA ==========
function initPWA() {
  if ('serviceWorker' in navigator) {
    const swCode = `
      const CACHE = 'xixi-gogogo-v2';
      self.addEventListener('install', e => { self.skipWaiting(); });
      self.addEventListener('activate', e => { e.waitUntil(clients.claim()); });
      self.addEventListener('fetch', e => {
        if (e.request.method !== 'GET') return;
        e.respondWith(
          caches.open(CACHE).then(async cache => {
            const cached = await cache.match(e.request);
            const network = fetch(e.request).then(res => {
              if (res && res.status === 200) cache.put(e.request, res.clone());
              return res;
            }).catch(() => cached);
            return cached || network;
          })
        );
      });
    `;
    const blob = new Blob([swCode], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    navigator.serviceWorker.register(url).catch(() => {});
  }
}

// ========== 启动 ==========
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 30000);
  $$('.menu-item').forEach(m => m.addEventListener('click', () => switchTab(m.dataset.tab)));
  switchTab(currentTab);
  initSearch();
  initFab();
  initPullRefresh();
  initPWA();
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    toast('💡 可添加到桌面，像 App 一样使用');
  });
});
