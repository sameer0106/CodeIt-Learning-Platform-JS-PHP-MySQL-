// ===== COURSE VIDEO PLAYER =====

const mainVideo = document.getElementById("main-video");
const videoTitle = document.querySelector(".main-video .title");
const videoItems = document.querySelectorAll(".video-list .vid");
const certificateButton = document.getElementById("get-certificate-btn");

// set default lecture number
mainVideo.dataset.lec = "1";

// when playlist item clicked
videoItems.forEach(item => {
    item.addEventListener("click", () => {

        // remove active class
        videoItems.forEach(v => v.classList.remove("active"));
        item.classList.add("active");

        const newSrc = item.dataset.src;
        const newTitle = item.querySelector(".title").textContent;
        const lectureNumber = item.dataset.lec;

        mainVideo.src = newSrc;
        mainVideo.dataset.lec = lectureNumber;
        videoTitle.textContent = newTitle;

        mainVideo.load();   // IMPORTANT
        mainVideo.play();

        certificateButton.disabled = true;
    });
});

// unlock certificate after lecture 8 ends
mainVideo.addEventListener("ended", () => {
    if (mainVideo.dataset.lec === "8") {
        certificateButton.disabled = false;
    }
});

// redirect to certificate
certificateButton.addEventListener("click", () => {
    window.location.href = "../html/certificate.html";
});