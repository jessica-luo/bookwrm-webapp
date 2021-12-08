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

function App() {
    return (
        <BrowserRouter>
            <Route path={["/", "/home"]} exact={true} component={HomeScreen}/>
            <Route path={["/search"]} exact={true} component={SearchScreen}/>
            <Route path={["/details"]} exact={true} component={DetailsScreen}/>
            <Route path={["/profile"]} exact={true} component={ProfileScreen}/>
            <Route path={["/login"]} exact={true} component={LoginScreen}/>
            <Route path={["/privacy"]} exact={true} component={PrivacyPolicyScreen}/>
        </BrowserRouter>

    );
}

export default App;