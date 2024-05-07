import React from 'react';
import NavBar from '../components/NavBar';

function About() {
    return (
      <>
        <NavBar />
        <div className='m-3 text-center'>
          <h1 className=' text-bold text-3xl'>About us</h1>
          <p className=' text-bold'>we made the best trello ripoff</p>
        </div>
      </>
      
        
    );
  }

export default About;
