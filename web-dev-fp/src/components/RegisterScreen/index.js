import React, {useState} from "react";
import NavigationComponent from "../NavigationComponent";
import userService from "../../services/userService";
import authorService from "../../services/authorService";
import {useHistory} from "react-router-dom";
import Footer from "../FooterComponent";

const RegisterScreen = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    })

    const registerUser = (user) =>
        userService.registerUser(user)
            .then(state => {
                if (state.message === "User already exists, try logging in") {
                    alert(state.message)
                } else {
                    history.push('/login')
                }
            })

    const registerAuthor = (user) =>
        authorService.registerAuthor(user)
            .then(state => {
                if (state.message === "User already exists, try logging in") {
                    alert(state.message)
                } else {
                    history.push('/login')
                }
            })

    {
        return (
            <>
                <NavigationComponent activeLink={'/login'}/>

                <div className={"container main-container bg-none"}>

                    <h1 className={"mt-5"}>Register</h1>
                    <input value={user.username}
                           onChange={(e) => setUser({
                               ...user,
                               username: e.target.value,
                               password: user.password,
                               email: user.email,
                               firstName: user.firstName,
                               lastName: user.lastName
                           })}
                           placeholder={"username"} className={`form-control mt-1`}/>
                    <input value={user.password}
                           onChange={(e) => setUser({
                               ...user,
                               username: user.username,
                               password:  e.target.value,
                               email: user.email,
                               firstName: user.firstName,
                               lastName: user.lastName
                           })}
                           placeholder={"password"} type={"password"} className={`form-control mt-1`}/>
                    <input value={user.email}
                           onChange={(e) => setUser({
                               ...user,
                               username: user.username,
                               password:  user.password,
                               email: e.target.value,
                               firstName: user.firstName,
                               lastName: user.lastName
                           })}
                           placeholder={"email"} className={`form-control mt-1`}/>
                    <input value={user.firstName}
                           onChange={(e) => setUser({
                               ...user,
                               username: user.username,
                               password:  user.password,
                               email: user.email,
                               firstName: e.target.value,
                               lastName: user.lastName
                           })}
                           placeholder={"first name"} className={`form-control mt-1`}/>
                    <input value={user.lastName}
                           onChange={(e) => setUser({
                               ...user,
                               username: user.username,
                               password:  user.password,
                               email: user.email,
                               firstName: user.firstName,
                               lastName: e.target.value
                           })}
                           placeholder={"last name"} className={`form-control mt-1`}/>
                    <button onClick={() => registerUser(user)}
                            className={`btn btn-success mt-1`}>Register as a Reader
                    </button>

                    <button onClick={() => registerAuthor(user)}
                            className={`btn btn-primary mt-1`}>Register as an Author
                    </button>

                    <p className={"mb-5"}>*Author accounts have different permissions from readers.</p>
                </div>
                <Footer/>
            </>
        )
    }
};

export default RegisterScreen;