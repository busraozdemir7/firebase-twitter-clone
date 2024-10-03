import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";
import { v4 } from "uuid";
import { toast } from "react-toastify";

// Dosyayı storage'a yükleyen fonksiyon
export const upload = async (file) => {
    // 1) Dosya resim değilse veya dosya yoksa fonksiyonu durdur
    // Dosya ismi image kelimesi ile başlammıyorsa kontrolü yaptık
    if (!file?.type.startsWith("image") || !file) return null;

    // 2) Dosyanın yükleneceği konumun referansını al
    const imageRef = ref(storage, v4() + file.name);

    try {
        // 3) Referansını oluşturduğumuz konuma dosyayı yükle
        await uploadBytes(imageRef, file);

        // 4) Yüklenen dosyanın url'ini al ve return et
        return await getDownloadURL(imageRef);
    } catch (err) {
        toast.error("Resim yüklenirken bir sorun oldu");
    }
};

export default upload;