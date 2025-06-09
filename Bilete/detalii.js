function toggleDetails(id) {
    const ticket = document.getElementById(id).parentElement;
    const details = document.getElementById(id);
    if (details.style.display === "block") {
        details.style.display = "none";
        ticket.classList.remove("active");
    } else {
        details.style.display = "block";
        ticket.classList.add("active");
    }
}