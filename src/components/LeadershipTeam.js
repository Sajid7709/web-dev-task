// LeadershipTeam.js
import React from 'react';

function LeadershipTeam() {
  return (
    <div>
    <h3 class="f">Leadership/Management Team</h3>
    <p></p>
    <div class="row">
  <div class="column">
    <div class="card">
    <img src= './image/employee.png' alt="Company Logo" width={65} />
      <div class="container">
      <p> [Founder Name]</p>
      <p class="title">Founder/CEO</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src= './image/employee.png' alt="Company Logo" width={65} />
      <div class="container">
      <p>[Founder Name]</p>
      <p class="title">Founder/CEO</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img src= './image/employee.png' alt="Company Logo" width={65} />
      <div class="container">
        <p>[VP Name]</p>
        <p class="title">VP,Developement & Growth</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src= './image/employee.png' alt="Company Logo" width={65} />
      <div class="container">
      <p>[VP Name]</p>
      <p class="title">VP Sales & Marketing</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
     </div>
  );
}

export default LeadershipTeam;
