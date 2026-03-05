(function(){
  const state = { idx:0, answers:[], questions:[], title:"" };

  function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;
  }
  const clone = (o)=>JSON.parse(JSON.stringify(o));

  function buildQuiz(raw){
    const data = clone(raw);
    state.title = data.title || "Quiz";
    state.questions = data.questions || [];
    state.answers = new Array(state.questions.length).fill(null);
    state.idx = 0;

    shuffle(state.questions);
    state.questions = state.questions.map(q=>{
      const opts = q.options.map((t,i)=>({text:t, originalIndex:i}));
      shuffle(opts);
      const newCorrect = opts.findIndex(o=>o.originalIndex===q.correctIndex);
      return { q:q.q, options:opts.map(o=>o.text), correctIndex:newCorrect, explanation:q.explanation||"" };
    });
  }

  const el = (id)=>document.getElementById(id);

  function render(){
    el("quizTitle").textContent = state.title;
    const total = state.questions.length;
    const qObj = state.questions[state.idx];
    el("progress").textContent = `Question ${state.idx+1} of ${total}`;
    el("qText").textContent = qObj.q;

    const wrap = el("options");
    wrap.innerHTML="";
    qObj.options.forEach((opt,i)=>{
      const d=document.createElement("div");
      d.className="opt"+(state.answers[state.idx]===i?" selected":"");
      d.textContent=opt;
      d.onclick=()=>{ state.answers[state.idx]=i; render(); };
      wrap.appendChild(d);
    });

    el("prevBtn").disabled = (state.idx===0);
    el("nextBtn").disabled = (state.idx===total-1);
  }

  function score(){
    let s=0;
    state.questions.forEach((q,i)=>{ if(state.answers[i]===q.correctIndex) s++; });
    return s;
  }

  function resultMessage(pct){
    if(pct>=80) return "Strong understanding of the topic.";
    if(pct>=50) return "Good understanding, but needs review.";
    return "Needs more practice and revision.";
  }

  function esc(str){
    return String(str).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")
      .replaceAll('"',"&quot;").replaceAll("'","&#039;");
  }

  function showResults(){
    el("screenQuiz").classList.add("hidden");
    el("screenResult").classList.remove("hidden");

    const s=score(), n=state.questions.length;
    const pct=Math.round((s/n)*100);
    el("scoreLine").textContent = `${s} / ${n} (${pct}%)`;
    el("scoreMsg").textContent = resultMessage(pct);

    const review = el("review");
    review.innerHTML="";
    state.questions.forEach((q,i)=>{
      const your = state.answers[i]===null ? "Not answered" : q.options[state.answers[i]];
      const correct = q.options[q.correctIndex];
      const ok = (state.answers[i]===q.correctIndex);

      const box=document.createElement("div");
      box.innerHTML = `
        <div class="small"><b>Q${i+1}</b></div>
        <div style="margin:6px 0 8px"><b>${esc(q.q)}</b></div>
        <div class="small">Your Answer: <b>${esc(your)}</b></div>
        <div class="small">Correct Answer: <b>${esc(correct)}</b></div>
        <div class="${ok?"good":"bad"}" style="margin:6px 0">${ok?"Correct ✅":"Incorrect ❌"}</div>
        ${q.explanation ? `<div class="small"><i>${esc(q.explanation)}</i></div>` : ""}
        <hr/>
      `;
      review.appendChild(box);
    });

    el("disclaimer").textContent =
      "This quiz is intended for educational and self-learning purposes only. Results do not represent official academic evaluation.";
  }

  window.QuizApp = {
    init(raw){
      buildQuiz(raw);
      el("prevBtn").onclick=()=>{ if(state.idx>0){ state.idx--; render(); } };
      el("nextBtn").onclick=()=>{ if(state.idx<state.questions.length-1){ state.idx++; render(); } };
      el("submitBtn").onclick=showResults;
      el("retakeBtn").onclick=()=>{ buildQuiz(raw); el('screenResult').classList.add('hidden'); el('screenQuiz').classList.remove('hidden'); render(); };
      el("homeBtn").onclick=()=>{ window.location.href = "../index.html"; };
      el("homeBtn2").onclick=()=>{ window.location.href = "../index.html"; };
      render();
    }
  };
})();
