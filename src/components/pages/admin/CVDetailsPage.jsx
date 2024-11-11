import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CVDetailsPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { cv } = state || {};

    const formatDate = (dateString) => {
        if (!dateString) return 'Belirtilmemiş';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('tr-TR', options).format(new Date(dateString));
    };

    if (!cv) {
        return <div className="p-6 text-center text-red-500">Veri bulunamadı.</div>;
    }

    const sections = [
        {
            title: 'Kişisel Bilgiler',
            content: (
                <>
                    <p className="mb-1"><strong>Adı:</strong> {cv.personalInfo?.firstName || 'Belirtilmemiş'}</p>
                    <p className="mb-1"><strong>Soyadı:</strong> {cv.personalInfo?.lastName || 'Belirtilmemiş'}</p>
                </>
            ),
        },
        {
            title: 'Başvuru Bilgileri',
            content: (
                <>
                    <p className="mb-1"><strong>Departman:</strong> {cv.applicationInfo?.department || 'Belirtilmemiş'}</p>
                    <p className="mb-1"><strong>İş Unvanı:</strong> {cv.applicationInfo?.jobTitle || 'Belirtilmemiş'}</p>
                    <p className="mb-1"><strong>Başvuru Nedeni:</strong> {cv.applicationInfo?.reasonForApplication || 'Belirtilmemiş'}</p>
                    <p className="mb-1"><strong>Talep Edilen Maaş:</strong> {cv.applicationInfo?.requestedSalary || 'Belirtilmemiş'}</p>
                    <p className="mb-1"><strong>Başvuru Tarihi:</strong> {formatDate(cv.applicationDate) || 'Belirtilmemiş'}</p>
                </>
            ),
        },
        {
            title: 'Sağlık Bilgileri',
            content: (
                <>
                    <p className="mb-1"><strong>Boy:</strong> {cv.healthInfo?.height || 'Belirtilmemiş'}</p>
                    <p className="mb-1"><strong>Kilo:</strong> {cv.healthInfo?.weight || 'Belirtilmemiş'}</p>
                    <p className="mb-1"><strong>Kronik Hastalık:</strong> {cv.healthInfo?.chronicDisease || 'Belirtilmemiş'}</p>
                    <p className="mb-1"><strong>Fiziksel Engel:</strong> {cv.healthInfo?.physicalDisability || 'Belirtilmemiş'}</p>
                    <p className="mb-1"><strong>Fobiler:</strong> {cv.healthInfo?.phobias || 'Belirtilmemiş'}</p>
                </>
            ),
        },
        {
            title: 'Eğitim Bilgileri',
            content: cv.educationInfo?.length ? (
                cv.educationInfo.map((education, index) => (
                    <div key={index} className="mb-2">
                        <h3 className="font-semibold">Eğitim {index + 1}</h3>
                        <p className="mb-1"><strong>Okul Adı:</strong> {education.schoolName || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Bölüm:</strong> {education.department || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Başlangıç Tarihi:</strong> {formatDate(education.startDate) || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Bitiş Tarihi:</strong> {formatDate(education.endDate) || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Mezuniyet Derecesi:</strong> {education.graduationDegree || 'Belirtilmemiş'}</p>
                    </div>
                ))
            ) : (
                <p>Eğitim bilgisi bulunamadı.</p>
            ),
        },
        {
            title: 'Yabancı Dil Bilgisi',
            content: (
                <>
                    <p className="mb-1"><strong>Ana Dil:</strong> {cv.languageSkills?.nativeLanguage || 'Belirtilmemiş'}</p>
                    {cv.languageSkills?.languages?.length ? (
                        cv.languageSkills.languages.map((language, index) => (
                            <div key={index} className="mb-2">
                                <h3 className="font-semibold">Dil {index + 1}</h3>
                                {Object.entries(language).map(([key, value]) => (
                                    <p key={key} className="mb-1"><strong>{key}:</strong> {value || 'Belirtilmemiş'}</p>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>Yabancı dil bilgisi bulunamadı.</p>
                    )}
                    <p className="mb-1"><strong>Diğer Diller:</strong> {cv.languageSkills?.otherLanguages || 'Belirtilmemiş'}</p>
                </>
            ),
        },
        {
            title: 'Bilgisayar Becerileri',
            content: (
                <>
                    {cv.computerSkills?.length ? (
                        cv.computerSkills.map((skill, index) => (
                            <div key={index} className="mb-2">
                                <h3 className="font-semibold">Program {index + 1}</h3>
                                {Object.entries(skill).map(([key, value]) => (
                                    <p key={key} className="mb-1"><strong>{key}:</strong> {value || 'Belirtilmemiş'}</p>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>Bilgisayar becerisi bilgisi bulunamadı.</p>
                    )}
                    <p className="mb-1"><strong>Diğer Bilgisayar Becerileri:</strong> {cv.computerSkillsOther || 'Belirtilmemiş'}</p>
                </>
            ),
        },
        {
            title: 'İş Tecrübesi',
            content: cv.workExperience?.experiences?.length ? (
                cv.workExperience.experiences.map((experience, index) => (
                    <div key={index} className="mb-2">
                        <h3 className="font-semibold">İş {index + 1}</h3>
                        <p className="mb-1"><strong>Şirket Adı:</strong> {experience.companyName || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Şehir:</strong> {experience.city || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Görev:</strong> {experience.position || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Aylık Maaş:</strong> {experience.monthlySalary || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Başlangıç Tarihi:</strong> {formatDate(experience.startDate) || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Bitiş Tarihi:</strong> {formatDate(experience.endDate) || 'Belirtilmemiş'}</p>
                    </div>
                ))
            ) : (
                <p>İş tecrübesi bilgisi bulunamadı.</p>
            ),
        },
        {
            title: 'Referanslar',
            content: cv.referenceInfo?.references?.length ? (
                cv.referenceInfo.references.map((reference, index) => (
                    <div key={index} className="mb-2">
                        <h3 className="font-semibold">Referans {index + 1}</h3>
                        <p className="mb-1"><strong>Adı:</strong> {reference.name || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>İş Yeri:</strong> {reference.workplace || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Görevi:</strong> {reference.position || 'Belirtilmemiş'}</p>
                        <p className="mb-1"><strong>Telefon No:</strong> {reference.phone || 'Belirtilmemiş'}</p>
                    </div>
                ))
            ) : (
                <p>Referans bilgisi bulunamadı.</p>
            ),
        },

    ];

    return (
        <div className="min-h-screen flex justify-center items-start">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full space-y-6">
                <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">Detaylı CV Bilgisi</h1>

                {/* Bölüm Kartları */}
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition-all transform hover:-translate-y-1"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-xl font-semibold text-indigo-700 mb-2">{section.title}</h2>
                        {section.content}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CVDetailsPage;
