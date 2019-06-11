'use strict';

//store one
var firstandpike = {
  Location: '1standPike',
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  Hoursales: [],
};
//store one math for customers per hour
firstandpike.calculatecustomersperonehour = function() {
  var customers = Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;

  return customers;
};
//store one cookies sold in one hour function
firstandpike.calculatecookiessoldinonehour = function(){
  //multiply amount of customers by average amount of cookies
  var customersinanhour = this.AvgCookieSale * customersinanhour;
  var cookies = this.AvgCookieSale * customersinanhour;
  return Math.ceil(cookies);
};
//for loop for total
firstandpike.calculatetotalsperhour = function(){
  var total = 0;
  for (var i = 0; i < 15; i++){
    var totalinonehour = this.calculatecookiessoldinonehour();
    this.totalsperhour.push(totalinonehour);
    total += totalinonehour;
  }
  this.total - total;
  console.log(this.totalsperhour);
};

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
