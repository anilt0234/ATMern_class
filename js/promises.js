// const res = fetch("https://jsonplaceholder.typicode.com/users/")
// .then((res)=>res.json())
// .catch((err)=>console.log(err));
// console.log(res);



async function Anil() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log( error);
    }
}
Anil();