import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import { Routes } from 'react-router';
import SignIn from './pages/SignIn';
import PublicRoute from './components/PublicRoute';
function App() {
  return (
    <Routes>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <Privateroute path="/">
        <Home />
      </Privateroute>
    </Routes>
  );
}

export default App;
