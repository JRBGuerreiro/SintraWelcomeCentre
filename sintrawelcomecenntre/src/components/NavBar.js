import React, { useEffect, useState } from "react";
import ReactFlagsSelect from 'react-flags-select';
import { NavBarData } from "./NavBarData";
import {HashLink} from 'react-router-hash-link' 

const NavBar = (props) => {

    const [currentLang, setCurrentLang] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const menuBtn = document.getElementById("menuButton")

        const toggleButtonStyle = () => menuOpen ? setMenuOpen(false) : setMenuOpen(true)

        menuBtn && menuBtn.addEventListener('click', toggleButtonStyle)

        const changeNavBgColor = () => {
            const wH = window.innerHeight;
            const nav = document.getElementById('nav');
            const currentH = document.documentElement.scrollTop;
            if(!nav) return;
            if(currentH >= wH) {
                nav.style.backgroundColor = "#424e54";
            } else {
                nav.style.backgroundColor = 'transparent'
            }
        }

        if(window.innerWidth <= 767) {
            const nav = document.getElementById("nav");

            nav && menuOpen ? nav.style.transform = 'translateX(0vw)' : nav.style.transform = 'translateX(-100vw)'
            menuOpen ? menuBtn.classList.add('open') : menuBtn.classList.remove('open')
        } else {
            window.addEventListener("scroll", changeNavBgColor)
        }


        return(() => {
            window.removeEventListener('scroll', changeNavBgColor);
            menuBtn.removeEventListener('click', toggleButtonStyle);
        })
    }, [menuOpen])
   

    return(
        <nav className = "hero_nav" id="nav">
            <ul className="hero_nav_ul">
                {NavBarData.map((item, index) => {
                    return (
                        <li key={index}>
                            <HashLink to={item.path} smooth>
                                <span onClick={() => setMenuOpen(false)}>{item.title}</span>
                            </HashLink>
                        </li>
                    )
                })}
            </ul>
            <div className="hero_nav_dropdown_wrapper">
                <ReactFlagsSelect
                    className="hero_nav_dropdown"
                    countries={["PT", "GB"]}
                    selected={currentLang}
                    onSelect = {(country) => {
                        setCurrentLang(country);
                        props.changeLang(country)
                    }}
                />
            </div>
        </nav>
    )
}

export default NavBar