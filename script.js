document.addEventListener('DOMContentLoaded', function() {
    const dropdownOptions = document.querySelectorAll('.dropdown-content a');

    dropdownOptions.forEach(option => {
        option.addEventListener('click', function(event) {
            event.preventDefault();
            const color = event.target.textContent.toLowerCase();
            document.body.style.backgroundColor = color;
        });
        option.addEventListener('mouseover', function() {
            const color = option.textContent.toLowerCase();
            option.style.backgroundColor = color;
        });

        option.addEventListener('mouseout', function() {
            option.style.backgroundColor = ''; // Reverts to the original background color
        });
       
        resetButton.addEventListener('click', function() {
            document.body.style.backgroundColor = 'white';
        });
    });
});










































