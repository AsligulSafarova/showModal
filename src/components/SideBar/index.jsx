import React, { useState, useContext } from 'react';
import { links, social } from "../../data/data";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../logo.svg";
import { IoCloseSharp } from "react-icons/io5";
import { Context } from '../../context';
import "./style.module.scss"


export default function SideBar() {
    const [link, setLink] = useState(links);
    const [socials, setSocials] = useState(social);
    const { openSideBar, sideBar } = useContext(Context);
    return (
        <>

            <RxHamburgerMenu className={sideBar ? "hiden" : "burger"} onClick={openSideBar} />
            {sideBar &&
                <div className="container" >
                    <div className="container__imgs">
                        <img src={logo} alt="logo" />
                        <IoCloseSharp className="container__imgs-close" onClick={openSideBar} />
                    </div>
                    <div className="container__items">
                        {
                            link.map(elem => <div key={elem.id} >
                                <div className='container__items-item'> <span className='container__items-item--span'> {elem.icon} </span>{elem.text}</div>
                            </div>)
                        }
                    </div>
                    <div className="container__icons">
                        {
                            socials.map(elem => (<div key={elem.id}>
                                <h1>{elem.icon}</h1>
                            </div>))
                        }
                    </div>
                </div>
            }
        </>
    )
}
