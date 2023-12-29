const quizContainer = document.querySelector('.quiz-container');
const btnContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const showResultButton = document.getElementById('show-result-btn');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  { question: '爱', answers: ['Love', 'Eat', 'Read', 'Write'], correctIndex: 0 },
      { question: 'ài', answers: ['Love', 'Friend', 'Eat', 'Sleep'], correctIndex: 0 },
      { question: 'bā', answers: ['Two', 'Eight', 'Ten', 'Three'], correctIndex: 1 },
      { question: 'bàba', answers: ['Mother', 'Father', 'Sister', 'Brother'], correctIndex: 1 },
      { question: 'bēizi', answers: ['Cup', 'Plate', 'Bowl', 'Spoon'], correctIndex: 0 },
      { question: 'Běijīng', answers: ['Shanghai', 'Beijing', 'Guangzhou', 'Nanjing'], correctIndex: 1 },
      { question: 'běn', answers: ['Book', 'Magazine', 'Newspaper', 'Journal'], correctIndex: 0 },
      { question: 'bú kèqi', answers: ['Hello', 'Goodbye', 'Thank you', 'You’re welcome'], correctIndex: 3 },
      { question: 'bù', answers: ['Yes', 'No', 'Maybe', 'Always'], correctIndex: 1 },
      { question: 'cài', answers: ['Meat', 'Vegetable', 'Rice', 'Fruit'], correctIndex: 1 },
      { question: 'chá', answers: ['Coffee', 'Tea', 'Water', 'Milk'], correctIndex: 1 },
      { question: 'chī', answers: ['Read', 'Write', 'Eat', 'Sleep'], correctIndex: 2 },
      { question: 'chūzūchē', answers: ['Bus', 'Train', 'Taxi', 'Car'], correctIndex: 2 },
      { question: 'dǎ diànhuà', answers: ['Send a letter', 'Make a phone call', 'Visit a friend', 'Go shopping'], correctIndex: 1 },
      { question: 'dà', answers: ['Big', 'Small', 'Tall', 'Short'], correctIndex: 0 },
      { question: 'de', answers: ['Of', 'In', 'On', 'With'], correctIndex: 0 },
      { question: 'diǎn', answers: ['Minute', 'Hour', 'Day', 'Second'], correctIndex: 0 },
      { question: 'diànnǎo', answers: ['Television', 'Computer', 'Telephone', 'Radio'], correctIndex: 1 },
      { question: 'diànshì', answers: ['Book', 'Magazine', 'Newspaper', 'Journal'], correctIndex: 0 },
      { question: 'diànyǐng', answers: ['Drama', 'Documentary', 'News', 'Movie'], correctIndex: 3 },
      { question: 'dōngxi', answers: ['Thing', 'Person', 'Place', 'Idea'], correctIndex: 0 },
      { question: 'dōu', answers: ['Every', 'All', 'Some', 'None'], correctIndex: 1 },
      { question: 'dú', answers: ['See', 'Read', 'Listen', 'Speak'], correctIndex: 1 },
      { question: 'duìbuqǐ', answers: ['Excuse me', 'I’m sorry', 'Thank you', 'You’re welcome'], correctIndex: 1 },
      { question: 'duō', answers: ['Few', 'Many', 'Little', 'Much'], correctIndex: 1 },
      { question: 'érzi', answers: ['Daughter', 'Son', 'Sister', 'Brother'], correctIndex: 1 },
      { question: 'èr', answers: ['Three', 'Two', 'Four', 'Five'], correctIndex: 1 },
      { question: 'fàndiàn', answers: ['Cafe', 'Hotel', 'Restaurant', 'Bar'], correctIndex: 2 },
      { question: 'fēijī', answers: ['Car', 'Bus', 'Train', 'Airplane'], correctIndex: 3 },
      { question: 'fēnzhōng', answers: ['Hour', 'Minute', 'Second', 'Day'], correctIndex: 1 },
      { question: 'gāoxìng', answers: ['Happy', 'Sad', 'Excited', 'Angry'], correctIndex: 0 },
      { question: 'gè', answers: ['Some', 'Many', 'Few', 'All'], correctIndex: 0 },
      { question: 'gōngzuò', answers: ['Study', 'Work', 'Play', 'Sleep'], correctIndex: 1 },
      { question: 'Hànyǔ', answers: ['Korean', 'Japanese', 'English', 'Chinese'], correctIndex: 3 },
      { question: 'hǎo', answers: ['Good', 'Bad', 'Nice', 'Ugly'], correctIndex: 0 },
      { question: 'hào', answers: ['Number', 'Date', 'Day', 'Month'], correctIndex: 1 },
      { question: 'hē', answers: ['Eat', 'Drink', 'Sleep', 'Play'], correctIndex: 1 },
      { question: 'hé', answers: ['And', 'But', 'Or', 'So'], correctIndex: 0 },
      { question: 'hěn', answers: ['Little', 'A lot', 'Very', 'Quite'], correctIndex: 2 },
      { question: 'hòumiàn', answers: ['Front', 'Back', 'Left', 'Right'], correctIndex: 1 },
      { question: 'huí', answers: ['Go', 'Come', 'Leave', 'Stay'], correctIndex: 1 },
      { question: 'huì', answers: ['Can', 'Cannot', 'Will', 'Shall'], correctIndex: 0 },
      { question: 'jǐ', answers: ['How', 'What', 'When', 'Where'], correctIndex: 0 },
      { question: 'jiā', answers: ['Home', 'Office', 'School', 'Market'], correctIndex: 0 },
      { question: 'jiào', answers: ['Say', 'Tell', 'Ask', 'Call'], correctIndex: 3 },
      { question: 'jīntiān', answers: ['Yesterday', 'Today', 'Tomorrow', 'Now'], correctIndex: 1 },
      { question: 'jiǔ', answers: ['Eight', 'Nine', 'Ten', 'Twelve'], correctIndex: 0 },
      { question: 'kāi', answers: ['Drive', 'Open', 'Close', 'Stop'], correctIndex: 1 },
      { question: 'kàn', answers: ['See', 'Look', 'Read', 'Watch'], correctIndex: 2 },
      { question: 'kànjiàn', answers: ['Hear', 'Listen', 'See', 'Look'], correctIndex: 2 },
      { question: 'kuài', answers: ['Dollar', 'Euro', 'Pound', 'Yuan'], correctIndex: 3 },
      { question: 'lái', answers: ['Go', 'Come', 'Leave', 'Stay'], correctIndex: 1 },
      { question: 'lǎoshī', answers: ['Student', 'Teacher', 'Doctor', 'Engineer'], correctIndex: 1 },
      { question: 'le', answers: ['Still', 'Already', 'Again', 'Now'], correctIndex: 1 },
      { question: 'lěng', answers: ['Hot', 'Cold', 'Warm', 'Cool'], correctIndex: 1 },
      { question: 'lǐ', answers: ['Inside', 'Outside', 'Left', 'Right'], correctIndex: 0 },
      { question: 'líng', answers: ['Ten', 'Hundred', 'Thousand', 'Zero'], correctIndex: 3 },
      { question: 'liù', answers: ['Six', 'Seven', 'Eight', 'Nine'], correctIndex: 0 },
      { question: 'māma', answers: ['Father', 'Mother', 'Sister', 'Brother'], correctIndex: 1 },
      { question: 'ma', answers: ['Yes-no question', 'Wh-question', 'Exclamation', 'Imperative'], correctIndex: 0 },
      { question: 'mǎi', answers: ['Sell', 'Buy', 'Make', 'Build'], correctIndex: 1 },
      { question: 'méi guānxi', answers: ['You’re welcome', 'Excuse me', 'Thank you', 'I’m sorry'], correctIndex: 0 },
      { question: 'méiyǒu', answers: ['Have', 'Don’t have', 'Want', 'Need'], correctIndex: 1 },
      { question: 'mǐfàn', answers: ['Noodles', 'Rice', 'Bread', 'Pasta'], correctIndex: 1 },
      { question: 'míngtiān', answers: ['Yesterday', 'Today', 'Tomorrow', 'Now'], correctIndex: 2 },
      { question: 'míngzi', answers: ['Surname', 'First name', 'Full name', 'Nickname'], correctIndex: 2 },
      { question: 'nǎ', answers: ['Which', 'What', 'When', 'Where'], correctIndex: 0 },
      { question: 'nǎr', answers: ['Here', 'There', 'Nowhere', 'Everywhere'], correctIndex: 1 },
      { question: 'nàr', answers: ['Here', 'There', 'Nowhere', 'Everywhere'], correctIndex: 1 },
      { question: 'nèi', answers: ['This', 'That', 'These', 'Those'], correctIndex: 1 },
      { question: 'ne', answers: ['Already', 'Still', 'Again', 'Now'], correctIndex: 3 },
      { question: 'néng', answers: ['Can', 'Cannot', 'Will', 'Shall'], correctIndex: 0 },
      { question: 'nǐ', answers: ['I', 'You', 'He/She', 'We'], correctIndex: 1 },
      { question: 'nián', answers: ['Age', 'Year', 'Month', 'Day'], correctIndex: 1 },
      { question: 'nǚ’ér', answers: ['Son', 'Daughter', 'Sister', 'Brother'], correctIndex: 1 },
      { question: 'péngyou', answers: ['Friend', 'Family', 'Colleague', 'Neighbor'], correctIndex: 0 },
      { question: 'piàoliang', answers: ['Ugly', 'Handsome/Beautiful', 'Tall', 'Short'], correctIndex: 1 },
      { question: 'píngguǒ', answers: ['Banana', 'Pear', 'Orange', 'Apple'], correctIndex: 3 },
      { question: 'qī', answers: ['Six', 'Seven', 'Eight', 'Nine'], correctIndex: 0 },
      { question: 'qián', answers: ['Money', 'Time', 'Weather', 'Age'], correctIndex: 0 },
      { question: 'qiánmiàn', answers: ['Behind', 'In front', 'Beside', 'Next to'], correctIndex: 1 },
      { question: 'qǐng', answers: ['Thank you', 'Excuse me', 'Sorry', 'Please'], correctIndex: 3 },
      { question: 'qù', answers: ['Come', 'Go', 'Leave', 'Stay'], correctIndex: 1 },
      { question: 'rè', answers: ['Cold', 'Hot', 'Warm', 'Cool'], correctIndex: 1 },
      { question: 'rén', answers: ['Person', 'Animal', 'Plant', 'Object'], correctIndex: 0 },
      { question: 'rènshi', answers: ['Meet', 'Know', 'See', 'Understand'], correctIndex: 1 },
      { question: 'sān', answers: ['Three', 'Four', 'Five', 'Six'], correctIndex: 0 },
      { question: 'shāngdiàn', answers: ['Supermarket', 'Store', 'Market', 'Shop'], correctIndex: 2 },
      { question: 'shàng', answers: ['Under', 'Above', 'In front', 'Behind'], correctIndex: 1 },
      { question: 'shàngbān', answers: ['Finish work', 'Go to work', 'Start work', 'Leave work'], correctIndex: 2 },
      { question: 'shàngchuán', answers: ['Get off a boat', 'Get on a boat', 'Get off a plane', 'Get on a plane'], correctIndex: 1 },
      { question: 'shàngkè', answers: ['Finish class', 'Go to class', 'Start class', 'Leave class'], correctIndex: 2 },
      { question: 'shēngbì', answers: ['Currency', 'Credit card', 'Cash', 'Birthday'], correctIndex: 3 },
      { question: 'shéi', answers: ['Where', 'Who', 'When', 'Why'], correctIndex: 1 },
      { question: 'shénme', answers: ['Why', 'What', 'When', 'Where'], correctIndex: 1 },
      { question: 'shénme shíhòu', answers: ['How', 'When', 'Where', 'Why'], correctIndex: 1 },
      { question: 'shénme yìsi', answers: ['How are you?', 'What is your name?', 'Where do you live?', 'What does it mean?'], correctIndex: 3 },
      { question: 'shēng', answers: ['Die', 'Live', 'Sing', 'Dance'], correctIndex: 1 },
      { question: 'shí', answers: ['Five', 'Ten', 'Fifteen', 'Twenty'], correctIndex: 1 },
     
    
  // Add more questions as needed
];

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  const questionText = document.getElementById('question');
  const answerOptions = document.getElementById('answers');
  const feedback = document.getElementById('feedback');
  const tryAgainButton = document.createElement('button');
  const backButton = document.createElement('button');

  questionText.textContent = question.question;
  answerOptions.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(index));
    answerOptions.appendChild(button);
  });

  feedback.textContent = '';
  nextButton.style.display = 'none';
  prevButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
  showResultButton.style.display = 'none';

  tryAgainButton.textContent = 'Try Again';
  tryAgainButton.classList.add('btn');
  tryAgainButton.style.display = 'none';
  tryAgainButton.addEventListener('click', () => {
    feedback.textContent = '';
    tryAgainButton.style.display = 'none';
    backButton.style.display = 'none';
    document.getElementById('question').style.color = '#000'; // Reset question text color
    enableButtons();
  });

  backButton.textContent = 'Back to Previous Question';
  backButton.classList.add('btn');
  backButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
  backButton.addEventListener('click', () => {
    currentQuestionIndex--;
    showQuestion(questions[currentQuestionIndex]);
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('question').style.color = '#000'; // Reset question text color
    enableButtons();
  });

  feedback.appendChild(tryAgainButton);
  feedback.appendChild(backButton);
}

