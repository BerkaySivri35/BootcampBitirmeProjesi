import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import { HomePage } from './pages/Home';
import Checkout2 from './pages/Checkout2';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />

      <Route path="/satinalma" exact component={Checkout} />

      <Route path="/tamamlandi" exact component={Checkout2} />
      
    </Switch>
  </BrowserRouter>
);

export default App;