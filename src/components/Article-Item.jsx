import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { MdVerified } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import { PiHandsClappingFill } from "react-icons/pi";
import { FaComment } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";

function ArticleItem(props) {
    const {data} = props
    return (
        <div className="article-item flex flex-col">
            <div className="flex justify-between gap-4 p-4 w-2xl">
                <div className="desc-article flex flex-col gap-4 w-3/4">
                    <div className="flex items-center gap-2">
                        <CgProfile size={20} />
                        <p className="text-xs font-medium">{data.author}</p>
                        <MdVerified size={14}/>
                    </div>
                    <div className="flex flex-col">
                        <Link to={`/@${data.userName}/${data.slug}`}>
                            <h2 className="font-extrabold text-4xl">{data.title}</h2>
                            <p className="text-gray-600">{data['sub-title']}</p>
                        </Link>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm font-normal text-gray-600 gap-4 [&>div]:flex [&>div]:items-center [&>div]:gap-2">
                            <PiStarFourFill size={15} className="text-yellow-300" />
                            <p>Sep 15, 2025</p>
                            <div>
                                <PiHandsClappingFill size={15} className="text-gray-600"/>
                                <p>21K</p>
                            </div>
                            <div>
                                <FaComment size={15} className="text-gray-600"/>
                                <p>21K</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-gray-500">
                            <CiCircleMinus size={25} />
                            <MdOutlineBookmarkAdd size={25} />
                            <FaEllipsisH size={25} />
                        </div>
                    </div>
                </div>
                <div className="image-article w-1/4">
                    <img src="https://placehold.co/160x146/png" alt="" />
                </div>
            </div>
            <div className="w-full border border-gray-300"></div>
        </div>
    )
}

export default ArticleItem