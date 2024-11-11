import React from 'react';
import Modal from 'react-modal';

const ErrorModal = ({ isOpen, onRequestClose, message }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Hata"
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-24"
            overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        >
            <h2 className="text-xl font-bold text-red-600 mb-4">Hata</h2>
            <p>{message}</p>
            <div className="flex justify-end mt-6">
                <button onClick={onRequestClose} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Tamam</button>
            </div>
        </Modal>
    );
};

export default ErrorModal;
