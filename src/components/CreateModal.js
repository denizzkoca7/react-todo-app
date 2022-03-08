import { useState, useEffect } from 'react'
import { Form, FormControl, FormLabel, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

const CreateModal = ({ show, item, handleClose, List, setList, onHide }) => {

    const [task, setTask] = useState({})

    useEffect(() => {
        setTask(item)
    }, [item])


    const onInputChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = task.name
        const body = task.body
        const newItem = { name: name, body: body }
        const ListItemTemp = []
        ListItemTemp.push(newItem);
        setList(task => [newItem, ...task]);
        console.log(ListItemTemp);

        onHide();
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
        >
            <Form onSubmit={handleSubmit}>
                <ModalHeader closeButton>
                    <ModalTitle>Create Task</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <FormLabel>Name</FormLabel>

                    <FormControl
                        className="mt-2"
                        type="text"
                        name="name"
                        onChange={onInputChange}
                    />

                    <FormLabel>Body</FormLabel>

                    <FormControl
                        className="mt-2"
                        type="text"
                        name="body"
                        onChange={onInputChange}
                    />

                </ModalBody>
                <ModalFooter>
                    <button type="submit" class="btn btn-danger">Create</button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}

export default CreateModal
