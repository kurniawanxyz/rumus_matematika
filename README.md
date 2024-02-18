# rumus_matematika

![versi](https://img.shields.io/badge/versi-1.1.9-blue.svg?cacheSeconds=2592000)
![npm](https://img.shields.io/npm/dt/rumus_matematika.svg)
![Lisensi: ISC](https://img.shields.io/badge/Lisensi-ISC-yellow.svg)

> Kumpulan fungsi untuk perhitungan matematika

Koleksi lengkap fungsi matematika yang dirancang untuk memudahkan pengembangan proyek yang memerlukan operasi matematika kompleks. Dari perhitungan dasar hingga rumus-rumus matematika lanjutan, `rumus_matematika` menyediakan alat yang Anda perlukan untuk membuat aplikasi Anda lebih cerdas.

## Instalasi
```sh
npm install --save-dev rumus_matematika
```

## Penggunaan
```javascript
import { MatematikaDasar } from "rumus_matematika"
const matematika = new MatematikaDasar();
const data = matematika.tambah(1,2,3,4,5,6)
```



## API

Berikut adalah beberapa fungsi yang tersedia:

- `tambah(a, b)` - Menambahkan dua bilangan.
- `kurang(a, b)` - Mengurangi dua bilangan.
- `kali(a, b)` - Mengalikan dua bilangan.
- `bagi(a, b)` - Membagi dua bilangan.

Untuk daftar lengkap fungsi dan dokumentasi, silakan kunjungi [Dokumentasi API](#).

## Contoh Penggunaan

Untuk melihat contoh penggunaan, silakan lihat di [example/index.js](example/index.js).

## Lisensi

Proyek ini dilisensikan di bawah Lisensi ISC - lihat file [LICENSE](LICENSE) untuk detailnya.

## Tentang Pengembang

**Adi Kurniawan**

- GitHub: [@KaitoDeCode](https://github.com/KaitoDeCode)

---

Dibuat dengan ❤ oleh [Adi Kurniawan](https://github.com/KaitoDeCode).
