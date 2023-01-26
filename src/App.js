import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

//Components
import Messanger from './components/Messanger';
import AccountProvider from './context/AccountProvider';

const App = () => {
  const clientId='156519075679-bmi2fu02rf8ol34ls6ak5o2edvopgn13.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
       <Messanger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
