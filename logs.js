function showForm(formType) {
    if (formType === 'signup') {
        document.getElementById('signupForm').classList.remove('hidden');
        document.getElementById('loginForm').classList.add('hidden');
        document.querySelectorAll('.tab-button')[0].classList.add('active');
        document.querySelectorAll('.tab-button')[1].classList.remove('active');
    } else {
        document.getElementById('signupForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
        document.querySelectorAll('.tab-button')[0].classList.remove('active');
        document.querySelectorAll('.tab-button')[1].classList.add('active');
        
    }
}
