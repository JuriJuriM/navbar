import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-4'>
        <Switch>
          <Route path={'/about'} exact ><About /></Route>
          <Route path={'/'} exact ><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
