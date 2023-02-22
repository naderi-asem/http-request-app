import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Layout from './Layout/Layout';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Layout>
        <Switch>
          {routes.map(route => (
            <Route
              to={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
