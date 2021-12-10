import React from "react";
import NavigationComponent from "../NavigationComponent";
import {Link} from "react-router-dom";

export default class LoginScreen extends React.Component {

    credentials = {
        username: '',
        password: ''
    }

    loginUser = (credentials) =>
        console.log(credentials)

    //.then(userCredentials => this.props.history.push('/home'))

    render() {
        return (
            <>
                <NavigationComponent activeLink={'/login'}/>
                <h1>Login Page</h1>

                <div className={"container main-container bg-none"}>
                    <h1 className={"mt-5"}>Login</h1>
                    <input
                        value={this.credentials.username}
                        onChange={(e) => this.setState({
                            username: e.target.value
                        })}
                        placeholder={"user"} className={`form-control mt-1`}/>
                    <input placeholder={"password"} type={"password"} className={`form-control mt-1`}/>
                    <button className={`btn btn-success mt-1`}>Login as Reader</button>
                    <button className={`btn btn-primary mt-1`}>Login as Author</button>

                    <br/>

                    <h2 className={"mt-5"}>New User?</h2>
                    <Link to="/register">
                        <button className={`btn btn-secondary mt-1`}>Register</button>
                    </Link>
                </div>
            </>
        )
    }
};