import Modal from 'react-bootstrap/Modal';
import {getFunc,postFunc} from "./Backenddata";

import {useFormik,FormikProvider } from 'formik';
import { Field, Form, Formik, FormikProps } from 'formik';
import Button from 'react-bootstrap/Button';

const DeleteModel = ({show,handleClose,handleDelete}) => {
    return (
<Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Fill the Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            Are you sure you want to delete?
        </Modal.Body>
      <Modal.Footer>
        
        <Button variant="primary"  onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary"  onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
    )
}

export default DeleteModel;