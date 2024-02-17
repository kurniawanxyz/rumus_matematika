// Fungsi untuk operasi dasar matematika
/**
 * Menghitung rata-rata dari jumlah data dan banyak data
 */
export const mean = (jumlahData: number, banyakData: number): number => jumlahData / banyakData;

/**
 * Menambahkan sejumlah angka
 */
export const tambah = (...angka: number[]): number => angka.reduce((prevdata, currentData) => prevdata + currentData, 0);

/**
 * Mengurangi sejumlah angka
 */
export const kurang = (...angka: number[]): number => angka.reduce((prevdata, currentData) => prevdata - currentData);

/**
 * Membagi dua angka
 */
export const bagi = (angka1: number, angka2: number): number => angka1 / angka2;

/**
 * Mengalikan dua angka
 */
export const kali = (angka1: number, angka2: number): number => angka1 * angka2;

// Fungsi untuk operasi fisika
/**
 * Menghitung kecepatan dengan rumus jarak dibagi waktu
 */
export const kecepatan = (jarak: number, waktu: number): number => bagi(jarak, waktu);

/**
 * Menghitung jarak dengan rumus kecepatan dikali waktu
 */
export const jarak = (kecepatan: number, waktu: number): number => kali(kecepatan, waktu);

/**
 * Menghitung waktu dengan rumus jarak dibagi kecepatan
 */
export const waktuKecepatan = (jarak: number, kecepatan: number): number => bagi(jarak, kecepatan);

// Fungsi untuk operasi volume dan debit
/**
 * Menghitung debit dengan rumus volume dibagi waktu
 */
export const debit = (volume: number, waktu: number): number => bagi(volume, waktu);

/**
 * Menghitung volume dengan rumus debit dikali waktu
 */
export const volume = (debit: number, waktu: number): number => kali(debit, waktu);

/**
 * Menghitung waktu dengan rumus volume dibagi debit
 */
export const waktuDebit = (debit: number, kecepatan: number): number => bagi(debit, kecepatan);

// Fungsi untuk operasi pada peta dan skala
/**
 * Menghitung skala peta
 */
export const skala = (jarakPadaPeta: number, jarakSebenarnya: number): string => `${jarakPadaPeta} : ${jarakSebenarnya}`;

/**
 * Menghitung jarak sebenarnya dari skala peta
 */
export const jarakSebenarnya = (jarakPadaPeta: number, jarakSebenarnya: number): number => jarakPadaPeta / (jarakPadaPeta / jarakSebenarnya);

/**
 * Menghitung jarak pada peta dari jarak sebenarnya
 */
export const jarakPadaPeta = (jarakPadaPeta: number, jarakSebenarnya: number): number => (jarakPadaPeta / jarakSebenarnya) * jarakSebenarnya;

// Fungsi untuk operasi trigonometri
/**
 * Menghitung nilai sinus dari sudut dalam derajat
 */
export const sin = (derajat: number): number => Math.sin(derajat * (Math.PI / 180));

/**
 * Menghitung nilai cosinus dari sudut dalam derajat
 */
export const cos = (derajat: number): number => Math.cos(derajat * (Math.PI / 180));

/**
 * Menghitung nilai tangen dari sudut dalam derajat
 */
export const tan = (derajat: number): number => Math.tan(derajat * (Math.PI / 180));

/**
 * Menghitung nilai arcsin dari sebuah nilai
 */
export const asin = (nilai: number): number => Math.asin(nilai) * (180 / Math.PI);

/**
 * Menghitung nilai arccos dari sebuah nilai
 */
export const acos = (nilai: number): number => Math.acos(nilai) * (180 / Math.PI);

/**
 * Menghitung nilai arctan dari sebuah nilai
 */
export const atan = (nilai: number): number => Math.atan(nilai) * (180 / Math.PI);

// Fungsi untuk operasi statistik
/**
 * Menghitung rata-rata dari sebuah array angka
 */
export const rataRataArray = (arr: number[]): number => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
