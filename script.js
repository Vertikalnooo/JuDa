const exercises=[
{name:"Жим штанги лёжа",muscle:"Грудь",type:"Базовое",icon:"🏋️"},
{name:"Приседания со штангой",muscle:"Ноги",type:"Базовое",icon:"🦵"},
{name:"Тяга верхнего блока",muscle:"Спина",type:"Базовое",icon:"💪"},
{name:"Разводка гантелей лёжа",muscle:"Грудь",type:"Изолирующее",icon:"🏋️"},
{name:"Подтягивания",muscle:"Спина",type:"Базовое",icon:"🔝"},
{name:"Жим гантелей сидя",muscle:"Плечи",type:"Базовое",icon:"🏋️"},
{name:"Выпады с гантелями",muscle:"Ноги",type:"Базовое",icon:"🦵"},
{name:"Разгибание рук на блоке",muscle:"Руки",type:"Изолирующее",icon:"💪"}
];

const defaultPrograms=[
{id:1,name:"Силовая база",days:4,weeks:8,active:true,workouts:[
{name:"Верх тела",exercises:[{name:"Жим штанги лёжа",muscle:"Грудь",sets:4,reps:8,weight:80},{name:"Тяга верхнего блока",muscle:"Спина",sets:3,reps:10,weight:60},{name:"Жим гантелей сидя",muscle:"Плечи",sets:3,reps:10,weight:24},{name:"Разгибание рук на блоке",muscle:"Руки",sets:3,reps:12,weight:25}]},
{name:"Низ тела",exercises:[]},{name:"Верх тела 2",exercises:[]},{name:"Низ тела 2",exercises:[]}]}
];
let programs=JSON.parse(localStorage.getItem("juda_programs")||"null")||defaultPrograms;
let draft={name:"",days:4,workouts:[]},editingDayIndex=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function saveData(){localStorage.setItem("juda_programs",JSON.stringify(programs))}
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");clearTimeout(window.__t);window.__t=setTimeout(()=>x.classList.remove("show"),1700)}
function screen(id){$$(".screen").forEach(x=>x.classList.toggle("active",x.id===id));$$(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.screen===id));window.scrollTo({top:0,behavior:"smooth"})}
function renderPrograms(){
 const list=$("#programList");list.innerHTML="";
 programs.forEach((p,pi)=>{
  const b=document.createElement("button");b.className="program-row";
  b.innerHTML=`<span class="program-icon">${p.active?"💪":"🏋️"}</span><span><b>${escapeHtml(p.name)}</b><small>${p.days} дня · ${p.workouts.length} тренировок</small></span><strong>→</strong>`;
  b.onclick=()=>openProgram(pi);list.appendChild(b);
 });
 const active=programs.find(p=>p.active)||programs[0];
 if(active){$("#activeProgramName").textContent=active.name;$("#activeProgramMeta").textContent=`${active.days} дня в неделю · ${active.weeks||8} недель`}
 updateHome(active);
}
function updateHome(p){if(!p)return;const w=p.workouts.find(x=>x.exercises?.length)||p.workouts[0];if(w){$("#homeWorkoutName").textContent=w.name;$("#homeWorkoutExercises").textContent=`${w.exercises?.length||0} упражнений`;}}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function openProgram(pi){const p=programs[pi];draft=JSON.parse(JSON.stringify(p));renderEditor();screen("editorScreen")}
function newProgram(){draft={id:Date.now(),name:"",days:4,weeks:8,active:false,workouts:[]};ensureDays();renderEditor();screen("editorScreen")}
function ensureDays(){while(draft.workouts.length<Number(draft.days))draft.workouts.push({name:`День ${draft.workouts.length+1}`,exercises:[]});if(draft.workouts.length>Number(draft.days))draft.workouts=draft.workouts.slice(0,Number(draft.days))}
function renderEditor(){
 $("#programName").value=draft.name;$("#programDays").value=draft.days;const box=$("#editorDays");box.innerHTML="";
 draft.workouts.forEach((w,i)=>{const card=document.createElement("article");card.className="day-card";card.innerHTML=`<div class="day-card-head"><div><h3>${escapeHtml(w.name)}</h3><p>${w.exercises.length} упражнений</p></div><button>→</button></div>`;card.querySelector("button").onclick=()=>openDay(i);box.appendChild(card)})
}
function openDay(i){editingDayIndex=i;$("#dayTitle").textContent=draft.workouts[i].name||`День ${i+1}`;$("#dayName").value=draft.workouts[i].name;renderDay();screen("dayEditorScreen")}
function renderDay(){
 const box=$("#dayExercises");box.innerHTML="";const day=draft.workouts[editingDayIndex];
 if(!day.exercises.length){box.innerHTML=`<div class="empty-card"><span>＋</span><h2>Пока нет упражнений</h2><p>Добавь первое упражнение в эту тренировку.</p></div>`;return}
 day.exercises.forEach((e,i)=>{const card=document.createElement("article");card.className="day-card";
 card.innerHTML=`<div class="editor-exercise"><span class="exercise-photo">${e.icon||"🏋️"}</span><div><b>${escapeHtml(e.name)}</b><small>${e.muscle||""}</small></div><button class="delete-btn">×</button></div><div class="set-controls"><label>Подходы<input type="number" min="1" max="20" value="${e.sets||3}"></label><label>Повторы<input type="number" min="1" max="100" value="${e.reps||10}"></label><label>Вес, кг<input type="number" min="0" step="0.5" value="${e.weight||0}"></label><label>Отдых, сек<input type="number" min="0" value="${e.rest||90}"></label></div>`;
 const inputs=$$("input",card); // placeholder, overwritten below
 const fields=card.querySelectorAll("input");["sets","reps","weight","rest"].forEach((key,j)=>fields[j].oninput=()=>day.exercises[i][key]=Number(fields[j].value));
 card.querySelector(".delete-btn").onclick=()=>{day.exercises.splice(i,1);renderDay()};box.appendChild(card)})
}
function renderPicker(filter=""){
 const box=$("#pickerList");box.innerHTML="";const q=filter.toLowerCase();
 exercises.filter(e=>e.name.toLowerCase().includes(q)||e.muscle.toLowerCase().includes(q)).forEach(e=>{
  const b=document.createElement("button");b.className="exercise-row";b.innerHTML=`<span class="exercise-photo">${e.icon}</span><span><b>${escapeHtml(e.name)}</b><small>${e.muscle} · ${e.type}</small></span><strong>＋</strong>`;
  b.onclick=()=>{draft.workouts[editingDayIndex].exercises.push({...e,sets:3,reps:10,weight:0,rest:90});toast("Упражнение добавлено");screen("dayEditorScreen");renderDay()};box.appendChild(b)
 })
}
function openActiveWorkout(){
 const p=programs.find(x=>x.active)||programs[0],w=p?.workouts.find(x=>x.exercises?.length)||p?.workouts[0];
 if(!w){toast("Сначала создай тренировку");return}
 $("#activeWorkoutTitle").textContent=w.name;const list=w.exercises.length?w.exercises:[{name:"Добавь упражнения",sets:1,reps:1,weight:0}];
 renderActiveExercise(list[0],list.length);screen("activeWorkoutScreen");
}
function renderActiveExercise(e,total){$("#activeExerciseName").textContent=e.name;$("#activeExerciseHeading").textContent=e.name;$("#exerciseCounter").textContent=`1 / ${total}`;$("#workoutProgress").style.width=(100/Math.max(total,1))+"%";const box=$("#activeSets");box.innerHTML="";for(let i=1;i<=(e.sets||3);i++){const b=document.createElement("button");b.className="set-row"+(i===1?" current":"");b.innerHTML=`<span>${i}</span><strong>${e.weight||0} кг × ${e.reps||10}</strong><i>${i===1?"→":""}</i>`;b.onclick=()=>{b.classList.add("completed");b.classList.remove("current");b.querySelector("i").textContent="✓"};box.appendChild(b)}}
function renderExerciseList(id,filter=""){const box=$(id);box.innerHTML="";const q=filter.toLowerCase();exercises.filter(e=>e.name.toLowerCase().includes(q)||e.muscle.toLowerCase().includes(q)).forEach(e=>{const b=document.createElement("button");b.className="exercise-row";b.innerHTML=`<span class="exercise-photo">${e.icon}</span><span><b>${escapeHtml(e.name)}</b><small>${e.muscle} · ${e.type}</small></span><strong>›</strong>`;b.onclick=()=>toast(e.name);box.appendChild(b)})}

