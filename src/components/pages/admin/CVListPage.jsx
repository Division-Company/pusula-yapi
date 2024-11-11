import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { motion } from 'framer-motion';
import { AiOutlineFileAdd, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; // useNavigate import edildi
import CVCard from './components/CVCard';
import CommonModal from './modal/CommonModal';
import Select from 'react-select'; // `react-select` kütüphanesi kullanılıyor

const CVListPage = () => {
    const [cvData, setCvData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCvId, setSelectedCvId] = useState(null);
    const [sortOrder, setSortOrder] = useState('desc'); // 'desc' -> yeniden eskiye, 'asc' -> eskiden yeniye
    const [selectedDepartment, setSelectedDepartment] = useState(null); // Departman filtreleme
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCVData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'applications'));
                const fetchedData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setCvData(fetchedData);
                setLoading(false);
            } catch (error) {
                console.error('Veri çekme hatası:', error);
                setError('Veriler yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
                setLoading(false);
            }
        };

        fetchCVData();
    }, []);

    const handleCardClick = (cv) => {
        navigate(`/admin/cv-details/${cv.id}`, { state: { cv } });
    };

    const openModal = (cvId) => {
        setSelectedCvId(cvId);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, 'applications', selectedCvId));
            closeModal();
            setCvData(cvData.filter(cv => cv.id !== selectedCvId));
        } catch (error) {
            console.error('Silme işlemi sırasında hata oluştu:', error);
        }
    };

    const sortedCvData = [...cvData]
        .filter(cv => !selectedDepartment || cv.applicationInfo.department === selectedDepartment.value)
        .sort((a, b) => {
            if (sortOrder === 'desc') {
                return new Date(b.applicationDate) - new Date(a.applicationDate); // Yeniden eskiye sıralama
            } else {
                return new Date(a.applicationDate) - new Date(b.applicationDate); // Eskiden yeniye sıralama
            }
        });

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <AiOutlineLoading3Quarters className="text-4xl animate-spin text-green-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 mt-4">
                <p>{error}</p>
            </div>
        );
    }

    if (cvData.length === 0) {
        return (
            <div className="text-center mt-10 text-gray-600 bg-gray-200 p-8 rounded-lg shadow-md transform transition duration-500 ease-in-out hover:scale-105">
                <div className="flex justify-center items-center mb-4">
                    <AiOutlineFileAdd className="text-5xl text-green-500 mr-4" />
                    <p className="text-xl font-semibold">Henüz kayıtlı CV bulunmamaktadır.</p>
                </div>
                <p className="text-sm text-gray-500">Lütfen daha fazla başvuru eklemek için sisteminizi kontrol edin.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Filtreleme ve sıralama kısmı */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-4">
                    {/* Departman filtreleme */}
                    <Select
                        options={[
                            { value: 'HR', label: 'HR' },
                            { value: 'IT', label: 'IT' },
                            { value: 'Marketing', label: 'Marketing' },
                            // Daha fazla departman eklenebilir
                        ]}
                        onChange={setSelectedDepartment}
                        placeholder="Departmana göre filtrele"
                        isClearable
                        className="w-60"
                    />
                </div>
                <div className="flex gap-4">
                    {/* Sıralama butonları */}
                    <button
                        onClick={() => setSortOrder('desc')}
                        className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors ${sortOrder === 'desc' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-green-600 hover:text-white'}`}
                    >
                        Yeniden Eskiye
                    </button>
                    <button
                        onClick={() => setSortOrder('asc')}
                        className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors ${sortOrder === 'asc' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-green-600 hover:text-white'}`}
                    >
                        Eskiden Yeniye
                    </button>
                </div>
            </div>

            {/* CV Kartları */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 w-full">
                {sortedCvData.map((cv) => (
                    <CVCard
                        key={cv.id}
                        cv={cv}
                        onCardClick={handleCardClick}
                        onDeleteClick={openModal}
                    />
                ))}
            </div>

            {/* Modal */}
            <CommonModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                title="Silme İşlemi Onayı"
                message="Bu CV'yi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz."
                onConfirm={handleDelete}
                confirmButtonLabel="Sil"
            />
        </div>
    );
};

export default CVListPage;
