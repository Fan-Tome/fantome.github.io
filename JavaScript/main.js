window.onload = displayClock();

// Clock function
function displayClock() {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Get clock elements
  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  var yy = d.getFullYear();
  var min = (mins = ('0' + d.getMinutes()).slice(-2));
  var hh = d.getHours();
  var ss = d.getSeconds();
  var ampm = '';


  // Display clock elements
  document.getElementById('hour').innerText = hh;
  document.getElementById('separator1').innerHTML = ' : ';
  document.getElementById('minutes').innerText = min + ampm;
  
  //uncomment this to display the seconds

  //document.getElementById('separator2').innerHTML = ' : ';
  //document.getElementById('seconds').innerText = ss;

  //uncomment this to display the year

  //document.getElementById('separator4').innerHTML = '/';
  //document.getElementById('separator3').innerHTML = '/';
  //document.getElementById('year').innerText = yy;

  document.getElementById('month').innerText = mm;
  document.getElementById('day').innerText = dd;

  setTimeout(displayClock, 1000);
}
