import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CurrencyConverter() {
    const[rates,setRates]= useState({})
    const[amount,setAmount] = useState(1)
    const[fromCurrency,setFromCurrency]= useState("USD")
    const[toCurrency,setToCurrency]= useState("INR")
    const[conver,setConvert]=useState('0')

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get(`https://v6.exchangerate-api.com/v6/f3cbc7d3e7eaa767e3e4320b/latest/${fromCurrency}`)
                setRates(response.data.rates)
            }catch(error){
                console.error("Error",error)
            }
        }
        fetchData()
    },[fromCurrency])
  return (
    <>
      <div className="currencyConverter">
        <h1>Currency Converter</h1>
        <div>
            <label >
                Amount : 
                <input type="number" placeholder='enter amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
            </label>
        </div>
        <div>
            <label >
                From Currency : 
                <select onClick={(e)=>setFromCurrency(e.target.value)} value={fromCurrency}>
                {Object.keys(rates).map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </label>
        </div>
        <div>
            <label >
                To Currency : 
                <select onClick={(e)=>setToCurrency(e.target.value)} value={toCurrency} >
                    {Object.keys(rates).map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                    
                </select>
            </label>
        </div>
        <button>Convert</button>
        <div>
            <p>Hello Result</p>
        </div>
      </div>
    </>
  )
}

export default CurrencyConverter
