import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './Footer';
import Orders from './Orders';

const promise = loadStripe('pk_test_51HXvQcGy0fqgonWmnVyCsNwSQXrxpJgVfuEQpEgkRxcvuqENlJUpzdy0y3IkYLdYJ80DajqQYY0ngdKfmuyzsVkJ00Gr1R7uGB');

function App () {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>>' , authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    
    <Router>
      <div className="app">
      <Header/>
      
        <Switch>

        <Route path="/orders">
          <Orders/>
         
        </Route>

        <Route path="/login">
          <Login />
          <Footer/>
        </Route>

          <Route path="/checkout">
            <Checkout />
           
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer/>
          </Route>

          <Route path="/">
            <Home />
            <Footer/>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
