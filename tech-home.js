(() => {
const passages = [
 '“Attendance seems to have improved after moving outreach sessions to Saturdays.” The uncertainty is preserved.',
 '“...after moving outreach sessions to Saturdays.” The note identifies a schedule change, without inventing an approval date.',
 '“Still having problems with stock at two facilities...” Redistribution is discussed, not confirmed as completed.',
 '“Met with the district health team yesterday” and “CHWs said women were more available.” These identify the sources of the observations.'
];
document.querySelectorAll('[data-inspect]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-inspect]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
 document.getElementById('source-inspector').textContent = passages[Number(button.dataset.inspect)];
 document.getElementById('source-inspector').parentElement.hidden=false;
}));
const contextRecords = {
 objective: ['Objective · Maternal care access', 'The intended change is better access to maternal care. The reach figure records delivery; further evidence is needed to assess that change.'],
 activity: ['Activity · Community outreach', 'The field report records 18 outreach sessions reaching 1,240 women. This describes delivery, rather than a measured change in care.'],
 decision: ['Decision · Saturday sessions', 'The team moved outreach to Saturdays following community feedback. Keeping that decision links an adaptation to the later attendance signal.'],
 feedback: ['Community · Women more available', 'Community health workers reported that women were more available on Saturdays. This helps explain the schedule change; it is a reported observation, not a verified attendance measure.'],
 risk: ['Risk · Stock shortages', 'The field note describes stock shortages at two facilities. Reaching women may not improve care if supplies are unavailable; redistribution was discussed but not confirmed.'],
 location: ['Location · Districts 2 and 4', 'The weekly field report places the outreach in Districts 2 and 4. This keeps the reported reach tied to its geographic scope.'],
 source: ['Original source · Weekly field report', 'The reported reach links back to the weekly field report. Reviewers can distinguish the original record from AI interpretation and examine related field notes.'],
 gap: ['Evidence gap · Did care improve?', 'Compare attendance and service data before and after the schedule change, and check supply availability. Reach alone cannot establish better access or health outcomes.']
};
document.querySelectorAll('[data-evidence]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-evidence]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
 const record=contextRecords[button.dataset.evidence];
 const inspector=document.getElementById('outcome-inspector');
 inspector.querySelector('strong').textContent=record[0];
 inspector.querySelector('p').textContent=record[1];
}));
// Lines connect real record cards; no circular background or implied causal arrows.
function drawDiagram(diagram) {
 const bounds=diagram.getBoundingClientRect(); if(!bounds.width || !bounds.height) return;
 const svg=diagram.querySelector('.connection-lines');
 const root=diagram.querySelector('[data-diagram-root]').getBoundingClientRect();
 svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`); svg.replaceChildren();
 const narrow=window.matchMedia('(max-width:700px)').matches;
 const cx=root.x+root.width/2-bounds.x,cy=root.y+root.height/2-bounds.y;
 diagram.querySelectorAll('[data-linked-node]').forEach(node=>{
  const r=node.getBoundingClientRect(),tx=r.x+r.width/2-bounds.x,ty=r.y+r.height/2-bounds.y;
  let d;
  if(diagram.dataset.diagram==='funding') {
   if(narrow){const bottom=root.bottom-bounds.y;d=`M ${cx} ${bottom} V ${bottom+13} H 10 V ${ty} H ${r.x-bounds.x}`;}
   else {const start=root.right-bounds.x,end=r.x-bounds.x,mid=(start+end)/2;d=`M ${start} ${cy} H ${mid} V ${ty} H ${end}`;}
  } else {d=`M ${cx} ${cy} L ${tx} ${ty}`;}
  const path=document.createElementNS('http://www.w3.org/2000/svg','path'); path.setAttribute('d',d);
  if(node.getAttribute('aria-pressed')==='true')path.classList.add('is-active');svg.append(path);
 });
}
const diagrams=[...document.querySelectorAll('[data-diagram]')];
const drawAll=()=>diagrams.forEach(drawDiagram);
if('ResizeObserver' in window){const observer=new ResizeObserver(drawAll);diagrams.forEach(d=>observer.observe(d));}
window.addEventListener('resize',drawAll);
document.fonts.ready.then(drawAll);
document.querySelectorAll('[data-panel],[data-evidence]').forEach(button=>button.addEventListener('click',()=>requestAnimationFrame(drawAll)));
drawAll();
})();
