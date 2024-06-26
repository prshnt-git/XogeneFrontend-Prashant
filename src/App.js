import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DrugSearch from './components/DrugSearch';
import DrugDetail from './components/DrugDetail';

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/drugs/search" component={DrugSearch}/>
        <Route path="/drugs/:drugName" component={DrugDetail}/>
      </Switch>
    </Router>
  )
}
export default App;
