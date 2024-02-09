// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import LeadershipTeam from './components/LeadershipTeam';
import DevelopmentTeam from './components/DevelopmentTeam';
import SalesMarketingTeam from './components/SalesMarketingTeam';

function App() {
  return (
    <div className="App">
      <p class="h"> <Header companyName="Company Name"  /></p>

      <div className="content">
         
         <h3 class="m">Welcome to [companyName], where a dedicated team of professionals works<br></br> 
           together to bring innovation, creativity, and expertise to software industry get to know <br></br> the individuals who make our company thrive.
           </h3>
      
       
        <hr
   style={{
   background: "skyblue",
   height: "3px",
   width:500,
   
   }}
/>
        <h2>Meet Our Team</h2>
        <LeadershipTeam />
        <DevelopmentTeam />
        <SalesMarketingTeam />
      </div>
    </div>
  );
}

export default App;

