$(document).ready(function() {

  
  
  // Initialize Firebase ////
  var config = {
    apiKey: "AIzaSyA5CtZbvwtjOKdr_xsKFfy9jlqEsJByt-U",
    authDomain: "timesheet-2eb89.firebaseapp.com",
    databaseURL: "https://timesheet-2eb89.firebaseio.com",
    projectId: "timesheet-2eb89",
    storageBucket: "timesheet-2eb89.appspot.com",
    messagingSenderId: "382292366510"
  };
  firebase.initializeApp(config);

  // Variables to reference to the database ////
  var employeeName = "";
  var role = "";
  var startDate = "";
  var monthlyRate = 0;

  var database = firebase.database();

  // Capture Button Click
  $("#submit").on("click", function(event) {
      event.preventDefault();

      employeeName = $("#employee-name").val().trim();
      role = $("#role-display").val().trim();
      startDate = $("#start-date").val().trim();
      monthlyRate = $("#monthly-rate").val().trim();

      console.log("employeeName: " + employeeName);
      console.log("role: " + role);
      console.log("startDate: " + startDate);
      console.log("monthlyRate: " + monthlyRate);

      // Push new values to the database.
      database.ref().push({
          employeeName: employeeName,
          role: role,
          startDate: startDate,
          monthlyRate: monthlyRate
      });
  });

  // Firebase watcher + initial loader (child_added)
  database.ref().on("child_added", function(snapshot) {
      console.log(snapshot.val());

      //Display IDs should go here.
  })


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




}); ///$(document).ready(function() {});