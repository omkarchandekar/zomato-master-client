import './App.css';
import React, {useEffect} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Navigate, Route, Routes} from 'react-router-dom';

// import HOC
import HomeLayoutHoc from './HOC/Home.hoc';
import RestaurantLayoutHoc from './HOC/Restaurant.hoc';
import CheckoutLayoutHoc from './HOC/Checkout.hoc';

// import pages
import HomePage from './pages/HomePage';
// import RestaurantPage from './pages/RestaurantPage';
import Checkout from './pages/CheckoutPage';
import GoogleAuth from './pages/GoogleAuth';

// import components
import Overview from './components/Restaurant/Overview';
import OrderOnline from './components/Restaurant/OrderOnline';
import Reviews from './components/Restaurant/Reviews/Reviews';
import Menu from './components/Restaurant/Menu/Menu';
import Photos from './components/Restaurant/Photos/Photos';
import Redirect from './pages/Restaurant/Redirect';

// Redux
import {useDispatch} from 'react-redux';
import {getMySelf} from './redux/reducers/user/user.action';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMySelf());
  },[localStorage]);

  return <>
    <Routes>
      <Route path="/" exact element={<Navigate to="/delivery" />}>
      </Route>
    </Routes>
    <HomeLayoutHoc path="/:type" exact component={HomePage} />
    <HomeLayoutHoc path="/google/:token" exact component={GoogleAuth} />
    <RestaurantLayoutHoc path="/restaurant/:id" exact component={Redirect} />
    <RestaurantLayoutHoc path="/restaurant/:id/overview" exact component={Overview} />
    <RestaurantLayoutHoc path="/restaurant/:id/order-online" exact component={OrderOnline} />
    <RestaurantLayoutHoc path="/restaurant/:id/reviews" exact component={Reviews} />
    <RestaurantLayoutHoc path="/restaurant/:id/menu" exact component={Menu} />
    <RestaurantLayoutHoc path="/restaurant/:id/photos" exact component={Photos} />
    <CheckoutLayoutHoc path="/checkout/orders" exact component={Checkout} />
  </>
}

export default App;
