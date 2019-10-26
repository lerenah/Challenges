// Listen for submit

document.getElementById('loan-form').addEventListener('submit', function(e) {
  // hide results
  document.getElementById('results').style.display = 'none';

  // show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  console.log('Calculating...');

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-interest');

  const principle = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle * x * calculatedInterest)(x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);

    totalInterest.value = (monthly * calculatedPayments - principle).toFixed(2);

    document.getElementById('results').style.display = 'block';

    // Hide spinner
    document.getElementById('loading').style.display = 'none';
  } else {
    showError("Plea'se check your numbers");
  }
}

function showError(error) {
  //Hide results
  document.getElementById('results').style.display = 'none';

  // Hide loading
  document.getElementById('laoding').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'alert alert-danger';

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('alert').remove();
}
