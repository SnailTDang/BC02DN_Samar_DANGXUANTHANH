let messages = [
  {
    id: 1,
    role: "server",
    name: "Support",
    avatar: "./assets/img/avatar_server.jpg",
    message: "Chào bạn, chúng tôi có thể giúp gì cho bạn!",
  },
];

const messInput = document.querySelector("#mess-input");
const messSend = document.querySelector("#form-submit");
const mess = document.querySelector(".js-mess");
const openMess = document.querySelector(".js-openmess");
const closeMess = document.querySelector(".js-closemess");
const hidenmess = document.querySelector(".js-hidenmess");
const hidens = document.querySelector(".js-hiden");
const logoMess = document.querySelector(".logo-mess");
const messPhone = document.querySelector(".fa-phone");

function render() {
  var newMess = messages.map((message) => {
    if (message.role === "server") {
      return `
        <div class="mess-text server">
            <img src="${message.avatar}" class="avatar">
            <span class="messtext mess-server"><p>${message.message}</p>
              <div class="name name-server">${message.name}</div>
            </span>
        </div>
        `;
    } else if (message.role === "client") {
      return `
        <div class="mess-text client">
            <span class="messtext mess-client"><p>${message.message}</p>
              <div class="name name-client">${message.name}</div>
            </span>
        </div>
        `;
    }
  });
  document.getElementById("messages").innerHTML = newMess.join("");
}

function preventDefault(e) {
  e.preventDefault();
}

function stopPropagation(e) {
  e.stopPropagation();
}

window.onload = function () {
  render();
};

function HidenMess() {
  hidenmess.classList.add("hiden");
}

function AppearMess() {
  hidenmess.classList.remove("hiden");
}

function OpenMess() {
  mess.classList.add("openmess");
  mess.classList.remove("closemess");
  HidenMess();
}

function CloseMess() {
  mess.classList.remove("openmess");
  mess.classList.add("closemess");
  AppearMess();
}

function sendMess() {
  let userMessInput = messInput.value.trim().replace(/\n/g, "<br/>");
  let messCount = messages.length;
  if (userMessInput !== "" && userMessInput != "<br/>") {
    setTimeout((e) => {
      messages.push({
        id: messCount + 1,
        role: "client",
        name: "You",
        avatar: "./assets/image/avatar_client.jpg",
        message: userMessInput,
      });
      render();
    }, 0);
    setTimeout((e) => {
      messages.push({
        id: messCount + 2,
        role: "server",
        name: "Support",
        avatar: "./assets/image/avatar_server.jpg",
        message:
          "Cảm ơn bạn đã quan tâm đến công ty chúng tôi, đội ngũ kĩ thuật sẽ trả lời bạn trong dây lát, Đây là tin nhắn tự động, vui lòng không spam tin nhắn!",
      });
      render();
    }, 1200);
  }
  messInput.value = "";
}

function listenKeyPress(e) {
  if (e.keyCode == 13) {
    if (!e.shiftKey && !e.ctrlKey && !e.altKey) {
      sendMess();
    }
    if (e.shiftKey) {
      return 13;
    }
    preventDefault(e);
  }
  if (e.keyCode == 27) {
    CloseMess();
  }
}

messInput.addEventListener("keydown", listenKeyPress);
messSend.addEventListener("click", sendMess);
messPhone.addEventListener("click", stopPropagation);
logoMess.addEventListener("click", stopPropagation);
openMess.addEventListener("click", OpenMess);
closeMess.addEventListener("click", CloseMess);
