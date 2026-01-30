import { RxHamburgerMenu } from "react-icons/rx"
import { CiSearch } from "react-icons/ci"
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Header() {
    return (
        <div className="flex justify-between items-center bg-white shadow py-4 px-10">
            <div className="flex gap-6 items-center">
                <RxHamburgerMenu size={24} className="text-gray-250"/>
                <h1 className="text-3xl font-bold">Medium</h1>
                <div className="flex gap-2 bg-gray-100 p-2 rounded-full">
                    <CiSearch size={30}/>
                    <input type="text" placeholder='Search' className="outline-none"/>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <Link to={"/"} className="flex gap-2">
                    <TfiWrite size={20} className="text-gray-500"/>
                    <p>Write</p>
                </Link>
                <IoIosNotificationsOutline size={30}/>
                <CgProfile size={30} />
            </div>
        </div>
    )
}

export default Header