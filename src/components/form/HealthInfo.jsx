import React from 'react';

function HealthInfo() {
    return (
        <div className="text-gray-600 p-6 rounded-lg">
            <h2 className="text-gray-600 text-xl font-semibold mb-6">Kişisel Sağlık Bilgileri</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-medium mb-1">Boyunuz</label>
                    <input type="text" className="w-full p-2 rounded border" placeholder="Boyunuzu giriniz" />
                </div>
                <div>
                    <label className="block font-medium mb-1">Kilonuz</label>
                    <input type="text" className="w-full p-2 rounded border" placeholder="Kilonuzu giriniz" />
                </div>
                <div className="md:col-span-2">
                    <label className="block font-medium mb-1">Kronik rahatsızlığınız var mı?</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input type="radio" name="kronik" value="evet" className="mr-2" />
                            Evet
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="kronik" value="hayir" className="mr-2" />
                            Hayır
                        </label>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <label className="block font-medium mb-1">Bedensel engelli misiniz?</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input type="radio" name="bedensel_engelli" value="evet" className="mr-2" />
                            Evet
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="bedensel_engelli" value="hayir" className="mr-2" />
                            Hayır
                        </label>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <label className="block font-medium mb-1">Fobileriniz var mı?</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input type="radio" name="fobi" value="evet" className="mr-2" />
                            Evet
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="fobi" value="hayir" className="mr-2" />
                            Hayır
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default HealthInfo;
