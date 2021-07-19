import React, { useState } from 'react';
import { ModalContext } from './ModalContext';
import { Modal } from '../../components/Modal';

export const ModalProvider = ({children}) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalConf, setModalConf] = useState('');

    const openModal = (modalConfig) => {
        console.log('modalConfig', modalConfig);
        setModalOpened(true);
        setModalConf(modalConfig);
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
            {modalOpened && <Modal data={modalConf}/>}
            {children}
        </ModalContext.Provider>
    )
}