// Define the quiz data
const quizData = [
  {
    group: "0.3",
    questions: [
      { question: "", answers: ["Correct", "B", "C", "D"], correctAnswerIndex: 0, image: "img/quizImg/theCat.jpg"},
      { question: "Q2", answers: ["A", "B", "Correct", "D"], correctAnswerIndex: 2 },
      { question: "Q 3", answers: ["A", "Correct", "C", "D"], correctAnswerIndex: 1 }
    ]
  },
  {
    group: "0.4",
    questions: [
      { question: "Q 4", answers: ["A", "B", "C", "Correct"], correctAnswerIndex: 3 },
      { question: "Q 5", answers: ["Correct", "B", "C", "D"], correctAnswerIndex: 0 }
    ]
  },
  {
    group: "0.4",
    questions: [
      { question: "Q 4", answers: ["A", "B", "C", "Correct"], correctAnswerIndex: 3 },
      { question: "Q 5", answers: ["Correct", "B", "C", "D"], correctAnswerIndex: 0 }
    ]
  },
  {
    group: "0.5",
    questions: [
      { question: "Q 4", answers: ["A", "B", "C", "Correct"], correctAnswerIndex: 3 },
      { question: "Q 5", answers: ["Correct", "B", "C", "D"], correctAnswerIndex: 0 }
    ]
  },
  {
    group: "0.6",
    questions: [
      { question: "Q 6", answers: ["A", "B", "Correct", "D"], correctAnswerIndex: 2 },
      { question: "Q 7", answers: ["A", "Correct", "C", "D"], correctAnswerIndex: 1 },
      { question: "Q 8", answers: ["A", "B", "C", "Correct"], correctAnswerIndex: 3 }
    ]
  }
];

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize quiz
function initializeQuiz() {
  quizData.forEach(group => {
    shuffleArray(group.questions); // Shuffle questions inside each group
    group.questions.forEach(question => {
      question.answered = false; // Mark all questions as unanswered initially
    });
  });
  startQuiz();
}

// Start quiz
function startQuiz() {
  let currentGroupIndex = 0;
  let currentQuestionIndex = 0;

  displayQuestion();

  // Handle answer button clicks
  const answerButtonsContainer = document.getElementById("answer-buttons");
  answerButtonsContainer.addEventListener("click", handleAnswerButtonClick);

  // Display the countdown timer element
  const countdownElement = document.createElement("div");
  countdownElement.id = "countdown";
  countdownElement.classList.add("countdown"); // Add this line to apply the CSS class
  document.getElementById("quiz-container").appendChild(countdownElement);

  // Countdown timer variables
  let countdownTime = 30; // 60 seconds

  // Update countdown timer display
  function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = countdownTime;


     if (countdownTime === 0) {
    // Show "Well done" card
    const currentGroup = quizData[currentGroupIndex];
    showCard("", currentGroup.group);
    exitFullscreen();
    return;
  }

    countdownTime--; // Decrease the countdown time by 1 second

    // Call the updateCountdown function again after 1 second
    setTimeout(updateCountdown, 1000);
  }

  // Handle answer button click
  function handleAnswerButtonClick(event) {
    if (event.target.tagName === "BUTTON") {
      if (countdownTime === 30) {
        updateCountdown();
      }

      const selectedAnswerIndex = parseInt(event.target.dataset.answerIndex);
      const currentGroup = quizData[currentGroupIndex];
      const currentQuestion = currentGroup.questions[currentQuestionIndex];

      if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
        currentQuestion.answered = true; // Mark question as answered correctly

        // Remove the answered question from the group
        currentGroup.questions.splice(currentQuestionIndex, 1);

        currentGroupIndex++; // Move to the next group
        currentQuestionIndex = 0; // Reset the question index
      } else {
        currentQuestion.answered = false; // Mark question as answered incorrectly
        currentQuestionIndex--;
      }

      if (currentQuestionIndex < 0) {
        currentGroupIndex--;
        if (currentGroupIndex < 0) {
       // Show "Well done" card
showCard("", currentGroup.group);
            exitFullscreen();
          return;
        }
        currentQuestionIndex = quizData[currentGroupIndex].questions.length - 1;
      }

      if (currentQuestionIndex >= currentGroup.questions.length) {
        // Show "Well done" card
showCard("", currentGroup.group);
          exitFullscreen();
        return;
      }

      if (!quizData[currentGroupIndex]) {
        // Show "Well done" card
showCard("", currentGroup.group);
          exitFullscreen();
        return;
      }

      displayQuestion();
    }
  }

  // Display current question
  function displayQuestion() {
    const currentGroup = quizData[currentGroupIndex];
    const currentQuestion = currentGroup.questions[currentQuestionIndex];

    document.getElementById("question").textContent = currentQuestion.question;
      

    const answerButtonsContainer = document.getElementById("answer-buttons");
    answerButtonsContainer.innerHTML = ""; // Clear previous answer buttons
      
       if (currentQuestion.image) {
    const imageElement = document.createElement("img");
    imageElement.src = currentQuestion.image;
    imageElement.classList.add("question-image"); // Add a CSS class for styling
    imageElement.style = "width: 300px; border: 1px solid black; display: block; margin: 0 auto; border-radius: 10px";
    answerButtonsContainer.appendChild(imageElement);
  }
      
    for (let i = 0; i < currentQuestion.answers.length; i++) {
      const answerButton = document.createElement("button");
      answerButton.classList.add("answer-btn");
      answerButton.textContent = currentQuestion.answers[i];
      answerButton.dataset.answerIndex = i;
      answerButtonsContainer.appendChild(answerButton);
    }
  }
}

