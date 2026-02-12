import "./Modal.css";

const Modal = ({ children, close }) => {
    return (
        <div className="modal" onClick={close}>
            <div
                className="modal__content"
                onClick={(event) => {
                    event.stopPropagation();
                }}>
                <button onClick={close}> &times; </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
