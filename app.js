'use strict';

var firstandpike = {
  Location: '1standPike',
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  Hoursales: new Array(15),
  GetCustPerHour: function() {
    return Math.random() * (this.MaxCust - this.MinCust) + this.MinCust * AvgCookieSale;
  }
};

var seatacairport = {
  Location: 'SeaTacAirport',
  MinCust: 3,
  MaxCust: 24,
  AvgCookieSale: 1.2,
  GetCustPerHour: function() {
    return Math.random() * (this.MaxCust - this.MinCust) + this.MinCust * AvgCookieSale;
  }
};

var seattlecenter = {
  Location: 'SeattleCenter',
  MinCust: 11,
  MaxCust: 38,
  AvgCookieSale: 3.7
  GetCustPerHour: function() {
    return Math.random() * (this.MaxCust - this.MinCust) + this.MinCust * AvgCookieSale;
  }
};

var capitolhill = {
  Location: 'CapitolHill',
  MinCust: 20,
  MaxCust: 38,
  AvgCookieSale: 2.3
  GetCustPerHour: function() {
    return Math.random() * (this.MaxCust - this.MinCust) + this.MinCust * AvgCookieSale;
  }
};

var alki = {
  Location: 'Alki',
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6
  GetCustPerHour: function() {
    return Math.random() * (this.MaxCust - this.MinCust) + this.MinCust * AvgCookieSale;
  }
};

//started to build fucntion for the loop but got a little confused
firstandpike.GetHourSales.length() ;
var total = 0
for (i = 0; i < firstandpike.Hoursales.length; i++) {
  total = total+ firstandpike.Hoursales[1];
  hour = i+6;
  if (hour >= 13)
  hour = hour-12;
  if (i < 6) {
  }
}

