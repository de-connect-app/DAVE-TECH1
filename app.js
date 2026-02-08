document.addEventListener("DOMContentLoaded", () => {

  // DOM Elements
  const displayName = document.getElementById("displayName");
  const moduleContainer = document.getElementById("module-container");
  const quizContainer = document.getElementById("quiz-container");
  const progressCards = document.getElementById("progress-cards");
  const totalScoreEl = document.getElementById("total-score");
  const botChat = document.getElementById("bot-chat");
  const chatBox = document.getElementById("chat-box");
  const botInput = document.getElementById("bot-input");
  const botSend = document.getElementById("bot-send");

  const userName = "LordDavetech";
  displayName.textContent = userName;

  // Progress + Achievements
  let progress = JSON.parse(localStorage.getItem("daveTechProgress")) || {
    truths: { completed: 0, score: 0, badges: [] },
    how: { completed: 0, score: 0, badges: [] },
    errors: { completed: 0, score: 0, badges: [] },
    paths: { completed: 0, score: 0, badges: [] },
    botSession: { completed: 0, score: 0, badges: [] }
  };

  // ---------- CELEBRATION ----------
  function fireConfetti() {
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti-piece");
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
      confetti.style.animationDuration = (1 + Math.random() * 1.5) + "s";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 2000);
    }
  }

  // ---------- DASHBOARD ----------
  function updateDashboard(animateBadge = null) {
    progressCards.innerHTML = "";
    let totalScore = 0;

    for (const mod in progress) {
      const card = document.createElement("div");
      card.classList.add("card", "dashboard-card");
      card.style.animation = "fadeIn 0.5s ease forwards";
      const lessons = modulesData.lessons[mod].length;
      const completed = progress[mod].completed;
      const score = progress[mod].score;
      totalScore += score;

      let badgesHTML = "";
      if (progress[mod].badges.length > 0) {
        badgesHTML = `<p>🏅 Badges: ${progress[mod].badges.join(", ")}</p>`;
      }

      card.innerHTML = `
        <h3>${mod}</h3>
        <p>Lessons Completed: ${completed}/${lessons}</p>
        <p>Score: ${score}</p>
        ${badgesHTML}
        <div class="progress-bar" style="background:#334155; border-radius:5px; height:10px; margin-top:0.5rem;">
          <div style="width:${(completed / lessons) * 100}%; background:#38bdf8; height:10px; border-radius:5px; transition: width 1s ease;"></div>
        </div>
      `;
      progressCards.appendChild(card);

      // Animate badge flash if recently earned
      if (animateBadge && progress[mod].badges.includes(animateBadge)) {
        card.classList.add("badge-flash");
        fireConfetti();
        setTimeout(() => card.classList.remove("badge-flash"), 1200);
      }
    }

    // Total score highlight
    let lastTotal = parseInt(totalScoreEl.dataset.lastTotal || "0");
    if (totalScore > lastTotal) {
      totalScoreEl.style.animation = "badge-flash 1s ease forwards";
      setTimeout(() => totalScoreEl.style.animation = "", 1000);
    }
    totalScoreEl.dataset.lastTotal = totalScore;
    totalScoreEl.textContent = totalScore;
  }
  updateDashboard();

  // ---------- MODULES ----------
  document.querySelectorAll(".module-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const module = btn.dataset.module;
      quizContainer.innerHTML = "";
      moduleContainer.innerHTML = "";
      botChat.style.display = (module === "botSession") ? "block" : "none";

      modulesData.lessons[module].forEach(lesson => {
        const div = document.createElement("div");
        div.classList.add("card", "lesson-card");
        div.innerHTML = `
          <h3 class="lesson-title">${lesson.title}</h3>
          <p class="lesson-content" style="display:none;">${lesson.content}</p>
        `;
        moduleContainer.appendChild(div);

        const title = div.querySelector(".lesson-title");
        const content = div.querySelector(".lesson-content");
        title.addEventListener("click", () => {
          if (content.style.display === "none") {
            content.style.display = "block";
            content.style.animation = "fadeIn 0.5s ease forwards";
          } else {
            content.style.display = "none";
          }
        });
      });

      if (!progress[module].badges.includes("Module Completed")) {
        progress[module].badges.push("Module Completed");
        updateDashboard("Module Completed");
      }

      progress[module].completed = modulesData.lessons[module].length;
      localStorage.setItem("daveTechProgress", JSON.stringify(progress));
      updateDashboard();
    });
  });

  // ---------- QUIZZES ----------
  document.querySelectorAll(".quiz-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const module = btn.dataset.module;
      moduleContainer.innerHTML = "";
      quizContainer.innerHTML = "";
      botChat.style.display = "none";

      modulesData.quizzes[module].forEach((quiz, idx) => {
        const div = document.createElement("div");
        div.classList.add("card", "quiz-card");
        let optionsHTML = "";
        quiz.options.forEach((opt, i) => {
          optionsHTML += `<button class="quiz-opt-btn" data-module="${module}" data-qidx="${idx}" data-oidx="${i}">${opt}</button>`;
        });
        div.innerHTML = `<h3>Q${idx + 1}: ${quiz.question}</h3>${optionsHTML}`;
        quizContainer.appendChild(div);
      });

      document.querySelectorAll(".quiz-opt-btn").forEach(optBtn => {
        optBtn.addEventListener("click", () => {
          const module = optBtn.dataset.module;
          const qidx = parseInt(optBtn.dataset.qidx);
          const oidx = parseInt(optBtn.dataset.oidx);
          const quiz = modulesData.quizzes[module][qidx];

          const feedback = document.createElement("div");
          feedback.classList.add("chat-msg");
          feedback.textContent = (oidx === quiz.answer) ? "✅ Correct!" : "❌ Wrong!";
          feedback.style.color = (oidx === quiz.answer) ? "#38bdf8" : "#facc15";
          feedback.style.animation = "fadeIn 0.4s ease forwards";
          quizContainer.appendChild(feedback);

          if (oidx === quiz.answer) {
            progress[module].score += 1;
            if (!progress[module].badges.includes("Quiz Master")) {
              progress[module].badges.push("Quiz Master");
              updateDashboard("Quiz Master");
            }
          }

          localStorage.setItem("daveTechProgress", JSON.stringify(progress));
          updateDashboard();
        });
      });
    });
  });

  // ---------- BOT CHAT ----------
  botSend.addEventListener("click", () => {
    const msg = botInput.value.trim();
    if (!msg) return;

    const userMsg = document.createElement("div");
    userMsg.classList.add("chat-msg", "user-msg");
    userMsg.textContent = `${userName}: ${msg}`;
    chatBox.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.classList.add("chat-msg", "bot-msg");
    chatBox.appendChild(botMsg);

    let i = 0;
    const response = getBotResponse(msg);
    const typing = setInterval(() => {
      if (i < response.length) {
        botMsg.textContent += response[i];
        i++;
        chatBox.scrollTop = chatBox.scrollHeight;
      } else clearInterval(typing);
    }, 30);

    botInput.value = "";
  });

  function getBotResponse(msg) {
    msg = msg.toLowerCase();
    if (msg.includes("what") && msg.includes("bot")) return "A bot is an automated program that reacts to events like messages, clicks, or API calls.";
    if (msg.includes("how") && msg.includes("connect")) return "Bots connect to platforms via APIs. They send and receive data programmatically.";
    if (msg.includes("event")) return "Every bot works on events and state. Event triggers response, state stores data.";
    return "Interesting question! Bots automate tasks, respond to events, and save developer time. Keep experimenting!";
  }

});
