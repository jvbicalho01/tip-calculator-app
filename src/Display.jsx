import { useEffect, useState } from "react";
import "./Display.css"

function Display({ bill, tip, people, setBill, setTip, setPeople }) {

  const [amount, setAmount] = useState("0.00")
  const [total, setTotal] = useState("0.00")

  const resetCalculator = () => {
    setBill("")
    setTip("")
    setPeople("")
  }

  useEffect(() => {
    if (bill && tip && people) {
      setAmount(((bill * (tip / 100)) / people).toFixed(2))
      setTotal(((bill * (1 + (tip / 100))) / people).toFixed(2))
    }
    else {
      setAmount("0.00")
      setTotal("0.00")
    }
  }, [bill, tip, people])

  return (
    <div className="result-container">
      <div className="amount">
        <p className="amount-label">Tips Amount</p>
        <p className="person">/person</p>
        <p className="amount-value">${amount}</p>
      </div>

      <div className="total">
        <p className="total-label">Tips Amount</p>
        <p className="person">/person</p>
        <p className="total-value">${total}</p>
      </div>

      {bill && tip && people ? (<button className="reset-enabled-btn" onClick={resetCalculator}>RESET</button>)
        : (<button className="reset-disabled-btn" disabled>RESET</button>)
      }
    </div>
  )
}


export default Display;