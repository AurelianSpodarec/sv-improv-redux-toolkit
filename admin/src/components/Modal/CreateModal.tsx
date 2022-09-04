import * as ReactDOM from 'react-dom';

import ModalConfirm from './ModalConfirm/ModalConfirm';
import ModalSave from './ModalSave/ModalSave';

import ModalProvider from 'src/context/modal/modalContext';
import useModal from './../../../src/context/modal/useModal';

function CreateModal({children}:any) {
    const doc = document.getElementById('root');
    
    const modalContext = useModal()// @ts-ignore
    const modalData = modalContext.data;

    const modals = {
        confirm: <ModalConfirm config={modalData} />,
        save: <ModalSave config={modalData} />
    }

    if(!doc) return <></>// @ts-ignore
    if(!modalContext.isOpen) return <></>
    return ReactDOM.createPortal( // @ts-ignore
        <div className={`modal ${modalContext.isOpen ? 'is-open' : ''} `}>
            <div className="modal__inner">
                
                {// @ts-ignore
                modals[modalData.type]
                }
            </div>
        </div>
    , doc)
}

export default CreateModal;