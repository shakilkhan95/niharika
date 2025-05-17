document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // const name = form.querySelector('input[type="text"]').value;
        const number = parseInt(form.querySelector('input[type="number"]').value);

        const output = document.getElementById('text');
        output.textContent = ''; // Clear previous output

        let message = '';
        for (let i = 1; i <= number; i++) {
            message += `${i}. I Love You my SweetHeart Niharika ❤️\n`;
        }

        output.innerHTML = message.replace(/\n/g, "<br>");

    });
});
