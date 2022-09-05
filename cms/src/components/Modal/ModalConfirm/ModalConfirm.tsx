import useModal from "./../../../../src/context/modal/useModal";

function ModalConfirm({config}:ModalConfirmProps) {
    const modalContext = useModal()
    const { id, type, title, description, onAction, option } = config;

    function handleAction(e:any) {
        e.preventDefault()//@ts-ignore
        onAction() //@ts-ignore
        modalContext.close()
    }

    function handleCancel(e:any) {
        e.preventDefault()//@ts-ignore
        modalContext.close()
    }

    
    return (
        <div className="w-[340px] my-0 mx-auto text-center bg-[#1f2937] p-1 radius-md">
        <div>
        
            {title && 
            <header>
                {option && option} <span style={{ fontWeight: "bold"}}>{title}</span>
            </header>        
            }

            <section className="p-4">
                <span className="text-white">{description ? description : "Are you sure you would want to do this?" }</span>
            </section>

            <footer className="flex justify-between">
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