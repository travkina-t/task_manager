import { useState } from "react";
import Modal from "../ui/Modal/Modal";
import Form from "./Form/Form";

const Header = ({setTasks}) => {

    const [showForm, setShowForm] = useState(false)


    const closeModal = () => {
     
        setShowForm(false)
    }
    return (
        <div>
            <h1>Task manager</h1>
            
            <button onClick={()=> {
                setShowForm(true)
            }}>+Add Task</button>

            {showForm ? <Modal close={closeModal}>
                <Form setTasks={setTasks} closeModal={closeModal}/>
            </Modal> : ""}
        </div>
    );
};

export default Header;
