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

// ========== 主题配色（9大模块多巴胺色）==========
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
      const CACHE = 'xixi-gogogo-v1';
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
