const refs = {
  navigation: document.querySelector("#tabs [data-navigation]"),
  content: document.querySelector("#tabs [data-main-conten]"),
};
refs.navigation.addEventListener("click", onChangeNavigations);

function onChangeNavigations(e) {
  const { target } = e;

  if (target.nodeName !== "LI") return;
  const currentBtn = target;
  clearPrevClasses();
  addCurrentClass(currentBtn);
}
function clearPrevClasses() {
  const prevActiveBtn = refs.navigation.querySelector(".work__item-active");
  const prevActiveContent = refs.content.querySelector(".work__grid-show");

  if (prevActiveBtn) {
    prevActiveBtn.classList.remove("work__item-active");
    prevActiveContent.classList.remove("work__grid-show");
  }
}
function addCurrentClass(currentBtn) {
  const currenTab = currentBtn.dataset.tab;
  const currentContent = refs.content.querySelector(
    `[data-content=${currenTab}]`
  );

  currentBtn.classList.add("work__item-active");
  currentContent.classList.add("work__grid-show");
}

//  form

const TOKEN = "6660653352:AAG-bbslDfkSZ4DIP-APhLVZs3ZARHyBe0k";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const CHAT_ID = "-1002053478982";
document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `Email: ${this.email.value} `;
  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mod: "html",
      text: message,
    })
    .then((res) => {
      console.log(res);
      showToast("Message sent successfully!");
      this.reset(); 
    })
    .catch((error) => {
      console.log(error);
      showToast("Message sent successfully!");
      this.reset(); 
    });
 
});
function showToast(message) {
  toast.innerText = message;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 1300);
}


