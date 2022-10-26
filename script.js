
const { createApp } = Vue
tab = ['laise', 'full', 'va reviser le quran c bn sah']

var body = document.querySelector('body');
var elements = document.querySelectorAll('.content__pays');
var input = document.querySelector('input');

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      tabs : tab,
      info: null,
      pays : null,
    }
  },
  methods : {

  },
  mounted(){
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => this.pays = response.data)
  }
}).mount('body')


