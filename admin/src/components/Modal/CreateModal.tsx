import * as ReactDOM from 'react-dom';

import ModalConfirm from './ModalConfirm/ModalConfirm';
import ModalSave from './ModalSave/ModalSave';

import ModalProvider from 'src/context/modal/modalContext';
import useModal from './../../../src/context/modal/useModal';
import { useState } from 'react';


function CreateModal() {
    const doc = document.getElementById('root');
    
    const modalContext = useModal()// @ts-ignore
    const modalData = modalContext.data;


    const modalOptions = {
        confirm: <ModalConfirm config={modalData} />,
        save: <ModalSave config={modalData} />
    }

    if(!doc) return <></>// @ts-ignore
    if(!modalContext.isOpen) return <></>
    return ReactDOM.createPortal( // @ts-ignore
        <aside role="dialog" className={`modal ${modalContext.isOpen ? 'is-open' : ''} `}>
            <div className="modal__inner">
                
                {// @ts-ignore
                modalOptions[modalData.type]}
            </div>
        </aside>
    , doc)
}

export default CreateModal;

