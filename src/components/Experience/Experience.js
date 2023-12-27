import React from 'react'
import './Experience.css';

function Experience() {
  return (
    <div className="q1">
      <h2 className='section__title mt-10 mb-10 font-semibold' id='qualify'>Experience</h2>
      <div className="qualify">
          <h3 className='font-semibold'>Damyant Fintech Private Limited,Noida</h3>
          <h4>Full Stack Developer</h4>
          <h5>Working as a Full Stack Developer. Worked on React,Flask,JavaScript,TypeScript,Vite,Node,HTML,CSS and many more.</h5>
           <h5>Worked on backtest project using historical data.</h5>
          <h6 className='font-medium'> March 2023 - Present</h6>    
      </div>
      <div className="qualify">
          <h3 className='font-semibold'>Imocha</h3>
          <h4>Problem Setter Intern</h4>
          <h5>I was working in a team to set a coding problem.</h5>
          <h5>I used to set problem related to any topic of Data Structure an Algorithm.</h5>
          <h6 className='font-medium'>August 2022 - February 2023</h6>  
      </div>
      <div className="qualify">
          <h3 className='font-semibold'>Unacademy</h3>
          <h4>Doubt Solver</h4>
          <h5>I am working as a doubt solver in CodeChef.</h5>
           <h5>I used to solve the coding problem doubt in codechef platform</h5>
          <h6 className='font-medium'>9 May 2022 - August 2022</h6>    
      </div>
      
    </div>
  )
}

export default Experience