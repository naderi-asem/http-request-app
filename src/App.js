import './App.css';
import Discussion from './containers/Discussion/Discussion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navigation />
      <Discussion />
      <Switch>
        {routes.map(route => (
          <Route
            to={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
