import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../src/components/Layout/Header/Header";
import Footer from "../src/components/Layout/Header/Footer";
import Alert from "../src/components/Layout/Header/alert";
import LawyersCards from "../src/components/Lawyers/LawyersCards";
import LawyerItem from "../src/components/Lawyers/LawyerItem";
import FlipCard from "../src/components/Cards/FlipCard";
import Register from '../src/components/auth/Regiester';
import Dashboard from '../src/components/Dashboard/Dashboard';
import LawyerList from '../src/components/Lawyers/LawyersList';
import Login from '../src/components/auth/Login';
import UsersList from './components/admin/users/UsersList';
import LawyerRegiester from './components/admin/lawyers/LawyerRegiester';
import LawyerCreateProfile from './components/admin/lawyers/LawyerCreateProfile';
import LawyerEditProfile from './components/admin/lawyers/LawyerEditProfile';
import LawyerDashboard from './components/admin/lawyers/LawyerDashboard';
import AdminEditLawyer from './components/admin/lawyers/AdminEditLawyer';
import LawyersTable from './components/admin/lawyers/LawyersTable';
import UserTable from './components/admin/users/UserTable';
import UserItem from './components/admin/users/UserItem';
import PageNotFound from './components/general/PageNotFound';
import setAuthToken from './utills/setAuthToken';
import { loadUser } from './actions/auth'

//redux
import { Provider } from "react-redux";
import store from "./store";


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(()=> {
    store.dispatch(loadUser());
  },[]);

  return (
    <Provider store={store}>
      <Router>
      <Fragment>
        <Header />
        <Route exact path="/" component={FlipCard} />
        <section className="App">
          <Alert />
          <Switch>
            <Route exact path="/admineditlawyer/:id" component={AdminEditLawyer} />
            <Route exact path="/lawyeritem/:id" component={LawyerItem} />
            <Route exact path="/lawyerregiester" component={LawyerRegiester} />
            <Route exact path="/usertable" component={UserTable} />
            <Route exact path="/lawyerstable" component={LawyersTable} />
            <Route exact path="/userslist" component={UsersList} />
            <Route exact path="/usersitem" component={UserItem} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/lawyerList" component={LawyerList} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/lawyercreateprofile" component={LawyerCreateProfile} />
            <Route exact path="/lawyereditprofile" component={LawyerEditProfile} />
            <Route exact path="/lawyerdashboard" component={LawyerDashboard} />
          </Switch>
        </section>
        <Route exact path="/" component={LawyersCards} />
        <Footer  />
    </Fragment>
      </Router>
    </Provider>
  );
};


export default App;
