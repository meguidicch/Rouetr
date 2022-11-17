import { useEffect } from "react"
import CardMovies from "./CardMovies"


const ListMovies=({movies,setMovies,textP,brahimP})=>{

    var x = movies.filter(el=> el.title.toUpperCase().includes(textP.toUpperCase()) && el.rating >= brahimP)
    return(
        <div className="brahim">
            {
                
                x.length == 0 ? <h1>Not found</h1> : x.map(el => <CardMovies el={el} movies={movies} setMovies={setMovies}/>)
                
            
            }
        </div>
    )
}
export default ListMovies