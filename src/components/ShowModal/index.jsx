import React, { useContext } from 'react';
import "./style.module.scss";
import { Context } from '../../context';
import { IoCloseSharp } from "react-icons/io5";

export default function ShowModal() {
    const { openModal, showModal } = useContext(Context)
    return (
        <>
            <div className={showModal ? "module__active" : "module"} >
                {
                    !showModal && <button className='module__button' onClick={openModal}> Show Modal</button>
                }
                {
                    showModal && <div className="module__boxes">
                        <div className="module__boxes__box">
                            <h1>Modal Content</h1>
                            <div className="module__boxes__box--close">
                                <IoCloseSharp onClick={openModal} />
                            </div>
                        </div>


                    </div>
                }

            </div>
        </>
    )
}
