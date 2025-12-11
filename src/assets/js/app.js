// for the nvabar functionality
      const navBar = document.getElementById("burgerBtn"); //burger button
      const closeBtn = document.getElementById("closeBtn"); //close button
      const navBarMenu = document.getElementById("navBarMenu"); //navbar menu
      const navLink = document.querySelectorAll(".nav-link"); //nav items

      //opening the navbar when the burger button is clicked
      navBar.addEventListener("click", () => {
        navBarMenu.classList.toggle("d-block");
        closeBtn.classList.toggle("d-none");
        navBar.classList.toggle("d-none");
      });

      //closing the navbar when the close button is clicked
      closeBtn.addEventListener("click", () => {
        closeBtn.classList.toggle("d-none");
        navBar.classList.toggle("d-none");
        navBarMenu.classList.remove("d-block");
      });

      //function for clicking the nav items
      navLink.forEach((n) =>
        n.addEventListener("click", () => {
          navBarMenu.classList.remove("d-block");
          navBar.classList.remove("d-none");
          closeBtn.classList.add("d-none");
        })
      );
 


      document.getElementById("radio1").checked = true
    let cont = 1
setInterval(() => {
    nextImg()
}, 5000)

function nextImg() {
    cont++

    if(cont > 4) {
        cont = 1
    }
    document.getElementById("radio" + cont).checked = true
}