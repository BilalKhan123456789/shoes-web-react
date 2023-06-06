import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../Images/logo.png'
import { BsSearch } from 'react-icons/bs';




function Home() {
  return (
    < >
      <div>
        <Navbar bg="smoke" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><Link to="/"><img src={Images} alt="" style={{ height: "40px" }} /></Link></Navbar.Brand>
      

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
           


               
              <Nav className="me-auto my-2 my-lg-0"style={{  display:"flex",justifyContent:"end",marginLeft:"700px" }} navbarScroll>
                <Nav.Link href="#action1" ><Link to="/" style={{ textDecoration: "none", color: "black"   }}><BsSearch/></Link></Nav.Link>
                <Nav.Link href="#action2"><Link to="/gallery" style={{ textDecoration: "none", color: "black" }}>WishList</Link></Nav.Link>
                <Nav.Link href="#" ><Link to="/service" style={{ textDecoration: "none", color: "black" }}>Cart</Link></Nav.Link>
                <Nav.Link href="#action2"><Link to="/about" style={{ textDecoration: "none", color: "black" }}>Account</Link></Nav.Link>


              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

    </>
  );
}

export default Home;