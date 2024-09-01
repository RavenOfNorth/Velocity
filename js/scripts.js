const CONSTANTS = {
    tabOne: {
        img: "src/img/tabs/tab1.jpg",
        alt: "tab 1 pic",
        title: "Tab 1",
    },
    tabTwo: {
        img: "src/img/tabs/tab2.jpg",
        alt: "tab 2 pic",
        title: "Tab 2",
    },
    tabThree: {
        img: "src/img/tabs/tab3.jpg",
        alt: "tab 3 pic",
        title: "Tab 3",
    }
}

const tabImg = document.getElementById('tab-img');
let tabTitle = document.getElementById('tab-title');

const tabButtonOne = document.getElementById("tab-changer-one");
const tabButtonTwo = document.getElementById("tab-changer-two");
const tabButtonThree = document.getElementById("tab-changer-three");
const activeButton = document.getElementsByClassName("active");

const clearActiveClass = () => {
    const activeButtons = document.querySelectorAll(".tabs__nav .active");
    activeButtons.forEach(button => button.classList.remove("active"));
};

tabButtonOne.addEventListener('click', () => {
    tabImg.src = CONSTANTS.tabOne.img;
    tabImg.alt = CONSTANTS.tabOne.alt;
    tabTitle.textContent = CONSTANTS.tabOne.title;
    clearActiveClass();
    tabButtonOne.classList.add('active');
})

tabButtonTwo.addEventListener('click', () => {
    tabImg.src = CONSTANTS.tabTwo.img;
    tabImg.alt = CONSTANTS.tabTwo.alt;
    tabTitle.textContent = CONSTANTS.tabTwo.title;
    clearActiveClass();
    tabButtonTwo.classList.add('active');
})

tabButtonThree.addEventListener('click', () => {
    tabImg.src = CONSTANTS.tabThree.img;
    tabImg.alt = CONSTANTS.tabThree.alt;
    tabTitle.textContent = CONSTANTS.tabThree.title;
    clearActiveClass();
    tabButtonThree.classList.add('active');
})
