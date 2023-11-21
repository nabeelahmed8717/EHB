
import { AES, enc } from "crypto-js";
export const handleEncryptData = (
  key: string,
  userData: any,
  secretKey: string
) => {
  const ciphertext = AES.encrypt(
    JSON.stringify(userData),
    secretKey
  ).toString();
  localStorage.setItem(key, ciphertext);
};

export const getDecryptedObject = (key: string, secretKey: string) => {
  const ciphertext = localStorage.getItem(key);
  if (ciphertext) {
    const bytes = AES.decrypt(ciphertext.toString(), secretKey);
    const decryptedData = bytes.toString(enc.Utf8);
    const jsonData = JSON.parse(decryptedData);
    //   const plaintext = bytes.toString(enc.Utf8);
    try {
      return jsonData;
    } catch (error) {
      console.error("Error parsing plaintext as JSON:", error);
      return null;
    }
  }
  return null;
};





