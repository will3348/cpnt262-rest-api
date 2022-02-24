const randomIndex = function (length) {
  return Math.floor(Math.random() * length);
};
let output= "";
const fetchData = async function () {
  try {
    const response = await fetch('https://thatcopy.pw/catapi/rest/');
    if (!response.ok) {
      throw new Error(response.statusText);
    };
    const data = await response.json();
    const character = data[randomIndex(data.length)];
    console.log(data);
   output = `
       <h1>ID:${data.id}</h1>
       <img src="${data.url}" alt="Images of ${data.id}">
      <p>X: ${data.x}</p>
      <p>Y: ${data.y}</p>
      `;
    document.querySelector('.content').innerHTML = output;
  } catch (error) {
    console.error("There was a problem.");
  }
}
const endpoint = 'https://thatcopy.pw/catapi/rest/';
fetchData(endpoint);
const submitHandler = (event) => {
  event.preventDefault();
};
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  fetchData(endpoint);
});