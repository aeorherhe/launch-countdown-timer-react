// get launch date
const date = new Date();
const launchYear = date.getFullYear();
const launchMonth = date.getMonth();
const launchDay = date.getDate();
const launchHour = date.getHours();
const launchMinute = date.getMinutes();
const launchSecond = date.getSeconds();

// set launch date
// const LaunchDate = [
//   launchYear,
//   launchMonth,
//   launchDay + 1,
//   launchHour - 23,
//   launchMinute - 59,
//   launchSecond - 50,
// ];

export function calculateRemainingTime(count) {
  // prettier-ignore
  const LaunchDate = [
  launchYear,
  launchMonth,
  launchDay + 14,
  launchHour ,
  launchMinute ,
  launchSecond ,
];
  // get current date
  const currentTime = new Date().getTime();
  const launchTime = new Date(...LaunchDate).getTime();
  const remainingTime = launchTime - currentTime;

  // convert to days, hours, minutes, seconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  const days = Math.floor(remainingTime / oneDay);
  const hours = Math.floor((remainingTime % oneDay) / oneHour);
  const minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  const seconds = Math.floor((remainingTime % oneMinute) / 1000);

  // set values array
  // check if launch date passed
  remainingTime < 0
    ? count({ days: "0", hours: "0", minutes: "0", seconds: "0" })
    : count({ days, hours, minutes, seconds });
}
