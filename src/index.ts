

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

