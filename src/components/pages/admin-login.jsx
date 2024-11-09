import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Giriş başarılı!');
            navigate('/admin-page'); // Giriş başarılıysa admin sayfasına yönlendir
        } catch (err) {
            setError('Geçersiz kullanıcı adı veya şifre!');
            console.error('Firebase auth hatası:', err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">Admin Girişi</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="mb-4">
                    <label className="block mb-2">E-posta</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full"
                        placeholder="E-posta"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Şifre</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 w-full"
                        placeholder="Şifre"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Giriş Yap</button>
            </form>
        </div>
    );
};

export default AdminLogin;
