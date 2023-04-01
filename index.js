var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

// declares / initialses the variables
var months = finances.length; //total items in array = total number of months 
var total = 0;
var change = 0;
var average;
var analysis;
var previousAmount = 0;
var netChangeSum = 0;
var least = ['', 9999999999999]; // smallest profit inc/dec
var greatest = ['', 0]; // largest profit inc/dec
var currentMonth;
var date;
var amount;

// finds the greatest profit increase (inc) and profit decrease (dec)
for (var i = 0; i < finances.length; i++) { //iterates through the finance array until it reaches the end
  currentMonth = finances[i]; // starts from the beginning when i=0
  date = currentMonth[0]; // date will be from beginning when i=0
  amount = currentMonth[1]; // to work out profit inc/dec it sets the amount to the following month
  total += amount; // adds the total to the amount to get the total amount
  if (i > 0) change = amount - previousAmount; // works out the profit inc/dec, for i=0 there is no profit inc/dec (because it's the starting value) therefore condition is for when i>0
  previousAmount = amount; // updates the current index amount (previousAmount) with the following index amount (amount) 
  netChangeSum += change; // adds the profit inc/dec (change) to store the total change (netChangeSum)

  if (change > greatest[1]) { // if the change was the largest profit inc/dec then store it as the greatest (so we can keep comparing)
    greatest = [date, change]; //stores the largest profit inc/dec by the date and how much it inc/dec by
  }

  if (change < least[1]) { // if the change was the smallest profit inc/dec then store it as the least (so we can keep comparing)
    least = [date, change]; //stores the smallest profit inc/dec by the date and how much it inc/dec by
  }
}

//console.log(netChangeSum); , used to check if the following worked correctly.
average = Math.round((netChangeSum / (finances.length - 1)) * 100) / 100; // money format = $xx.yy, ($dollars.cents) by first *100 you make the value $xxyy, then it rounds this as an integer then /100 to get back into money format. If we didn't *100 then the format would be $xx and not accurate to the nearest cent.

analysis = // creates a variable which when called will display all the required analysis
  'Financial Analysis ' + '\n' +
  '----------------' + '\n' +
  'Total Months: ' + months + '\n' +
  'Total: $' + total + '\n' +
  'Average Change: ' + average + '\n' +
  'Greatest Increase in Profits/Losses: ' + greatest[0] + ' ($' + greatest[1] + ')\n' + //greatest[0] =  year , greatest[1] = profit inc/dec from that year (compared to next year)
  'Greatest Decrease in Profits/Losses: ' + least[0] + ' ($' + least[1] + ')';  //least[0] =  year , least[1] = profit inc/dec from that year (compared to next year)

console.log(analysis); //displays all the required analysis
