const timeConvert = time => {
  let hrs = Math.floor(time / 60);
  let mins = Math.floor(time % 60);
  return `${hrs} Hrs ${mins} mins`;
};

export default timeConvert;
