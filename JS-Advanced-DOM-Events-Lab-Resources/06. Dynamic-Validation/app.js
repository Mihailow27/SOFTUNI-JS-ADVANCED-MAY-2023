function validate() {
    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change', function () {
        let inputValue = emailInput.value;
        let isValid = /^[a-z]+@[a-z]+\.[a-z]+$/.test(inputValue);

        if (!isValid) {
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }
    });
}
