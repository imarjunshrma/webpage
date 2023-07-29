let goTop = document.getElementById("go-top");
let drpdown = document.querySelectorAll(".drpdown");
let header = document.querySelector(".header");
let list = document.querySelectorAll(".list-dropdown");
let button = document.getElementById("send-msg");
let sidebar = document.querySelector(".sidebar");
let closeIcon = document.querySelector(".close-icon");
let menu = document.querySelector(".responsive-menu-icon");
goTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  let x = window.scrollY;
  if (x > 40) {
    //add a class to header
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
});
drpdown.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    let select = dropdown.querySelector(".select");
    let isShow = select.classList.contains("show-drp");
    if (isShow) {
      select.classList.remove("show-drp");
    } else {
      select.classList.add("show-drp");
    }
  });
});

list.forEach((item) => {
  let icon = item.querySelector("i");
  const attr = item.getAttribute("data-list");
  let drplabel = document.getElementById(attr);
  let dropdown = document.querySelector(`.${attr}`);
  let query2 = document.querySelector(".query2");
  let query3 = document.querySelector(".query3");
  item.addEventListener("mouseover", () => {
    icon.classList.add("show");
  });
  item.addEventListener("mouseout", () => {
    icon.classList.remove("show");
  });
  item.addEventListener("click", () => {
    //remove all
    let text = item.textContent;
    if (text.trim() === "Projects") {
      query2.classList.add("show");
      query3.classList.add("show");
    }

    if (text.trim() === "Media" || text.trim() === "Query") {
      query2.classList.remove("show");
      query3.classList.remove("show");
    }

    let reText = text.trim();
    drplabel.textContent = reText;
    list.forEach((innerItem) => {
      if (innerItem.classList.contains("active-item")) {
        innerItem.classList.remove("active-item");
      }
    });
    item.classList.add("active-item");
  });
});

button.addEventListener("click", () => {
  //sidebar open
  sidebar.classList.add("show");
  sidebar.classList.add("msg-sidebar");
});
menu.addEventListener("click", () => {
  sidebar.classList.add("show");
  sidebar.classList.add("phone-sidebar");
});
closeIcon.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
    sidebar.classList.remove("msg-sidebar");
    sidebar.classList.remove("phone-sidebar");
  }
});
