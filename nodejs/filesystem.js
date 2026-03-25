import fs from "fs";
import figlet from "figlet";

// fs.writeFileSync('Anil.txt', 'Hii');

// fs.writeFileSync('./Anil.txt', 'I am Anil Thakur');


// fs.writeFile("./Anil.txt", "Hi this is again  a context", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("file written successfully");
// });


figlet("ANIL THAKUR", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});