import React from 'react';
import { Route, Switch } from 'react-router-dom'

//pages
import HomePage from './pages/homapage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
         <Route exact path='/' component={HomePage}/>
         <Route path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
