import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase'; 
import CVListPage from './CVListPage';

const CVListContainer = () => {
    const [cvData, setCvData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCVData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'applications'));
                const fetchedData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log("data geldi " ,querySnapshot);
                
                setCvData(fetchedData);
                setLoading(false);
            } catch (error) {
                console.error('Veri çekme hatası:', error);
                setLoading(false);
            }
        };

        fetchCVData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Optional: Add a spinner or loading animation
    }

    return (
        <div>
            <CVListPage cvData={cvData} />
        </div>
    );
};

export default CVListContainer;
