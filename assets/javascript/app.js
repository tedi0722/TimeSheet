
/*

<script src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5CtZbvwtjOKdr_xsKFfy9jlqEsJByt-U",
    authDomain: "timesheet-2eb89.firebaseapp.com",
    databaseURL: "https://timesheet-2eb89.firebaseio.com",
    projectId: "timesheet-2eb89",
    storageBucket: "timesheet-2eb89.appspot.com",
    messagingSenderId: "382292366510"
  };
  firebase.initializeApp(config);
</script>

*/

// psuedo-code for displaying data to the current employees table.

// #employee-name-display
// #role-display
// #start-date-display
// #monthly-rate-display

// traverse database using json to get relevent information.
// using jquery target the proper ids for each element.
// use .html() to add database variable data to the appropriate html elements.


// Pseudo-code for math for calculating the months worked column and the total billed column.
// I think we need to calculate the amount of months and days till january 1st of the next year. (value1)
// I think we also need to calculate the amount of months
    // and days past since the current year started. (value2)

// from there we would add those two values to:
// (12[(current year) - (starting year + 1)]) + (value1 + value2)

// Instead of the above, Omar said we could also use moment.js (which does date/time calcs)

// To get the "Total Billed ($)" value, we need to do the following calc:
    // (months worked) * (monthly rate) = (totaled billed)