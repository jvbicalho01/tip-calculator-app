import { useState } from 'react'
import './App.css'

import Display from './Display'

function App() {

  const [bill, setBill] = useState("")
  const handleBill = (e) => setBill(e.target.value)

  const [tip, setTip] = useState("")
  const handleTip = (e) => setTip(e.target.value)
  const handleTip5 = () => setTip(5)
  const handleTip10 = () => setTip(10)
  const handleTip15 = () => setTip(15)
  const handleTip25 = () => setTip(25)
  const handleTip50 = () => setTip(50)

  const [people, setPeople] = useState("")
  const handlePeople = (e) => setPeople(e.target.value)

  const regexBill = /^[0-9]*\.?[0-9]*$/
  const regexNumber = /^[0-9]*$/

  return (
    <div className="container">
      <img className='logo' src="./src/img/logo.svg" alt="" />
      <div className='content'>
        <div className='inputs-container'>
          <p className='bill-label'>Bill</p>
          {regexBill.test(bill) ? null : (<p className='error'>error: Invalid value</p>)}
          <img className='icon-dollar' src="./src/img/icon-dollar.svg" alt="" />
          <input type="text" className='input-bill' placeholder='0' onChange={handleBill} value={bill} />

          <p className='tip-label'>Select Tip %</p>
          {regexNumber.test(tip) ? null : (<p className='error'>error: invalid custom tip</p>)}
          <div className='tips-options'>
            <button className='tip-button' onClick={handleTip5}>5%</button>
            <button className='tip-button' onClick={handleTip10}>10%</button>
            <button className='tip-button' onClick={handleTip15}>15%</button>
            <button className='tip-button' onClick={handleTip25}>25%</button>
            <button className='tip-button' onClick={handleTip50}>50%</button>
            <input type="text" className='tip-custom' placeholder='Custom' maxLength={2} value={tip} onChange={handleTip} />
          </div>

          <p className='people-label'>Number of People</p>
          { regexNumber.test(people) ? null : (<p className='error'>error: invalid number of people</p>)}
          <img className='icon-people' src="./src/img/icon-person.svg" alt="" />
          <input type="text" className='input-people' placeholder='0' onChange={handlePeople} value={people} />

        </div>
        <Display bill={Number(bill)} tip={Number(tip)} people={Number(people)} setBill={setBill} setTip={setTip} setPeople={setPeople}/>

      </div>
    </div>
  )
}

export default App
