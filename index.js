const encryptor = require("file-encryptor");

const options = { algorithm: "aes192" };
const fileName = "test.txt";
const cryptedFileName = "crypted_test.txt";
const KEY = "aabsdiyqgwbxnxnqiwxnqixqwq";

// encryptor.encryptFile(fileName, cryptedFileName, KEY, options, err => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Encrypt: Success");
// });

encryptor.decryptFile(cryptedFileName, fileName, KEY, options, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Decrypt: Success");
});
