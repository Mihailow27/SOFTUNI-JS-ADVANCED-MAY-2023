function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove); // Remove the quotes
    gradient.addEventListener('mouseout', gradientOut); // Remove the quotes

    function gradientMove(event) {
        let power = (event.offsetX / (event.target.clientWidth - 1)) * 100;
        power = Math.trunc(power);
        document.getElementById('result').textContent = power + "%";
    }

    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }
}
