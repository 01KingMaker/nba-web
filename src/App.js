import './App.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
function App() {
  return (
    <>
      <div className='container-fluid d-flex justify-content-center '>
        <div className='row col-lg-8 mt-3'>
          <div className='col-lg-8'>Season Stats</div>
          <table class="table table-hover table table-bordered">
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
              <tr>
                <th scope="row">1</th>
                <td>Joel Embiid</td>
                <td>13</td>
                <td>31.9</td>
                <td>11.2</td>
                <td>6.2</td>
                <td>34.1</td>
                <td>55.2</td>
                <td>31.8</td>
                <td>88.5</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
