document.addEventListener('DOMContentLoaded', function () {
    // Get all graph containers
    var graphContainers = document.querySelectorAll('.graph-container');

    // Add click event listener to each graph container
    graphContainers.forEach(function (container) {
        container.addEventListener('click', function () {
            // Get the image source from the clicked graph container
            var imageSrc = container.querySelector('image').getAttribute('href');

            // Create a modal with the clicked image
            var modalOverlay = document.getElementById('modal-overlay');
            var modal = document.getElementById('modal');
            modal.innerHTML = '<img src="' + imageSrc + '" alt="Expanded Graph" />';
            modalOverlay.style.display = 'flex';

            // Add the class to body to prevent scrolling
            document.body.classList.add('modal-open');
        });
    });

    // Add click event listener to close the modal when clicked outside the image
    document.getElementById('modal-overlay').addEventListener('click', function (e) {
        if (e.target.id === 'modal-overlay') {
            this.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});