// function sayHi(name,cb,cb2){
//     setTimeout(() => {
//        console.log(`Hi ${name}`);
//        cb();
//        cb2();
//     },5000);
    
// }
  


// function bye(){
//     console.log("Bye")
// }

// function sayBye(){
//     console.log("firmilenge")
// }



// sayHi("Anil", bye, sayBye)
// //bye()


function makeMaggi(raw, cb) {
  console.log(`start making maggi, ${raw}`);
  cb();
}

function waterBoil(cb) {
  console.log("water boiled add magii and masala");
  cb();
}

function serve(cb) {
  console.log("maggi ready for serve");
  cb()
}

makeMaggi("yapee", () => {
  waterBoil(() => {
    serve(() => {
      console.log("maggii process is done");
    });
  });
});