export default ({ app }, inject) => {
    var CryptoJS = require('crypto-js') 
    inject('de', y => JSON.parse(CryptoJS.AES.decrypt(y, CryptoJS.enc.Utf8.parse("PoncU&*()/12345aPoncU&*()/12345a"), {mode: CryptoJS.mode.ECB,}).toString(CryptoJS.enc.Utf8)))
    //inject('de', y => CryptoJS.AES.decrypt(y, CryptoJS.enc.Utf8.parse("PoncU&*()/12345aPoncU&*()/12345a"), {mode: CryptoJS.mode.ECB,}).toString(CryptoJS.enc.Utf8))
}