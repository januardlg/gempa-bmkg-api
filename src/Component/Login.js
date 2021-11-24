import React, {useState, useEffect} from "react";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router";

function Login(){
    const admin = {
        email:"admin",
        password: "admin"
    }

    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");


    const Login = details => {
        console.log('data before cek',details);
        if(details.email == admin.email && details.password == admin.password){
            console.log("login")
            setUser({
                email: details.email,
            })
            localStorage.setItem('DataUser',JSON.stringify(details.email ))
        } else{
            console.log("data not match")
            setError("Email and Password doesn't match")
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({email: ""})
    }


    return(
        <div>
            {(user.email != "") ? (
                <Redirect to="/terkini" />
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    )
}

export default Login