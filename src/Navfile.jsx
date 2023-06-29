import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav  } from 'react-bootstrap';  
import NewFormik from './Newformik';
import './navbar.css';

function Navfile() {  
  return (  
    <>  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
        <Container>  

          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
             <NavLink  to='./Home'>HOME</NavLink>&nbsp;&nbsp;&nbsp;
             <NavLink to='./Users'>USERS</NavLink>&nbsp;&nbsp;&nbsp;
             {/* <NavLink to='./NewFormik>'>USERS LIST</NavLink> */}
             
              {/* <Nav.Link href="./NewFormik"></Nav.Link>   */}
            </Nav>   
          </Navbar.Collapse>  
        </Container>  
      </Navbar> 
       
    </>  
  );  
}  
 


export default Navfile;