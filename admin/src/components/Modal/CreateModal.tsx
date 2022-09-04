import { store } from '../../store/store';
import react, { useEffect, useState, useRef } from 'react';
import * as ReactDOM from 'react-dom';

import ModalConfirm from './ModalConfirm/ModalConfirm';
import ModalSave from './ModalSave/ModalSave';
import { connect } from 'react-redux';


function CreateModal({children}:any) {
    const doc = document.getElementById('root');

    const modalState = store.getState().modal
    const modalConfig = modalState.config;
    
    const modals = {
        confirm: <ModalConfirm config={modalConfig} />,
        save: <ModalSave config={modalConfig} />
    }

    if(!doc) return <></>
    if(!modalState.isOpen) return <></>
    return ReactDOM.createPortal( 
        <div className={`modal ${modalState.isOpen ? 'is-open' : ''} `}>
            <div className="modal__inner">
                
                {// @ts-ignore
                modals[modalState.config.type]
                }
            </div>
        </div>
    , doc)
}

export default CreateModal;