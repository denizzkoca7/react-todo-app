import { Modal, ModalBody, ModalFooter } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'



const DeleteModal = ({ List, setList, item, showDelete, handleCloseDelete, onHide }) => {

    const handleRemove = (id) => {
        const newList = List.filter((item) => item.id !== id);
        setList(newList);
        onHide();
    }

    return (
        <>

            <Modal
                show={showDelete}
                onHide={handleCloseDelete}
            >
                <ModalHeader>
                    <h3>Delete Task</h3>
                </ModalHeader>
                <ModalBody>
                    <p>Are You Sure You Want Delete This Task?</p>
                    <span style={{ color: "#e55039" }}> {item.name}</span>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={() => handleRemove(item.id)} > DELETE </button>
                    <button className="btn btn-dark" onClick={handleCloseDelete} >CANCEL</button>
                </ModalFooter>
            </Modal>



        </>
    )

}

export default DeleteModal
