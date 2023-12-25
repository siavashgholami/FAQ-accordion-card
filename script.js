function updateImage() {
    var image = document.getElementById('responsiveImage');
    if (window.innerWidth <= 600) {
        image.src = './images/illustration-woman-online-mobile.svg';
    } else {
        image.src = './images/illustration-woman-online-desktop.svg';
    }
}

window.onload = updateImage;
window.onresize = updateImage;
document.addEventListener('DOMContentLoaded', function () {
    // Get all question elements
    var questions = document.querySelectorAll('.questions');

    // Attach click event listeners to each question
    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            var answer = question.nextElementSibling;
            toggleAnswerVisibility(answer, question);
            toggleArrowRotation(question.querySelector('img'));
        });
    });

    // Attach touchstart event listeners to each question
    questions.forEach(function (question) {
        question.addEventListener('touchstart', function () {
            var answer = question.nextElementSibling;
            toggleAnswerVisibility(answer, question);
            toggleArrowRotation(question.querySelector('img'));
        });
    });
    
    // Function to hide all answers
    function hideAllAnswers() {
        var allAnswers = document.querySelectorAll('.answers');
        allAnswers.forEach(function (answer) {
            /*answer.style.visibility = 'hidden';
            answer.style.height = '0';*/
            answer.classList.remove('visible');
        });
    }

    // Function to reset question styles
    function resetQuestionStyles() {
        questions.forEach(function (question) {
            // Reset the styles to your default values
            question.classList.remove('clicked-question');
        });
    }

    // Function to toggle answer visibility
    function toggleAnswerVisibility(answer, question) {
        // Check if the 'visible' class is present
        var isVisible = answer.classList.contains('visible');
    
        // Use setTimeout to ensure that the classes are toggled after hiding answers
        setTimeout(function () {
            // Remove 'visible' class from all answers
            hideAllAnswers();
    
            // Reset styles of all questions
            resetQuestionStyles();
    
            if (!isVisible) {
                // If the 'visible' class is not present, add it
                answer.classList.add('visible');
            }
    
            // Toggle color and font weight of the clicked question
            toggleQuestionStyles(question);
        }, 0);
    }

    // Function to toggle arrow rotation
    function toggleArrowRotation(arrowIcon) {
        arrowIcon.classList.toggle('rotate-180'); 
    }

    // Function to toggle color and font weight of the clicked question
    function toggleQuestionStyles(question) {
        question.classList.toggle('clicked-question'); 
    }
});

