// アプリケーションの状態管理
class QuizApp {
    constructor() {
        this.currentCourse = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.selectedChoices = []; // 現在の問題で選択された選択肢
        this.score = 0;
        this.isAnswered = false; // 回答済みフラグ
        
        this.initializeApp();
    }
    
    initializeApp() {
        this.showCourseSelection();
        this.bindEvents();
    }
    
    bindEvents() {
        // コース選択のイベント
        document.addEventListener('click', (e) => {
            if (e.target.closest('.course-card')) {
                const courseTitle = e.target.closest('.course-card').dataset.course;
                this.startQuiz(courseTitle);
            }
        });
        
        // 選択肢のイベント
        document.addEventListener('click', (e) => {
            if (e.target.closest('.choice') && !this.isAnswered) {
                this.selectChoice(e.target.closest('.choice'));
            }
        });
        
        // ボタンのイベント
        document.getElementById('submit-answer-button').addEventListener('click', () => {
            this.submitAnswer();
        });
        
        document.getElementById('next-button').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        document.getElementById('finish-button').addEventListener('click', () => {
            this.showResults();
        });
        
        document.getElementById('retry-button').addEventListener('click', () => {
            this.retryQuiz();
        });
        
        document.getElementById('home-button').addEventListener('click', () => {
            this.showCourseSelection();
        });
    }
    
    showCourseSelection() {
        this.hideAllScreens();
        document.getElementById('course-selection').classList.add('active');
        this.renderCourses();
    }
    
    renderCourses() {
        const courseGrid = document.getElementById('course-grid');
        courseGrid.innerHTML = '';
        
        Object.keys(QUIZ_DATA).forEach(courseTitle => {
            const course = QUIZ_DATA[courseTitle];
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.dataset.course = courseTitle;
            
            // question_numberに基づいて表示する問題数を決定
            const displayQuestionCount = Math.min(
                course.course_detail.question_number, 
                course.questions.length
            );
            
            courseCard.innerHTML = `
                <h3>${course.course_detail.title}</h3>
                <div class="course-info">
                    <span>AWS資格試験対策</span>
                    <span class="question-count">${displayQuestionCount}問</span>
                </div>
            `;
            
            courseGrid.appendChild(courseCard);
        });
    }
    
    startQuiz(courseTitle) {
        this.currentCourse = QUIZ_DATA[courseTitle];
        
        // question_numberに応じてランダムに問題をピックアップ
        const questionNumber = this.currentCourse.course_detail.question_number;
        const allQuestions = [...this.currentCourse.questions];
        const shuffledQuestions = this.shuffleArray(allQuestions);
        
        // 指定された問題数だけ取得（全問題数より少ない場合のみ制限）
        this.currentQuestions = shuffledQuestions.slice(0, Math.min(questionNumber, shuffledQuestions.length));
        
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.selectedChoices = [];
        this.score = 0;
        this.isAnswered = false;
        
        this.hideAllScreens();
        document.getElementById('quiz-screen').classList.add('active');
        
        document.getElementById('course-title').textContent = this.currentCourse.course_detail.title;
        document.getElementById('total-questions').textContent = this.currentQuestions.length;
        
        this.showQuestion();
    }
    
    showQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // 状態をリセット
        this.selectedChoices = [];
        this.isAnswered = false;
        
        // 進捗更新
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        
        // 問題表示
        document.getElementById('question-title').textContent = question.title;
        document.getElementById('question-text').textContent = question.text;
        
        // 複数選択の場合は説明を追加
        if (question.multiple) {
            document.getElementById('question-text').textContent += ' (複数選択可)';
        }
        
        // 画像表示
        const imageContainer = document.getElementById('question-image-container');
        if (question.image) {
            document.getElementById('question-image').src = question.image;
            imageContainer.style.display = 'block';
        } else {
            imageContainer.style.display = 'none';
        }
        
        // 選択肢表示
        this.renderChoices(question);
        
        // ボタン状態リセット
        document.getElementById('submit-answer-button').disabled = true;
        document.getElementById('submit-answer-button').style.display = 'inline-block';
        
        const nextButton = document.getElementById('next-button');
        nextButton.style.display = 'none';
        nextButton.disabled = false; // 次回表示時のために有効状態にしておく
        
