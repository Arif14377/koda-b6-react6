import Header from "../components/Header.jsx"
import { Link } from "react-router-dom"

function Dashboard () {
    const data = JSON.parse(localStorage.getItem("data"))

    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <Header/>
            <div className="flex flex-col gap-10 w-3/5">
                <div>
                    <h1 className="text-4xl font-bold ">Dashboard</h1>
                    <p>My post list</p>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    {
                        data.map(item => {
                            return (
                                <Link to={`/@my-post-${data.id}/${data.slug}`} key={item.id} className="flex gap-2 h-25 p-2 border border-gray-400 rounded">
                                    <img src={item.image} alt={item.title} className="w-30 object-cover"/>
                                    <div className="flex flex-col">
                                        <h2>{item.title}</h2>
                                        <p>{item.content}</p>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard