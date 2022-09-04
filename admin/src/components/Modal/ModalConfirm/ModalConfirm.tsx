import { closeModal } from "../../../store/features/modal/modalSlice";
import { useDispatch } from "react-redux";

function ModalConfirm({config}:ModalConfirmProps) {

    const { id, type, title, description, onAction, option } = config;
    const dispatch = useDispatch();
    console.log(config)

    function handleAction(e:any) {
        e.preventDefault()
        onAction()
        closeModal()
    }

    function handleCancel(e:any) {
        e.preventDefault()
        closeModal()
    }

    return (
        <div className="modal-confirm">
        <div className="modal-confirm__inner">
        
            {title && 
            <header className="modal-confirm__header">
                {option && option} <span style={{ fontWeight: "bold"}}>{title}</span>
            </header>        
            }

            <section className="modal-confirm__section">
                {description ? description : "Are you sure you would want to do this?" }
            </section>

            <footer className="modal-confirm__footer">
                <button type="button" className="w-full" onClick={(e) => handleCancel(e)}>
                    Cancel
                </button>
                <button type="button" className="w-full" onClick={(e) => handleAction(e)}>
                    {option ? option : "Delete"}
                </button>
            </footer>
        
        </div>    
        </div>
    )
}

export default ModalConfirm;

interface ModalConfirmProps {
    config: any;
}