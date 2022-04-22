// alarm clock / timer that beeps after a specified amount of time has passed
// The user can specify an unlimited number of alarms using command line arguments

// machine performs a system sound
// process.stdout.write('\x07'); 

// PSEUDO CODE
// --- take info from the command line using: process.argv
// --- if statement for edge cases
// --- use setTimeout for timer delay based on input
// --- Send an error message? 

// slice at 2 to ignore unnecessary CL input
let values = process.argv.slice(2);
console.log(values);

for (let value in values) {
  console.log(values[value])

  // if (((values[value]) * 1000) >= 0) {
  //   setTimeout(() => {
  //     process.stdout.write("\x07" + "🔔");
  //   }, (values[value]) * 1000);
  // }
  // else {
  //   process.stdout.write("No 🔕 set! Enter a valid number.")
  // }
};

// EDGE CASES

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// DEVELOPMENT NOTES

// node timer1.js 10 3 5 15 9

// This will make it beep at:
// --- 3 seconds
// --- 5 seconds
// --- 9 seconds
// --- 10 seconds
// --- 15 seconds

// Array iteration and for...in
// Note: for...in should not be used to iterate over an Array where the index order is important.