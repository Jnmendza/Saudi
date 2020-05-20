import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './App.css';
import SellerPage from './components/Seller/SellerPage';
import PrivateRoute from "./components/PrivateRoute";
import HomePage from './components/HomePage';
import ItemCard from './components/ItemCard';
import SignUp from './components/SignUp'
import InventoryList from './components/InventoryList';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/seller-page" component={SellerPage} />
          <Route path="/item/:id" component={ItemCard} />
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/inventory-list' component={InventoryList}/>
          <Route path='/login' component={Login}/>
          <Route path='/sign-up' render={props => <signupForm {...props} />} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
