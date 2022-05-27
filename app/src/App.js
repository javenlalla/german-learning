import React, {useEffect} from 'react';
import { Outlet } from "react-router-dom";
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
            <i className="bi bi-justify fs-3"/>
          </a>
        </header>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
