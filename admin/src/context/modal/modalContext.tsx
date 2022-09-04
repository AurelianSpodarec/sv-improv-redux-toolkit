import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext(undefined);

interface ModalConfig {
    isOpen: true,
    config: {
        id: undefined,
        type: 'confirm',
        option: undefined,
        action: undefined,
        title: undefined,
        description: undefined,
        onAction: undefined,
    }
}

function ModalProvider({children}:any) {

    const [isOpen, setIsOpen] = useState(false);
    const [config, setConfig] = useState(
        {
                id: undefined,
                type: 'confirm',
                option: undefined,
                action: undefined,
                title: undefined,
                description: undefined,
                onAction: undefined,
        }
    );

    function setModalConfig(data:any) {
        setConfig(data)
    }

    function setModalOpen() {
        setIsOpen(true)
    }

    function setModalClose() {
        setIsOpen(false)
    }
    
    const value = {
        data: config,
        isOpen,
        setConfig,
        close: setModalClose,
        open: setModalOpen,
    };

    return (// @ts-ignore
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;