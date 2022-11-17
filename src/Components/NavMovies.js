
import { Container , Nav , Navbar} from "react-bootstrap"
import { Link } from "react-router-dom"
const NavMovies =() => {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Navbar">Movie App</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link  as={Link} to='/list'>Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default NavMovies