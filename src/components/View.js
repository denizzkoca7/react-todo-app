import { useState } from 'react'
import Cards from './Cards'


const View = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>

            <header className="d-flex pt-3 flex-column align-items-center bg-danger">
                <h3 className="text-center text-white">Todo List</h3>
                <button className="btn btn-dark mt-3 mb-3" onClick={handleShow}>Create Task</button>
            </header>
            <div className="container d-flex flex-wrap mt-5">
                <Cards show={show} handleClose={handleClose} setShow={setShow} />
            </div>




            <style jsx>
                {
                    `
                    header h3 {
                        font-size:34px;
                        letter-spacing:2px;
                    }
                    `
                }
            </style>
        </>
    )
}

export default View;
