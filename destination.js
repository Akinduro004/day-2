const name = "MARS";
const nameContainer = document.getElementById("mars");
       function Show() {
  let index = 0;
  const interval = setInterval(() => {
    nameContainer.textContent += name[index];
    index++;
    if (index === name.length) {
      clearInterval(interval);
    }
  }, 150);}
   