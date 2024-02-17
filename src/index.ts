export const mean = (jumlahData: number, banyakData: number): number => jumlahData / banyakData;

export const tambah = (...angka: number[]): number => angka.reduce((prevdata, currentData) => prevdata + currentData, 0);

export const kurang = (...angka: number[]): number => angka.reduce((prevdata, currentData) => prevdata - currentData);

export const bagi = (angka1: number, angka2: number): number => angka1 / angka2;

export const kali = (angka1: number, angka2: number): number => angka1 * angka2;

export const pangkat = (angka: number, pangkat: number): number => angka ** pangkat;

export const kecepatan = (jarak: number, waktu: number): number => bagi(jarak, waktu);

export const jarak = (kecepatan: number, waktu: number): number => kali(kecepatan, waktu);

export const waktuKecepatan = (jarak: number, kecepatan: number): number => bagi(jarak, kecepatan);

export const debit = (volume: number, waktu: number): number => bagi(volume, waktu);

export const volume = (debit: number, waktu: number): number => kali(debit, waktu);

export const waktuDebit = (debit: number, kecepatan: number): number => bagi(debit, kecepatan);

export const skala = (jarakPadaPeta: number, jarakSebenarnya: number): string => `${jarakPadaPeta} : ${jarakSebenarnya}`;

export const jarakSebenarnya = (jarakPadaPeta: number, jarakSebenarnya: number): number => jarakPadaPeta / (jarakPadaPeta / jarakSebenarnya);

export const jarakPadaPeta = (jarakPadaPeta: number, jarakSebenarnya: number): number => (jarakPadaPeta / jarakSebenarnya) * jarakSebenarnya;

// bangun datar

export const luasPersegi = (sisi: number): number => sisi * sisi;

export const kelilingPersegi = (sisi: number): number => sisi * 4;

export const luasPersegiPanjang = (panjang: number, lebar: number): number => panjang * lebar;

export const kelilingPersegiPanjang = (panjang: number, lebar: number): number => 2 * (panjang + lebar);

export const sin = (derajat: number): number => Math.sin(derajat * (Math.PI / 180));

export const cos = (derajat: number): number => Math.cos(derajat * (Math.PI / 180));

export const tan = (derajat: number): number => Math.tan(derajat * (Math.PI / 180));

export const asin = (nilai: number): number => Math.asin(nilai) * (180 / Math.PI);

export const acos = (nilai: number): number => Math.acos(nilai) * (180 / Math.PI);

export const atan = (nilai: number): number => Math.atan(nilai) * (180 / Math.PI);

export const rataRataArray = (arr: number[]): number => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
