import React, { Fragment, useEffect, useState } from 'react'
import Logo from '../../assets/images/Logo.png';
import styles from './Navbar.module.css';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FormattedMessage } from 'react-intl';
import { IoLanguageSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const lang = localStorage.getItem("lang") || "ltr";

    const [theme, settheme] = useState(localStorage.getItem("theme") ?? "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);


    const handleMode = () => {
        settheme(theme === "dark" ? "light" : "dark");
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    };

    const handleLang = () => {
        if (lang == "ltr") {
            localStorage.setItem("lang", "rtl");
        } else {
            localStorage.setItem("lang", "ltr");
        }
        window.location.reload();
    }

    return (
        <Fragment>
            <div className='flex items-center justify-between p-5 bg-white dark:bg-gray-800'>
                <div className={`flex items-center gap-3 w-[120px] h-[50px]`}>
                    <img src={Logo} alt="Logo" className='w-full h-full' />
                </div>
                <div className="flex items-center gap-4 text-lg">
                    <Link to={"/"} className='dark:text-white hidden md:block'><FormattedMessage id='homePage' /></Link>
                    <a href="#" className='dark:text-white hidden md:block'><FormattedMessage id='whoAreWe' /></a>
                    <a href="#" className='dark:text-white hidden md:block'><FormattedMessage id='contact' /></a>
                    <a href="#" className='dark:text-white hidden md:block'><FormattedMessage id='support' /></a>
                    <a href="#" className='dark:text-white hidden md:block'><FormattedMessage id='operatingNumbers' /></a>
                    <a href="#" className='dark:text-white hidden md:block'><FormattedMessage id='privacyPolicy' /></a>
                </div>
                <div className="flex items-center gap-3">
                    <span className='cursor-pointer dark:text-white' onClick={handleMode}>{theme == "dark" ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}</span>
                    <span className='cursor-pointer dark:text-white' onClick={handleLang} ><IoLanguageSharp size={20} /></span>
                </div>
            </div>
        </Fragment>
    )
}
