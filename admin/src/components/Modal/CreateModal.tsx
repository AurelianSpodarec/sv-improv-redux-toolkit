import react, { useEffect, useState, useRef } from 'react';
import * as ReactDOM from 'react-dom';

import ModalConfirm from './ModalConfirm/ModalConfirm';
import ModalSave from './ModalSave/ModalSave';


function CreateModal({children}:any) {
    const doc = document.getElementById('root');

    const currentModal = "confirm"
    // Config to modals from Redux passed 

    // List of diffefent modals

    // {
    //     type: "email",
    //     name: "email",
    //     value: "value",
    // }
// input field and a submit button to a specific endpoint
    const modals = {
        confirm: <ModalConfirm 
                    props={{
                        option: "Confirm",
                        title: "Admin",
                        description: "Hiskdjskdjsdksjdi",
                    }} 
                    />,
        save: <ModalSave config={{

                }} 
            />
    }

    if(!doc) return <></>
    return ReactDOM.createPortal( 
        <div className="modal">
            <div>
                {modals[currentModal]}
            </div>
        </div>
    , doc)
}

export default CreateModal;