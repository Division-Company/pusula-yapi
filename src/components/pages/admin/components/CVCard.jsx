import React from 'react';
import { motion } from 'framer-motion';

const CVCard = ({ cv, onCardClick, onDeleteClick }) => {
    const formatDate = (dateString) => {
        if (!dateString) return 'Belirtilmemiş';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('tr-TR', options).format(new Date(dateString));
    };

    return (
        <motion.div
            key={cv.id}
            className="bg-white w-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-6 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div onClick={() => onCardClick(cv)} className="flex items-center cursor-pointer w-full">
                <img
                    src={cv.personalInfo.avatar || 'https://via.placeholder.com/150'}
                    alt="Avatar"
                    className="w-32 h-32 rounded-full shadow-md mr-6"
                />
                <div className="flex-1 space-y-2">
                    <h2 className="text-3xl font-bold mb-2">{cv.personalInfo.firstName} {cv.personalInfo.lastName}</h2>
                    <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p className="text-lg"><strong>Departman:</strong> {cv.applicationInfo.department || 'Belirtilmemiş'}</p>
                        <p className="text-lg"><strong>İş Unvanı:</strong> {cv.applicationInfo.jobTitle || 'Belirtilmemiş'}</p>
                        <p className="text-lg"><strong>Başvuru Nedeni:</strong> {cv.applicationInfo.reasonForApplication || 'Belirtilmemiş'}</p>
                        <p className="text-lg"><strong>Şu Anda Çalışıyor:</strong> {cv.applicationInfo.currentlyWorking || 'Belirtilmemiş'}</p>
                        <p className="text-lg"><strong>Kronik Hastalık:</strong> {cv.healthInfo.chronicDisease || 'Yok'}</p>
                        <p className="text-lg"><strong>Başvuru Tarihi:</strong> {formatDate(cv.applicationDate)}</p>
                    </div>
                </div>
            </div>
            <button
                onClick={() => onDeleteClick(cv.id)}
                className="absolute top-4 right-4 bg-red-500 text-white px-5 py-2 text-lg rounded-full hover:bg-red-600 transition"
            >
                Sil
            </button>
        </motion.div>
    );
};

export default CVCard;
