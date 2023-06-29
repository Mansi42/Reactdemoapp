

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ShowModal({Show,handleclose,ageOnChange,roleOnChange,nameOnChange,formSubmit}) {
 

 
 
 

  return (
  
    <>
      

      <Modal show={Show} onHide={handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
         
         <input type="text"   id="name" placeholder='Enter your name' onChange={nameOnChange}></input><br></br>

         <input type="Number"  id="age" placeholder='Enter your age' onChange={ageOnChange}></input><br></br>

         <input type="text"  id="role" placeholder='Enter your role' onChange={roleOnChange}></input>

         <Button type="submit" onClick={(e)=>formSubmit(e)}>submit</Button>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button type="submit" onClick={(e)=>formSubmit(e)}>submit</Button> */}
          <Button variant="secondary" onClick={handleclose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleclose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowModal;