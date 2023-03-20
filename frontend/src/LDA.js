import React from 'react'
import Neck from './components/Neck'
import { useState } from 'react'

import { LDAvis } from 'react-ldavis'
import LDAvisDataList from './utils/ldadata'
const LDA = () =>{
    const options = LDAvisDataList.map((_, i) => (
        <option key={i} value={i}>{i}</option>
      ))
    const [currentData, setCurrentData] = useState(0);
    const [modHis, setModHis] = useState(false);
  return (
    <div className='bg-gray-200'>
    <Neck tempTitle={"Latent Dirichlet Allocation"}></Neck>
    <div className="px-32 h-screen">
        <div className="flex flex-row h-4/5 bg-white rounded-b-xl p-2 content-center">
        
      <label>data: </label>
      <select onChange={event => setCurrentData(event.target.value)}>
        {options}
      </select>

      <label>modifyHistory: </label>
      <input
        type="checkbox"
        checked={modHis}
        onChange={event => setModHis(event.target.checked)}
      />

      <LDAvis
        data={LDAvisDataList[currentData]}
        modifyHistory={modHis}
        style={{ textAlign: "center" }}
      />
    </div>
        </div>
      </div>
    
  )
}

export default LDA