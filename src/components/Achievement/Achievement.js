import React from 'react'
import './Achievement.css';

function Achieve() {
  return (
    <div>
      <h2 className='section__title' id='achieve'>Achievement</h2>
      <ol className="list">
      <li className="item"><span className="sp1">541th</span> rank in Codekaze 2022 out of 1 lakh participant.</li>
      <li className="item"><span className="sp1">571th</span> rank in Codekaze 2021 out of 25000 partcipant.</li>
      <li className="item"><span className="sp1">3 star</span> rating in Codechef.</li>
      <li className="item">I have solved <span className="sp1">450</span> question in leetcode.</li>
      <li className="item"><span className="sp1">5star</span> rating in hackerrank.</li>
      </ol>
    </div>
  )
}

export default Achieve