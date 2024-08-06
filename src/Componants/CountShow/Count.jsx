// App.jsx
import React from 'react';
import CountUp from 'react-countup';
import './Count.scss';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaUserGraduate, FaHandshake } from "react-icons/fa";
import { MdPersonPinCircle } from 'react-icons/md';
import { GiCheckMark } from 'react-icons/gi';

const Count = () => {
  return (
    <div className='count-section'>
      <div className='why-choose-us'>
        <h2>Why Choose Us?</h2>
        <div className='reasons'>
          {/* <div className='reason'>
            <GiCheckMark size={22} className='icon'/>
            <p>Expert Team with Decades of Experience</p>
          </div> */}
          <div className='reason'>
            <GiCheckMark size={22} className='icon'/>
            <p>Commitment to Quality and Excellence</p>
          </div>
          <div className='reason'>
            <GiCheckMark size={22} className='icon'/>
            <p>Customer-Centric Approach</p>
          </div>
          <div className='reason'>
            <GiCheckMark size={22} className='icon'/>
            <p>Innovative Solutions for Every Challenge</p>
          </div>
        </div>
      </div>
      
      <div className='increment'>
        <div className='main-in'>
          <AiOutlineFundProjectionScreen size={45} className='icon'/>
          <div className='counting' style={{borderRight: "none"}}>
            <CountUp
              start={0}
              end={1}
              duration={2.75}
              separator=" "
              decimals={0}
              decimal=","
              suffix='+'
            />
            <h2>Projects Completed</h2>
          </div>
        </div>

        <div className='main-in'>
          <FaUserGraduate size={45} className='icon'/>
          <div className='counting'>
            <CountUp
              start={0}
              end={1}
              duration={2.75}
              separator=" "
              decimals={0}
              decimal=","
              suffix='+'
            />
            <h2>Happy Clients</h2>
          </div>
        </div>

        <div className='main-in'>
          <MdPersonPinCircle size={45} className='icon'/>
          <div className='counting'>
            <CountUp
              start={0}
              end={3}
              duration={2.75}
              separator=" "
              decimals={0}
              decimal=","
              suffix='+'
            />
            <h2>Team Members</h2>
          </div>
        </div>

        <div className='main-in'>
          <FaHandshake size={45} className='icon'/>
          <div className='counting'>
            <CountUp
              start={0}
              end={1}
              duration={2.75}
              separator=" "
              decimals={0}
              decimal=","
              suffix='+'
            />
            <h2>Years Experience</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
