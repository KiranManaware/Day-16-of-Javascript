// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const printNumbers = () => {
//   setTimeout(() => {
//     numbers.forEach((num) => console.log("print : ", num));
//   }, 1000);
// };


// const workDone = () => {
//     setTimeout(() => {
//         console.log( "Work Done!!!");
//     }, 2000);
// };

// const addNumber = (num) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             numbers.push(num);
//             let err=true;
//             if(err){
//                 resolve();
//             }
//             else{
//                 reject("Promise reject!");
//             }
//         },1500)
//     })
// };

// addNumber(1200).then(printNumbers).then(workDone);


//  Async/Await and try catch
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printNumbers = () => {
  setTimeout(() => {
    numbers.forEach((num) => console.log("print : ", num));
  }, 1000);
};


const workDone = () => {
    setTimeout(() => {
        console.log( "Work Done!!!");
    }, 2000);
};

const addNumber = (num) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            numbers.push(num);
            let err=false;
            if(err){
                resolve();
            }
            else{
                reject("Promise reject!");
            }
        },1500)
    })
};

const init=async()=>{
    try{
        await addNumber(1200);
        printNumbers();
        workDone();
    }
    catch(error){
        console.log(error);
    }
}
init();