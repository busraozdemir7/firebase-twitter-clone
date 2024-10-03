// Child route'un içeriğini kapsayıcı route'a çağırmaya yarayan bileşen
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { auth } from '../firebase/config';
import { useEffect, useState } from 'react';

const Protected = () => {
    // Kullanıcının yetkisi var mı state'i
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        // onAuthStateChanged > kullanıcı oturumundaki değişimi izler
        onAuthStateChanged(auth, (user) => {
            // eğer kullanıcı varsa yetkisini true'ya çek
            // oturumu kapalıysa yetkisiyi false'a çek
            setIsAuth(user ? true : false);
        });
    }, []);

    // Eğer yetkisi yoksa
    if (isAuth === false) {
        return <Navigate to={'/'} />;
    }

    // Yetkisi varsa alt route'daki sayfayı göster
    return <Outlet />;
};

export default Protected;
