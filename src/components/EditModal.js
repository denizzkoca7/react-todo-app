import { useState, useEffect } from 'react'
import { Form, FormControl, FormLabel, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

const EditModal = ({ List, setList, item, setModalItem, showEdit, handleCloseEdit, onHide, }) => {

    const [task, setTask] = useState({})

    useEffect(() => {
        setTask(item)

    }, [item])


    const onInputChange = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const ListItemTemp = [];

        List.map((newitem) => {

            if (
                newitem.id === task.id

            ) {
                newitem = { ...newitem, name: task.name, body: task.body }

                ListItemTemp.push(newitem)

            }
            else {
                ListItemTemp.push(newitem)
            }

        })
        console.log(ListItemTemp)
        setList(ListItemTemp);
        onHide();
    }


    return (
        <>
            <Modal
                show={showEdit}
                onHide={handleCloseEdit}
            >
                <Form onSubmit={handleSubmit}>
                    <ModalHeader closeButton>
                        <ModalTitle>Edit Task</ModalTitle>
                    </ModalHeader>
                    <ModalBody>

                        <FormLabel>Name</FormLabel>

                        <FormControl
                            type="text"
                            value={task.name}
                            name="name"
                            onChange={onInputChange}
                        />

                        <FormLabel>Body</FormLabel>

                        <FormControl
                            type="text"
                            value={task.body}
                            name="body"
                            onChange={onInputChange}
                        />

                    </ModalBody>
                    <ModalFooter>
                        <button type="submit"  class="btn btn-danger">Edit</button>

                    </ModalFooter>
                </Form>
            </Modal>

            <style jsx> {
                `
                .form-control{
                    color:#d3d6d8
                }
                `
            }</style>
        </>
    )
}

export default EditModal