$$("[data-screen]").forEach(b=>b.onclick=()=>screen(b.dataset.screen));
$$("[data-open-workout]").forEach(b=>b.onclick=openActiveWorkout);
$("#createProgramBtn").onclick=newProgram;$("#createProgramBtn2").onclick=newProgram;
$("#programDays").onchange=e=>{draft.days=Number(e.target.value);ensureDays();renderEditor()};
$("#programName").oninput=e=>draft.name=e.target.value;
$("#addWorkoutDayBtn").onclick=()=>{draft.days++;ensureDays();$("#programDays").value=draft.days;renderEditor()};
$("#saveProgramBtn").onclick=()=>{draft.name=draft.name.trim()||"Моя программа";ensureDays();const old=programs.findIndex(p=>p.id===draft.id);if(old>=0)programs[old]=draft;else programs.push(draft);saveData();renderPrograms();toast("Программа сохранена");setTimeout(()=>screen("workoutsScreen"),300)};
$("#backProgramBtn")?.addEventListener("click",()=>screen("workoutsScreen"));
$$("[data-back-workouts]").forEach(b=>b.onclick=()=>screen("workoutsScreen"));
$("#saveDayBtn").onclick=()=>{const n=$("#dayName").value.trim()||`День ${editingDayIndex+1}`;draft.workouts[editingDayIndex].name=n;$("#dayTitle").textContent=n;toast("Тренировка сохранена");setTimeout(()=>screen("editorScreen"),250)};
$("#addExerciseBtn").onclick=()=>{renderPicker();screen("exercisePickerScreen")};
$$("[data-back-editor]").forEach(b=>b.onclick=()=>screen("editorScreen"));$$("[data-back-day]").forEach(b=>b.onclick=()=>screen("dayEditorScreen"));
$("#pickerSearch").oninput=e=>renderPicker(e.target.value);$("#exerciseSearch").oninput=e=>renderExerciseList("#exerciseList",e.target.value);
$$(".segmented button").forEach(b=>b.onclick=()=>{$$(".segmented button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");const ready=b.dataset.programTab==="ready";$("#minePrograms").classList.toggle("hidden",ready);$("#readyPrograms").classList.toggle("hidden",!ready)});
$$("[data-template]").forEach(b=>b.onclick=()=>{draft={id:Date.now(),name:b.dataset.template,days:4,weeks:8,active:false,workouts:[]};ensureDays();renderEditor();screen("editorScreen");toast("Шаблон добавлен в конструктор")});
$("#addBtn").onclick=()=>$("#quickAdd").classList.add("open");$("#closeAdd").onclick=()=>$("#quickAdd").classList.remove("open");$("#quickAdd").onclick=e=>{if(e.target.id==="quickAdd")$("#quickAdd").classList.remove("open")};
$$("[data-quick]").forEach(b=>b.onclick=()=>{if(b.dataset.quick==="workout"){newProgram();$("#quickAdd").classList.remove("open")}else{toast("Раздел "+b.querySelector("span").textContent+" будет подключён следующим этапом");$("#quickAdd").classList.remove("open")}});
$("#notifyBtn").onclick=()=>toast("Уведомлений пока нет");
let timerSeconds=90,timerRunning=false,timerInterval;function renderTimer(){const m=String(Math.floor(timerSeconds/60)).padStart(2,"0"),s=String(timerSeconds%60).padStart(2,"0");$("#timer").textContent=`${m}:${s}`}
$("#timerBtn").onclick=()=>{if(timerRunning){clearInterval(timerInterval);timerRunning=false;$("#timerBtn").textContent="▶";return}timerRunning=true;$("#timerBtn").textContent="Ⅱ";timerInterval=setInterval(()=>{timerSeconds--;if(timerSeconds<=0){timerSeconds=0;clearInterval(timerInterval);timerRunning=false;$("#timerBtn").textContent="▶";toast("Отдых завершён")}renderTimer()},1000)};
$("#finishSetBtn").onclick=()=>{const current=$(".set-row.current");if(current){current.classList.remove("current");current.classList.add("completed");current.querySelector("i").textContent="✓";const next=current.nextElementSibling;if(next){next.classList.add("current");next.querySelector("i").textContent="→";toast("Подход сохранён")}else toast("Упражнение завершено")}};

renderPrograms();renderExerciseList("#exerciseList");renderPicker();
