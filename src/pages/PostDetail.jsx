import { useParams } from "react-router-dom"
import Header from "../components/Header"

function PostDetail() {
    const {userName, slug} = useParams()
    return (
        <div>
            <Header/>
        </div>
    )
}

export default PostDetail