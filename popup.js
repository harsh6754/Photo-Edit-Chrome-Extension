document.addEventListener('DOMContentLoaded', function () {
    const uploadInput = document.getElementById('upload');
    const imageContainer = document.getElementById('image-container');

    uploadInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        };

        reader.readAsDataURL(file);
    });
});
