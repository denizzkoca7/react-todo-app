import DeleteModal from "./DeleteModal"
import { useState } from "react";
import EditModal from "./EditModal";
import data from '../data.json'
import CreateModal from "./CreateModal";

const Cards = ({ show, handleClose, setShow }) => {

    const [List, setList] = useState(data)
    const [modalItem, setModalItem] = useState({})

    //Delete Modal

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (item) => {
        setShowDelete(true);
        setModalItem(item)

    }

    //Edit Modal

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (item) => {
        setShowEdit(true)
        setModalItem(item)

    };

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]




    return (
        <>
            {List.map((item, index) => (
                <>
                    <div className="col-lg-4 p-2 col-md-4">
                        <div className="card p-3" style={{ "backgroundColor": colors[index % 5].primaryColor }}>
                            <div className="text">
                                <div className="name">{item.name}</div>
                                <div className="body mt-4">{item.body}</div>
                            </div>
                            <div className="actions">
                                <button style={{ "backgroundColor": colors[index % 5].primaryColor }} title="edit" onClick={() => handleShowEdit(item)} ><i className="fas fa-edit"></i></button>
                                <button style={{ "backgroundColor": colors[index % 5].primaryColor }} title="delete" onClick={() => handleShowDelete(item)}><i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>

                </>
            ))}
            <CreateModal show={show} handleClose={handleClose} List={List} setList={setList} onHide={() => handleClose(false)} />
            <EditModal data={data} setModalItem={setModalItem} onHide={() => handleCloseEdit(false)} List={List} setList={setList} item={modalItem} showEdit={showEdit} handleCloseEdit={handleCloseEdit} />
            <DeleteModal onHide={() => handleCloseDelete(false)} List={List} setList={setList} item={modalItem} showDelete={showDelete} handleCloseDelete={handleCloseDelete}></DeleteModal>
           
           
            <style jsx>
                {
                    `
                    .card{
                       border:2px solid  #2d3436;
                       height:240px;
                       position:relative;
                       overflow:hidden

                    }

                    .name{
                        font-size: 20px;
                        font-weight:bold;

                    }
                    .body{
                        font-size:16px;
                        color:#636e72;

                    }
                    .actions{
                        margin-top:20px;
                        text-align:end;
                        position:absolute;
                        bottom:0;
                        right:0
                    }
                    .actions button {
                        background-color:#ffff;
                        border:none;
                    }
                    .actions button i {
                        margin:10px;
                        color:#2d3436;
                        cursor:pointer;
                    }
                     @media screen and (max-width: 767px) {
                         .col-lg-4{
                             width:100%
                         }
                     }
                                             
                    `
                }
            </style>

        </>
    )
}

export default Cards
