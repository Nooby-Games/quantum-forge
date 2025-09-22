import React from 'react'
import Game from './components/Game'
import SkillTree from './components/SkillTree'
import Events from './components/Events'
import Shop from './components/Shop'
import MiniGames from './components/MiniGames'
import Prestige from './components/Prestige'
import Leaderboard from './components/Leaderboard'
import Automation from './components/Automation'
import Crafting from './components/Crafting'
import AudioManager from './components/AudioManager'
import './styles/app.css'

export default function App(){
  return (
    <div className="app-root">
      <AudioManager />
      <header className="app-header">
        <h1>Quantum Forge</h1>
        <div className="meta">Version 1.0 — Nooby-Games / quantum-forge</div>
      </header>
      <main className="app-main">
        <aside className="sidebar">
          <Leaderboard />
          <Prestige />
          <Automation />
          <Crafting />
        </aside>
        <section className="content">
          <Game />
          <Shop />
          <SkillTree />
          <Events />
          <MiniGames />
        </section>
      </main>
      <footer className="app-footer">© Nooby-Games</footer>
    </div>
  )
}
