

const mean = (jumlahData:number,banyakData:number):number =>{
    return jumlahData/banyakData
}

const tambah=(...angka:number[]) => {
    const result = angka.reduce((prevdata,currentData)=>prevdata+currentData)
    return result
};
