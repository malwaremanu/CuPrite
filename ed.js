function de(x) {
    var decrypted = CryptoJS.AES.decrypt(x, CryptoJS.enc.Utf8.parse("PoncU&*()/12345aPoncU&*()/12345a"), {
      mode: CryptoJS.mode.ECB,
    })
    decrypted = decrypted.toString(CryptoJS.enc.Utf8)      
    this.orig = decrypted
    return decrypted
  }


function en(x) {
  var encrypted = CryptoJS.AES.encrypt(JSON.stringify(x), CryptoJS.enc.Utf8.parse("PoncU&*()/12345aPoncU&*()/12345a"), {
    mode: CryptoJS.mode.ECB,
  })
  encrypted = encrypted.toString()      
  this.txt.data = encrypted
  return encrypted
}

export default en;