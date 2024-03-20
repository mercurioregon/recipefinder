const openModalButton = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalSpan = document.getElementsByClassName("close-modal");

openModalButton.addEventListener("click", function() {
    modal.classList.remove("hidden");
});

closeModalSpan.addEventListener("click", function() {
    modal.classList.add("hidden");
});
