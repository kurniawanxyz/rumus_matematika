

const mean = (jumlahData:number,banyakData:number):number =>{
    return jumlahData/banyakData
}

const tambah=(...angka:number[]) => {
    const result = angka.reduce((prevdata,currentData)=>prevdata+currentData)
    return result
};

const kurang=(...angka:number[])=>{
    const result = angka.reduce((prevdata,currentData)=>prevdata-currentData)
    return result
}

const bagi=(angka1:number,angka2:number)=>{
    return angka1/angka2
}

const kali=(angka1:number,angka2:number)=>{
    return angka1*angka2
}

const pangkat=(angka:number,pangkat:number)=>{
    return angka**pangkat
}

const luasPersegi= (sisi:number) =>{
    return sisi*sisi
}

const luasPersegiPanjang= (panjang:number,lebar:number) =>{
    return panjang*lebar
}

const kecepatan=(jarak:number,waktu:number)=>{
    return bagi(jarak,waktu)
}

const jarak=(kecepatan:number,waktu:number)=>{
    return kali(kecepatan,waktu)
}

const waktuKecepatan=(jarak:number,kecepatan:number)=>{
    return bagi(jarak,kecepatan)
}

const debit=(volume:number,waktu:number)=>{
    return bagi(volume,waktu)
}

const volume=(debit:number,waktu:number)=>{
    return kali(debit,waktu)
}

const waktuDebit=(debit:number,kecepatan:number)=>{
    return bagi(debit,kecepatan)
}

