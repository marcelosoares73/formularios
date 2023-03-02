let container = document.getElementById('senha');
        let input = document.getElementById('i-senha');
        let icon = document.getElementById('image');

        icon.addEventListener('click', function() {
            container.classList.toggle('visible');
            if (container.classList.contains('visible')) {
                icon.src = 'icones/eye-off.svg';
                input.type = 'text';
            } else {
                icon.src = 'icones/eye.svg';
                input.type = 'password';
            }
        })