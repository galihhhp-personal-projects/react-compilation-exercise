import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import HomepageComponent from './HomepageComponent/Homepage';
import NavbarComponent from './NavbarComponent/Navbar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <HomepageComponent />
    </Fragment>
  );
}

export default App;
