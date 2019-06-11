'use strict';

var firstandpike = {
  Location: '1standPike',
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  Hoursales: new Array(15),
  GetCustPerHour: function() {
    return Math.random() * (this.MaxCust - this.MinCust) + this.MinCust * this.AvgCookieSale;
  }
};

var seatacairport = {
  Location: 'SeaTacAirport',
  MinCust: 3,
  MaxCust: 24,
  AvgCookieSale: 1.2,
  Hoursales: new Array(15),
  GetCustPerHour: function() {
    return Math.random() * (this.MaxCust - this.MinCust) + this.MinCust * this.AvgCookieSale;
  }
};

var seattlecenter = {
  Location: 'SeattleCenter',
  MinCust: 11,
  MaxCust: 38,
  AvgCookieSale: 3.7,
  Hoursales: new Array(15),
  GetCustPerHour: function() {
    return Math.random() * (this.MaxCust - this.MinCust) + this.MinCust * this.AvgCookieSale;
  }
};

var capitolhill = {
  Location: 'CapitolHill',
  MinCust: 20,
  MaxCust: 38,
  AvgCookieSale: 2.3,
  Hoursales: new Array(15),
  GetCustPerHour: function() {
    return Math.random() * (this.MaxCust - this.MinCust) + this.MinCust * this.AvgCookieSale;
  }
};

var alki = {
  Location: 'Alki',
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6,
  Hoursales: new Array(15),
  GetCustPerHour: function() {
    return Math.random() * (this.MaxCust - this.MinCust) + this.MinCust * this.AvgCookieSale;
  }
};

// //started to build fucntion for the loop but got a little confused
firstandpike.GetHourSales.length() ;
