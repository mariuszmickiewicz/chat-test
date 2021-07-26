function getElement (className) {
  return document.getElementsByClassName(className)[0];
}

function classToggle(targetObject, className) {
  targetObject.classList.toggle(className);
}

function classAdd(targetObject, className) {
  targetObject.classList.add(className);
}

function classRemove(targetObject, className) {
  targetObject.classList.remove(className);
}

function startListener() {
  let listenerObject = document.getElementsByClassName('chat-container');
  listenerObject[0].addEventListener('click', clickManagement);
}


let menuItems = ['General chat', 'Technical support', 'Artificial Inteligence', 'Data in management', 'Off topic', 'Cloud'];
let data = [];

data[0] = [
  ['Frank Herbert', '4:23', '😍', '1', '5', 'There existed no need on Caladan to build a physical paradise or a paradise of the mind—we could see the actuality all around us. And the price we paid was the price men have always paid for achieving a paradise in this life—we went soft, we lost our edge.'],
  ['Laci Moczo', '4:23', '👻', '2', '', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
  ['Balint Lendvai', '4:23', '', '', '', 'Incididunt ut labore et dolore magna aliqua.'],
  ['John Mr. Veylongnameindeed ohmygodcantfit von inonline', '4:23', '👽', '1', '3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
  ['Frank Herbert', '4:23', '😍', '4', '', 'There existed no need on Caladan to build a physical paradise or a paradise of the mind—we could see the actuality all around us. And the price we paid was the price men have always paid for achieving a paradise in this life—we went soft, we lost our edge.'],
  ['Stilgar', '4:23', '', '', '2', 'Incididunt ut labore et dolore magna aliqua.'],
  ['William Blake', '4:23', '', '', '', 'Ad blanditiis in qui repudiandae et placeat id.'],
  ['Mariusz Mickiewicz', '4:23', '', '', '', 'In qui repudiandae et placeat.', '1'],
  ['Jessica', '4:23', '😰', '2', '', 'Quia tempore enim praesentium nihil omnis.'],
  ['Duke Leto', '4:23', '', '', '', 'I am not sure folks'],
  ['Laci Moczo', '4:23', '😍', '2', '', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
  ['Balint Lendvai', '4:23', '', '', '', 'Incididunt ut labore et dolore magna aliqua.'],
  ['John Mr. Veylongnameindeed ohmygodcantfit von inonline', '4:23', '😹', '1', '3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
  ['Frank Herbert', '4:23', '😍', '4', '', 'There existed no need on Caladan to build a physical paradise or a paradise of the mind—we could see the actuality all around us. And the price we paid was the price men have always paid for achieving a paradise in this life—we went soft, we lost our edge.'],
  ['Stilgar', '4:23', '', '', '2', 'Incididunt ut labore et dolore magna aliqua.'],
  ['William Blake', '4:23', '', '', '', 'Ad blanditiis in qui repudiandae et placeat id.'],
  ['Mariusz Mickiewicz', '4:23', '', '', '', 'In qui repudiandae et placeat.', '1'],
  ['Jessica', '4:23', '😰', '2', '', 'Quia tempore enim praesentium nihil omnis.'],
  ['Duke Leto', '4:23', '', '', '', 'I am not sure folks'],
  ['Laci Moczo', '4:23', '😍', '2', '', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
  ['Balint Lendvai', '4:23', '', '', '', 'Incididunt ut labore et dolore magna aliqua.'],
  ['John Mr. Veylongnameindeed ohmygodcantfit von inonline', '4:23', '😹', '1', '3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
  ['Stilgar', '4:23', '', '', '2', 'Incididunt ut labore et dolore magna aliqua.'],
  ['William Blake', '4:23', '', '', '', 'Ad blanditiis in qui repudiandae et placeat id.'],
  ['Mariusz Mickiewicz', '4:23', '', '', '', 'In qui repudiandae et placeat.', '1'],
  ['Jessica', '4:23', '😰', '2', '', 'Quia tempore enim praesentium nihil omnis.'],
  ['Duke Leto', '4:23', '', '', '', 'I am not sure folks'],
  ['Thufir Hawat', '4:23', '', '', '', 'Later, Paul meets Thufir Hawat, the duke’s main strategist, in the training room. Hawat warns Paul of the dangers he will face on Arrakis, but he tries to dispel Paul’s fears that his father will be killed. He also mentions the Fremen, the native inhabitants of Arrakis. Hawat explains that the Fremen are a tough, resilient people, and they will have to be dealt with in some way by the Atreides. After Hawat leaves, Gurney Halleck, the duke’s war master, appears and challenges Paul to a training duel. Paul fights well, but Halleck makes the battle difficult for him, since he knows that Paul may actually have to fight someone soon. Finally, Paul meets with Dr. Yueh, a doctor of the Atreides, who gives him some information about the life-forms on Arrakis—including the planet’s sandworms.'],
];

data[1] = [
  ['Balint Lendvai', '4:23', '', '', '', 'Incididunt ut labore et dolore magna aliqua.'],
  ['William Blake', '4:23', '', '', '', 'Ad blanditiis in qui repudiandae et placeat id.'],
  ['Mariusz Mickiewicz', '4:23', '', '', '', 'In qui repudiandae et placeat.', '1'],
  ['Jessica', '4:23', '😰', '2', '', 'Quia tempore enim praesentium nihil omnis.'],
  ['Duke Leto', '4:23', '', '', '', 'I am not sure folks'],
];

data[2] = [
  ['Duke Leto', '4:23', '', '', '', 'I am not sure folks'],
  ['Thufir Hawat', '4:23', '', '', '', 'Later, Paul meets Thufir Hawat, the duke’s main strategist, in the training room. Hawat warns Paul of the dangers he will face on Arrakis, but he tries to dispel Paul’s fears that his father will be killed. He also mentions the Fremen, the native inhabitants of Arrakis. Hawat explains that the Fremen are a tough, resilient people, and they will have to be dealt with in some way by the Atreides. After Hawat leaves, Gurney Halleck, the duke’s war master, appears and challenges Paul to a training duel. Paul fights well, but Halleck makes the battle difficult for him, since he knows that Paul may actually have to fight someone soon. Finally, Paul meets with Dr. Yueh, a doctor of the Atreides, who gives him some information about the life-forms on Arrakis—including the planet’s sandworms.'],
  ['Jessica', '4:23', '😰', '2', '', 'Quia tempore enim praesentium nihil omnis.'],
  ['Duke Leto', '4:23', '', '', '', 'I am not sure folks'],
  ['Laci Moczo', '4:23', '😍', '2', '', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
];

data[3] = [
  ['Mariusz Mickiewicz', '4:23', '', '', '', 'In qui repudiandae et placeat.', '1'],
  ['Jessica', '4:23', '😰', '2', '', 'Quia tempore enim praesentium nihil omnis.'],
  ['Duke Leto', '4:23', '', '', '', 'I am not sure folks'],
];

data[4] = [
  ['Mariusz Mickiewicz', '4:23', '', '', '', 'In qui repudiandae et placeat.', '1'],
];

data[5] = [
  ['Paul', '4:23', '', '', '', 'Later, Paul meets Thufir Hawat, the duke’s main strategist, in the training room. Hawat warns Paul of the dangers he will face on Arrakis, but he tries to dispel Paul’s fears that his father will be killed. He also mentions the Fremen, the native inhabitants of Arrakis. Hawat explains that the Fremen are a tough, resilient people, and they will have to be dealt with in some way by the Atreides. After Hawat leaves, Gurney Halleck, the duke’s war master, appears and challenges Paul to a training duel. Paul fights well, but Halleck makes the battle difficult for him, since he knows that Paul may actually have to fight someone soon. Finally, Paul meets with Dr. Yueh, a doctor of the Atreides, who gives him some information about the life-forms on Arrakis—including the planet’s sandworms. '],
  ['Thufir Hawat', '4:23', '', '', '', 'Later, Paul meets Thufir Hawat, the duke’s main strategist, in the training room. Hawat warns Paul of the dangers he will face on Arrakis, but he tries to dispel Paul’s fears that his father will be killed. He also mentions the Fremen, the native inhabitants of Arrakis. Hawat explains that the Fremen are a tough, resilient people, and they will have to be dealt with in some way by the Atreides. After Hawat leaves, Gurney Halleck, the duke’s war master, appears and challenges Paul to a training duel. Paul fights well, but Halleck makes the battle difficult for him, since he knows that Paul may actually have to fight someone soon. Finally, Paul meets with Dr. Yueh, a doctor of the Atreides, who gives him some information about the life-forms on Arrakis—including the planet’s sandworms. '],
];



function createMainmenu() {
  let html = '';

  for(let i in menuItems) {
    html += '<li tabindex="0" data-id="' + i + '">';
    html += ' <span class="menu-icon">';
    html += '   <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">';
    html += '     <path d="M17.74,30,16,29l4-7h6a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H6A2,2,0,0,0,4,8V20a2,2,0,0,0,2,2h9v2H6a4,4,0,0,1-4-4V8A4,4,0,0,1,6,4H26a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H21.16Z"  class="icon-fill"/>';
    html += '     <rect x="8" y="10" width="16" height="2" class="icon-fill"/>';
    html += '     <rect x="8" y="16" width="10" height="2" class="icon-fill"/>';
    html += '     <rect class="icon-transparent" width="32" height="32"/>';
    html += '   </svg>';
    html += ' </span>';
    html += ' <span class="menu-title">' + menuItems[i] + '</span>';
    html += '</li>';
  }
  return html;
}


function createChatCells(data) {
  let html = '';
  let isAdmin = '';

  for(let row in data) {
    let rowData = data[row];

    if (rowData[6] == '1') { isAdmin = "admin" } else isAdmin = "";

    html += '<div class="chat_cell ' + isAdmin +'">';

    html += '<div class="icon-overflow"><span><img src="images/overflow-menu--vertical.svg"/></span></div>';

    html += ' <div class="chat_cell_message">';
    html += '   <div class="chat_name">' + rowData[0] + '</div>';
    html += '   <div class="chat_time">' + rowData[1] + '</div>';
    html += '   <div class="chat_message">' + rowData[5] + '</div>';
    html += ' </div>';

    if (rowData[3] != '') {
      html += ' <ul class="chat_reactions">';
      html += '   <li class="chat_reaction">';
      html += '     <span class="chat_reaction_icon">' + rowData[2] + '</span>';
      html += '     <span class="chat_reaction_number">' + rowData[3] + '</span>';
      html += ' </li>';
      html += '</ul>';
    }

    if (rowData[4] != '') {
      html += ' <div class="chat_reply">';
      html += '   <span class="chat_reply_icon">L</span>';
      html += '   <span class="chat_reply_text">' + rowData[4] + ' replies</span>';
      html += ' </div>';
    }

    html += '</div>';
  }
  return html;
}


function insertHTML(id, html) {
  var el = document.getElementById(id);

  if(!el) {
    alert('Element with id ' + id + ' not found.');
  }

  el.innerHTML = html;
}


function clickManagement() {

  let itemClicked = event.target;
  let elChatContainer = getElement('chat-container');
  let elTitleSpecial = getElement("title-special");
  let elCurrentChat1 = getElement("current-chat-1");
  let elCurrentChat2 = getElement("current-chat-2");


  if (itemClicked.classList.contains("chat_reaction")) {
    var r = itemClicked.closest("ul li");
    r.childNodes[3].innerHTML = Math.floor(r.childNodes[3].innerHTML) + 1;
  }

  if (itemClicked.closest('.toggle')) {
    classToggle(itemClicked, "switch");
  }

  if (itemClicked.closest('.title-bar')) {
    classToggle(elChatContainer, "mainmenu-open");
  }

  if (itemClicked.closest(".icon-people")) {
    classRemove(elChatContainer, "mainmenu-open");
    classToggle(elChatContainer, "people-open");
  }

  if (itemClicked.closest(".icon-people-close")) {
    classToggle(elChatContainer, "people-open");
  }

  if (itemClicked.closest(".icon-settings")) {
    classRemove(elChatContainer, "mainmenu-open");
    classToggle(elChatContainer, "settings-open");
  }
  if (itemClicked.closest(".icon-settings-close")) {
    classToggle(elChatContainer, "settings-open");
  }

  if (itemClicked.closest(".icon-support")) {
    classRemove(elChatContainer, "mainmenu-open");
    elTitleSpecial.innerHTML = "Technical support";
    elCurrentChat1.innerHTML = elTitleSpecial.innerHTML;
    elCurrentChat2.innerHTML = elTitleSpecial.innerHTML;
    let html = createChatCells(data[1]);
    insertHTML('chat-messages', html);
  }

  // item in main menu clicked
  if (itemClicked.closest(".mainmenu")) {

    classRemove(elChatContainer, "technical");

    // find the li clicked
    let elMainmenuItem = itemClicked.closest("li");
    let mainmenuItemId = elMainmenuItem.dataset.id;

    console.log(mainmenuItemId);
    if (mainmenuItemId == 1) classAdd(elChatContainer, "technical");

    elCurrentChat1.innerHTML = 'in ' + menuItems[mainmenuItemId];
    elCurrentChat2.innerHTML = menuItems[mainmenuItemId];
    elTitleSpecial.innerHTML = menuItems[mainmenuItemId];

    let html = createChatCells(data[mainmenuItemId]);
    insertHTML('chat-messages', html);
    classToggle(elChatContainer, "mainmenu-open");
  }

}


function run() {
  let html = createChatCells(data[0]);
  insertHTML('chat-messages', html);

  html = createMainmenu();
  insertHTML('mainmenu', html);

  startListener();
}

window.onload = run;
