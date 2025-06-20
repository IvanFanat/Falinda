Inputmask({
    mask: "+7 (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: true,
    clearIncomplete: true
}).mask(".userphone")

Inputmask({
    alias: "email",
    showMaskOnHover: false,
    clearIncomplete: true
}).mask(".usermail")

document.querySelectorAll(".validateForm").forEach(function(form){
  form.addEventListener("submit", function(e) {
    e.preventDefault()
    let valid = true
    let phone = form.querySelector(".userphone")
    let email = form.querySelector(".usermail")
    let phoneWarn = form.querySelector(".phoneWarn")
    let emailWarn = form.querySelector(".emailWarn")

    if (!phone.value.match(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/)) {
      phoneWarn.style.display = "block"
      valid = false
    } else {
      phoneWarn.style.display = "none"
    }

    if (!email.checkValidity()) {
      emailWarn.style.display = "block"
      valid = false
    } else {
      emailWarn.style.display = "none"
    }

    if (!valid) return

    var orderModalEl = document.getElementById('orderModal');
    var modalInstance = bootstrap.Modal.getInstance(orderModalEl);

    if (modalInstance && orderModalEl.classList.contains('show')) {
        modalInstance.hide();

        setTimeout(function() { form.reset(); }, 400);

        var thankModal = new bootstrap.Modal(document.getElementById('thankModal'));
        setTimeout(function() {
          thankModal.show();
        }, 500);
    } else {

        var thankModal = new bootstrap.Modal(document.getElementById('thankModal'));
        thankModal.show();
        form.reset();
    }
  })
})