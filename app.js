'use strict';
var CookieShop = function(Location, MinCust, MaxCust, AvgCookieSale, Hoursales, Total){
  this.Location = Location;
  this.MinCust = MinCust;
  this.MaxCust = MaxCust;
  this.AvgCookieSale = AvgCookieSale;
  this.Hoursales = [];
  this.Total = Total;
  this.customersEachHour = [];
  this.genCustomersEachHour();
  this.genCookiesPerHour();

};
CookieShop.prototype.genCustomersEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.customersEachHour.push(Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust);
  }
};
CookieShop.prototype.genCookiesPerHour = function(){
  for(var i = 0; i < 15; i++){
    this.Hoursales.push(Math.ceil(this.customersEachHour[i] * this.AvgCookieSale));
    this.Total += this.Hoursales[i];
    if (i === 14)
      this.Hoursales.push(this.Total);
  }
};
function genListsCookies(storeObj){
  var CookieShop = document.getElementById('list-container');
  var liEle;
  var strBuilder = '';
  var hour;
  var tempul = document.createElement('ul');
  var hVar = document.createElement('h2');
  hVar.textContent = storeObj.Location + ' Cookies per Hour';
  tempul.appendChild(hVar);
  for (var j = 0; j < storeObj.Hoursales.length; j++ ){
    liEle = document.createElement('li');
    console.log('test');
    strBuilder = '';
    hour = j + 6;
    if (hour >= 13)
      hour -= 12;
    strBuilder = hour +':' + '00 : ' + storeObj.Hoursales[j] + ' Cookies';
    liEle.textContent = strBuilder;
    tempul.appendChild(liEle);
  }
  CookieShop.appendChild(tempul);
}

function genListsCustomer(storeObj){
  var CookieShop = document.getElementById('list-container');
  var liEle;
  var strBuilder = '';
  var hour;
  var tempul = document.createElement('ul');
  var hVar = document.createElement('h2');
  hVar.textContent = storeObj.Location + ' Customers per Hour';
  tempul.appendChild(hVar);
  for (var j = 0; j < storeObj.customersEachHour.length; j++ ){
    liEle = document.createElement('li');
    console.log('test');
    strBuilder = '';
    hour = j + 6;
    if (hour >= 13)
      hour -= 12;
    strBuilder = hour +':' + '00 : ' + storeObj.customersEachHour[j] + ' Customers';
    liEle.textContent = strBuilder;
    tempul.appendChild(liEle);
  }
  CookieShop.appendChild(tempul);
}

function genTableCookies(storeObjArray){
  var CookieShop = document.getElementById('table-container');
  var tbEle, thEle, trEle, tdEle;
  var strBuilder = '';
  var hour;
  var period;
  tbEle = document.createElement('table');
  CookieShop.appendChild(tbEle);
  trEle = document.createElement('tr');
  tbEle.appendChild(trEle);
  thEle = document.createElement('th');
  thEle.textContent = 'Store Location';
  trEle.appendChild(thEle);
  for(var i = 0; i < 15; i++) {
    strBuilder = '';
    //if statements for am/pm
    //also added statements for total
    hour = i + 6;
    if (
      hour <= 12)
      period = 'AM';
    if (
      hour >= 12)
      period = 'PM';
    if (
      hour >= 13)
      hour -= 12;
    if ( i === storeObjArray[0].Hoursales.length-1){
      strBuilder = 'Total';
    }
    else {
      strBuilder = hour + ':00' + period;
    }

    strBuilder = hour + ':00' + period;
    thEle = document.createElement('th');
    thEle.textContent = strBuilder;
    trEle.appendChild(thEle);
  }
  strBuilder = ( i === storeObjArray[0].Hoursales.length-1);
  thEle = document.createElement('th');
  thEle.textContent = 'Total Cookies';
  trEle.appendChild(thEle);

  // Add table data
  for(var z = 0; z < storeObjArray.length; z++) {
    trEle = document.createElement('tr');
    // Appends store loctaion
    tdEle = document.createElement('td');
    tdEle.textContent = storeObjArray[z].Location;
    trEle.appendChild(tdEle);
    for(var j = 0; j < storeObjArray[0].Hoursales.length; j++) {
      // Build row of numbers
      tdEle = document.createElement('td');
      tdEle.textContent = storeObjArray[z].Hoursales[j] + ':' + ' Cookies';
      trEle.appendChild(tdEle);
    }
    tbEle.appendChild(trEle);
  }
}

var firstAndPike = new CookieShop('FirstAndPike', 23, 65, 6.3, [], 0);
var seaTacAirport = new CookieShop('SeaTacAirport', 3, 24, 1.2, [], 0);
var seattleCenter = new CookieShop('SeattleCenter', 11, 38, 3.7, [], 0);
var capitolHill = new CookieShop('CapitolHill', 20, 38, 2.3, [], 0);
var alki = new CookieShop('Alki', 2, 16, 4.6, [], 0);

var storeArray = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

genTableCookies(storeArray);
genListsCookies();
genListsCustomer();
