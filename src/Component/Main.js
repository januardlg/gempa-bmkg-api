import React, {useEffect, useState} from "react";
import Header from "./Header";
import GempaTerikiniDataAPI from "./GempaTerkiniDataAPI";
import GempaDirasakan from "./GempaDirasakan";
import Login from "./Login";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


function Main(){
    return(
        <div>
            {/* <Header /> */}
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/terkini" component={GempaTerikiniDataAPI} />
                    <Route path="/disarankan" component={GempaDirasakan} />
                    <Redirect to="/login" />
                </Switch>
        </div>
    )
}


export default Main;