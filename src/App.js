import './App.css';
import Discussion from './containers/Discussion/Discussion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <Discussion />
    </>
  );
}

export default App;
