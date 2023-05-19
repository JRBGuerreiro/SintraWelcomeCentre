import React, { useEffect, useState } from "react";
import { NavBarData } from "../utility/text/NavBarData";
import {HashLink} from 'react-router-hash-link';
import $ from 'jquery';
import jqueryDdslick from "ddslick/src/jquery.ddslick";
import styled from "styled-components";
import { Language } from "../utility/types/types";

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

const SelectBox = ({onSelect}) => {
    useEffect(() => {
        $('#myDropdown').ddslick({
            onSelected: function(selectedData){
                if(selectedData.selectedData.value === "2") return;
                onSelect(selectedData.selectedData.value)
            }   
        });
    }, [onSelect])

    return(
        <Dropdown id="myDropdown" style={{color: 'red'}}> 
            <option value="2" disabled selected="selected" data-imagesrc="./images/Flags/world.png"
            data-description="">LinkedIn</option>
            <option value="pt" data-imagesrc="./images/Flags/portugal-flag-small.png"
            data-description="">Facebook</option>
            <option value="en" data-imagesrc="./images/Flags/united-kingdom.png"
            data-description="">Twitter</option>
        </Dropdown>
    )
}

type NavBarProps = { 
    language: Language
    changeLang: (lang: Language) => void
 }

const NavBar = (props: NavBarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChangeLang = (lang: Language) => {
        props.changeLang(lang)
    }

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
                <SelectBox
                    onSelect = {handleChangeLang}
                />
            </div>
        </HeroNav>
    )
}

export default NavBar