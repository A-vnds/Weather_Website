Vue.component("addicon", {
    props:["weather"],
    template: '<i :class="icon"></i>',
    data() {
        return {
            icon: this.changeClass(this.weather)
        }
    },
    methods: {
        changeClass: function(parameter){
            var weather;
            if (parameter == "scattered clouds") {
                weather = "wi wi-cloudy-windy"
            } else if (parameter == "light rain") {
                weather = "wi wi-day-showers"
            } else if (parameter == "few clouds" || parameter == "broken clouds") {
                weather = "wi wi-day-cloudy"
            } else if (parameter == "sunny day" || parameter == "sunny"){
                weather = "wi wi-day-sunny"
            } else if (parameter == "overcast clouds") {
                weather = "wi wi-cloudy"
            } 
            return weather;
          }
        }, 
})

var app = new Vue({
    el: "#vue-app",
    data: {
        cities: [],
        photos: [],  
        colors: ["rgba(214, 69, 65, 0.9)","rgba(102, 204, 153, 0.9)","rgba(52, 73, 94, 0.9)","rgba(242, 121, 53, 0.9)","rgba(115, 101, 152, 0.9)","rgba(1, 152, 117, 0.9)","rgba(192, 57, 43, 0.9)","rgba(37, 116, 169, 0.9)","rgba(102, 51, 153, 0.9)","rgba(242, 120, 75, 0.9)","rgba(36, 37, 42, 0.9)","rgba(210, 82, 127, 0.9)","rgba(150, 40, 27, 0.9)","rgba(30, 130, 76, 0.9)","rgba(244, 208, 63, 0.9)","rgba(211, 84, 0, 0.9)","rgba(46, 49, 49, 0.9)","rgba(149, 165, 166, 0.9)","rgba(26, 188, 156, 0.9)", "rgba(46, 204, 113, 0.9)", "rgba(52, 152, 219, 0.9)", "rgba(155, 89, 182, 0.9)", "rgba(59, 86, 113, 0.9)", "rgba(22, 160, 133, 0.9)", "rgba(39, 174, 96, 0.9)", "rgba(28, 128, 193, 0.9)", "rgba(139, 83, 162, 0.9)", "rgba(75, 165, 165, 0.9)", "rgba(159, 133, 32, 0.9)", "rgba(230, 126, 34, 0.9)", "rgba(231, 76, 60, 0.9)", "rgba(203, 119, 193, 0.9)", "rgba(149, 165, 166, 0.9)", "rgba(243, 156, 18, 0.9)", "rgba(211, 84, 0, 0.9)", "rgba(190, 82, 71, 0.9)", "rgba(116, 129, 137, 0.9)", "rgba(107, 203, 211, 0.9)","rgba(41, 128, 185, 0.9)","rgba(179, 57, 57, 0.9)","rgba(34, 112, 147, 0.9)","rgba(5, 196, 107, 0.9)","rgba(241, 169, 160, 0.9)","rgba(3, 201, 169, 0.9)","rgba(37, 116, 169, 0.9)","rgba(83, 51, 237, 0.9)","rgba(24, 44, 97, 0.9)"],
        search: '',
        celcius: true,
        fahrenheit: false,
        
    },
    
    created: function () {
        this.getData();
        this.getPhotos()
    },
    
    computed: {
        filteredCities: function(){
            return this.cities.filter((city) => {
                return city.name.toLowerCase().indexOf(this.search.toLowerCase())>=0;
                });
            }
        },
        
     methods: {
        
        getData: function () {
            fetch("https://api.myjson.com/bins/i8run", {
                    method: "GET",
                    headers: {
                    
                    }
                })
                .then(response => response.json())
                .then(json => {
                    data = json;
                    app.cities = data.list;
                    
                })
                .catch(error => error)
        },
         
         getPhotos: function () {
            fetch("https://pixabay.com/api/?key=10772849-8270b213e517e422b036ea0fd&q=city", {
                    method: "GET",
                    headers: {
                    
                    }
                })
                .then(response => response.json())
                .then(json => {
                    data = json;
                    app.photos = data.hits;
                    
                })
                .catch(error => error)
        },
         
         
         changeColor: function () {
             return this.colors[Math.floor(Math.random()*this.colors.length)];
             },
         
         
         
         convertToFah: function (degree) {
             return Math.round((degree * 9/5) + 32);
         },
         
         changeDegDisplay: function (){
             
             this.celcius = !this.celcius;
             this.fahrenheit = !this.fahrenheit;
             
             
             
         },
         
     
     }
        
})




                   
                   
                   
//
//    
//    
//    
//    
//Scattered Clouds class="wi wi-cloudy-windy"
//Light Rain class="wi wi-day-showers"
//Few Clouds class="wi wi-day-cloudy"
//Overcast Clouds class="wi wi-cloudy"
//Sunny Day class="wi wi-day-sunny"
//Broken Clouds class="wi wi-day-cloudy"
//    
//    
//    wi-day-cloudy-windy, wi-cloudy, wi-cloudy-windy wi-rain wi-showers
//    
//})

//function convert(degree) {
//    var x;
//    if (degree == "C") {
//        x = document.getElementById("c").value * 9 / 5 + 32;
//        document.getElementById("f").value = Math.round(x);
//    } else {
//        x = (document.getElementById("f").value -32) * 5 / 9;
//        document.getElementById("c").value = Math.round(x);
//    }
//}

//
//Vue.component("changeColours", {
//    data: {
//       
//        colours: ["#d64541","#66cc99","#34495e","#f27935","#736598","#019875","#c0392b","#2574a9","#663399","#f2784b","#24252a","#d2527f","#9628b","#1e824c","#f4d03f","#d35400","#2e3131","#95a5a6"],
//        
//        backgroundColor:'',
//      
//    },
//    
//     methods: {
//    
//    changeColour: function () {
//             var colour = this.colors[Math.floor(Math.random()*this.colors.length)];
//             return this.backgroundColor = colour;
//
//             },
//         }
//        
//    
//})
//
//





