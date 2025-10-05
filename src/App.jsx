import { useEffect, useReducer } from 'react'
import './App.css'

import Description from './components/Description'
import AbilityScores from './components/AbilityScores'
import SavingThrows from './components/SavingThrows'
import BaseAttackBonus from './components/BaseAttackBonus'
import Grapple from './components/Grapple'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Initiative from './components/Initiative'

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
    if (evt.target.name === 'experienceLevel') {
      setStats({
        baseAttack: parseInt(evt.target.value / 2)
      })
    }
    console.log(evt.target.name, stats.baseAttack)
  }
  const [stats, setStats] = useReducer(
    reducer, {
      level: 1,
      strength: 15, strengthModifier: 2,  //15
      dexterity: 8, dexterityModifier: -1, //8
      constitution: 13, constitutionModifier: 1,  //13
      intelligence: 12, intelligenceModifier: 1,  //12
      wisdom: 14, wisdomModifier: 2,  //14
      charisma: 10, charismaModifier: 0,  //10
      baseFortitude: 0,
      baseReflex: 0,
      baseWill: 0,
      baseAttackBonus: 0
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
      baseFortitude: fractional.fightersFortitude
        ? parseInt(stats.level / 2)
        : parseInt(stats.level / 3),
      baseReflex: fractional.roguesReflexes
        ? parseInt(stats.level / 2)
        : parseInt(stats.level / 3),
      baseWill: fractional.wizardsWillpower
        ? parseInt(stats.level / 2)
        : parseInt(stats.level / 3)
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
      baseFortitudeBonus: permanent.greatFortitude ? 2 : 0,
      baseReflexBonus: permanent.lightningReflexes ? 2 : 0,
      baseWillBonus: permanent.ironWill ? 2 : 0,
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
      <Grapple {...stats} />
      <Initiative {...stats} />
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
