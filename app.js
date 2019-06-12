'use strict';

var cookieShop = function(Location, MinCust, MaxCust, AvgCookieSale, Hoursales, Total){
  this.Location = Location;
  this.MinCust = MinCust;
  this.MaxCust = MaxCust;
  this.AvgCookieSale = AvgCookieSale;
  this.Hoursales = Hoursales;
  this.Total = Total;

}
cookieShop.prototype.calculateCustomersPerOneHour = function() {
  var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
  return customers;
};
cookieShop.prototype.calculateTotalsPerHour = function() {
  for (var i = 0; i < 15; i++){
    var totalInOneHour = this.calculateCookiesSoldInOneHour = function() {
      this.Hoursales.push(totalInOneHour);
      this.total += totalInOneHour;
    };
cookieShop.prototype.calculateCookiesSoldInOneHour = function() {
  var customersInAnHour = this.AvgCookieSale * this.calculateCustomersPerOneHour();
    return Math.ceil(customersInAnHour);
    };
cookieShop.prototype.renderList = function() {
  var cookieShopUlEl = document.getElementById('list-container');
      var cookieShopLiEl = document.createElement('li');
      var ulEl = document.createElement('ul');
      var hour = 0;
  
      for (var j = 0; j < 15; j++ ){
        hour = j + 6;
        if (hour >= 13)
          hour += -12;
        var hourLiEl = document.createElement('li');
        var hourText = '' + hour +':' + '00 : ';
        hourText = hourText.padStart(5, '0');
        hourLiEl.textContent = '' + hourText + this.calculateCookiesSoldInOneHour() + ' Cookies';
        ulEl.appendChild(hourLiEl);

        cookieShopLiEl.appendChild(ulEl);
        cookieShopUlEl.appendChild(firstandpikeLiEl);
    
      };
    var firstAndPike = new cookieShop('FirstAndPike', 23, 65, 6.3, [], 0)
    var seaTacAirport = new cookieShop('SeaTacAirport', 3, 24, 1.2, [], 0)
    var seattleCenter = new cookieShop('SeattleCenter', 11, 38, 3.7, [], 0)
    var capitolHill = new cookieShop('CapitolHill', 20, 38, 2.3, [], 0)
    var alki = new cookieShop('Alki', 2, 16, 4.6, [], 0)
  
  firstAndPike.calculateCustomersPerOneHour();
  seaTacAirport.calculateCustomersPerOneHour();
  seattleCenter.calculateCustomersPerOneHour();
  capitolHill.calculateCustomersPerOneHour();
  alki.calculateCustomersPerOneHour();
  
  firstAndPike.calculateCookiesSoldInOneHour();
  seaTacAirport.calculateCookiesSoldInOneHour();
  seattleCenter.calculateCookiesSoldInOneHour();
  capitolHill.calculateCookiesSoldInOneHour();
  alki.calculateCookiesSoldInOneHour();
  
  firstAndPike.calculateTotalsPerHour();
  seaTacAirport.calculateTotalsPerHour();
  seattleCenter.calculateTotalsPerHour();
  capitolHill.calculateTotalsPerHour();
  alki.calculateTotalsPerHour();

  firstAndPike.renderList();
  seaTacAirport.renderList();
  seattleCenter.renderList();
  capitolHill.renderList();
  alki.calculateTotalsPerHour();

};
  
  //store one
  
  
//   var firstAndPike = {
//     Location: '1standPike',
//     MinCust: 23,
//     MaxCust: 65,
//     AvgCookieSale: 6.3,
//     Hoursales: [],
//     Total: 0,
  
//     //store one math for customers per hour
//     calculateCustomersPerOneHour: function() {
//       var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
//       return customers;
//     },
//     //store one cookies sold in one hour function
//     calculateCookiesSoldInOneHour: function(){
//       //multiply amount of customers by average amount of cookies
//       var customersInAnHour = this.AvgCookieSale * this.calculateCustomersPerOneHour();
//       return Math.ceil(customersInAnHour);
//     },
//     //for loop for total
//     calculateTotalsPerHour: function(){
//       for (var i = 0; i < 15; i++){
//         var totalInOneHour = this.calculateCookiesSoldInOneHour();
//         this.Hoursales.push(totalInOneHour);
//         this.total += totalInOneHour;
  
//       }
//       this.total - this.total;
//       console.log(this.totalsperhour);
//     },
//     //Putting the list on the page
//     renderList: function(){
//       var firstandpikeUlEl = document.getElementById('list-container');
//       var firstandpikeLiEl = document.createElement('li');
//       var ulEl = document.createElement('ul');
//       var hour = 0;
  
//       for (var j = 0; j < 15; j++ ){
//         hour = j + 6;
//         if (hour >= 13)
//           hour += -12;
//         var hourLiEl = document.createElement('li');
//         var hourText = '' + hour +':' + '00 : ';
//         hourText = hourText.padStart(5, '0');
//         hourLiEl.textContent = '' + hourText + this.calculateCookiesSoldInOneHour() + ' Cookies';
//         ulEl.appendChild(hourLiEl);
  
//         firstandpikeLiEl.appendChild(ulEl);
//         firstandpikeUlEl.appendChild(firstandpikeLiEl);
//       }
//     }
//   };
//   firstAndPike.calculateCustomersPerOneHour();
//   firstAndPike.renderList();

// //store two
// var seaTacAirport = {
//   Location: 'SeaTacAirport',
//   MinCust: 3,
//   MaxCust: 24,
//   AvgCookieSale: 1.2,
//   Hoursales: [],
//   Total: 0,
//   //store two math for customers per hour
//   calculateCustomersPerOneHour: function() {
//     var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
//     return customers;
//   },
//   //store two cookies sold in one hour
//   calculateCookiesSoldInOneHour: function(){
//   //multiply amount of customers by average amount of cookies
//     var customersInAnHour = this.AvgCookieSale * this.calculateCustomersPerOneHour();
//     return Math.ceil(customersInAnHour);
//   },

//   calculateTotalsPerHour: function(){
//   for (var i = 0; i < 15; i++){
//     var totalInOneHour = this.calculateCookiesSoldInOneHour();
//     this.Hoursales.push(totalInOneHour);
//     this.total += totalInOneHour;

//   }
//   this.total - this.total;
//   console.log(this.totalsperhour);
//   },
//   //Rendering the list on the page
//   renderList: function(){
//     var seatacairportUlEl = document.getElementById('list-container');
//     var seatacairportLiEl = document.createElement('li');
//     var ulEl = document.createElement('ul');
//     var hour = 0;

//     for (var j = 0; j < 15; j++ ){
//       hour = j + 6;
//       if (hour >= 13)
//         hour += -12;
//       var hourLiEl = document.createElement('li');
//       var hourText = '' + hour +':' + '00 : ';
//       hourText = hourText.padStart(5, '0');
//       hourLiEl.textContent = '' + hourText + this.calculateCookiesSoldInOneHour() + ' Cookies';
//       ulEl.appendChild(hourLiEl);

//       seatacairportLiEl.appendChild(ulEl);
//       seatacairportUlEl.appendChild(seatacairportLiEl);
//     }
//   }
// };
// seaTacAirport.calculateCustomersPerOneHour();
// seaTacAirport.renderList();

// //store three
// var seattlCenter = {
//   Location: 'SeattleCenter',
//   MinCust: 11,
//   MaxCust: 38,
//   AvgCookieSale: 3.7,
//   Hoursales: [],
//   Total: 0,
//   //store three math for customers per hour
//   calculateCustomersPerOneHour: function() {
//     var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
//     return customers;
//   },
//   //store three cookies sold in one hour
//   calculateCookiesSoldInOneHour: function(){
//   //multiply amount of customers by average amount of cookies
//     var customersInAnHour = this.AvgCookieSale * this.calculateCustomersPerOneHour();
//     return Math.ceil(customersInAnHour);
//   },

//   calculateTotalsPerHour: function(){
//     for (var i = 0; i < 15; i++){
//       var totalInOneHour = this.calculateCookiesSoldInOneHour();
//       this.Hoursales.push(totalInOneHour);
//       this.total += totalInOneHour;

//     }
//     this.total - this.total;
//     console.log(this.totalsperhour);
//   },
//   //Rendering the list on the page
//   renderList: function(){
//     var seattlecenterUlEl = document.getElementById('list-container');
//     var seattlecenterLiEl = document.createElement('li');
//     var ulEl = document.createElement('ul');
//     var hour = 0;

//     for (var j = 0; j < 15; j++ ){
//       hour = j + 6;
//       if (hour >= 13)
//         hour += -12;
//       var hourLiEl = document.createElement('li');
//       var hourText = '' + hour +':' + '00 : ';
//       hourText = hourText.padStart(5, '0');
//       hourLiEl.textContent = '' + hourText + this.calculateCookiesSoldInOneHour() + ' Cookies';
//       ulEl.appendChild(hourLiEl);

//       seattlecenterLiEl.appendChild(ulEl);
//       seattlecenterUlEl.appendChild(seattlecenterLiEl);
//     }
//   }
// };
// seattlCenter.calculateCustomersPerOneHour();
// seattlCenter.renderList();

// //store four
// var capitolHill = {
//   Location: 'CapitolHill',
//   MinCust: 20,
//   MaxCust: 38,
//   AvgCookieSale: 2.3,
//   Hoursales: [],
//   Total: 0,
//   //store three math for customers per hour
//   calculateCustomersPerOneHour: function() {
//     var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
//     return customers;
//   },
//   //store three cookies sold in one hour
//   calculateCookiesSoldInOneHour: function(){
//   //multiply amount of customers by average amount of cookies
//     var customersInAnHour = this.AvgCookieSale * this.calculateCustomersPerOneHour();
//     return Math.ceil(customersInAnHour);
//   },

//   calculateTotalsPerHour: function(){
//     for (var i = 0; i < 15; i++){
//       var totalInOneHour = this.calculateCookiesSoldInOneHour();
//       this.Hoursales.push(totalInOneHour);
//       this.total += totalInOneHour;

//     }
//     this.total - this.total;
//     console.log(this.totalsperhour);
//   },
//   //Rendering the list on the page
//   renderList: function(){
//     var capitolhillUlEl = document.getElementById('list-container');
//     var capitolhillLiEl = document.createElement('li');
//     var ulEl = document.createElement('ul');
//     var hour = 0;

//     for (var j = 0; j < 15; j++ ){
//       hour = j + 6;
//       if (hour >= 13)
//         hour += -12;
//       var hourLiEl = document.createElement('li');
//       var hourText = '' + hour +':' + '00 : ';
//       hourText = hourText.padStart(5, '0');
//       hourLiEl.textContent = '' + hourText + this.calculateCookiesSoldInOneHour() + ' Cookies';
//       ulEl.appendChild(hourLiEl);

//       capitolhillLiEl.appendChild(ulEl);
//       capitolhillUlEl.appendChild(capitolhillLiEl);
//     }
//   }
// };
// capitolHill.calculateCustomersPerOneHour();
// capitolHill.renderList();

// //store five
// var alki = {
//   Location: 'Alki',
//   MinCust: 2,
//   MaxCust: 16,
//   AvgCookieSale: 4.6,
//   Hoursales: [],
//   Total: 0,
//   //store three math for customers per hour
//   calculateCustomersPerOneHour: function() {
//     var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
//     return customers;
//   },
//   //store three cookies sold in one hour
//   calculateCookiesSoldInOneHour: function(){
//   //multiply amount of customers by average amount of cookies
//     var customersInAnHour = this.AvgCookieSale * this.calculateCustomersPerOneHour();
//     return Math.ceil(customersInAnHour);
//   },

//   calculateTotalsPerHour: function(){
//     for (var i = 0; i < 15; i++){
//       var totalInOneHour = this.calculateCookiesSoldInOneHour();
//       this.Hoursales.push(totalInOneHour);
//       this.total += totalInOneHour;

//     }
//     this.total - this.total;
//     console.log(this.totalsperhour);
//   },
//   //Rendering the list on the page
//   renderList: function(){
//     var alkiUlEl = document.getElementById('list-container');
//     var alkiLiEl = document.createElement('li');
//     var ulEl = document.createElement('ul');
//     var hour = 0;

//     for (var j = 0; j < 15; j++ ){
//       hour = j + 6;
//       if (hour >= 13)
//         hour += -12;
//       var hourLiEl = document.createElement('li');
//       var hourText = '' + hour +':' + '00 : ';
//       hourText = hourText.padStart(5, '0');
//       hourLiEl.textContent = '' + hourText + this.calculateCookiesSoldInOneHour() + ' Cookies';
//       ulEl.appendChild(hourLiEl);

//       alkiLiEl.appendChild(ulEl);
//       alkiUlEl.appendChild(alkiLiEl);
//     }
//   }
// };
// alki.calculateCustomersPerOneHour();
// alki.renderList();
