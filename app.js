'use strict';

//store one


var firstAndPike = {
  Location: '1standPike',
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  Hoursales: [],
  Total: 0,

  //store one math for customers per hour
  calculateCustomersPerOneHour: function() {
    var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
    console.log(customers);
    return customers;
  },
  //store one cookies sold in one hour function
  calculateCookiesSoldInOneHour: function(){
    //multiply amount of customers by average amount of cookies
    var customersInAnHour = this.AvgCookieSale * this.calculateCustomersPerOneHour();
    return Math.ceil(customersInAnHour);
  },
  //for loop for total
  calculateTotalsPerHour: function(){
    for (var i = 0; i < 15; i++){
      var totalInOneHour = this.calculateCookiesSoldInOneHour();
      this.Hoursales.push(totalInOneHour);
      this.total += totalInOneHour;

    }
    this.total - this.total;
    console.log(this.totalsperhour);
  },
  //Putting the list on the page
  renderList: function(){
    var firstandpikeUlEl = document.getElementById('list-container');
    var firstandpikeLiEl = document.createElement('li');
    var ulEl = document.createElement('ul');

    for (var j = 0; j < this.Hoursales.length; j++ );
    var hourLiEl = document.createElement('li');
    var hour = '' + 6 + '00 ';
    hour = hour.padStart(5, '0');
    hourLiEl.textContent = '' + hour + this.Hoursales[0] + ' cookies';
    console.log('' + hour + this.Hoursales[0] + ' cookies');
    hourLiEl.textContent = 'hi';
    ulEl.appendChild(hourLiEl);


    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'total : ' + this.total;
    ulEl.appendChild(totalLiEl);

    firstandpikeLiEl.appendChild(ulEl);

    firstandpikeUlEl.appendChild(firstandpikeLiEl);
  }
};
firstAndPike.calculateCustomersPerOneHour();

// var firstandpikeUlEl = document.getElementById('list-container');
// var firstandpikeLiEl = document.createElement('li');
// firstandpikeLiEl.textContent = 'Anything';
// firstandpikeUlEl.appendChild(firstandpikeLiEl);







//store two
var seatacairport = {
  Location: 'SeaTacAirport',
  MinCust: 3,
  MaxCust: 24,
  AvgCookieSale: 1.2,
  Hoursales: [],
};
//math for customers per hour
seatacairport.calculatecustomersperhour = function() {
  var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;

  return customers;
};

//store three
var seattlecenter = {
  Location: 'SeattleCenter',
  MinCust: 11,
  MaxCust: 38,
  AvgCookieSale: 3.7,
  Hoursales: [],
};
//math for customers per hour
seattlecenter.calculatecustomersperhour = function() {
  var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;

  return customers;
};

//store four
var capitolhill = {
  Location: 'CapitolHill',
  MinCust: 20,
  MaxCust: 38,
  AvgCookieSale: 2.3,
  Hoursales: [],
};
//math for customers per hour
capitolhill.calculatecustomersperhour = function() {
  var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;

  return customers;
};

//store five
var alki = {
  Location: 'Alki',
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6,
  Hoursales: [],
};
//math for customers per hour
alki.calculatecustomersperhour = function() {
  var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;

  return customers;
};
