import React from 'react'
import './Qualify.css';

function Qualify() {
  return (
    <div className="q1">
      <h2 className='section__title font-semibold' id='qualify'>Qualification</h2>
      <div className="qualify shadow-lg">
          <h3 className='text-xl font-semibold'>Graduation</h3>
          <h4>Madan Mohan Malaviya University Of Technology,Gorakhpur</h4>
          <h5>B.tech Computer Science Engineering</h5>
          <h6>2019-2023</h6>
          <h6>8.16 CGPA</h6>
      </div>
      <div className="qualify shadow-lg">
          <h3 className='text-xl font-semibold'>Intermediate</h3>
          <h4>Vishnu Bhagwan Public School & College,Prayagraj</h4>
          <h5>Physics,Chemistry and Mathematics</h5>
          <h6>2016-2018</h6>
          <h6>83%</h6>
      </div>
      <div className="qualify shadow-lg">
          <h3 className='text-xl font-semibold'>HighSchool</h3>
          <h4>Vishnu Bhagwan Public School & College,Prayagraj</h4>
          <h5>1oth General Subject</h5>
          <h6>2014-2016</h6>
          <h6>10 CGPA</h6>
      </div>
    </div>
  )
}

export default Qualify