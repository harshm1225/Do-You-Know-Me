const question1_selectEl = document.querySelector("#question-1");
const question2_selectEl = document.querySelector("#question-2");
const question3_selectEl = document.querySelector("#question-3");
const question4_selectEl = document.querySelector("#question-4");
const question5_selectEl = document.querySelector("#question-5");
const submit_btn = document.querySelector("#submit-btn");
const output_cont = document.querySelector("#output");
const userInputEl = document.querySelector("#user");

let answersIndexes = [2, 1, 2, 2, 1];

function calculateTheScore() {
  let score = 0;
  question1_selectEl.selectedIndex === answersIndexes[0] ? score++ : score;
  question2_selectEl.selectedIndex === answersIndexes[1] ? score++ : score;
  question3_selectEl.selectedIndex === answersIndexes[2] ? score++ : score;
  question4_selectEl.selectedIndex === answersIndexes[3] ? score++ : score;
  question5_selectEl.selectedIndex === answersIndexes[4] ? score++ : score;
  return score;
}
submit_btn.addEventListener("click", (event) => {
  event.preventDefault();
  let username = userInputEl.value;
  console.log(username);
  if (!username) {
    output_cont.innerText = `Please enter username`;
    output_cont.style.visibility = "visible";
    setTimeout(() => {
      output_cont.innerText = ``;
      output_cont.style.visibility = "hidden";
    }, 2000);
  } else {
    let user_score = calculateTheScore();
    output_cont.style.visibility = "visible";
    output_cont.innerText = `${username} Score is ${user_score}`;
  }
});
