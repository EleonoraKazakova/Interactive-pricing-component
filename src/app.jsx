import React, { useState } from 'react';
import './styles/app'

export default function App() {
  const pageviews = ["0", "10K", "50K", "100K", "1M"]
  const prices = [8, 12, 16, 24, 36]

  const [selectedIndex, setSelectedIndex] = useState(0)
  const changePrice = (event) => {
    setSelectedIndex(event.target.value)
  }

  const percentColorRange = (selectedIndex * 100) / 4

  const [discount, setDiscount] = useState(false)
  const changePriceDiscount = () => {
    setDiscount(!discount)
  }

  return (
    <div className='content'>

      <div className='header'>
        <p>Simple, traffic-based pricing</p>
        <div className='subtitle'>
          <p className='headerText'> Sign-up for our 30-day trial. No credit card required.</p>
        </div>
      </div>
      <div className='component'>
        <div className='componentTop'>
          <div className='headerText'>{pageviews[selectedIndex]} PAGEVIEWS</div>

          <div className='pricePerMonth'> <div className='priceText'>
            ${(discount ? prices[selectedIndex] * 0.75 : prices[selectedIndex]).toFixed(2)}
          </div> / per month</div>


          <input
            type="range"
            min="0"
            max="4"
            value={selectedIndex} //current value of input
            onChange={changePrice}
            className='slider'
            style={{ background: 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + percentColorRange + '%, hsl(224, 65%, 95%) ' + percentColorRange + '%, hsl(224, 65%, 95%) 100%)' }}
          />

          <div className='billing'>
            <p>Monthly Billing</p>
            
              <label className="switch">
                <input type="checkbox" onChange={changePriceDiscount} />
                <span className="yearly-toggle"></span>
              </label>
            
            <p>Yearly Billing</p>
            <p className='billingBackground'></p>
          </div>
        </div>
        <div className='lowerBlock'>
          <div className='checkList'>
            <div className='checkElement'>
              <div className='check'></div><div>Unlimited websites</div>
            </div>
            <div className='checkElement'>
              <div className='check'></div><div>100% data ownership</div>
            </div>
            <div className='checkElement'>
              <div className='check'></div><div>Email reports</div>
            </div>
          </div>

          <div className='button'>Start my trial</div>
        </div>

      </div>


    </div>

  )
}