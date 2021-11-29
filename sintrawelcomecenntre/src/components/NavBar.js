import React, { useEffect, useState } from "react";
import { NavBarData } from "./NavBarData";
import {HashLink} from 'react-router-hash-link';
import $ from 'jquery';
import jqueryDdslick from "ddslick/src/jquery.ddslick";
import styled from "styled-components";
import {GrLanguage} from 'react-icons/gr';

const Dropdown = styled.select`
    width: 50px;
    height: 10px;
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

const NavBar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleChangeLang(lang) {
        props.changeLang(lang)
    }

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
        </nav>
    )
}

export default NavBar