import styleNavbar from './navbar.module.scss'

import { Link } from "react-router-dom";
import logoheader from '../../assets/site-logopng.png'
import { Container } from '../container'
import { Button } from '../standardBTN';

export function Navbar() {
    return (
        <>
            <nav className={styleNavbar.heroNav}>
                <Container>
                    <div className={styleNavbar.navbar}>
                        <Link to='/'>
                            <img src={logoheader} alt="Polar logo of header" />
                        </Link>
                        <div className={styleNavbar.navbar_menus}>
                            <Link className={styleNavbar.navbar_menus__menu} to='/' >home</Link>
                            <Link className={styleNavbar.navbar_menus__menu} to='/products:id'>product</Link>
                            <Link className={styleNavbar.navbar_menus__menu}>pricing</Link>
                            <Link className={styleNavbar.navbar_menus__menu}>testimonials</Link>
                            <Link className={styleNavbar.navbar_menus__menu}>contact us</Link>
                        </div>
                        <Button text='buy now' />
                    </div>
                </Container>
            </nav>
        </>
    )
}