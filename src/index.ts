

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