let isFullscreen = false; // Add this line to declare and initialize the isFullscreen variable

const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  const quizContainer = document.getElementById("quiz-container");
    

  if (!isFullscreen) {
    // Request full screen mode and add padding
    if (quizContainer.requestFullscreen) {
      quizContainer.requestFullscreen();
    } else if (quizContainer.mozRequestFullScreen) {
      quizContainer.mozRequestFullScreen(); // Firefox
    } else if (quizContainer.webkitRequestFullscreen) {
      quizContainer.webkitRequestFullscreen(); // Chrome, Safari, Opera
    } else if (quizContainer.msRequestFullscreen) {
      quizContainer.msRequestFullscreen(); // IE/Edge
    }
    quizContainer.style.padding = "200px"; // Add 200px padding when entering full screen
  } else {
    // Exit full screen mode and remove padding
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); // Firefox
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // Chrome, Safari, Opera
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // IE/Edge
    }
    quizContainer.style.padding = ""; // Remove the padding when exiting full screen
  }

  isFullscreen = !isFullscreen;
}

// Exit full-screen mode with a delay of 1 second
function exitFullscreen() {
  setTimeout(function() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); // Firefox
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // Chrome, Safari, Opera
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // IE/Edge
    }
  }, 700); // 1000 milliseconds = 1 second
}



