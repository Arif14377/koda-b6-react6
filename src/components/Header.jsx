import { RxHamburgerMenu } from "react-icons/rx"
import { CiSearch } from "react-icons/ci"
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import {openModal} from "../lib/handleModal.js";
import {useState} from "react";
import ModalCreatePost from "./ModalCreatePost.jsx";

function Header() {
    const [modal, setModal] = useState("hidden")

    return (
        <>
            <div className="flex justify-between items-center bg-white shadow py-4 px-10 w-full">
                <div className="flex gap-6 items-center">
                    <RxHamburgerMenu size={24} className="text-gray-250"/>
                    <Link to={"/"}>
                        <h1 className="text-3xl font-bold">Medium</h1>
                    </Link>
                    <div className="flex gap-2 bg-gray-100 p-2 rounded-full">
                        <CiSearch size={30}/>
                        <input type="text" placeholder='Search' className="outline-none"/>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <button className="flex gap-2 cursor-pointer" onClick={()=>openModal(setModal)}>
                        <TfiWrite size={20} className="text-gray-500" />
                        <p>Write</p>
                    </button>
                    <IoIosNotificationsOutline size={30}/>
                    <Link to="/dashboard"><CgProfile size={30} /></Link>
                </div>
            </div>
            <ModalCreatePost modal={modal} setModal={setModal}/>
        </>
    )
}

export default Header