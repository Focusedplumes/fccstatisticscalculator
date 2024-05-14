const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
const sorted = array.sort((a, b) => a - b);
  

const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const median =
  array.length % 2 === 0
    ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
    : sorted[Math.floor(array.length / 2)];
return median;
};

const calculate = () => {
    const value = document.querySelector ("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    document.querySelector("#mean").textContent = mean;
    const mean = getMean(numbers);


};
