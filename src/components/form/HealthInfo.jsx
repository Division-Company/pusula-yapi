import React from 'react';
import { Field, ErrorMessage } from 'formik';

function HealthInfo() {
    return (
        <div className="text-gray-600 p-6 rounded-lg">
            <h2 className="text-gray-600 text-xl font-semibold mb-6">Kişisel Sağlık Bilgileri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-medium mb-1">Boyunuz</label>
                    <Field
                        name="healthInfo.height"
                        type="text"
                        className="w-full p-2 rounded border"
                        placeholder="Boyunuzu giriniz"
                    />
                    <ErrorMessage name="healthInfo.height" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label className="block font-medium mb-1">Kilonuz</label>
                    <Field
                        name="healthInfo.weight"
                        type="text"
                        className="w-full p-2 rounded border"
                        placeholder="Kilonuzu giriniz"
                    />
                    <ErrorMessage name="healthInfo.weight" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="md:col-span-2">
                    <label className="block font-medium mb-1">Kronik rahatsızlığınız var mı?</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <Field type="radio" name="healthInfo.chronicDisease" value="evet" className="mr-2" />
                            Evet
                        </label>
                        <label className="flex items-center">
                            <Field type="radio" name="healthInfo.chronicDisease" value="hayir" className="mr-2" />
                            Hayır
                        </label>
                    </div>
                    <ErrorMessage name="healthInfo.chronicDisease" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="md:col-span-2">
                    <label className="block font-medium mb-1">Bedensel engelli misiniz?</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <Field type="radio" name="healthInfo.physicalDisability" value="evet" className="mr-2" />
                            Evet
                        </label>
                        <label className="flex items-center">
                            <Field type="radio" name="healthInfo.physicalDisability" value="hayir" className="mr-2" />
                            Hayır
                        </label>
                    </div>
                    <ErrorMessage name="healthInfo.physicalDisability" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="md:col-span-2">
                    <label className="block font-medium mb-1">Fobileriniz var mı?</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <Field type="radio" name="healthInfo.phobias" value="evet" className="mr-2" />
                            Evet
                        </label>
                        <label className="flex items-center">
                            <Field type="radio" name="healthInfo.phobias" value="hayir" className="mr-2" />
                            Hayır
                        </label>
                    </div>
                    <ErrorMessage name="healthInfo.phobias" component="div" className="text-red-500 text-sm mt-1" />
                </div>
            </div>
        </div>
    );
}

export default HealthInfo;
