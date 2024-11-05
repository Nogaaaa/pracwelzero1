//function create elements
// let create = ele => document.createElement(`${ele}`);
function create(ele) {
    return document.createElement(`${ele}`);
  }
  

//create elements
let header = create("header"); 
let logo = create("h1");
let menu = create("ul");
let content = create("div");
let footer = create("footer");
// create classes
header.className = "website-head";
logo.className = "logo";
menu.className = "menu";
content.className = "content";
footer.className = "footer";

//Add to page 
header.append(logo);
header.append(menu);
document.body.append(header);
document.body.append(content);
document.body.append(footer);
//loop for menu and list 
for(i=1 ; i<=15 ; i++){
  if(i<=4){
    let menuList= create("li");
    menuList.className=`menu-list-${i}`;
    menu.append(menuList);
    menuList.style.cssText = "cursor: pointer";
  }
  let prodBox = create("div");
  let prodNum = create("span");
  prodBox.className = "product";
  prodBox.textContent = "product";
  prodNum.textContent = `${i}`;
  prodBox.prepend(prodNum);
  content.append(prodBox);
  //style prod 
prodBox.style.cssText = "color: rgb(136,136,136); padding: 20px; background-color: white; border: 1px solid rgb(221,221,221); width: calc((100% - 40px) / 3); border-radius: .5rem; box-sizing: border-box; text-align: center";
prodNum.style.cssText = "display: block; color: black; font-size: 40px; margin-bottom: 20px";
}
//add text
logo.textContent = "Elzero";
document.querySelector(".menu-list-1").textContent = "Home";
document.querySelector(".menu-list-2").textContent = "Services";
document.querySelector(".menu-list-3").textContent = "About";
document.querySelector(".menu-list-4").textContent = "Content";
footer.textContent = "copyright 2021";

//website style
document.body.style.cssText = "margin: 0; font-family: Tahoma, Arial; background-color: rgb(236,236,236)";
header.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 20px; background-color: white";
logo.style.cssText = "color: rgb(65,169,110); font-size: 50px";
menu.style.cssText = "display: flex; justify-content: space-between; gap: 15px; list-style: none";
content.style.cssText = "display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; padding: 20px; box-sizing: border-box; min-height: calc(100vh-140px)";
footer.style.cssText = "background-color: rgb(65,169,110); padding: 20px; color: white; font-size: 40px; text-align: center";


