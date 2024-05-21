function toggleDropdown(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
function showEmailConfirmation() {
    var confirmation = confirm("Do you want to send an email to cloud@gayfrog.xyz?");
    if (confirmation) {
        window.location.href = "mailto:cloud@gayfrog.xyz";
    }
}