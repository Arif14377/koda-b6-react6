import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { PiStarFourFill } from "react-icons/pi";

function PostDetail(props) {
    const {data} = props
    const {userName, slug} = useParams()

    const dataTampil = data.find(el => el.userName === userName.slice(1) && el.slug === slug)
    console.log(dataTampil)

    return (
        <div className="flex flex-col">
            <Header/>
            <div className="flex flex-col px-auto mx-auto w-3/5 py-8 gap-8">
                <div className="flex gap-2 items-center text-sm border rounded-md w-fit text-gray-300 p-1">
                    <PiStarFourFill className="text-yellow-400"/>
                    <p className="text-gray-500 text-md">Member-only story</p>
                </div>
                <h1 className="text-5xl font-extrabold">{dataTampil.title}</h1>
                <p>{dataTampil.subTitle}</p>
            </div>
        </div>
    )
}

export default PostDetail