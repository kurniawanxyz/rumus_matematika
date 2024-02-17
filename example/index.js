import { MatematikaDasar, Fisika, VolumeDebit, PetaSkala, Trigonometri, Statistik } from "../lib/index";

// Contoh penggunaan MatematikaDasar
const matematika = new MatematikaDasar();
console.log(matematika.tambah(5, 3)); // Menambahkan 5 + 3
console.log(matematika.kurang(10, 4)); // Mengurangi 10 - 4
console.log(matematika.kali(6, 7)); // Mengalikan 6 * 7
console.log(matematika.bagi(8, 2)); // Membagi 8 / 2

// Contoh penggunaan Fisika
const fisika = new Fisika();
console.log(fisika.kecepatan(100, 2)); // Menghitung kecepatan dengan jarak 100 dan waktu 2
console.log(fisika.jarak(50, 2)); // Menghitung jarak dengan kecepatan 50 dan waktu 2
console.log(fisika.waktuKecepatan(100, 50)); // Menghitung waktu dengan jarak 100 dan kecepatan 50

// Contoh penggunaan VolumeDebit
const volumeDebit = new VolumeDebit();
console.log(volumeDebit.debit(100, 2)); // Menghitung debit dengan volume 100 dan waktu 2
console.log(volumeDebit.volume(50, 2)); // Menghitung volume dengan debit 50 dan waktu 2
console.log(volumeDebit.waktuDebit(100, 50)); // Menghitung waktu dengan debit 100 dan kecepatan 50

// Contoh penggunaan PetaSkala
const petaSkala = new PetaSkala();
console.log(petaSkala.skala(1, 100000)); // Menghitung skala peta dengan jarak pada peta 1 dan jarak sebenarnya 100000
console.log(petaSkala.jarakSebenarnya(1, 100000)); // Menghitung jarak sebenarnya dari skala peta
console.log(petaSkala.jarakPadaPeta(1, 100000)); // Menghitung jarak pada peta dari jarak sebenarnya

// Contoh penggunaan Trigonometri
const trigonometri = new Trigonometri();
console.log(trigonometri.sin(30)); // Menghitung nilai sinus dari sudut 30 derajat
console.log(trigonometri.cos(60)); // Menghitung nilai cosinus dari sudut 60 derajat
console.log(trigonometri.tan(45)); // Menghitung nilai tangen dari sudut 45 derajat
console.log(trigonometri.asin(0.5)); // Menghitung nilai arcsin dari 0.5
console.log(trigonometri.acos(0.5)); // Menghitung nilai arccos dari 0.5
console.log(trigonometri.atan(1)); // Menghitung nilai arctan dari 1

// Contoh penggunaan Statistik
const statistik = new Statistik();
console.log(statistik.rataRataArray([1, 2, 3, 4, 5])); // Menghitung rata-rata dari array [1, 2, 3, 4, 5]
