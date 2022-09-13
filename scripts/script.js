const cardElement = document.querySelector(".js_card");
const nameElement = document.querySelector(".js_name");
const imagelement = document.querySelector(".js_image");

document.querySelectorAll(".js_bin li").forEach((element) => {
  element.addEventListener("click", (event) => {
    const name = event.target.innerText;
    nameElement.innerText = name;
    imagelement.src = `/assets/${name.toLowerCase()}.webp`;
    imagelement.alt = `Portret van ${name}`;
  });
});
