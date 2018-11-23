var app = new Vue({
    el: "#vue-app",
    data: {
        cities: [],
        photos: [],
        colors: ["#d64541","#66cc99","#34495e","#f27935","#736598","#019875","#c0392b","#2574a9","#663399","#f2784b","#24252a","#d2527f","#96281b","#1e824c","#f4d03f","#d35400","#2e3131","#95a5a6","#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"],
        search: '',
        
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
         }
        
 
})


//
//Vue.component("changeColours", {
//    data: {
//       
//        colours: ["#d64541","#66cc99","#34495e","#f27935","#736598","#019875","#c0392b","#2574a9","#663399","#f2784b","#24252a","#d2527f","#96281b","#1e824c","#f4d03f","#d35400","#2e3131","#95a5a6"],
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





