import React,{useEffect} from "react";
import {Nav, Navbar, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Redirect } from "react-router";

function Header(){

    const logOut = () => {
        localStorage.clear();
    }

    useEffect(()=>{
        const dataUser = JSON.parse(
        localStorage.getItem('DataUser') );
        console.log('sudah Login, email:',dataUser);

    },[])
    return(
        <React.Fragment>
            <Navbar>
                <div className="container">
                    <Nav navbar>
                        <NavLink >
                        <Link className="link" to="/terkini"  >Terkini</Link>
                        <Link className="link" to="/disarankan"  >Disarankan</Link>
                        </NavLink>
                    </Nav>
                </div>
                <div className="logout" onClick={logOut}><Link className="link" to="/login" >Logout</Link></div>
            </Navbar>
           
        </React.Fragment>
    )
}

export default Header;