// Display the card with the specified message
function showCard(message, group) {
    
   // Fade out the content
  const contentElements = document.querySelectorAll("body > *:not(#quiz-container)");
  contentElements.forEach(element => {
    element.style.transition = "opacity 1s";
    element.style.opacity = "0";
  });
    
  const showCardContainer = document.createElement("div");
  showCardContainer.style.position = "fixed";
  showCardContainer.style.top = "50%";
  showCardContainer.style.left = "50%";
  showCardContainer.style.transform = "translate(-50%, -50%)";
  showCardContainer.style.backgroundColor = "white";
  showCardContainer.style.padding = "20px";
  showCardContainer.style.border = "1px solid black";
  showCardContainer.style.borderRadius = "10px"; // Rounded corners
  showCardContainer.style.zIndex = "9999";
  showCardContainer.style.opacity = "0"; // Initially hide the box
  showCardContainer.style.transition = "opacity 1s"; // Apply fade-in effect

   // Set the width and height variables based on the media query
  const mediaQuery = window.matchMedia("(max-width: 700px)");
  let width;
  let height;

  if (mediaQuery.matches) {
    // For smaller screens (max-width: 700px)
    width = "300px";
    height = "500px";
    showCardContainer.style.minWidth = "200px"; // Set the minimum width
    showCardContainer.style.maxWidth = "500px"; // Set the maximum width
  } else {
    // For larger screens
    width = "600px";
    height = "450px";
    showCardContainer.style.minWidth = "400px"; // Set the minimum width
    showCardContainer.style.maxWidth = "600px"; // Set the maximum width
  } 
    
    

  const writing = document.createElement("div");
  writing.innerHTML = `Please take a few moments to join our social groups and share our book project with others!`;
  writing.style.marginTop = "40px";
     writing.style.textAlign = "center";
  
    
    
  const writing2 = document.createElement("div");
  writing2.innerHTML = `Your book level is: <br><br> <span style="font-size: 24px; color: darkred">${group}</span> <br><br> Find and print books at this level today!`;
  writing2.style.marginTop = "20px";
    writing2.style.textAlign = "center";

  // Social media buttons
  const socialButtons = document.createElement("div");
  socialButtons.style.marginTop = "20px"; // Adjust the margin from the top
  socialButtons.style.display = "flex";
  socialButtons.style.justifyContent = "center";

  const facebookLink = document.createElement("a");
  facebookLink.href = "https://www.facebook.com/profile.php?id=100092312624395";
  facebookLink.style.marginRight = "20px";
  facebookLink.style.fontSize = "50px";
  const facebookIcon = document.createElement("i");
  facebookIcon.className = "fa fa-facebook";
  facebookLink.appendChild(facebookIcon);

  const twitterLink = document.createElement("a");
  twitterLink.href = "https://twitter.com/buckland_books";
  twitterLink.style.marginRight = "20px";
  twitterLink.style.fontSize = "50px";
  const twitterIcon = document.createElement("i");
  twitterIcon.className = "fa fa-twitter";
  twitterLink.appendChild(twitterIcon);

  const instagramLink = document.createElement("a");
  instagramLink.href = "https://www.instagram.com/buckland_books/";
  instagramLink.style.marginRight = "20px";
  instagramLink.style.fontSize = "50px";
  const instagramIcon = document.createElement("i");
  instagramIcon.className = "fa fa-instagram";
  instagramLink.appendChild(instagramIcon);

  const refreshBox = document.createElement("div"); // Create the refreshBox element
  refreshBox.appendChild(writing); // Append the writing element to the refreshBox
    
  // Create the anchor element
const quizLink = document.createElement("a");
quizLink.href = "./quiz.html";
quizLink.style.position = "fixed";
quizLink.style.top = "20px"; // Adjust the distance from the top
quizLink.style.left = "50%"; // Place it at the horizontal center
quizLink.style.transform = "translateX(-50%)"; // Center the element horizontally

// Create the icon element
const quizIcon = document.createElement("i");
quizIcon.className = "fa fa-book";
quizIcon.style.fontSize = "20px";
quizIcon.textContent = " To All Books";

    // Append the icon element to the anchor element
quizLink.appendChild(quizIcon);
    refreshBox.appendChild(quizLink);
    
  // Append the refreshBox to the showCardContainer
  showCardContainer.appendChild(refreshBox);
  showCardContainer.appendChild(socialButtons);
  showCardContainer.appendChild(writing2); // Append the writing2 element to the showCardContainer

  socialButtons.appendChild(facebookLink);
  socialButtons.appendChild(twitterLink);
  socialButtons.appendChild(instagramLink);

  // Append the showCard container to the body
  document.body.appendChild(showCardContainer);

  // Show the card with a fade-in effect
  setTimeout(() => {
    showCardContainer.style.opacity = "1";
  }, 1000); // Delay of 1 second (1000 milliseconds)
}

// Initialize quiz when the page loads
window.addEventListener("DOMContentLoaded", initializeQuiz);