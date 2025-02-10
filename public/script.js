function revealNumber() {
    let finalAnswer = document.getElementById("finalAnswer").value.trim();
    let resultElement = document.getElementById("result");

    // Validate input
    if (finalAnswer === "" || finalAnswer === "0" || parseInt(finalAnswer)<4) {
        resultElement.innerText = "Please enter a valid number!";
        resultElement.style.color = "#ff5252";
        resultElement.classList.remove("bounce");
        resultElement.style.opacity = "1";
        return;
    }

    // Show the thinking animation (spinner)
    document.getElementById('thinking').style.display = "block";

    // Wait for 3 seconds to simulate thinking
    setTimeout(() => {
        // Hide the spinner and reveal the result
        document.getElementById('thinking').style.display = "none";
        let originalNumber = parseInt(finalAnswer) - 4; // Reverse calculation
        document.getElementById('result').innerText = "Your Number is: " + originalNumber + " 🎩✨";
        document.getElementById('result').classList.add('bounce'); // Add bounce animation
        document.getElementById('result').style.opacity = "1"; // Ensure result text is visible
        document.getElementById('result').style.color = "#ffea07";
    }, 3000);
}
