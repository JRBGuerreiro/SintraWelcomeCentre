import React, { useEffect, useState } from "react";
import ReactFlagsSelect from 'react-flags-select';

const NavBar = (props) => {

    const [currentLang, setCurrentLang] = useState("");

    useEffect(() => {
        const changeNavBgColor = () => {
            const wH = window.innerHeight;
            const nav = document.getElementById('nav');
            const currentH = document.documentElement.scrollTop;
    
            if(currentH >= wH) {
                nav.style.backgroundColor = "#424e54";
            } else {
                nav.style.backgroundColor = 'transparent'
            }
        }
        window.addEventListener("scroll", changeNavBgColor)

        return(() => {
            window.removeEventListener('scroll', changeNavBgColor);
        })
    }, [])
   

    return(
        <nav className = "hero_nav" id="nav">
            <ul className="hero_nav_ul">
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Quem Somos</li>
                <li>Contact Us</li>
            </ul>
            <div className="hero_nav_dropdown_wrapper">
                <ReactFlagsSelect
                    className="hero_nav_dropdown"
                    countries={["PT", "GB", "FR", "SP"]}
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