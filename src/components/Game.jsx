import React, {useEffect, useState, useRef} from 'react';
import {UPGRADES} from '../data/upgrades';
import {format} from '../utils_format';

export default function Game(){ const key='qf_final_v1'; const [state,setState]=useState(()=>{ try{const r=localStorage.getItem(key); if(r) return JSON.parse(r);}catch(e){} return {ore:0,essence:0,shards:0,perClick:1,perSecond:0,upgrades:{},clicks:0,playTime:0,lastTick:Date.now()}; });
useEffect(()=>{ const t=setInterval(()=>{ setState(s=>{ const now=Date.now(); const dt=Math.min(now-(s.lastTick||now),1000*60*60*24); const gain=(s.perSecond||0)*dt/1000; const ns={...s,ore:s.ore+gain,playTime:(s.playTime||0)+dt,lastTick:now}; localStorage.setItem(key,JSON.stringify(ns)); return ns; }); },1000); return ()=>clearInterval(t); },[]);
const lastRef=useRef(0); const [combo,setCombo]=useState(0);

function clickForge(){ const now=Date.now(); if(now-lastRef.current<1100) setCombo(c=>c+1); else setCombo(1); lastRef.current=now; const comboBonus=1+Math.min(10,combo/5); const gain=(state.perClick||1)*comboBonus; const ns={...state,ore:state.ore+gain,clicks:(state.clicks||0)+1}; localStorage.setItem(key,JSON.stringify(ns)); setState(ns); }

return (<div className="panel"><h2>Forge</h2><div style={{display:'flex',gap:12,alignItems:'center'}}><button className="big-button" onClick={clickForge}>FORGE</button><div><div className='stat'>Ore: {format(state.ore)}</div><div className='stat'>Per Click: {state.perClick.toFixed(2)} — Per Second: {state.perSecond.toFixed(2)}</div><div className='stat'>Combo: {combo}</div></div></div></div>); }