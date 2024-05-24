// variables - to put data in
let answers = [];
let numberOfQuestions = 2;
// get all the elements with the class answer
document.querySelectorAll(".answer").forEach((answer) => {
  // add an event listener to each answer element
  answer.addEventListener("click", () => {
    // find if the question is already in the answers array
    const existingAnswerIndex = answers.findIndex(
      (ans) => ans.question === answer.dataset.question
    );
    // if the question is already in the answers array, update the answer
    if (existingAnswerIndex !== -1) {
      answers[existingAnswerIndex] = {
        question: answer.dataset.question,
        score: answer.dataset.score,
      };
    } else {
      // if the question is not in the answers array, add the answer
      answers.push({
        question: answer.dataset.question,
        score: answer.dataset.score,
      });
    }
    // remove the selected class from all the answers of the same question
    document
      .querySelectorAll(`.answer[data-question='${answer.dataset.question}']`)
      .forEach((answer) => {
        answer.classList.remove("selected");
      });
    // add the selected class to the clicked answer
    answer.classList.add("selected");
    // if the number of answers in the answers array is equal to the number of questions, calculate the final score
    if (answers.length === numberOfQuestions) {
      let finalScore = 0;
      answers.forEach((answer) => {
        finalScore += parseInt(answer.score);
      });
      document.querySelectorAll(".perfume").forEach((perfume) => {
        perfume.classList.add("hidden");
      });
      if (finalScore >= 0 && finalScore <= 5) {
        document.querySelector(".perfume-1").classList.remove("hidden");
      }
      console.log(finalScore);
      document.querySelector(".result").innerHTML = finalScore;
    }
  });
});
