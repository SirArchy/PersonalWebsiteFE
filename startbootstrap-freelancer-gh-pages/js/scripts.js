/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Create a function to change the hash value of the page and reload it
    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }
    
  // Define the language reload anchors
    var language = {
        eng: {
        welcome:
            "Welcome to the GeeksforGeeks " +
            "Portal! You can choose any " +
            "language using the buttons above!",
        },
        es: {
          welcome:
            "¡Bienvenido al portal GeeksforGeeks! " +
            "¡Puedes elegir cualquier idioma usando " +
            "los botones de arriba!",
        },
        hin: {
          welcome:
            "GeeksforGeeks पोर्टल पर आपका स्वागत है! " +
            "आप ऊपर दिए गए बटन का उपयोग करके किसी भी " +
            "भाषा को चुन सकते हैं!",
        },
    };

    // Check if a hash value exists in the URL
    if (window.location.hash) {
        // Set the content of the webpage
        // depending on the hash value
        if (window.location.hash == "#es") {
          siteContent.textContent = language.es.welcome;
        } else if (window.location.hash == "#hin") {
          siteContent.textContent = language.hin.welcome;
        }
    }

});
