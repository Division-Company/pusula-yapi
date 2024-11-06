import { useState } from "react";
import React from 'react';



function FormPage() {
  const [file, setFile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Lütfen onay kutusunu işaretleyin.");
      return;
    }
    // Form gönderme işlemleri burada yapılır.
    alert("Başvurunuz gönderildi!");
  };
  return (
    <div className="bg-gray-900 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full p-6 space-y-6">
        <h1 className="text-xl font-bold text-orange-400">Çalışan Adayı Başvuru Formu</h1>

        {/* 1. Başvuru Bilgisi */}
        <div className="space-y-4 border-b pb-4 text-gray-600 ">
          <h2 className="text-lg font-semibold text-gray-700">1. Başvuru Bilgisi</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label className="block text-sm font-medium text-gray-700">Başvurulan Departman</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option>Seçiniz</option>
                <option>BİLGİ SİSTEMLERİ</option>
                <option>BÜTÇE & PLANLAMA</option>
                <option>DIŞ TİCARET & LOJİSTİK</option>
                <option>FABRİKA DİREKTÖRLÜĞÜ</option>
                <option>FİNANS & MUHASEBE</option>
                <option>İNSAN KAYNAKLARI</option>
                <option>İŞ GELİŞTİRME</option>
                <option>KALİTE YÖNETİMİ</option>
                <option>TASARIM GELİŞTİRME</option>
                <option>TEDARİK ZİNCİRİ</option>
                {/* Diğer seçenekler burada olacak */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Başvurulan Görev Adı</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option>Seçiniz</option>
                {/* Diğer seçenekler burada olacak */}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">İş ilanı yeri / kodu</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Başvurduğunuz görevi isteme nedeninizi, eğitiminizi, iş tecrübenizi, yeteneklerinizi değerlendiriniz.
            </label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Talep ettiğiniz aylık net ücret</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">İşe başlayabileceğiniz tarih</label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="block text-sm font-medium text-gray-700">Şu anda çalışıyor musunuz?</span>
              <div className="flex items-center space-x-4 mt-1">
                <label className="inline-flex items-center">
                  <input type="radio" name="current_working" value="yes" className="form-radio text-blue-600" />
                  <span className="ml-2">Evet</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="current_working" value="no" className="form-radio text-blue-600" />
                  <span className="ml-2">Hayır</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Çalışıyorsanız; firma adı/göreviniz</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700">Gerektiğinde fazla mesai yapmayı kabul eder misiniz?</span>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input type="radio" name="overtime" value="yes" className="form-radio text-blue-600" />
                <span className="ml-2">Evet</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="overtime" value="no" className="form-radio text-blue-600" />
                <span className="ml-2">Hayır</span>
              </label>
            </div>
          </div>
        </div>

        {/* 2. Kişisel Bilgiler */}
        <div className="text-gray-600 p-6 rounded-lg shadow-md mx-auto">
      <h2 className="text-gray-600 text-xl font-semibold mb-6">2. Kişisel Bilgiler</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Adı</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Adınız" />
        </div>

        <div>
          <label className="block font-medium mb-1">Soyadı</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Soyadınız" />
        </div>

        <div>
          <label className="block font-medium mb-1">Doğum Yeri</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Doğum Yeriniz" />
        </div>

        <div>
          <label className="block font-medium mb-1">Doğum Tarihi</label>
          <input type="date" className="w-full p-2 rounded border" />
        </div>

        <div>
          <label className="block font-medium mb-1">Cinsiyetiniz</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Cinsiyetiniz" />
        </div>

        <div>
          <label className="block font-medium mb-1">Cep Telefon</label>
          <input type="tel" className="w-full p-2 rounded border" placeholder="Cep Telefonu" />
        </div>

        <div>
          <label className="block font-medium mb-1">Medeni Hali</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Medeni Haliniz" />
        </div>

        <div>
          <label className="block font-medium mb-1">Çocuk Sayısı</label>
          <input type="number" className="w-full p-2 rounded border" placeholder="Çocuk Sayısı" />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Ev Adresiniz</label>
          <textarea className="w-full p-2 rounded border" rows="3" placeholder="Ev Adresiniz"></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">E-mail 1</label>
          <input type="email" className="w-full p-2 rounded border" placeholder="E-mail 1" />
        </div>

        <div>
          <label className="block font-medium mb-1">E-mail 2</label>
          <input type="email" className="w-full p-2 rounded border" placeholder="E-mail 2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Sürücü Ehliyetiniz Var Mı?</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="ehliyet" value="evet" className="mr-2" />
              Evet
            </label>
            <label className="flex items-center">
              <input type="radio" name="ehliyet" value="hayir" className="mr-2" />
              Hayır
            </label>
          </div>
        </div>

        <div>
          <label className="block text-white font-medium mb-1">Varsa sınıfını belirtiniz.</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Ehliyet Sınıfı" />
        </div>
      </form>
    </div>
    <div className="p-6 rounded-lg shadow-md mx-auto space-y-8">
      
      {/* Kişisel Sağlık Bilgileri Bölümü */}
      <div className="text-gray-600 p-6 rounded-lg">
        <h2 className="text-gray-600 text-xl font-semibold mb-6">Kişisel Sağlık Bilgileri</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Boyunuz</label>
            <input type="text" className="w-full p-2 rounded border" placeholder="Boyunuzu giriniz" />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Kilonuz</label>
            <input type="text" className="w-full p-2 rounded border" placeholder="Kilonuzu giriniz" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-600 font-medium mb-1">Kronik rahatsızlığınız var mı?</label>
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
            <label className="block text-gray-600 font-medium mb-1">Bedensel engelli misiniz?</label>
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
            <label className="block text-gray-600 font-medium mb-1">Fobileriniz var mı?</label>
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

      {/* Vatandaşlık Bilgileri Bölümü */}
      <div className="p-6 rounded-lg text-gray-600">
        <h2 className="text-gray-600 text-xl font-semibold mb-6">3. Vatandaşlık Bilgileri</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-gray-600 font-medium mb-1">Türk Vatandaşı mısınız?</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="turk_vatandasi" value="evet" className="mr-2" />
                Evet
              </label>
              <label className="flex items-center">
                <input type="radio" name="turk_vatandasi" value="hayir" className="mr-2" />
                Hayır
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">TC. Kimlik No :</label>
            <input type="text" className="w-full p-2 rounded border" placeholder="Kimlik numaranızı giriniz" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-600 font-medium mb-1">
              Başka bir ülke vatandaşı iseniz ve/veya oturumunuz, çalışma izniniz var ise hangi ülke ve kaç yıl belirtiniz
            </label>
            <input type="text" className="w-full p-2 rounded border" placeholder="Ülke ve yıl bilgisi" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-600 font-medium mb-1">Yurtdışında çalışmanıza engel bir durumunuz var mı?</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="yurtdisi_engel" value="evet" className="mr-2" />
                Evet
              </label>
              <label className="flex items-center">
                <input type="radio" name="yurtdisi_engel" value="hayir" className="mr-2" />
                Hayır
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-600 font-medium mb-1">Varsa Açıklayınız</label>
            <textarea className="w-full p-2 rounded border" rows="3" placeholder="Açıklama yazınız"></textarea>
          </div>
        </form>
      </div>
    </div>
    <div className="p-6 rounded-lg shadow-md mx-auto space-y-8">
      
      {/* Öğrenim Durumu Bölümü */}
      <div className="p-6 rounded-lg">
        <h2 className="text-gray-600 text-xl font-semibold mb-6">4. Öğrenim Durumu</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="p-3 border">Okul Adı/Şehir</th>
              <th className="p-3 border">Başlangıç</th>
              <th className="p-3 border">Bitiş Tarihi</th>
              <th className="p-3 border">Bölümü</th>
              <th className="p-3 border">Mezuniyet Derecesi</th>
            </tr>
          </thead>
          <tbody>
            {["İlköğretim", "Ortaokul", "Lise/ Meslek", "Üniversite", "Yüksek Lisans Ve Üzeri"].map((level, index) => (
              <tr key={index} className="bg-white text-gray-600">
                <td className="p-3 border">
                  <input type="text" className="w-full p-2 rounded border" placeholder={`${level} Okul Adı/Şehir`} />
                </td>
                <td className="p-3 border">
                  <input type="text" className="w-full p-2 rounded border" placeholder="gg.aa.yyyy" />
                </td>
                <td className="p-3 border">
                  <input type="text" className="w-full p-2 rounded border" placeholder="gg.aa.yyyy" />
                </td>
                <td className="p-3 border">
                  <input type="text" className="w-full p-2 rounded border" placeholder="Bölüm" />
                </td>
                <td className="p-3 border">
                  <input type="text" className="w-full p-2 rounded border" placeholder="Mezuniyet Derecesi" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sertifika, Belge ve Lisanslar Bölümü */}
      <div className="text-gray-600 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-6">5. Sertifika, Belge ve Lisanslar</h2>
        <textarea
          className="w-full p-2 rounded border"
          rows="5"
          placeholder="Sahip olduğunuz sertifika, belge veya lisansları giriniz"
        ></textarea>
      </div>
    </div>
    <div className="p-8 space-y-8 text-gray-600">
      {/* Yabancı Dil Bilgisi Bölümü */}
      <div className="p-4 rounded-t">
        <h2 className="text-lg font-semibold">6. Yabancı Dil Bilgisi</h2>
      </div>
      <div className="border border-t-0 rounded-b p-4">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Ana Dil</label>
          <input
            type="text"
            className="border rounded w-full p-2"
            placeholder="Ana dilinizi girin"
          />
        </div>

        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Dil</th>
              <th className="border border-gray-300 p-2">Konuşma (1-4)</th>
              <th className="border border-gray-300 p-2">Okuma (1-4)</th>
              <th className="border border-gray-300 p-2">Yazma (1-4)</th>
            </tr>
          </thead>
          <tbody>
            {["İngilizce", "Fransızca", "Almanca", "Rusça", "Arapça"].map(
              (language, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{language}</td>
                  {["Konuşma", "Okuma", "Yazma"].map((skill, skillIndex) => (
                    <td key={skillIndex} className="border border-gray-300 p-2">
                      <div className="flex justify-center space-x-2">
                        {[1, 2, 3, 4].map((level) => (
                          <label key={level} className="inline-flex items-center">
                            <input type="radio" name={`${language}-${skill}`} value={level} />
                            <span className="ml-1">{level}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Diğer</label>
          <input
            type="text"
            className="border rounded w-full p-2"
          />
        </div>
      </div>

      {/* Bilgisayar Programları Kullanma Becerileri */}
      <div className="text-gray-600 p-4 rounded-t">
        <h2 className="text-lg font-semibold">7. BİLGİSAYAR PROGRAMLARINI KULLANMA BECERİLERİ</h2>
      </div>
      <div className="border border-t-0 text-gray-600 rounded-b p-4">
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Program</th>
              <th className="border border-gray-300 p-2">Seviye (1-4)</th>
              <th className="border border-gray-300 p-2">Pratik (1-4)</th>
              <th className="border border-gray-300 p-2">Hız (1-4)</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Microsoft Word",
              "Microsoft Excel",
              "Power Point",
              "Microsoft Access",
              "Ms Project",
              "Primavera P6",
              "Asta Powerproject",
              "Synchro",
            ].map((program, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{program}</td>
                {["Seviye", "Pratik", "Hız"].map((category, categoryIndex) => (
                  <td key={categoryIndex} className="border border-gray-300 p-2">
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4].map((level) => (
                        <label key={level} className="inline-flex items-center">
                          <input type="radio" name={`${program}-${category}`} value={level} />
                          <span className="ml-1">{level}</span>
                        </label>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Diğer</label>
          <input
            type="text"
            className="border rounded w-full p-2"
          />
        </div>
      </div>
    </div>
    <div className="p-8 space-y-8 text-gray-600">
      {/* Doküman Yönetim Sistemleri */}
      <div className="p-4 rounded-t">
        <h2 className="text-lg font-semibold">Doküman Yönetim Sistemleri</h2>
      </div>
      <div className="border border-t-0 rounded-b p-4 text-gray-600">
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2"></th>
              <th className="border border-gray-300 p-2">Seviye (1-4)</th>
              <th className="border border-gray-300 p-2">Pratik (1-4)</th>
              <th className="border border-gray-300 p-2">Hız (1-4)</th>
            </tr>
          </thead>
          <tbody>
            {["Aconex", "Procore", "Asite"].map((system, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{system}</td>
                {["Seviye", "Pratik", "Hız"].map((category, categoryIndex) => (
                  <td key={categoryIndex} className="border border-gray-300 p-2">
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4].map((level) => (
                        <label key={level} className="inline-flex items-center">
                          <input type="radio" name={`${system}-${category}`} value={level} />
                          <span className="ml-1">{level}</span>
                        </label>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Diğer</label>
          <input
            type="text"
            className="border rounded w-full p-2"
          />
        </div>
      </div>

      {/* SAP Modül Bilgisi */}
      <div className="text-gray-600 p-4 rounded-t">
        <h2 className="text-lg font-semibold">SAP Modül Bilgisi</h2>
      </div>
      <div className="border border-t-0 rounded-b p-4">
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2"></th>
              <th className="border border-gray-300 p-2">Seviye (1-4)</th>
              <th className="border border-gray-300 p-2">Pratik (1-4)</th>
              <th className="border border-gray-300 p-2">Hız (1-4)</th>
            </tr>
          </thead>
          <tbody>
            {["PP", "PS", "CO", "MM", "FI", "HR", "QM", "SD"].map((module, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{module}</td>
                {["Seviye", "Pratik", "Hız"].map((category, categoryIndex) => (
                  <td key={categoryIndex} className="border border-gray-300 p-2">
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4].map((level) => (
                        <label key={level} className="inline-flex items-center">
                          <input type="radio" name={`${module}-${category}`} value={level} />
                          <span className="ml-1">{level}</span>
                        </label>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Diğer</label>
          <input
            type="text"
            className="border rounded w-full p-2"
          />
        </div>
      </div>
    </div>
    <div className="p-8 space-y-8 text-gray-600">
      {/* Tasarım Programları */}
      <div className="p-4 rounded-t">
        <h2 className="text-lg font-semibold">Tasarım Programları</h2>
      </div>
      <div className="border border-t-0 rounded-b p-4 text-gray-600">
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2"></th>
              <th className="border border-gray-300 p-2">Seviye (1-4)</th>
              <th className="border border-gray-300 p-2">Pratik (1-4)</th>
              <th className="border border-gray-300 p-2">Hız (1-4)</th>
            </tr>
          </thead>
          <tbody>
            {["Autodesk AutoCAD 2D", "Autodesk AutoCAD 3D", "Autodesk 3DS MAX", "RHINO", "REVIT BIM", "SOLID WORKS", "RHINO GRASSHOPPER", "CREO PARAMETRIC"].map((system, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{system}</td>
                {["Seviye", "Pratik", "Hız"].map((category, categoryIndex) => (
                  <td key={categoryIndex} className="border border-gray-300 p-2">
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4].map((level) => (
                        <label key={level} className="inline-flex items-center">
                          <input type="radio" name={`${system}-${category}`} value={level} />
                          <span className="ml-1">{level}</span>
                        </label>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Diğer</label>
          <input
            type="text"
            className="border rounded w-full p-2"
          />
        </div>
      </div>

      {/* Mühendislik Programları */}
      <div className="text-gray-600 p-4 rounded-t">
        <h2 className="text-lg font-semibold">Mühendislik Programları</h2>
      </div>
      <div className="border border-t-0 rounded-b p-4">
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2"></th>
              <th className="border border-gray-300 p-2">Seviye (1-4)</th>
              <th className="border border-gray-300 p-2">Pratik (1-4)</th>
              <th className="border border-gray-300 p-2">Hız (1-4)</th>
            </tr>
          </thead>
          <tbody>
            {["Autodesk AutoCAD 2D", "SAP 2000", "X-STEEL", "BISCO", "TRISCO", "FRAME SIMULATOR", "SOID SIMULATION", "SJ MEPLA", "VITRAGE DECISION", "THERM", "MOLD SIMULATOR", "WINBEAM", "SHAPE BUILDER", "INSUL", "BISTRA", "VOLTRA"].map((module, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{module}</td>
                {["Seviye", "Pratik", "Hız"].map((category, categoryIndex) => (
                  <td key={categoryIndex} className="border border-gray-300 p-2">
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4].map((level) => (
                        <label key={level} className="inline-flex items-center">
                          <input type="radio" name={`${module}-${category}`} value={level} />
                          <span className="ml-1">{level}</span>
                        </label>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Diğer</label>
          <input
            type="text"
            className="border rounded w-full p-2"
          />
        </div>
      </div>
    </div>
    <div className="p-8 space-y-8 text-gray-600">
      {/* Yazılım Geliştirme */}
      <div className="p-4 rounded-t">
        <h2 className="text-lg font-semibold">Yazılım Geliştirme</h2>
      </div>
      <div className="border border-t-0 rounded-b p-4 text-gray-600">
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2"></th>
              <th className="border border-gray-300 p-2">Seviye (1-4)</th>
              <th className="border border-gray-300 p-2">Pratik (1-4)</th>
              <th className="border border-gray-300 p-2">Hız (1-4)</th>
            </tr>
          </thead>
          <tbody>
            {["HTML", "CSS", "JS", "C#", "SQL", "Unity", "ABAP"].map((system, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{system}</td>
                {["Seviye", "Pratik", "Hız"].map((category, categoryIndex) => (
                  <td key={categoryIndex} className="border border-gray-300 p-2">
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4].map((level) => (
                        <label key={level} className="inline-flex items-center">
                          <input type="radio" name={`${system}-${category}`} value={level} />
                          <span className="ml-1">{level}</span>
                        </label>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Diğer</label>
          <input
            type="text"
            className="border rounded w-full p-2"
          />
        </div>
      </div>
      </div>
      {/* Referanslar */}
      <div className="text-gray-600 p-4 rounded">
        <h2 className="font-bold mb-4">8. Referanslar / Reference Contacts</h2>
        <p className="text-sm mb-4">
          Referans verdiğiniz kişilerden, isimlerini, iletişim ve mesleki
          bilgilerini şirketimizle paylaşmak için izin alınması çalışan adayının
          yükümlülüğüdür. Metal Yapı bu hususta herhangi bir sorumluluk kabul
          etmez.
        </p>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 mb-4">
              <input
                type="text"
                placeholder="Adı S.Ad"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="İş Yeri"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Görevi"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Telefon No"
                className="border p-2 rounded"
              />
            </div>
          ))}
      </div>

      {/* İş Tecrübesi */}
      <div className="p-4 rounded text-gray-600">
        <h2 className="font-bold mb-4">9. İş Tecrübesi</h2>
        <p className="text-sm mb-4">Son işinizden başlayarak doldurunuz.</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="İş Yeri Adı"
            className="border p-2 rounded"
          />
          <input type="text" placeholder="Şehir" className="border p-2 rounded" />
          <input type="text" placeholder="Görevi" className="border p-2 rounded" />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Aylık Net Maaş"
            className="border p-2 rounded"
          />
          <input
            type="date"
            placeholder="İşe Giriş Tarihi"
            className="border p-2 rounded"
          />
          <input
            type="date"
            placeholder="Ayrılma Tarihi"
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Yöneticinizin Adı"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Yöneticinizin Görevi"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Yöneticinizin Telefonu"
            className="border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Ayrılma Sebebiniz"
            className="border p-2 rounded w-full"
          ></textarea>
        </div>
      </div>
      <div className="p-4 rounded text-gray-600">
        <h2 className="font-bold mb-4">9. İş Tecrübesi</h2>
        <p className="text-sm mb-4">Son işinizden başlayarak doldurunuz.</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="İş Yeri Adı"
            className="border p-2 rounded"
          />
          <input type="text" placeholder="Şehir" className="border p-2 rounded" />
          <input type="text" placeholder="Görevi" className="border p-2 rounded" />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Aylık Net Maaş"
            className="border p-2 rounded"
          />
          <input
            type="date"
            placeholder="İşe Giriş Tarihi"
            className="border p-2 rounded"
          />
          <input
            type="date"
            placeholder="Ayrılma Tarihi"
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Yöneticinizin Adı"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Yöneticinizin Görevi"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Yöneticinizin Telefonu"
            className="border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Ayrılma Sebebiniz"
            className="border p-2 rounded w-full"
          ></textarea>
        </div>
      </div>
      <div className="p-4 rounded text-gray-600">
        <h2 className="font-bold mb-4">9. İş Tecrübesi</h2>
        <p className="text-sm mb-4">Son işinizden başlayarak doldurunuz.</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="İş Yeri Adı"
            className="border p-2 rounded"
          />
          <input type="text" placeholder="Şehir" className="border p-2 rounded" />
          <input type="text" placeholder="Görevi" className="border p-2 rounded" />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Aylık Net Maaş"
            className="border p-2 rounded"
          />
          <input
            type="date"
            placeholder="İşe Giriş Tarihi"
            className="border p-2 rounded"
          />
          <input
            type="date"
            placeholder="Ayrılma Tarihi"
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Yöneticinizin Adı"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Yöneticinizin Görevi"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Yöneticinizin Telefonu"
            className="border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Ayrılma Sebebiniz"
            className="border p-2 rounded w-full"
          ></textarea>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="p-4 bg-gray-100 space-y-6 text-gray-600">
      {/* Dosya Ekle */}
      <div className="border border-gray-300 p-4 rounded">
        <label className="block mb-2 font-bold">Dosya Ekle</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="block border p-2 w-full"
        />
        {file && <p className="mt-2 text-gray-600">Seçilen Dosya: {file.name}</p>}
      </div>

      {/* Onay Kutusu ve Açıklama */}
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mt-1"
        />
        <p className="text-sm text-gray-700">
          İş Başvuru Formu'nda paylaştığım bana ait olmayan tüm kişisel veriler
          (referanslar, eski yöneticilerim…) için ilgili kişisel veri
          sahiplerinden gerekli tüm izinleri aldığımı ve bu verileri kimlerle ve
          neden paylaştığım da dahil olmak üzere ilgili kişilerin bilgisi
          dahilinde paylaştığımı beyan ederim. İş bu hususta Metal Yapı'nın
          hiçbir sorumluluğu olmayıp, tüm sorumluluk bana aittir.
        </p>
      </div>

      {/* Başvuru Butonu */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Başvur
      </button>
    </form>
      </div>
    </div>
  );
}

export default FormPage;
