document.addEventListener("DOMContentLoaded", function () {
    console.log("JS Loaded Successfully!");

    function loadTopics(subject) {
        console.log("Loading topics for:", subject);

        let topicContent = document.getElementById(subject);
        if (!topicContent) {
            console.error("Topic content not found!");
            return;
        }

        let sidebar = document.getElementById("sidebar");
        let topicList = document.getElementById("topic-list");

        if (!sidebar || !topicList) {
            console.error("Sidebar or topic list not found in DOM");
            return;
        }

        // Extract topics dynamically
        let headings = topicContent.querySelectorAll("h2, h3");

        // Clear and add new topics
        topicList.innerHTML = "";
        headings.forEach((heading, index) => {
            let li = document.createElement("li");
            li.textContent = heading.textContent;
            li.setAttribute("data-index", index);
            li.addEventListener("click", function () {
                showTopicContent(subject, index);
            });
            topicList.appendChild(li);
        });

        sidebar.classList.add("open"); // Open sidebar
        console.log("Sidebar opened!");
    }

    function showTopicContent(subject, index) {
        let topicContent = document.getElementById(subject);
        if (!topicContent) {
            console.error("Error: Topic content not found!");
            return;
        }

        let headings = topicContent.querySelectorAll("h2, h3");
        let textArea = document.getElementById("text-area");

        if (!textArea) {
            console.error("Text area not found!");
            return;
        }

        // Clear text area before inserting new content
        textArea.innerHTML = "";

        if (headings[index]) {
            let content = "";
            let current = headings[index];

            // Add the selected heading
            content += current.outerHTML;

            // Collect content until the next H2 or H3 or the end
            while (current.nextElementSibling && !["H2", "H3"].includes(current.nextElementSibling.tagName)) {
                current = current.nextElementSibling;
                content += current.outerHTML;
            }

            textArea.innerHTML = content;
        } else {
            textArea.innerHTML = "<p>No content found for this topic.</p>";
        }
    }

    // Open sidebar with topics when clicking a cheat sheet box
    document.querySelectorAll('.cheatnote-box').forEach(box => {
        box.addEventListener('click', function () {
            let subject = this.getAttribute('data-topic');
            if (!subject) {
                console.error("Error: No topic found! data-topic is missing.");
                return;
            }
            loadTopics(subject);
        });
    });

    // Close sidebar
    document.getElementById("close-sidebar").addEventListener("click", function () {
        document.getElementById("sidebar").classList.remove("open");
        console.log("Sidebar closed!");
    });
});
