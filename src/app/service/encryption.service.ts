import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private key: string = 'SaU%%Encrypto608!*&SenhaCrypt#!@$';

  constructor() { }

  createDESCipher(text: string): string {
    const keyUtf8 = CryptoJS.enc.Utf8.parse(this.key);
    const encrypted = CryptoJS.DES.encrypt(text, keyUtf8, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }
}