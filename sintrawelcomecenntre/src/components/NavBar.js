import React, { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';

const NavBar = (props) => {

    const [currentLang, setCurrentLang] = useState("");

    return(
        <nav className = "hero_nav">
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