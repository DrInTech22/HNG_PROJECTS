document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const additionalInfo = document.getElementById("additional-info");

    learnMoreBtn.addEventListener("click", () => {
        if (additionalInfo.classList.contains("hidden")) {
            additionalInfo.classList.remove("hidden");
            learnMoreBtn.textContent = "Hide Info";
        } else {
            additionalInfo.classList.add("hidden");
            learnMoreBtn.textContent = "Learn More About HNG";
        }
    });
});
