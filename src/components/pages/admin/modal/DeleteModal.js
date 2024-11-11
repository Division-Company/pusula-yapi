import React from 'react';
import Modal from 'react-modal';

const DeleteModal = ({ isOpen, onRequestClose, onDelete }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Silme İşlemi Onayı"
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-24"
            overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        >
            <h2 className="text-xl font-bold mb-4">CV'yi Sil</h2>
            <p>Bu CV'yi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.</p>
            <div className="flex justify-end mt-6 space-x-4">
                <button onClick={onRequestClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">İptal</button>
                <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Sil</button>
            </div>
        </Modal>
    );
};

export default DeleteModal;
