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
    "Handle" : "lilmiquela",
    "Profile Screenshot" : "Img/lilmiquela.jpg",
    "Link" : "https://www.instagram.com/lilmiquela/?hl=en"
  },
  {
    "Handle" : "imma.gram",
    "Profile Screenshot" : "Img/imma.gram.jpg",
    "Link" : "https://www.instagram.com/imma.gram/"
  },
  {
    "Handle" : "kyraonig",
    "Profile Screenshot" : "Img/kyraonig.jpeg",
    "Link" : "https://www.instagram.com/kyraonig/"
  }
]

for (var i = 0; i < insAccDatabase.length; i++) {
  createAcctGrid(insAccDatabase[i]);
}

function createAcctGrid(incJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let newImageContainer = document.createElement("DIV");
  newImageContainer.classList.add("profileImageContainer");
  let newImage = document.createElement("IMG");
  newImage.classList.add("profileImage");
  newImage.src = incJSON['Profile Screenshot'];
  newImageContainer.appendChild(newImage);
  newContentElement.appendChild(newImageContainer);

  let newContentLink = document.createElement("a");
  newContentLink.href = incJSON['Link'];
  newContentLink.textContent = incJSON['Handle'];
  newContentLink.classList.add('handle');
  newContentElement.appendChild(newContentLink);

  /// Add the item to the page
  insAccGridElement.appendChild(newContentElement);
}

