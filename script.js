document.addEventListener("DOMContentLoaded", function () {
    const mobileScreen = document.getElementById("mobile-screen");
    const otpScreen = document.getElementById("otp-screen");
    const sendOtpBtn = document.getElementById("send-otp-btn");
    const otpInputContainer = document.getElementById("otp-input-container");
    const verifyOtpBtn = document.getElementById("verify-otp-btn");

    // Mock API: Generate OTP
    function generateOTP() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    sendOtpBtn.addEventListener("click", function () {
        // Generate and display OTP (mock)
        const otp = generateOTP();
        otpInputContainer.innerHTML = "";
        for (let i = 0; i < 4; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            otpInputContainer.appendChild(input);
        }
        otpInputContainer.style.display = "block";
        otpInputContainer.querySelector("input").focus();
        alert(`Mock OTP: ${otp}`); // Display OTP (replace with API call)
    });

    verifyOtpBtn.addEventListener("click", function () {
        // Verify OTP (mock)
        const enteredOtp = Array.from(otpInputContainer.querySelectorAll("input"))
            .map((input) => input.value)
            .join("");
        const mockOtp = "1234"; // Replace with actual OTP received from API
        if (enteredOtp === mockOtp) {
            alert("OTP verification successful"); // Replace with success action
        } else {
            alert("OTP verification failed"); // Replace with failure action
        }
    });
});
