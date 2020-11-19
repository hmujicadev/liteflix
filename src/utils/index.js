export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  export const getRandomIntervalStep = () => {
    const intervalSteps = [21, 33, 18, 24];
    return intervalSteps[randomIntFromInterval(0, 3)];
  };