import React from 'react'
import { NavLink } from "react-router-dom";
import './Achievement.css';

function Achieve() {
  return (
    <div>
      <h2 className='section__title' id='achieve'>Achievement</h2>
      <ol className="list">
      <li className="item"><span className="sp1">541th</span> rank in Codekaze 2022 out of 1 lakh participant.</li>
      <li className="item"><span className="sp1">571th</span> rank in Codekaze 2021 out of 25000 partcipant.</li>
      <li className="item"><span className="sp1">3 star</span> rating in Codechef.<span className="sp1"><a href="https://www.codechef.com/users/atulkesharwani">link</a></span></li>
      <li className="item">I have solved <span className="sp1">900</span> question in leetcode.<a href="https://leetcode.com/atulkesharwani/"><span className="sp1">link</span></a></li>
      <li className="item"><span className="sp1">5star</span> rating in hackerrank.<a href="https://www.hackerrank.com/kesharwaniatul99"><span className="sp1">link</span></a></li>
      </ol>
    </div>
  )
}

export default Achieve