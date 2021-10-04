
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Free from './components/Free/Free';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/free">
            <Free></Free>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/signin">

            <Signin></Signin>
          </Route>
          <Route path="/signup">

            <Signup></Signup>
          </Route>
          <Route path="*">
            <Error></Error>

          </Route>
        </Switch>
        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
