import ArticleItem from "../components/Article-Item"
import Header from "../components/Header"

function Home(props) {    
    const {data} = props
    return (
        <div>
            <Header />
            <div className="main-articles flex flex-col justify-center items-center px-auto">
                {data.map((item) => (
                    <ArticleItem key={item.id} data={item}/>
                ))}
            </div>
        </div>
    )
}

export default Home