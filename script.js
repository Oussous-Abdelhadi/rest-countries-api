
const { createApp } = Vue

var body = document.querySelector('body');
var input = document.querySelector('input');

createApp({

  data() {
    return {
      message: 'Hello Vue!',
      pays : null,
      modal : false,
    }
  },


  methods : {

    input : function (e) {
      if (!e.target.value) {
        axios.get('https://restcountries.com/v3.1/all')
        .then(response => this.pays = response.data.sort(
          (a, b) =>  a.name.common.localeCompare(b.name.common)
          )
        )
      }
      else {
        axios.get(`https://restcountries.com/v3.1/name/${e.target.value}`)
        .then(response => this.pays = response.data.sort(
          (a, b) =>  a.name.common.localeCompare(b.name.common)
          ))
      }
    },

    region : function (e) {
      if (e.target.value == "all") {
        axios.get('https://restcountries.com/v3.1/all')
        .then(response => this.pays = response.data.sort(
          (a, b) =>  a.name.common.localeCompare(b.name.common)
          )
        )
      } else {
        axios.get(`https://restcountries.com/v3.1/region/${e.target.value}`)
        .then(response => this.pays = response.data.sort(
          (a, b) =>  a.name.common.localeCompare(b.name.common)
          ))

      }
    },

    parseNumber : function (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    
    details_pays : function (e) {
      console.log("my bad");
    },

    toggle() {
      this.modal = !this.modal;
      console.log("yes");
    }

  },


  created(){
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => this.pays = response.data.sort(
      (a, b) =>  a.name.common.localeCompare(b.name.common)
      )
    )
  }


}).mount('body')


