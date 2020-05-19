import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
//firebase
import firebase from 'firebase/app'
import 'firebase/auth'
//components
import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"
import Error from "./pages/PageNotFound"
import { UserContext } from './Context/UserCotext';
import Footer from "./layout/Footer"
import Header from './layout/Header';
import firebaseconfig from './Config/firebaseconfig';
//init firebase
firebase.initializeApp(firebaseconfig)

const App = () => {
 const [User, setUser] = useState(null)//default value to be null to validate whether user is authenticated or not

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{User,setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
