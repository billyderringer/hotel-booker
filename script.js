//prevents multiple errors
let errCount = 0

const container = document.getElementById('container-main'),
  form = document.getElementById('booking-form'),
  rateCode = document.getElementById('rate-code'),
  days = document.getElementById('days')

function bookRoom() {
  if(days.value) {
      return container.innerHTML = `<section id="container-receipt">
    <h1>Thank you for booking with us!</h1>
    <p>You have chosen to stay <strong>${days.value}</strong> days</p>
    <p>${getCancellationPolicy(days.value)}</p>
    <button class="btn-purple" 
    onclick="reloadPage()">Book Again!</button>
    </section>`
  }else if (errCount < 1) {
    let err = document.createElement('p')
    let errText = document.createTextNode('Error, please enter a valid number of days.')
    err.setAttribute('class', 'error')
    err.appendChild(errText)
    errCount++
    return form.appendChild(err)
  }
}

/* Cancellation logic - I chose to use template literals to work for the demo.
Could easily change to store in state somewhere. */
function getCancellationPolicy(daysNum) {
    if ( rateCode.value.toLowerCase() === 'nonref' ){
      return `Your booking is <strong>non-refundable & non-transferrable.</strong>`
    }
    if ( daysNum >= 7 && daysNum <= 28 ) {
      return `Please cancel <strong>72</strong> hours prior to check-in time at <strong>2 pm</strong> of your arrival date, ` +
        `to avoid the <strong>cancellation fee of 3 nights charge.</strong>`
    }
    if ( daysNum >= 29 ) {
      return `Please cancel <strong>14</strong></strong> days prior to check-in time at <strong>2 pm</strong> of your arrival date, ` +
        `to avoid the <strong>cancellation fee of 7 nights charge.</strong>`
    }
    else return `Please cancel <strong>24</strong> hours prior to check-in time at <strong>2 pm</strong> of your arrival date, ` +
        `to avoid the <strong>cancellation fee of 1 night charge.</strong>`
}

//resets application
function reloadPage() {
  location.reload();
}