function showDropdown() {
  let targetElement = document.getElementById("nest");
  if (targetElement.style.display === "none") {
    targetElement.style.display = "block";
  } else {
    targetElement.style.display = "none";
  }
}

function showDropdown1(){
  let targetElement = document.getElementById("nest1");
  if(targetElement.style.display === "none"){
    targetElement.style.display = "block";
  } else {
    targetElement.style.display = "none";
  }
}


function showDropdown2(){
  let targetElement = document.getElementById("nest2");
  if(targetElement.style.display === "none"){
    targetElement.style.display = "block";
  } else {
    targetElement.style.display = "none";
  }
}

function openModal(){
  document.getElementById("profile").style.display = "flex";
}

function closeModal(){
  document.getElementById("profile").style.display = "none";
}