function selectAnswer(index) {
  const question = questions[currentQuestionIndex];
  const feedback = document.getElementById('feedback');

  if (index === question.correctIndex) {
    score++;
    feedback.textContent = 'Correct!';
    feedback.style.color = '#3498db'; // Blue color for correct answer
    nextButton.style.display = 'block';
    prevButton.style.display = 'none';
    showResultButton.style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
  } else {
    feedback.textContent = 'Incorrect. Try again.';
    feedback.style.color = '#e74c3c'; // Red color for incorrect answer
    document.getElementById('question').style.color = '#e74c3c';
    disableButtons();
    document.getElementById('feedback').getElementsByTagName('button')[0].style.display = 'block'; // Show try again button
    document.getElementById('feedback').getElementsByTagName('button')[1].style.display = 'block'; // Show back button
    nextButton.style.display = 'none';
    showResultButton.style.display = 'none';
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

function enableButtons() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.disabled = false;
  });
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('question').style.color = '#000'; // Reset question text color
    enableButtons();
    prevButton.style.display = 'block';
    showResultButton.style.display = 'none';
  } else {
    showResult();
  }
}

function prevQuestion() {
  currentQuestionIndex--;

  if (currentQuestionIndex >= 0) {
    showQuestion(questions[currentQuestionIndex]);
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('question').style.color = '#000'; // Reset question text color
    enableButtons();
    prevButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    showResultButton.style.display = 'none';
  } else {
    currentQuestionIndex = 0;
  }
}

function showResult() {
  const answerOptions = document.getElementById('answers');
  answerOptions.innerHTML = `Your score: ${score}/${questions.length}`;
  nextButton.style.display = 'none';
  prevButton.style.display = 'none';
  showResultButton.style.display = 'none';
}

startQuiz();
