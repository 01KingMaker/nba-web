import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    // Fetch data from your web service using Axios
    axios.get('https://nba-web-service-production.up.railway.app/states/SAISON_2023')
      .then(response => {
        // Update the state with the fetched data
        setStatsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <div className='container-fluid d-flex justify-content-center '>
        <div className='row col-lg-8 mt-3'>
          <div className='col-lg-8'>Season Stats</div>
          <div className='table-responsive'>
            <table className="table table-hover table-bordered">
              <thead className='table-dark'>
                <tr>
                  <th scope="col">Classement</th>
                  <th scope="col">Joueur</th>
                  <th scope="col">MJ</th>
                  <th scope="col">PPM</th>
                  <th scope="col">RPM</th>
                  <th scope="col">PDPM</th>
                  <th scope="col">MPM</th>
                  <th scope="col">FG%</th>
                  <th scope="col">3P%</th>
                  <th scope="col">LF%</th>
                </tr>
              </thead>
              <tbody>
                {statsData.map((player, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{player.nom} {player.prenom}</td>
                    <td>{player.mj}</td>
                    <td>{player.ppm}</td>
                    <td>{player.rpm}</td>
                    <td>{player.pdpm}</td>
                    <td>{player.mpm}</td>
                    <td>{player.fgPercentage}</td>
                    <td>{player.threePPercentage}</td>
                    <td>{player.lfPercentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
