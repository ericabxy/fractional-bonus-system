import { useEffect, useReducer } from 'react'
import './App.css'

import Description from './components/Description'
import AbilityScores from './components/AbilityScores'
import SavingThrows from './components/SavingThrows'
import BaseAttackBonus from './components/BaseAttackBonus'
import Feature from './components/Feature'
import Footer from './components/Footer'

/* Ranks
Amateur
Skilled
Accomplished
Competent
Practiced
Magnificent
Excellent
Formidable
Masterful
Capable
Proven
1-3: Competent
4-7: Practiced
8-11: Accomplished
12-15: Masterful
16-19: Excellent
20: Legendary
*/

function reducer (state, action) {
  return {
    ...state,
    ...action
  }
}

function App () {
  const [desc, setDesc] = useReducer(
    reducer, {
      experienceLevel: 1
    }
  )
  const changeDesc = evt => {
    setDesc({
      [evt.target.name]: evt.target.value
    })
  }
  const [stats, setStats] = useReducer(
    reducer, {
      level: 1,
      strength: 11,
      dexterity: 10,
      constitution: 11,
      intelligence: 10,
      wisdom: 11,
      charisma: 10,
      fortitude: 0,
      reflex: 0,
      will: 0,
      bab: 0,
      fighter: false,
      rogue: false,
      wizard: false
    }
  )
  useEffect(() => {
    setStats({
      level: desc.experienceLevel
    })
  }, [desc])
  const [fractional, setFractional] = useReducer(
    reducer, {
      fightersFortitude: false,
      roguesReflexes: false,
      wizardsWillpower: false
    }
  )
  useEffect(() => {
    setStats({
      fighter: fractional.fightersFortitude,
      rogue: fractional.roguesReflexes,
      wizard: fractional.wizardsWillpower
    })
  }, [fractional])
  const [permanent, setPermanent] = useReducer(
    reducer, {
      greatFortitude: false,
      lightningReflexes: false,
      ironWill: false,
      improvedAttackBonus: 0
    }
  )
  useEffect(() => {
    setStats({
      fortitude: permanent.greatFortitude ? 2 : 0,
      reflex: permanent.lightningReflexes ? 2 : 0,
      will: permanent.ironWill ? 2 : 0,
      baseAttackBonus: permanent.improvedAttackBonus
    })
  }, [permanent])
  return (
    <div>
      <header>
        <h1 className='App-title'>Fractional Bonus System</h1>
      </header>
      <Description onChange={changeDesc} {...desc} />
      <AbilityScores dispatch={setStats} {...stats} />
      <SavingThrows {...stats} />
      <BaseAttackBonus {...stats} />
      <h2>Fractional Bonuses</h2>
      <div className='list'>
        {Object.keys(fractional).map((value, key) => (
          <Feature
            key={key}
            name={value}
            dispatch={setFractional}
            {...fractional}
          />
        ))}
      </div>
      <h2>Permanent Bonuses</h2>
      <div className='list'>
        {Object.keys(permanent).map((value, key) => (
          <Feature
            key={key}
            name={value}
            dispatch={setPermanent}
            {...permanent}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
