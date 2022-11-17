import { useParams } from "react-router-dom"

const Description = ({movies}) =>{
    const {id} =useParams()
    const jib = movies.find(el=> el.id == id)
    return(
        <div>
           
           <h1>{jib.title}</h1>
           <img src={jib.posterURL}></img>
           <h2>{jib.description}</h2>    
           <h2>{jib.rating}</h2>
           <iframe width="560" height="315" src={jib.videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
    )
}
export default Description