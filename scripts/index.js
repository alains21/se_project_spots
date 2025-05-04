const initialCards = [
  {
    name: "Bryce Canyon",
    link: "https://unsplash.com/photos/brown-rocky-mountain-under-blue-sky-during-daytime-1JnANxwL7SE",
  },
  {
    name: "An orange cat named Zion",
    link: "https://unsplash.com/photos/a-cat-sitting-on-top-of-a-white-bed-_SgWArWn-b8",
  },
  {
    name: "Snowboarding in Utah",
    link: "https://unsplash.com/photos/a-person-skiing-down-a-mountain-VVZJRBMO6nM",
  },
  {
    name: "Chicago skyline at sunset",
    link: "https://unsplash.com/photos/a-view-of-a-city-from-the-water-at-sunset-gns22wMEtPc",
  },
  {
    name: "The Narrows at golden hour",
    link: "https://unsplash.com/photos/river-between-rocky-mountains-aHdAdA0JzLE",
  },
  {
    name: "Delicate Arch",
    link: "https://unsplash.com/photos/a-large-rock-formation-in-the-middle-of-a-desert-1XlcJ125MvI",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostImageInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");
const newPostForm = newPostModal.querySelector(".modal__form");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostImageInput.value);
  console.log(newPostCaptionInput.value);
  closeModal(newPostModal);
}

newPostForm.addEventListener("submit", handleNewPostSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});

// const initialCards = [
//   {
//     name: "Val Thorens",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
//   },
//   {
//     name: "Restaurant terrace",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
//   },
//   {
//     name: "An outdoor cafe",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
//   },
//   {
//     name: "A very long bridge, over the forest and through the trees",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
//   },
//   {
//     name: "Tunnel with morning light",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
//   },
//   {
//     name: "Mountain house",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
//   },
// ];

// const profileEditButton = document.querySelector(".profile__edit-btn");
// const profileName = document.querySelector(".profile__name");
// const profileDescription = document.querySelector(".profile__description");

// const editModal = document.querySelector("#edit-modal");
// const editFormElement = editModal.querySelector(".modal__form");
// const editModalCloseButton = editModal.querySelector(".modal__close-btn");
// const editModalNameInput = editModal.querySelector("#profile-name-input");
// const editModalDescriptionInput = editModal.querySelector(
//   "#profile-description-input"
// );

// const cardTemplate = document.querySelector("#card-template");
// const cardsList = document.querySelector(".cards__list");

// function getCardElement(data) {
//   const cardElement = cardTemplate.content
//     .querySelector(".card")
//     .cloneNode(true);

//   const cardNameElement = cardElement.querySelector(".card__title");
//   const cardImageElement = cardElement.querySelector(".card__image");

//   cardNameElement.textContent = data.name;
//   cardImageElement.src = data.link;
//   cardImageElement.alt = data.name;

//   return cardElement;
// }

// function openModal() {
//   editModalNameInput.value = profileName.textContent;
//   editModalDescriptionInput.value = profileDescription.textContent;
//   editModal.classList.add("modal_is-opened");
// }

// function closeModal() {
//   editModal.classList.remove("modal_is-opened");
// }

// function handleEditFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = editModalNameInput.value;
//   profileDescription.textContent = editModalDescriptionInput.value;
//   closeModal();
// }

// profileEditButton.addEventListener("click", openModal);
// editModalCloseButton.addEventListener("click", closeModal);
// editFormElement.addEventListener("submit", handleEditFormSubmit);

// for (let i = 0; i < initialCards.length; i++) {
//   const cardElement = getCardElement(initialCards[i]);
//   cardsList.prepend(cardElement);
// }

// initialCards.forEach(function (item) {
//   console.log(item.name);
//   console.log(item.link);
// });
