# Cümle Bulucu - Tablet Uygulaması (PWA)

Bu klasör, bilgisayarınızda veya tabletinizde kullanabileceğiniz, internete bağlıyken dilediğiniz kelimenin cümle örneklerini basitten akademik seviyeye doğru listeleyen, internet olmadığında ise yerleşik veritabanıyla çalışan modern bir web uygulaması içerir.

## Özellikler
- **3 Ayrı Seviye**: Basit (A1-A2), Orta (B1-B2) ve Akademik (C1-C2) cümleler.
- **Sesli Telaffuz**: Cümlelerin üzerine dokunarak veya ses simgelerine tıklayarak İngilizce telaffuzu dinleme.
- **Tıklanabilir Kelimeler**: Cümledeki herhangi bir kelimeye tıklayarak doğrudan o kelimenin anlamını arama.
- **Sözlük Desteği**: Kelimelerin türünü (isim, fiil, sıfat) ve İngilizce tanımlarını görebilme.
- **PWA Desteği**: Tablete veya telefona bağımsız bir program gibi yüklenebilme (Ana Ekrana Ekle).
- **Yapay Zeka Entegrasyonu (Opsiyonel)**: Ayarlardan kendi Gemini API anahtarınızı girerseniz, tamamen size özel cümleler ve gramer analizleri oluşturur.

---

## 📲 Tablete Yükleme Adımları (PWA)

Uygulamanın tabletinize bağımsız bir uygulama şeklinde yüklenmesi için öncelikle bir web adresinde barınması (Vercel gibi) ve güvenli protokol (HTTPS) ile açılması gerekir.

Aşağıdaki adımları takip ederek projeyi **ücretsiz** olarak Vercel'e yükleyebilir ve tabletinize kurabilirsiniz.

### Adım 1: GitHub'a Yükleme
1. [GitHub](https://github.com/) üzerinde ücretsiz bir hesap oluşturun.
2. Yeni bir repository (depo) oluşturun (örneğin: `cumle-bulucu`).
3. Bu klasördeki (`tablet_app`) tüm dosyaları bu depoya yükleyin (push edin).

### Adım 2: Vercel'e Dağıtım (Deploy)
1. [Vercel](https://vercel.com/) sitesine gidip GitHub hesabınızla giriş yapın.
2. **"Add New"** -> **"Project"** butonuna tıklayın.
3. GitHub deponuzu (`cumle-bulucu`) seçip **"Import"** deyin.
4. **"Deploy"** butonuna tıklayın. Vercel size özel bir internet adresi (örn: `cumle-bulucu.vercel.app`) tanımlayacaktır.

### Adım 3: Tablete Kurulum (Ana Ekrana Ekleme)
1. Tabletinizden (Safari, Chrome veya Edge tarayıcıları ile) Vercel'in verdiği adrese gidin.
2. Tarayıcı seçeneklerini açın:
   - **iPad (Safari)** için: **Paylaş (Share)** butonuna tıklayın ve listeden **"Ana Ekrana Ekle" (Add to Home Screen)** seçeneğini seçin.
   - **Android Tablet (Chrome)** için: Sağ üstteki üç noktaya tıklayın ve **"Uygulamayı Yükle" (Install App)** ya da **"Ana Ekrana Ekle"** seçeneğini seçin.
3. Uygulama artık tabletinizin ana ekranında yer alacak ve internetiniz olmadığında dahi çalışabilecektir!

---

## 🛠️ Yerel Bilgisayarda Test Etme (Bilgisayardan Çalıştırma)

Uygulamayı GitHub'a yüklemeden önce bilgisayarınızda test etmek isterseniz:
1. Bir komut satırı (CMD / PowerShell) açın.
2. `C:\Users\bahad\Desktop\Cumle_Bulucu_Programi\tablet_app` klasörüne gidin.
3. Şu komutla yerel bir sunucu başlatın:
   ```bash
   python -m http.server 8000
   ```
4. Tarayıcınızdan `http://localhost:8000` adresine giderek uygulamayı test edin.
