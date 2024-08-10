function showModal(imageSrc) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalContent");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function hideModal() {
    let modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
