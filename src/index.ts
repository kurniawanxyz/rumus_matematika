export const mean = (jumlahData:number,banyakData:number):number =>{
    return jumlahData/banyakData
}

export const tambah=(...angka:number[]) => {
    const result = angka.reduce((prevdata,currentData)=>prevdata+currentData)
    return result
};

export const kurang=(...angka:number[])=>{
    const result = angka.reduce((prevdata,currentData)=>prevdata-currentData)
    return result
}

export const bagi=(angka1:number,angka2:number)=>{
    return angka1/angka2
}

export const kali=(angka1:number,angka2:number)=>{
    return angka1*angka2
}

export const pangkat=(angka:number,pangkat:number)=>{
    return angka**pangkat
}


export const kecepatan=(jarak:number,waktu:number)=>{
    return bagi(jarak,waktu)
}

export const jarak=(kecepatan:number,waktu:number)=>{
    return kali(kecepatan,waktu)
}

export const waktuKecepatan=(jarak:number,kecepatan:number)=>{
    return bagi(jarak,kecepatan)
}

export const debit=(volume:number,waktu:number)=>{
    return bagi(volume,waktu)
}

export const volume=(debit:number,waktu:number)=>{
    return kali(debit,waktu)
}

export const waktuDebit=(debit:number,kecepatan:number)=>{
    return bagi(debit,kecepatan)
}

export const skala=(jarakPadaPeta:number,jarakSebenarnya:number)=>{
    return `jarakPadaPeta : jarakSebenarnya`
}

export const jarakSebenarnya=(jarakPadaPeta:number,jarakSebenarnya:number)=>{
    return  jarakPadaPeta/(jarakPadaPeta/jarakSebenarnya)
}

export const jarakPadaPeta=(jarakPadaPeta:number,jarakSebenarnya:number)=>{
    return  (jarakPadaPeta/jarakSebenarnya)*jarakSebenarnya
}

// bangun datar

export const luasPersegi= (sisi:number) =>{
    return sisi*sisi
}

export const kelilingPersegi=(sisi:number)=>{
    return sisi*4;
}

export const luasPersegiPanjang= (panjang:number,lebar:number) =>{
    return panjang*lebar
}

export const kelilingPersegiPanjang=(panjang:number,lebar:number)=>{
    return (panjang*2)+(lebar*2)
}

export const sin = (derajat: number) => {
    return Math.sin(derajat * (Math.PI / 180));
}

export const cos = (derajat: number) => {
    return Math.cos(derajat * (Math.PI / 180));
}

export const tan = (derajat: number) => {
    return Math.tan(derajat * (Math.PI / 180));
}

export const asin = (nilai: number) => {
    return Math.asin(nilai) * (180 / Math.PI);
}

export const acos = (nilai: number) => {
    return Math.acos(nilai) * (180 / Math.PI);
}

export const atan = (nilai: number) => {
    return Math.atan(nilai) * (180 / Math.PI);
}
