const checkboxes = document.querySelectorAll('.item input')

let lastChecked;

function handleCheck(e) {
  let checking = false;
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) {
        checking = !checking;
      }
      if(checking) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck)
})
