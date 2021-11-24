import React,{useState} from "react";
import { CardBody, Label, CardTitle } from "reactstrap";

function LoginForm({ Login, error }){
    const [details, setDetails] = useState({email:"", password:""})
    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }

    return (
        <div className="container"> 
           <div className="col-12 col-md-6 offset-md-3">
               <CardBody className="cardbody">
                    <form onSubmit={submitHandler}>
                        <div>
                            <CardTitle className="cardtitle">Login</CardTitle>
                            {(error != "") ? ( 
                                <div className="col-12 info">{error}</div>
                            ): ""}
                            <div className="inputs">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email}></input>
                            </div>
                            <div className="inputs">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}></input>
                            </div>
                            <input className="button" type="submit" value="Login" />
                        </div>
                    </form>
                </CardBody>  
            </div>
        </div>
    )
}

export default LoginForm;