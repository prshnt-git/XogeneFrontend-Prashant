import DrugSearch from './components/DrugSearch';
import DrugDetail from './components/DrugDetail';

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/drugs/search" component={DrugSearch}/>
        <Route path="/drugs/:drugName" component={DrugSearch}/>
      </Switch>
    </Router>
  )
}
export default App;
