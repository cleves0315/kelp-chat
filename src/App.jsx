import { BrowserRouter, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login" component={loadable(() => import('./containers/Login'))} />
          <Route component={loadable(() => import('./components/NotFound'))} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
