document.getElementById('setup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Name: ${name}\nEmail: ${email}`);
});

// Collapsible functionality
const collapsibleButtons = document.querySelectorAll('.Fold-button');

collapsibleButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});