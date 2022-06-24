import './App.css';
// import EnrollmentForm from './components/EnrollmentForm';
// import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
// import FormikContainer from './components/FormikContainer';
//import NewYouTubeForm from './components/NewYouTubeForm';
// import OldYouTubeForm from './components/OldYouTubeForm';
import {theme, ThemeProvider} from '@chakra-ui/react';

function App() {

  return (

    <ThemeProvider theme={theme}>
        <div className='App'>
          {/* <OldYouTubeForm/> */}
          {/* <NewYouTubeForm/> */}
          {/* <FormikContainer/> */}
           <LoginForm/>
          {/* <RegistrationForm/> */}
          {/* <EnrollmentForm /> */} 
        </div>
    </ThemeProvider>
  );

};

export default App;
