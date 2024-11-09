import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';

const CVListPage = ({ cvData }) => {
    const [filteredData, setFilteredData] = useState(cvData);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    useEffect(() => {
        if (selectedDepartment) {
            const filtered = cvData.filter(cv => cv.applicationInfo.department === selectedDepartment.value);
            setFilteredData(filtered);
        } else {
            setFilteredData(cvData);
        }
    }, [selectedDepartment, cvData]);

    const departmentOptions = [
        { value: 'HR', label: 'HR' },
        { value: 'IT', label: 'IT' },
        { value: 'Marketing', label: 'Marketing' },
        // Add more departments as needed
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">CV List</h1>
            <Select
                options={departmentOptions}
                onChange={setSelectedDepartment}
                placeholder="Filter by department"
                isClearable
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filteredData?.map((cv, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-xl font-semibold">{cv.personalInfo.firstName} {cv.personalInfo.lastName}</h2>
                        <p><strong>Department:</strong> {cv.applicationInfo.department}</p>
                        <p><strong>Job Title:</strong> {cv.applicationInfo.jobTitle}</p>
                        <p><strong>Reason for Application:</strong> {cv.applicationInfo.reasonForApplication}</p>
                        <p><strong>Currently Working:</strong> {cv.applicationInfo.currentlyWorking}</p>
                        <p><strong>Chronic Disease:</strong> {cv.healthInfo.chronicDisease}</p>
                        {/* Add other fields as needed */}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CVListPage;

