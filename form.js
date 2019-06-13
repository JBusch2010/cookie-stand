var allQuestions = [];

var Questionaire = function(question1, question2){
  this.question1 = question1;
  this.question2 = question2;
};

var form = document.getElementById('questionare-form');

var handleFormSubmit = function(formSubmitEvent){
  formSubmitEvent.preventDefault();

  var question1FromForm = formSubmitEvent.target['question1'].value;
  var question2FromForm = formSubmitEvent.target['question2'].value;

  var newQuestionaire = new Questionaire(question1FromForm, question2FromForm);
  allQuestions.push(newQuestionaire);
};

form.addEventListener('submit', handleFormSubmit);
