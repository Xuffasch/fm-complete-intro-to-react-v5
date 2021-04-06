import React, { useState } from 'react'
import { render } from 'react-dom'
import { Link, Router } from '@reach/router';
import Details from './Details';
import SearchParams from './SearchParams'
import ThemeContext from './ThemeContext';

const App = () => {
  // Even if the hook was initialized with a string default value, an object can be used to pass multiple values
  // Actually, a hook is not mandatory to use Context. A simple object would be enough. However hook provide a function to change the initial values of the Context.
  const themeHook = useState({
    submitColor: 'darkblue',
    adoptColor: 'red'
  });
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
