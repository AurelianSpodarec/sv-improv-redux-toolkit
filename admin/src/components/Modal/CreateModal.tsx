import * as ReactDOM from 'react-dom';

import ModalConfirm from './ModalConfirm/ModalConfirm';
import ModalSave from './ModalSave/ModalSave';

import ModalProvider from 'src/context/modal/modalContext';
import useModal from './../../../src/context/modal/useModal';
import { useState } from 'react';


const doc = document.getElementById('root');

function CreateModal() {
    const modalContext = useModal()// @ts-ignore
    const modalData = modalContext.data;

    const modalOptions = {
        confirm: <ModalConfirm config={modalData} />,
        save: <ModalSave config={modalData} />
    }

    if(!doc) return <></>// @ts-ignore
    if(!modalContext.isOpen) return <></>
    return ReactDOM.createPortal( // @ts-ignore
        <aside role="dialog" className={`fixed top-0 right-0 bottom-0 left-0 m-auto z-50 bg-black/50 ${modalContext.isOpen ? 'visible' : 'hidden'} `}>
            <div className="m-auto top-1/2 translateY-[-50%] modal__inner">
                {// @ts-ignore
                modalOptions[modalData.type]}
            </div>
        </aside>
    , doc)
}

export default CreateModal;

