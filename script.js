// script.js

document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.getElementById('country');
  
    // Fetch the list of countries
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Sort the countries alphabetically by name
        const sortedCountries = data.sort((a, b) => {
          const nameA = a.name.common.toUpperCase();
          const nameB = b.name.common.toUpperCase();
          return nameA.localeCompare(nameB);
        });
  
        // Loop through the sorted countries and add options to the select element
        sortedCountries.forEach(country => {
          const option = document.createElement('option');
          option.value = country.alpha3Code;
          option.text = country.name.common;
          countrySelect.add(option);
        });
      })
      .catch(error => console.error('Error fetching countries:', error));
});

$(document).ready(function () {
    $('nav a').click(function (e) {
      e.preventDefault();
      $('nav a').removeClass('active');
      $(this).addClass('active');
  
      if (this.id === 'payment') {
        $('.payment').removeClass('noshow');
        $('.rightbox').children().not('.payment').addClass('noshow');
      } else if (this.id === 'profile') {
        $('.profile').removeClass('noshow');
        $('.rightbox').children().not('.profile').addClass('noshow');
      } else if (this.id === 'subscription') {
        $('.subscription').removeClass('noshow');
        $('.rightbox').children().not('.subscription').addClass('noshow');
      } else if (this.id === 'privacy') {
        $('.privacy').removeClass('noshow');
        $('.rightbox').children().not('.privacy').addClass('noshow');
      } else if (this.id === 'settings') {
        $('.settings').removeClass('noshow');
        $('.rightbox').children().not('.settings').addClass('noshow');
      } else {
        // Default case or additional conditions if needed
        // $('.payment').addClass('noshow');
        // $('.rightbox').children().not('.payment').addClass('noshow');
      }
    });
  });
  