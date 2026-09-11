import {hornPoint,address} from './horn-geometry.mjs';
document.querySelectorAll('[data-matrix]').forEach(panel=>{
 const canvas=panel.querySelector('canvas'),ctx=canvas.getContext('2d');if(!ctx)return;
 const shell=panel.querySelector('[data-shell]'),side=panel.querySelector('[data-side]'),row=panel.querySelector('[data-row]'),column=panel.querySelector('[data-column]'),angle=panel.querySelector('[data-angle]');
 const colours=['#a6e8dc','#86cfe7','#a5bdfa','#b7a6ee','#e2acd8','#f0bdad','#e8c780'];
 function draw(){
  const w=canvas.width,h=canvas.height,pitch=Number(angle.value)*Math.PI/180,scale=Math.min(w/5.1,h/3.25),cy=Math.cos(pitch),sy=Math.sin(pitch);
  const project=p=>({x:w/2+p.x*scale,y:h/2-(p.y*cy-p.z*sy)*scale,z:p.y*sy+p.z*cy});
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#0d1c27';ctx.fillRect(0,0,w,h);
  const selected=[];const v0=(Number(row.value)-1)*Math.PI/6,u0=(Number(column.value)-1)*Math.PI/12;
  for(let i=0;i<=8;i++)selected.push(project(hornPoint(u0+i*Math.PI/96,v0)));
  for(let i=1;i<=8;i++)selected.push(project(hornPoint(u0+Math.PI/12,v0+i*Math.PI/48)));
  for(let i=1;i<=8;i++)selected.push(project(hornPoint(u0+Math.PI/12-i*Math.PI/96,v0+Math.PI/6)));
  for(let i=1;i<=8;i++)selected.push(project(hornPoint(u0,v0+Math.PI/6-i*Math.PI/48)));
  ctx.beginPath();selected.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.fillStyle=side.value==='inside'?'#dcbff066':'#efd29788';ctx.fill();
  const curves=[];
  for(let c=0;c<24;c++)curves.push(Array.from({length:145},(_,n)=>project(hornPoint(c*Math.PI/12,n*Math.PI/72))));
  for(let r=0;r<12;r++)curves.push(Array.from({length:145},(_,n)=>project(hornPoint(n*Math.PI/72,r*Math.PI/6))));
  ctx.strokeStyle=colours[Number(shell.value)-1];ctx.lineWidth=1.2;
  for(const points of curves){for(let i=1;i<points.length;i++){ctx.globalAlpha=points[i].z<0?.25:.72;ctx.beginPath();ctx.moveTo(points[i-1].x,points[i-1].y);ctx.lineTo(points[i].x,points[i].y);ctx.stroke()}}
  ctx.globalAlpha=1;ctx.fillStyle='#fff5da';ctx.beginPath();ctx.arc(w/2,h/2,4,0,Math.PI*2);ctx.fill();
  ctx.font='19px Arial';ctx.fillText('Infinity point',w/2+18,h/2-18);
  panel.querySelector('[data-address]').textContent=address(shell.value,side.value,row.value,column.value);
 }
 panel.querySelectorAll('input,select').forEach(input=>input.addEventListener('input',draw));
 panel.querySelector('[data-reset-matrix]').addEventListener('click',()=>{shell.value='1';side.value='outside';row.value='3';column.value='6';angle.value='25';draw()});draw();
});
