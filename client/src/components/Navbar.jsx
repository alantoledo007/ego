//General
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

//components

//UI
import s from '../styles/navbar-ego.module.scss';
import {Container} from 'react-bootstrap';

//code...
function Navbar(){
    return (
        <nav className={s['navbar-ego']}>
            <Link to="/" className={s['navbar-ego-brand']}>
               <img src="/img/logo.svg" alt="Ego - logo" />
            </Link>
            <Container className="mt-auto">
                <ul>
                    <li><NavLink activeClassName={s['active']} exact to="/">Modelos</NavLink></li>
                    <li><NavLink activeClassName={s['active']} to="/ficha-de-modelo" >Ficha de modelo</NavLink></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;