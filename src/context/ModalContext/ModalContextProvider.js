import React, { useState } from 'react';
import { ModalContext } from './ModalContext';
import { Modal } from '../../components/Modal';

export const ModalProvider = ({children}, event) => {
    const [modalOpened, setModalOpened] = useState(false);
    const event1 = event; 
    console.log('event^^', event1);

    const openModal = (modalConfig) => {
        // const {title} = modalConfig;
        setModalOpened(true);

    };

    const closeModal = () => {
        setModalOpened(false);

    };

    const valueModalProvider = {
        openModal: openModal,
        closeModal: closeModal,
    }

    return (
        <ModalContext.Provider value = {valueModalProvider}>
            {modalOpened && <Modal />}
            {children}
        </ModalContext.Provider>
    )
}