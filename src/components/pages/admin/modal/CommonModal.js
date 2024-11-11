import React from 'react';
import Modal from 'react-modal';

const CommonModal = ({ isOpen, onRequestClose, title, message, onConfirm, confirmButtonLabel = 'Tamam' }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={title}
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-24"
            overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        >
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p>{message}</p>
            <div className="flex justify-end mt-6">
                <button onClick={onRequestClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2">İptal</button>
                {onConfirm && (
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        {confirmButtonLabel}
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default CommonModal;
