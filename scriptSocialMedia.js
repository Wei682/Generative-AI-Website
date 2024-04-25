// This animation is referenced from https://tobiasahlin.com/moving-letters/
anime.timeline({loop: false})
  .add({
    targets: '.socialMediaText .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  })

let insAccGridElement = document.getElementById('insAccGrid');

let insAccDatabase = [
  {
    "Handle" : "XXX",
    "Profile Screenshot" : "",
    "Link" : "https://daigobrooklyn.com/"
  }]

for (var i = 0; i < insAccDatabase.length; i++) {
  createAcctGrid(insAccDatabase[i]);
}

function createAcctGrid(incJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('handle');
  newContentHeading.innerText = incJSON['Handle'];
  newContentElement.appendChild(newContentHeading);

  /// Add the item to the page
  insAccGridElement.appendChild(newContentElement);
}

