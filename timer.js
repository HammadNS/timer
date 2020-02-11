
const alarms = process.argv.slice(2);

for (let item of alarms) {
  if (typeof (item) !== NaN && item >= 0) {
    setTimeout(() => process.stdout.write('\x07'), item * 1000);
  }
};

