import { useEffect, useState } from "react";
import ModalInputList from "../components/ModalInputList";
import useModal from "./../../../../src/context/modal/useModal";

function ModalSave({config}:any) {
    const modalContext = useModal()//@ts-ignore
    const modalData = modalContext.data;

    const { onAction, option } = config;

    function handleAction(e:any) {
        e.preventDefault()//@ts-ignore
        onAction(modalContext.formState.values) //@ts-ignore
        modalContext.close()
    }

    function handleCancel(e:any) {
        e.preventDefault()//@ts-ignore
        modalContext.close()
    }

    return (
        <div className="w-[900px] m-auto p-12 rounded-lg bg-[#1f2937]">
            <header className="modal-save__header">

            </header>

            <section className="modal-save__section">
                <ModalInputList data={modalData.inputs} />
            </section>

            <footer className="flex justify-between">
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