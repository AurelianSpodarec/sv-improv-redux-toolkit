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
        fields: [],
    }
}

function ModalProvider({children}:any) {

    
    const [formState, setFormState] = useState({
        email: "2323sdfsbeew2323233ewewb@gmail.com",
            firstName: "p2322323333233ooooooooopoo",
            lastName: "wowewe",
            password: "qweqweqwe",
            confirmPassword: "qweqweqwe"
    })
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
                fields: [],
        }
    );

    function createFormState() {

    }

    function setModalOpen() {
        setIsOpen(true)
    }

    function setModalClose() {
        setIsOpen(false)
    }

    function onValueChange() {

    }
    
    const readValues = {
        data: config,
        isOpen,
        setConfig,
        close: setModalClose,
        open: setModalOpen,
        onValueChange,
        formState
    };

    return (// @ts-ignore
        <ModalContext.Provider value={readValues}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;