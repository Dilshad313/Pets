import React from 'react'
import '../Home/Home.css';
import img1 from '../Home/logo.png';
import img2 from '../Home/cat.jpg';
import img3 from '../Home/cat1.jpg';
import img4 from '../Home/cat2.jpg';

function Events() {
  return (
    <>
        <div className="nav">
        <ul>
          <li class="logo"><a href="/arno"><img src={img1} alt="Logo" /></a></li>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/window">Window</a></li>
          <li><a href="/donate">Donate</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/">Logout</a></li>
          <li><button id="bu"><b>DONATE</b></button></li>
          <li><input type="text"/> </li>
          
          
          
        </ul>
      </div>
      <div className="content">
        <div id="cats">
        <ul>
        <li><img src={img2} alt="Cat"/><br/></li>
        <li><img src={img3} alt="Cat"/><br/></li>
        <li><img src={img4} alt="Cat"/><br/></li>
        </ul>  
      </div>
      </div><br/><br/><br/><br/>

          <div id="head">
            <b><h1 className="h">Adoptable Pets</h1></b>
            <b>
              <p className='para'>"OUR PUBLIC HOURS ARE BY APPOINTMENT ONLY.
               YOU MUST HAVE AN<br/> APPOINTMENT IN ORDER TO VISIT THE SHELTER. YOU CAN MAKE AN <br/>APPOINTMENT
               ONCE YOU HAVE AN APPROVED APPLICATION.
               WE ARE NOT <br/>ACCEPTING OUT-OF-STATE ADOPTION APPLICATIONS AT THIS TIME."</p>
            </b>
            <p className='pa'>Remember, when you adopt ANY pet from a shelter you are making space for another <br/>
            pet to be put up for adoption. If you cannot find a pet among our ARNO rescued pets,<br/> 
            please visit your local shelter today and adopt… and ask your shelter to make room for <br/>
            an adoptable, healthy pet from Louisiana.</p>
          </div>

          <div className='form'>
          <h1 id="two">ARNO Pets for Adoption</h1><br/>
            <form className='fo'>
                <label>Animal:</label>
                      <select id="sele">
                        <option>ALL</option>
                        <option>BarnYard</option>
                        <option>Bird</option>
                        <option>Cat</option>
                        <option>Dog</option>
                        <option>Horse</option>
                        <option>Rabbit</option>
                        <option>Fish</option>
                      </select>&nbsp;&nbsp;&nbsp;
                <label>Breed:</label>
                      <input id="bre" type="text"/><br/><br/>
                <label>Age:</label>
                      <select id="sele">
                        <option>ALL</option>
                        <option>Baby</option>
                        <option>Young</option>
                        <option>Adult</option>
                        <option>Senior</option>
                      </select>&nbsp;&nbsp;&nbsp;
                <label>Size:</label>
                      <select id="sele">
                        <option>ALL</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>X-Large</option>
                      </select>
                <button id="butt" type="submit">Go</button>
            </form>
          </div>

          <div>

          </div>

          <div className='le'>
              <p>
              <b>Shelter Open Every Day</b><br/>
              VOLUNTEERS ONLY:<br/>
              9am-9pm<br/>
              PUBLIC HOURS:<br/>
              BY APPOINTMENT ONLY<br/><br/>

              If you are interested in adopting a pet,<br/> we ask that you contact an adoption 
              counselor at <br/>adopt@animalrescueneworleans.org for an adoption <br/>application and an appt. to interact with the pet(s)<br/> 
              of your choice. No pets are adopted/released until a <br/>completed application is approved.
              </p>
          </div>
    </>
  )
}

export default Events