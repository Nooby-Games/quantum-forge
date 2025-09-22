import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function Leaderboard(){ const [list,setList]=useState([]);
useEffect(()=>{ axios.get('/api/leaderboard').then(r=>setList(r.data)).catch(()=>{}); },[]);
function submit(){ const name=prompt('Name'); if(!name) return; const score=parseInt(prompt('Score')||'0',10); axios.post('/api/leaderboard',{name,score}).then(()=>alert('Submitted')).catch(()=>alert('Failed')); }
return (<div className='panel'><h3>Leaderboard</h3><div style={{maxHeight:200,overflow:'auto'}}>{list.map((r,i)=>(<div key={i}>{i+1}. {r.name} — {r.score}</div>))}</div><div style={{marginTop:8}}><button onClick={submit}>Submit Score</button></div></div>); }