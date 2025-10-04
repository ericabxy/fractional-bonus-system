import { useEffect, useReducer, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Description from './components/Description'
import AbilityScores from './components/AbilityScores'
import ExpLevel from './components/ExpLevel'
import SavingThrows from './components/SavingThrows'
import BaseAttackBonus from './components/BaseAttackBonus'
import Enhancement from './components/Enhancement'
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
1-3: Practiced
4-7: Competent
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
  throw Error('Unknown action.')
}

function App () {
  const [ desc, setDesc ] = useReducer(
    reducer, {
      experienceLevel: 1
    }
  )
  const changeDesc = evt => {
    setDesc({
      [evt.target.name]: evt.target.value
    })
  }
  const [ stats, setStats ] = useReducer(
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
  const [ bonusFracs, setBonusFracs ] = useReducer(
    reducer, {
      fightersFortitude: false,
      roguesReflexes: false,
      wizardsWillpower: false
    }
  )
  useEffect(() => {
    setStats({
      fighter: bonusFracs['fightersFortitude'],
      rogue: bonusFracs['roguesReflexes'],
      wizard: bonusFracs['wizardsWillpower']
    })
  }, [bonusFracs])
  const [ bonusPerms, setBonusPerms ] = useReducer(
    reducer, {
      greatFortitude: false,
      lightningReflexes: false,
      ironWill: false,
      improvedAttackBonus: 5
    }
  )
  useEffect(() => {
    setStats({
      fortitude: bonusPerms['greatFortitude'] ? 2 : 0,
      reflex: bonusPerms['lightningReflexes'] ? 2 : 0,
      will: bonusPerms['ironWill'] ? 2 : 0,
      baseAttackBonus: bonusPerms.improvedAttackBonus
    })
  }, [bonusPerms])
  const [ lvl, setLvl ] = useState(1)
  return (
    <div>
      <Header>Fractional Bonus System</Header>
      <Description onChange={changeDesc} {...desc} />
      <AbilityScores dispatch={setStats} {...stats} />
      <ExpLevel dispatch={setStats} {...stats} />
      <SavingThrows {...stats} />
      <BaseAttackBonus {...stats} />
      <h2>Fractional Bonuses</h2>
      <div className='list'>
        {Object.keys(bonusFracs).map((value, key) => (
          <Feature
            name={value}
            dispatch={setBonusFracs}
            {...bonusFracs}
          />
        ))}
      </div>
      <h2>Permanent Bonuses</h2>
      <div className='list'>
        {Object.keys(bonusPerms).map((value, key) => (
          <Feature
            name={value}
            dispatch={setBonusPerms}
            {...bonusPerms}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
