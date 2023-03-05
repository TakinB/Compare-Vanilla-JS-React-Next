
console.log(document)
const button = document.querySelector('button');

button.addEventListener('click', deleteAction);
let modal;


function deleteAction() {
    if (modal) {
        return;
      }
    modal = document.createElement('div')

    const modalText = document.createElement('p')
    modalText.textContent = "Are you sure you'd like to delete this?"

    const confirmButton = document.createElement('button')
    confirmButton.textContent="Confirm"

    const cancelButton = document.createElement('button')
    cancelButton.textContent="Cancel"

    modal.append(cancelButton)
    modal.append(confirmButton)

    cancelButton.addEventListener('click', closeModal)
    confirmButton.addEventListener('click', closeModal)

    modal.append(modalText)
    document.body.append(modal)
}

function closeModal(){
    modal.remove()
    modal = null
}