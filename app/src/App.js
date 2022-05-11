import React, {useEffect} from 'react';
import {Outlet, Link} from "react-router-dom";
import Main from './features/Main';
import Sidebar from './features/Sidebar';

function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "assets/js/mazer.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (<>
      <Sidebar/>
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
