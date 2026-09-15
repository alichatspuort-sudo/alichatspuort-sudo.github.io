(function () {
  const WEBHOOK_URL = 'https://n8n.aliaiautomation.cloud/webhook/tool-ledger-chat';

  function getSessionId() {
    let id = sessionStorage.getItem('tl_session_id');
    if (!id) {
      id = 'sess-' + Math.random().toString(36).slice(2) + Date.now();
      sessionStorage.setItem('tl_session_id', id);
    }
    return id;
  }

  const style = document.createElement('style');
  style.textContent = `
    #tl-chat-btn{
      position:fixed; bottom:22px; right:22px; z-index:9999;
      background:var(--ink); color:var(--paper-light);
      border:none; border-radius:99px; padding:13px 20px;
      font-family:'IBM Plex Sans', sans-serif; font-size:0.88rem; font-weight:500;
      cursor:pointer; box-shadow:0 8px 20px rgba(22,35,47,0.25);
      display:flex; align-items:center; gap:8px;
      transition:transform .2s ease, box-shadow .2s ease;
    }
    #tl-chat-btn:hover{ transform:translateY(-2px); box-shadow:0 12px 26px rgba(22,35,47,0.3); }
    #tl-chat-btn .dot{ width:7px; height:7px; border-radius:50%; background:var(--amber); }
    #tl-chat-panel{
      position:fixed; bottom:88px; right:22px; z-index:9999;
      width:340px; max-width:calc(100vw - 44px); height:440px; max-height:calc(100vh - 140px);
      background:var(--paper-light); border:1px solid var(--line); border-radius:8px;
      box-shadow:0 20px 50px rgba(22,35,47,0.25);
      display:none; flex-direction:column; overflow:hidden;
      opacity:0; transform:translateY(14px); transition:opacity .25s ease, transform .25s ease;
    }
    #tl-chat-panel.open{ display:flex; opacity:1; transform:translateY(0); }
    #tl-chat-header{
      background:var(--ink); color:var(--paper-light);
      padding:14px 16px; font-family:'Fraunces', serif; font-size:1rem; font-weight:600;
      display:flex; align-items:center; justify-content:space-between;
    }
    #tl-chat-header span.sub{ display:block; font-family:'IBM Plex Sans',sans-serif; font-weight:400; font-size:0.72rem; color:#B9C2CA; margin-top:2px; }
    #tl-chat-close{ background:none; border:none; color:var(--paper-light); font-size:1.1rem; cursor:pointer; line-height:1; }
    #tl-chat-messages{
      flex:1; overflow-y:auto; padding:14px 16px; display:flex; flex-direction:column; gap:10px;
    }
    .tl-msg{ font-size:0.87rem; line-height:1.45; padding:9px 12px; border-radius:8px; max-width:85%; }
    .tl-msg.bot{ background:var(--paper); border:1px solid var(--line); align-self:flex-start; }
    .tl-msg.user{ background:var(--ink); color:var(--paper-light); align-self:flex-end; }
    .tl-msg.typing{ color:var(--slate); font-style:italic; }
    #tl-chat-form{ display:flex; gap:8px; padding:12px; border-top:1px solid var(--line); }
    #tl-chat-input{
      flex:1; border:1px solid var(--line); border-radius:6px; padding:9px 11px;
      font-family:'IBM Plex Sans', sans-serif; font-size:0.85rem; background:var(--paper);
      color:var(--ink);
    }
    #tl-chat-input:focus-visible{ outline:2px solid var(--amber); }
    #tl-chat-send{
      background:var(--amber); color:var(--paper-light); border:none; border-radius:6px;
      padding:0 14px; font-size:0.85rem; cursor:pointer;
    }
    #tl-chat-send:disabled{ opacity:0.5; cursor:default; }
  `;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.id = 'tl-chat-btn';
  btn.innerHTML = '<span class="dot"></span> Ask the AI';
  document.body.appendChild(btn);

  const panel = document.createElement('div');
  panel.id = 'tl-chat-panel';
  panel.innerHTML = `
    <div id="tl-chat-header">
      <div>Ledger Assistant<span class="sub">Ask about any AI tool or prompt</span></div>
      <button id="tl-chat-close" aria-label="Close chat">&times;</button>
    </div>
    <div id="tl-chat-messages"></div>
    <form id="tl-chat-form">
      <input id="tl-chat-input" type="text" placeholder="Ask something..." autocomplete="off">
      <button id="tl-chat-send" type="submit">Send</button>
    </form>
  `;
  document.body.appendChild(panel);

  const messagesEl = panel.querySelector('#tl-chat-messages');
  const formEl = panel.querySelector('#tl-chat-form');
  const inputEl = panel.querySelector('#tl-chat-input');
  const sendBtn = panel.querySelector('#tl-chat-send');
  let greeted = false;

  function addMessage(text, who) {
    const div = document.createElement('div');
    div.className = 'tl-msg ' + who;
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return div;
  }

  btn.addEventListener('click', () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
      if (!greeted) {
        addMessage("Hi! Ask me about any AI tool or prompt on this site \u2014 e.g. \"which tool is best for editing video?\"", 'bot');
        greeted = true;
      }
      inputEl.focus();
    }
  });

  panel.querySelector('#tl-chat-close').addEventListener('click', () => {
    panel.classList.remove('open');
  });

  formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = inputEl.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    inputEl.value = '';
    sendBtn.disabled = true;
    const typingEl = addMessage('Typing...', 'bot typing');

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId: getSessionId() })
      });
      const data = await res.json();
      typingEl.remove();
      addMessage(data.reply || "Sorry, I couldn't get a response just now.", 'bot');
    } catch (err) {
      typingEl.remove();
      addMessage("Something went wrong reaching the assistant. Please try again in a moment.", 'bot');
    } finally {
      sendBtn.disabled = false;
    }
  });
})();
