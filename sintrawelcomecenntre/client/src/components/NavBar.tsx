import React, { useEffect, useState } from "react";
import { NavBarData } from "../utility/text/NavBarData";
import {HashLink} from 'react-router-hash-link';
import styled from "styled-components";
import { Language } from "../utility/types/types";
import Select, { OptionProps, MultiValue, SingleValue, ActionMeta } from 'react-select';
import { valuesText } from "../utility/text/valuesText";

const Dropdown = styled.select`
    width: 50px;
    height: 10px;
`

const HeroNav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: center;
    padding-top: 13px;
    padding-bottom: 13px;
    display: flex;
    align-items: baseline;
    z-index: 100;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        background-color: #333 !important;
        padding-bottom: 50px;
        height: 100vh;
        transition: 0.3s ease-out;
        transform: translateX(-100vw);
        ul{
            flex-direction: column;
            padding-left: 10px;

            li{
                margin-top: 30px;
                margin-left: 27px;
            }
        }
    }
`

const options = [
    { value: '2', label: 'Language' },
    { value: 'pt', label: 'Portuguese'},
    { value: 'en', label: 'English' },
];


type NavBarProps = { 
    language: Language
    changeLang: (lang: Language) => void
}

type CustomOptions = {
    label: string,
    value: string,
}

const NavBar = (props: NavBarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChangeLang = (lang: Language) => {
        props.changeLang(lang)
    }

    const [selectedOption, setSelectedOption] = useState<CustomOptions| null>(options[0]);

    useEffect(() => {

        const menuBtn = document.getElementById("menuButton")

        if(!menuBtn) return console.error("No menu button found")

        const toggleButtonStyle = () => menuOpen ? setMenuOpen(false) : setMenuOpen(true)

        menuBtn && menuBtn.addEventListener('click', toggleButtonStyle)

        const changeNavBgColor = () => {
            const wH = window.innerHeight;
            const nav = document.getElementById('nav');
            const currentH = document.documentElement.scrollTop;
            if(!nav) return;
            if(currentH >= wH) {
                nav.style.backgroundColor = "#333";
            } else {
                nav.style.backgroundColor = 'transparent'
            }
        }

        if(window.innerWidth <= 767) {
            const nav = document.getElementById("nav");
            
             if(!nav) return console.error("No menu found");

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

    const handleChange = (
        newValue: SingleValue<CustomOptions>
    ) => {
        console.log(newValue)
            setSelectedOption(newValue as CustomOptions)
            handleChangeLang(newValue && (newValue.value === 'en' || newValue.value === 'pt') ? newValue.value  : 'en')
    };
   
    return(
        <HeroNav className="hero_nav" id="nav">
            <ul className="hero_nav_ul">
                {NavBarData.map((item, i) => {
                    return (
                        <li key={i}>
                            <HashLink to={item.path} smooth>
                                <span onClick={() => setMenuOpen(false)}>{item[props.language].title}</span>
                            </HashLink>
                        </li>
                    )
                })}
            </ul>
            <div className="hero_nav_dropdown_wrapper">
                <Select
                    options={options} 
                    value={selectedOption}
                    defaultValue={selectedOption}
                    onChange={handleChange}
                    getOptionLabel={(lbl) => lbl.label}
                    getOptionValue={(lbl) => lbl.value}
                />
                {/* <SelectBox
                    onSelect = {handleChangeLang}
                /> */}
            </div>
        </HeroNav>
    )
}

export default NavBar