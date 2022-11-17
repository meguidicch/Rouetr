
import { Rating } from "@mui/material"
import { Button,Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
import EditMovies from "./EditMovies"

const CardMovies=({el,movies,setMovies})=>{
  const handleDelete=(a)=> setMovies(movies.filter(el => el.id != a))
    return(
        <div className="asma">
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={el.posterURL} />
        <Card.Body>
          <Card.Title><Link to={`/list/${el.id}`}>{el.title}</Link></Card.Title>
          <Card.Text>
            {el.description}
          </Card.Text>
          <Card.Text>
          <Rating name="read-only" value={el.rating} readOnly />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          
          <EditMovies el={el} movies={movies} setMovies={setMovies}/>
          <Button onClick={()=>handleDelete(el.id)} variant="primary">Delete</Button>


        </Card.Body>
      </Card>
        </div>
    )
}
export default CardMovies