        document.getElementById('finish-button').style.display = 'none';
    }
    
    renderChoices(question) {
        const container = document.getElementById('choices-container');
        container.innerHTML = '';
        
        question.choices.forEach((choice, index) => {
            const choiceElement = document.createElement('div');
            choiceElement.className = 'choice';
            choiceElement.dataset.index = index;
            
            choiceElement.innerHTML = `
                <div class="choice-number">${index + 1}</div>
                <div class="choice-text">${choice}</div>
            `;
            
            container.appendChild(choiceElement);
        });
    }
    
    submitAnswer() {
        if (this.selectedChoices.length === 0 || this.isAnswered) {
            return;
        }
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        this.isAnswered = true;
        
        // 回答を記録
        this.userAnswers[this.currentQuestionIndex] = [...this.selectedChoices];
        
        // 正解チェック
        const isCorrect = this.checkAnswer(question, this.selectedChoices);
        if (isCorrect) {
            this.score++;
        }
        
        // 正解・不正解の表示
        this.showAnswerFeedback(question, this.selectedChoices);
        
        // ボタン状態を更新
        document.getElementById('submit-answer-button').style.display = 'none';
        
        // 最後の問題の場合は完了ボタンを表示
        if (this.currentQuestionIndex === this.currentQuestions.length - 1) {
            document.getElementById('finish-button').style.display = 'inline-block';
            console.log('最後の問題: 完了ボタンを表示');
        } else {
            // 次の問題ボタンを表示して有効化
            const nextButton = document.getElementById('next-button');
            nextButton.style.display = 'inline-block';
            nextButton.disabled = false;
            console.log('次の問題ボタンを有効化:', {
                display: nextButton.style.display,
                disabled: nextButton.disabled
            });
        }
    }
    
    selectChoice(choiceElement) {
        const selectedIndex = parseInt(choiceElement.dataset.index);
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        if (question.multiple) {
            // 複数選択の場合
            if (choiceElement.classList.contains('selected')) {
                // 既に選択されている場合は選択解除
                choiceElement.classList.remove('selected');
                this.selectedChoices = this.selectedChoices.filter(index => index !== selectedIndex);
            } else {
                // 選択追加
                choiceElement.classList.add('selected');
                this.selectedChoices.push(selectedIndex);
            }
        } else {
            // 単一選択の場合
            // 他の選択肢の選択状態をクリア
            document.querySelectorAll('.choice').forEach(choice => {
                choice.classList.remove('selected');
            });
            
            // 現在の選択肢を選択状態に
            choiceElement.classList.add('selected');
            this.selectedChoices = [selectedIndex];
        }
        
        // 回答するボタンの有効/無効を切り替え
        document.getElementById('submit-answer-button').disabled = this.selectedChoices.length === 0;
    }
    
    checkAnswer(question, selectedIndices) {
        if (question.multiple) {
            // 複数選択の場合
            const correctAnswers = question.answers.map(a => a - 1).sort();
            const userAnswers = selectedIndices.sort();
            
            // 配列の内容が完全に一致するかチェック
            return correctAnswers.length === userAnswers.length && 
                   correctAnswers.every((val, index) => val === userAnswers[index]);
        } else {
            // 単一選択の場合
            const selectedIndex = selectedIndices[0];
            if (question.answers) {
                return question.answers.includes(selectedIndex + 1);
            } else if (question.answer) {
                return question.choices[selectedIndex] === question.answer;
            }
        }
        return false;
    }
    
    showAnswerFeedback(question, selectedIndices) {
        const choices = document.querySelectorAll('.choice');
        
        // 正解の選択肢を表示
        if (question.multiple) {
            // 複数選択の場合
            question.answers.forEach(answerIndex => {
                choices[answerIndex - 1].classList.add('correct');
            });
        } else {
            // 単一選択の場合
            let correctIndex = -1;
            if (question.answers) {
                correctIndex = question.answers[0] - 1;
            } else if (question.answer) {
                correctIndex = question.choices.findIndex(choice => choice === question.answer);
            }
            
            if (correctIndex >= 0) {
                choices[correctIndex].classList.add('correct');
            }
        }
        
        // ユーザーの選択が間違いの場合は赤色で表示
        const isCorrect = this.checkAnswer(question, selectedIndices);
        if (!isCorrect) {
            selectedIndices.forEach(selectedIndex => {
                if (!choices[selectedIndex].classList.contains('correct')) {
                    choices[selectedIndex].classList.add('incorrect');
                }
            });
        }
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        this.showQuestion();
    }
    
    showResults() {
        this.hideAllScreens();
        document.getElementById('result-screen').classList.add('active');
        
        const percentage = Math.round((this.score / this.currentQuestions.length) * 100);
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('correct-count').textContent = this.score;
        document.getElementById('total-count').textContent = this.currentQuestions.length;
        
        this.renderResultDetails();
    }
    
    renderResultDetails() {
        const container = document.getElementById('result-details');
        container.innerHTML = '';
        
        this.currentQuestions.forEach((question, index) => {
            const userAnswerIndices = this.userAnswers[index] || [];
            const isCorrect = userAnswerIndices.length > 0 ? this.checkAnswer(question, userAnswerIndices) : false;
            
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            let correctAnswerText = '';
            if (question.multiple) {
                const correctChoices = question.answers.map(i => question.choices[i - 1]);
                correctAnswerText = correctChoices.join(', ');
            } else if (question.answers) {
                correctAnswerText = question.choices[question.answers[0] - 1];
            } else if (question.answer) {
                correctAnswerText = question.answer;
            }
            
            let userAnswerText = '未回答';
            if (userAnswerIndices.length > 0) {
                const userChoices = userAnswerIndices.map(i => question.choices[i]);
                userAnswerText = userChoices.join(', ');
            }
            
            resultItem.innerHTML = `
                <div class="result-question">問題${index + 1}: ${question.title}</div>
                <div class="result-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    あなたの回答: ${userAnswerText} ${isCorrect ? '✓' : '✗'}
                </div>
                <div class="result-answer correct">
                    正解: ${correctAnswerText}
                </div>
                ${question.explanation ? `<div class="result-explanation">${question.explanation}</div>` : ''}
            `;
            
            container.appendChild(resultItem);
        });
    }
    
    retryQuiz() {
        this.startQuiz(this.currentCourse.course_detail.title);
    }
    
    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// アプリケーション初期化
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
