import fs from "fs";

// fs.writeFileSync('Anil.txt', 'Hii');

// fs.writeFileSync('./Anil.txt', 'I am Anil Thakur');


fs.writeFile("./Anil.txt", "Hi this is again  a context", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("file written successfully");
});