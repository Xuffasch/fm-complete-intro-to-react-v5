// import React, { useState, lazy, Suspense } from 'react'
import React, { useState } from 'react';
// import { render } from 'react-dom'
import ReactDOM from "react-dom";
import { Router, Link } from '@reach/router';
import Details from './Details';
import SearchParams from './SearchParams'
import ThemeContext from './ThemeContext';
// import NavBar from './Navbar';

// const Details = lazy(() => import('./Details'));

// const SearchParams = lazy(() => import('./SearchParams'))

const App = () => {
  // Even if the hook was initialized with a string default value, an object can be used to pass multiple values
  // Actually, a hook is not mandatory to use Context. A simple object would be enough. However hook provide a function to change the initial values of the Context.
  const themeHook = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          {/* <NavBar /> */}
          <header>
          <Link to="/">Adopt Me!</Link>
        </header>
          {/* <Suspense fallback={<h1>Loading Page...</h1>}> */}
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          {/* </Suspense> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// export default App;
ReactDOM.render(<App />, document.getElementById("root"));
