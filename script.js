// Form validation logic
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    errorMessage.textContent = '';
    alert('Form submitted successfully!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// To-do list logic
function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');
    const task = taskInput.value.trim();

    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = task;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}

// Number sorting logic
function sortNumbers(order) {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(Number);

    if (numbers.some(isNaN)) {
        alert('Please enter valid numbers.');
        return;
    }

    numbers.sort((a, b) => order === 'asc' ? a - b : b - a);
    document.getElementById('sortedNumbers').textContent = `Sorted Numbers: ${numbers.join(', ')}`;
}

// Background color change logic
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#33FFF0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Display current date and time
function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    document.getElementById('datetime').textContent = formattedDate;
}

setInterval(updateDateTime, 1000);

// Number guessing game logic
function startGuessingGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess = null;
    let attempts = 0;

    while (guess !== randomNumber) {
        guess = parseInt(prompt('Guess a number between 1 and 100:'));
        attempts++;
        if (guess > randomNumber) {
            alert('Too high!');
        } else if (guess < randomNumber) {
            alert('Too low!');
        } else {
            alert(`Correct! It took you ${attempts} attempts.`);
        }
    }
}
