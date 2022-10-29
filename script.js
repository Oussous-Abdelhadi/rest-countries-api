
const { createApp } = Vue

var body = document.querySelector('body');
var input = document.querySelector('input');

createApp({

  data() {
    return {
      message: 'Hello Vue!',
      pays : null,
      pays_detail : null,
      borders : [],
      borders_d : [],
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
    
    details_pays : function (pay) {
      this.borders = [];
      this.pays_detail = pay;
      if (pay.borders) {
        for (let index = 0; index < 3; index++) {
            this.borders.push(pay.borders[index]);
          };
      }

      this.borders_d = [];
      this.borders.forEach(element => {
        axios.get(`https://restcountries.com/v3.1/alpha/${element}`)
        .then(response => this.borders_d.push(response.data[0].name.common))
      });
    },
    show : function (e) {
      // console.log(e);
      var main = document.querySelector("main");
      var detail = document.querySelector(".container__details");
      var tab = [main, detail];
      tab.forEach(element => {
        if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
        }
        else {
          element.classList.add("hidden");
        }
        
      });
    },
    
    parseData : function (str) {
      var n = str.toString().replace(/_/g, "");
      return n;
    },

    
  },


  mounted(){
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => this.pays = response.data.sort(
      (a, b) =>  a.name.common.localeCompare(b.name.common)
      )
    )
  }


}).mount('body')


