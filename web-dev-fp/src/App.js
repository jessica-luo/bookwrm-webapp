import './App.css';
import $ from 'jquery';
import './vendors/fontawesome/css/all.min.css';
import NavigationComponent from "./components/NavigationComponent";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import LoginScreen from "./components/LoginScreen";
import PrivacyPolicyScreen from "./components/PrivacyPolicyScreen";
import ProfileScreen from "./components/ProfileScreen";
import SearchScreen from "./components/SearchScreen";
import {BrowserRouter, Route} from "react-router-dom";
import RegisterScreen from "./components/RegisterScreen";
import {useState} from "react";
import { useCookies } from "react-cookie";


function App() {
    return (
        <BrowserRouter>
            <Route path={["/", "/home"]} exact={true}> <HomeScreen/> </Route>
            <Route path={["/search"]} exact={true} component={SearchScreen}/>
            <Route path={["/details"]} exact={true} component={DetailsScreen}/>
            <Route path={["/details/:id"]} exact={true} component={DetailsScreen}/>
            <Route path={["/profile/:id", "/profile/:authorized/:id", "/login/:id",  "/login/:authorized/:id"]} exact={true} component={ProfileScreen}/>
            <Route path={["/login"]} exact={true}><LoginScreen/></Route>
            <Route path={["/privacy"]} exact={true} component={PrivacyPolicyScreen}/>
            <Route path={["/register"]} exact={true} component={RegisterScreen}/>
        </BrowserRouter>

    );
}

export default App;
