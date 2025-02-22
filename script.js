function showSidebar(file) {
    let sidebar = document.getElementById("sidebar");
    let contentFrame = document.getElementById("contentFrame");

    // Set the file to load
    contentFrame.data = file;

    // Show the sidebar
    sidebar.classList.add("show");
}

function hideSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("show");
}
