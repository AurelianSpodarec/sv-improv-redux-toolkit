import useModal from "./../../../../src/context/modal/useModal";

function ModalSave({config}:any) {
    const modalContext = useModal()
    const { id, type, title, description, onAction, option } = config;

    console.log(config.onAction)
    function handleAction(e:any) {
        e.preventDefault()
        onAction() //@ts-ignore
        modalContext.close()
    }

    function handleCancel(e:any) {
        e.preventDefault()//@ts-ignore
        modalContext.close()
    }

    return (
        <div>
            <header>

            </header>

            <section>
                {/* inputs from json */}
                <input />
            </section>

            <footer className="modal-confirm__footer">
                <button type="button" className="w-full" onClick={(e) => handleCancel(e)}>
                    Cancel
                </button>
                <button type="button" className="w-full" onClick={(e) => handleAction(e)}>
                    {option ? option : "Create"}
                </button>
            </footer>
        </div>
    )
}

export default ModalSave;