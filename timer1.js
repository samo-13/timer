// alarm clock / timer that beeps after a specified amount of time has passed
// The user can specify an unlimited number of alarms using command line arguments

// slice at 2 to ignore unnecessary CL input
let values = process.argv.slice(2);

for (let value in values) {

  // ensure it's a positive number
  if ((Number(values[value]) * 1000) > 0) {
    setTimeout(() => {
      process.stdout.write(`\x07 🔔 ${values[value]} Second Alarm 🔔 \n`);
    }, (values[value]) * 1000);
  
  } else {
    process.stdout.write(`🔕 You entered '${values[value]}' Please enter a valid number 🔕 \n`)
  }

};

// EDGE CASES

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// DEVELOPMENT NOTES TO TEST

// node timer1.js 10 3 5 15 9

// This will make it beep at:
// --- 3 seconds
// --- 5 seconds
// --- 9 seconds
// --- 10 seconds
// --- 15 seconds