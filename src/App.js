import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SingleService from "./components/ServicesContainer/SingleService/SingleService";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServicesSelected from "./components/SelectedServices/ServicesSelected";
import SelectService from "./components/selectedService/selectService";
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder";
import AboutUS from "./components/pages/Aboutus/AboutUS";
import Contact from "./components/pages/Contact/Contact";
import NotFound from "./components/pages/NotFound/NotFound";
import FormContainer from "./components/FromContainer/FormContainer";
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services/service/:id">
            <SingleService></SingleService>
          </PrivateRoute>
          <Route path="/selected-services">
            <ServicesSelected></ServicesSelected>
          </Route>
          <Route path="/aboutus">
            <AboutUS></AboutUS>
          </Route>
          <Route path="/contactus">
            <Contact></Contact>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Signup></Signup>
          </Route>
          <Route path="/form">
            <FormContainer></FormContainer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
