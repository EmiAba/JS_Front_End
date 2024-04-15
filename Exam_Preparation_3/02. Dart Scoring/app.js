
window.addEventListener("load", solve);

function solve() {
  const addButtonElement = document.getElementById("add-btn");
  const playerInputElement = document.getElementById("player");
  const scoreInputElement = document.getElementById("score");
  const roundInputElement = document.getElementById("round");
  const MakeSureListElement = document.getElementById("sure-list");
  const scoreBoardListElement = document.getElementById('scoreboard-list');
  const clearButtonElement = document.querySelector('.btn.clear');

  addButtonElement.addEventListener("click", () => {
    const player = playerInputElement.value;
    const score = scoreInputElement.value;
    const round = roundInputElement.value;

    const scoreElement = createScoreDartElements(player, score, round);
    MakeSureListElement.appendChild(scoreElement);

    addButtonElement.setAttribute("disabled", 'disabled');

    playerInputElement.value = "";
    scoreInputElement.value = "";
    roundInputElement.value = "";
  });

  function createScoreDartElements(player, score, round) {
    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("btn", "edit");
    editButtonElement.textContent = "EDIT";

    const okButtonElement = document.createElement("button");
    okButtonElement.classList.add("btn", "ok");
    okButtonElement.textContent = "OK";

    const playerPElement = document.createElement("p");
    playerPElement.textContent = player;

    const scorePElement = document.createElement("p");
    scorePElement.textContent = `Score: ${score}`;

    const roundPElement = document.createElement("p");
    roundPElement.textContent = `Round: ${round}`;

    const articleContainer = document.createElement("article");
    articleContainer.appendChild(playerPElement);
    articleContainer.appendChild(scorePElement);
    articleContainer.appendChild(roundPElement);

    const dartLiElement = document.createElement("li");
    dartLiElement.classList.add("dart-item");
    dartLiElement.appendChild(articleContainer);
    dartLiElement.appendChild(editButtonElement);
    dartLiElement.appendChild(okButtonElement);

    editButtonElement.addEventListener('click', () => {
      playerInputElement.value = player;
      scoreInputElement.value = score;
      roundInputElement.value = round;
      dartLiElement.remove();
    });

    okButtonElement.addEventListener('click', () => {
      editButtonElement.remove();
      okButtonElement.remove();
      scoreBoardListElement.appendChild(dartLiElement);\
      function solve() {
  const addButtonElement = document.getElementById("add-btn");
  const playerInputElement = document.getElementById("player");
  const scoreInputElement = document.getElementById("score");
  const roundInputElement = document.getElementById("round");
  const MakeSureListElement = document.getElementById("sure-list");
  const scoreBoardListElement = document.getElementById('scoreboard-list');
  const clearButtonElement = document.querySelector('.btn.clear');

  addButtonElement.addEventListener("click", () => {
    const player = playerInputElement.value;
    const score = scoreInputElement.value;
    const round = roundInputElement.value;

    const scoreElement = createScoreDartElements(player, score, round);
    MakeSureListElement.appendChild(scoreElement);
    
    addButtonElement.setAttribute("disabled", 'disabled');

    playerInputElement.value = "";
    scoreInputElement.value = "";
    roundInputElement.value = "";
  });

  function createScoreDartElements(player, score, round) {
    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("btn", "edit");
    editButtonElement.textContent = "EDIT";

    const okButtonElement = document.createElement("button");
    okButtonElement.classList.add("btn", "ok");
    okButtonElement.textContent = "OK";

    const playerPElement = document.createElement("p");
    playerPElement.textContent = player;

    const scorePElement = document.createElement("p");
    scorePElement.textContent = `Score: ${score}`;

    const roundPElement = document.createElement("p");
    roundPElement.textContent = `Round: ${round}`;

    const articleContainer = document.createElement("article");
    articleContainer.appendChild(playerPElement);
    articleContainer.appendChild(scorePElement);
    articleContainer.appendChild(roundPElement);

    const dartLiElement = document.createElement("li");
    dartLiElement.classList.add("dart-item");
    dartLiElement.appendChild(articleContainer);
    dartLiElement.appendChild(editButtonElement);
    dartLiElement.appendChild(okButtonElement);

    editButtonElement.addEventListener('click', () => {
      playerInputElement.value = player;
      scoreInputElement.value = score;
      roundInputElement.value = round;
      dartLiElement.remove();
    });

    okButtonElement.addEventListener('click', () => {
      editButtonElement.remove();
      okButtonElement.remove();
      scoreBoardListElement.appendChild(dartLiElement);
      addButtonElement.removeAttribute('disabled');
    });

    return dartLiElement;
  }

  clearButtonElement.addEventListener('click', () => {
    scoreBoardListElement.innerHTML = ""; // Clear all scoreboard entries
  });
}

    });

    return dartLiElement;
  }

  clearButtonElement.addEventListener('click', () => {
    scoreBoardListElement.innerHTML = ""; // Clear all scoreboard entries
  });
}
