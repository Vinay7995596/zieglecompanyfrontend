import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const HomePage = () => {

    const handleSubmit = async e => {
      try {
        await axios.post('https://zieglercompanybackend.onrender.com', formData);
        alert('Email sent successfully');
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send email');
      }
    };

    const [count, setCount] = useState(1);
    const [formData, setFormData] = useState({
      fromPlace: '',
      toPlace: '',
      date: '',
      email: '',
      message: '',
      oldCount: 1
    });
    const handleChange = event => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
    
    const incrementCount = () => {
      setCount(prevCount => prevCount + 1);
      setFormData(prevData => ({ ...prevData, oldCount: count + 1 }));
    };
  
    const decrementCount = () => {
      setCount(prevCount => prevCount > 1 ? prevCount - 1 : 1);
      setFormData(prevData => ({ ...prevData, oldCount: count > 1 ? count - 1 : 1 }));
    };

  return (
    <div>
      <div className='main-bg-booking-page-bg'>
        <nav className='nav-bar-links-main-bg'>
            <div>
              <h3 className='mytransfer-heading'>my transfers</h3>
            </div>
            <div className='list-items-flex'>
              <a className='nav-links'>Destination</a>
              <a className='nav-links'>My Booking</a>
              <a className='nav-links'>Travel Agencies</a>
              <a className='nav-links'>Help Center</a>
              <a className='nav-links'>Eu</a>
              <a>
                <button className='login-button '>Login</button>
              </a>
            </div>
        </nav>
        <div> 
          <div className='inputs-upper-container'>
            <h1 className='heading-looking'>Are you looking for <br /> airport transfers?</h1>
            <h3 className='heading-looking-below'>You have come to the right place</h3>
            <div className='total-inputs-one-container'>
              <div className='inputs-container'>  {/*first total input container */}
                <div> {/*first-inputs */}
                    <div className='input-container'>
                      <input type="text" name="fromPlace" placeholder="From" onChange={handleChange} />
                    </div>
                </div>
                <div className='date-time-container'> {/* date-time */}
                  <div className='input-container input-container-date'>
                      <input type='date' name='date' onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className='inputs-container'>  {/* seocnd total input container */}
                <div> {/*first-inputs */}
                    <div className='input-container'>
                    <input type="text" name="toPlace" placeholder="To" onChange={handleChange} />
                    </div>
                </div>
                <div className='date-time-container'> {/* date-time */}
                  <div className='input-container-time'>
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className='add-button-ppls-calculate'>
                <button onClick={incrementCount} className='increase-button-submit'>+</button>
                <span>{count}</span>
                <button onClick={decrementCount}>-</button>
              </div>
              <div className='search-button-ppls-calculate '>
                <button type='submit' className='button-submit' onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default HomePage;
