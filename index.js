$('.submit-btn').click(function (e) {
  const email = $('.email').val()
  const message = $('.message').val()
  const statusEl = $('.form-error')
  statusEl.empty()

  const emailValidation = !(email.length > 5 && email.includes('@') && email.includes('.'))
  const messageValidation = !(message.length >= 5)

  if(emailValidation) {
    statusEl.css("display", "block")
    statusEl.append(`<div>Email is not valid</div>`)
    e.preventDefault()
  }

  if(messageValidation) {
    statusEl.css("display", "block")
    statusEl.append('<div>Message is not valid</div>')
    e.preventDefault()
  }

})