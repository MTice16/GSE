
        const wheelContainer = document.querySelector('.wheel-container');
        const animationGraphic = document.getElementById('animationGraphic');
        const spinButton = document.getElementById('spinButton');

        spinButton.addEventListener('click', () => {
            // Disable the button during the animation
            spinButton.disabled = true;

            // Start the spinning animation
            wheelContainer.style.animation = 'spin 10s linear forwards';

            // Show the animation graphic after 10 seconds
            setTimeout(() => {
                wheelContainer.style.animation = 'none'; // Stop the wheel animation
                animationGraphic.style.display = 'block';
                spinButton.disabled = false; // Re-enable the button
            }, 10000); // 10 seconds (10000 milliseconds)
        });
    </script>
