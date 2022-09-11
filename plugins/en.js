// export default ({ app }, inject) => {
//   var CryptoJS = require('crypto-js') 
//     inject('e', x => ( CryptoJS.AES.encrypt(JSON.stringify(x), CryptoJS.enc.Utf8.parse("PoncU&*()/12345aPoncU&*()/12345a"), {mode: CryptoJS.mode.ECB,}).toString())
//   }

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  var CryptoJS = require('crypto-js') 
  inject('en', msg => CryptoJS.AES.encrypt(JSON.stringify(msg), CryptoJS.enc.Utf8.parse("PoncU&*()/12345aPoncU&*()/12345a"), {mode: CryptoJS.mode.ECB,}).toString()      )
}


// enc(x) {     
//   CryptoJS.AES.encrypt(JSON.stringify(x), this.secret, {mode: CryptoJS.mode.ECB,}).toString()        
// },