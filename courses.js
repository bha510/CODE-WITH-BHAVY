document.addEventListener("DOMContentLoaded", function () {
    console.log("JS Loaded Successfully!");

    const videoLinks = {
        html: "https://www.youtube.com/embed/qz0aGYrrlhU",  // Example video for HTML
        css: "https://www.youtube.com/embed/OEV8gMkCHXQ",   // Example video for CSS
        javascript: "https://www.youtube.com/embed/W6NZfCO5SIk", // Example video for JavaScript
        python: "https://www.youtube.com/embed/rfscVS0vtbw"  // Example video for Python
    };

    document.querySelectorAll('.course-box').forEach(box => {
        box.addEventListener('click', function () {
            let selectedCourse = this.getAttribute('data-course');
            let videoFrame = document.getElementById("course-video");

            if (videoLinks[selectedCourse]) {
                videoFrame.src = videoLinks[selectedCourse];
            } else {
                videoFrame.src = "";
                alert("No video available for this course.");
            }
        });
    });

    // Close sidebar when clicking the close button
    document.getElementById("close-sidebar").addEventListener("click", function () {
        document.getElementById("sidebar").classList.remove("open");
        console.log("Sidebar closed!");
    });
});
