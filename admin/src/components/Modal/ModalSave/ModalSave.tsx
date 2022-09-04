import CreateModal from "../CreateModal";

function ModalSave({children}:any) {


    return (
        <CreateModal>
            <header>

            </header>

            <section>
                {/* inputs from json */}
                <input />
            </section>

            <footer>
                <button type="button">Cancel</button>
                <button type="button">Save</button>
            </footer>
        </CreateModal>
    )
}

export default ModalSave;