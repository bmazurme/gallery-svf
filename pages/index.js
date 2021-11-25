//let box = document.querySelector('.project__viewer');
let popup = document.querySelector('.popup');
let screen = document.querySelector('.screen');
let closeButton = document.querySelector('.screen__close');
let projects = document.getElementsByClassName('project');

for(var i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", openScreen);
}

//project.addEventListener('click', openScreen);
closeButton.addEventListener('click', closeScreen);

function openScreen(event) {
  // popup.classList.add('popup_active');
  // let box = event.target.querySelector('.project__viewer');
  // console.log(event.target);
  // console.log(event);
  // if (event.target.classList.contains('element__like_checked')) {
  //   event.target.classList.remove('element__like_checked');
  // } else {
  //   event.target.classList.add('element__like_checked');
  // }
  // 
   //box.style = "margin:10px; height: 580px; width: 980px; overflow: hidden";
   //screen.insertAdjacentElement('beforeend', box);
}

function closeScreen() {
  //box.style = "height: 540px; width: 640px; overflow: hidden";
  //project.insertAdjacentElement('beforeend', box);
  popup.classList.remove('popup_active');
}


// editButton.addEventListener('click', openForm);
// closeButton.addEventListener('click', closeForm);
// saveButton.addEventListener('click', saveForm);
// popup.addEventListener('keyup', (event)=>{if (event.keyCode === 13) {saveForm()}});


// function likeChange(event) {
//   if (event.target.classList.contains('element__like_checked')) {
//     event.target.classList.remove('element__like_checked');
//   } else {
//     event.target.classList.add('element__like_checked');
//   }
// }



// function saveForm() {
//   profileName.innerHTML = formName.value;
//   profileProfession.innerHTML = formProfession.value;
//   popup.classList.remove('popup_active');
// }

