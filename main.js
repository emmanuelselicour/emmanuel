// window.addEventListener("load", function () {
//     setTimeout(function () {
//       document.getElementById("loader").style.display = "none";
//       document.getElementById("content").style.display = "block";
//     }, 5000); // 5000ms = 5 seconds
//   });



window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 5000);
  });

  function toggleMenu() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
  }

  function closeMenu() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
  }
