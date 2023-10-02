/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

var formFields = {};

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
});

// Create a function to change the hash value of the page and reload it
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }
    
// Define the language reload anchors
var language = {
    eng: {
        navbarResponsiveProjects: "Projects",
        navbarResponsiveAbout: "About",
        navbarResponsiveContact: "Contact",
        mastheadSubheading: "Aspiring Software Engineer - Working Student - Gaming Enthusiast",
        sectionHeadingProjects: "Projects",
        sectionHeadingAbout: "About",
        sectionContentAboutP1: "Hi my name is Fabian Ebert. I'm an aspiring software engineer currently working for MisterSpex in Berlin as a working student. I'm studying Computational Engineering Sciences at the TU Berlin.",
        sectionContentAboutP2: "I have experience with JavaScript/Typescript, HTML, CSS, Python, C, R and relational databases. Thanks to working in an agile environment I know my way around Confluence, Jira, Github, Scrum and Kanban. For any business inquiries please use the contact form below.",
        sectionHeadingContact: "Contact Me",
        fullName: "Full name",
        email:"Email address",
        message: "Message",
        submitButton: "Send",
        footerContact: "direct email",
        portfolioModal1Title: "Data Prediction",
        portfolioModal1Text: "University Project for which we developed a data prediction model. Link to the Github page:",
        portfolioModal2Title: "Web Scraper",
        portfolioModal2Text: "My first small project. I created a bot that runs every morning to download free stuff from CreativeFabrica. Link to the Github page:",
        portfolioModal3Title: "Bug Tracking / Monitoring",
        portfolioModal3Text: "My first bigger project. I created a monitoring website that can track... .Link to the Github page: ",
        portfolioModal4Title: "Relational Databases",
        portfolioModal4Text: "I created my own relational database to store ... . Link to the page: ",
        portfolioModal5Title: "Quality Assurance",
        portfolioModal5Text: "I work with CodeceptJS and Cypress daily. That is why I implemented automated tests in my bigger project. Link to the Github page: ",
        portfolioModal6Title: "SCRUM & Kanban",
        portfolioModal6Text: "I work with SCRUM and Kanban on a daily basis and am very comfortable with both. For my projects I used Trello to implement SCRUM. Link to the Trello board: ",
        iconPFM1: "Icon created by Becris - Flaticon",
        iconPFM2: "Icon created by Icons8",
        iconPFM3: "Icon created by Eucalyp - Flaticon",
        iconPFM4: "Icon created by Becris - Flaticon",
        iconPFM5: "Icon created by Freepik - Flaticon",
        iconPFM6: "Icon created by Freepik - Flaticon",
    },
    de: {
        navbarResponsiveProjects: "Projekte",
        navbarResponsiveAbout: "Über mich",
        navbarResponsiveContact: "Kontakte",
        mastheadSubheading: "Anstrebender Programmierer - Werkstudent - Gaming Enthusiast",
        sectionHeadingProjects: "Projekte",
        sectionHeadingAbout: "Über mich",
        sectionContentAboutP1: "Hi mein Name ist Fabian Ebert. Ich bin ein anstrebender Programmier und arbeite zur Zeit bei Misterspex in Berlin als Werkstudent im QA Bereich. Ich studiere Computational Engineering Sciences an der TU Berlin.",
        sectionContentAboutP2: "Ich hab Erfahrung mit JavaScript/Typescript, HTML, CSS, Python, C, R und Relationalen Datenbanken. Durch das Arbeiten in einem agilen Arbeitsumfeld kenn ich mich zudem sehr gut mit Confluence, Jira, Github, Scrum und Kanban aus. Für alle Business Anfragen benutzt bitte das Kontaktformular weiter unten.",
        sectionHeadingContact: "Kontaktier mich",
        fullName: "Kompletter Name",
        emailForm:"Email Adresse",
        messageForm: "Nachricht",
        submitButton: "Abschicken",
        footerContact: "direkte Email",
        portfolioModal1Title: "Daten Vorhersage",
        portfolioModal1Text: "Uni Projekt bei dem ein Model zur Vorhersage von Daten entwickelt wurde. Link zur Github Seite: .",
        portfolioModal2Title: "Web Scraper",
        portfolioModal2Text: "Mein erstes kleines Projekt. Ich habe einen Bot programmiert der jeden Morgen kostenlose Inhalte von CreativeFabrica herunterlädt. Link zur Github Seite: .",
        portfolioModal3Title: "TCG Deckpreis Rechner",
        portfolioModal3Text: "Ein weiteres kleineres Projekt. Eine Python Anwendung mit einem UI um den Deckwert von TCG Decks zu ermitteln. Link zur Github Seite: .",
        portfolioModal4Title: "TCG Season Web App",
        portfolioModal4Text: "Größeres Projekt mit einem Freund - Webanwendung zur Erstellung von TCG-Saisonformaten (Eingabe und Nachverfolgung von Spielerbewertungen, Deckwerten, Spielergebnissen usw.). Wir verwenden Vue 3, Firebase, und JavaScript/TypeScript. Das Projekt ist noch in Arbeit, daher kein Github Link 😉.",
        portfolioModal5Title: "R Shiny App",
        portfolioModal5Text: "Uni Projekt, für das wir eine Shiny App mit R entwickelt haben. Link zur Gitlab-Seite:",
        portfolioModal6Title: "SCRUM, Kanban, Qualitätssicherung",
        portfolioModal6Text: "Ich arbeite täglich mit SCRUM und Kanban und bin mit beiden sehr vertraut. Für meine Projekte habe ich Trello verwendet, um SCRUM zu implementieren. Außerdem habe ich bei MisterSpex täglich mit CodeceptJS und Cypress gearbeitet. Ich kenne mich gut mit Teststrategien aus und kann automatisierte Tests schreiben.",
        iconPFM1: "Icon hergestellt von Becris - Flaticon",
        iconPFM2: "Icon hergestellt von Icons8",
        iconPFM3: "Icon hergestellt von Eucalyp - Flaticon",
        iconPFM4: "Icon hergestellt von Becris - Flaticon",
        iconPFM5: "Icon hergestellt von Freepik - Flaticon",
        iconPFM6: "Icon hergestellt von Freepik - Flaticon",
    },
};
// Check if a hash value exists in the URL
if (window.location.hash) {
    // Set the content of the webpage
// depending on the hash value
if (window.location.hash == "#de") {
        navbarResponsiveProjects.textContent = language.de.navbarResponsiveProjects;
        navbarResponsiveAbout.textContent = language.de.navbarResponsiveAbout;
        navbarResponsiveContact.textContent = language.de.navbarResponsiveContact;
        mastheadSubheading.textContent = language.de.mastheadSubheading;
        sectionHeadingProjects.textContent = language.de.sectionHeadingProjects;
        sectionHeadingAbout.textContent = language.de.sectionHeadingAbout;
        sectionContentAboutP1.textContent = language.de.sectionContentAboutP1;
        sectionContentAboutP2.textContent = language.de.sectionContentAboutP2;
        sectionHeadingContact.textContent = language.de.sectionHeadingContact;
        fullName.textContent = language.de.fullName;
        emailForm.textContent = language.de.emailForm;
        messageForm.textContent = language.de.messageForm;
        footerContact.textContent = language.de.footerContact;
        submitButton.textContent = language.de.submitButton;
        portfolioModal1Title.textContent = language.de.portfolioModal1Title;
        portfolioModal1Text.textContent = language.de.portfolioModal1Text;
        portfolioModal2Title.textContent = language.de.portfolioModal2Title;
        portfolioModal2Text.textContent = language.de.portfolioModal2Text;
        portfolioModal3Title.textContent = language.de.portfolioModal3Title;
        portfolioModal3Text.textContent = language.de.portfolioModal3Text;
        portfolioModal4Title.textContent = language.de.portfolioModal4Title;
        portfolioModal4Text.textContent = language.de.portfolioModal4Text;
        portfolioModal5Title.textContent = language.de.portfolioModal5Title;
        portfolioModal5Text.textContent = language.de.portfolioModal5Text;
        portfolioModal6Title.textContent = language.de.portfolioModal6Title;
        portfolioModal6Text.textContent = language.de.portfolioModal6Text;
        iconPFM1.textContent = language.de.iconPFM1;
        iconPFM2.textContent = language.de.iconPFM2;
        iconPFM3.textContent = language.de.iconPFM3;
        iconPFM4.textContent = language.de.iconPFM4;
        iconPFM5.textContent = language.de.iconPFM5;
        iconPFM6.textContent = language.de.iconPFM6;
    }
else if (window.location.hash == "#eng") {
        navbarResponsiveProjects.textContent = language.eng.navbarResponsiveProjects;
        navbarResponsiveAbout.textContent = language.eng.navbarResponsiveAbout;
        navbarResponsiveContact.textContent = language.eng.navbarResponsiveContact;
        mastheadSubheading.textContent = language.eng.mastheadSubheading;
        sectionHeadingProjects.textContent = language.eng.sectionHeadingProjects;
        sectionHeadingAbout.textContent = language.eng.sectionHeadingAbout;
        sectionContentAboutP1.textContent = language.eng.sectionContentAboutP1;
        sectionContentAboutP2.textContent = language.eng.sectionContentAboutP2;
        sectionHeadingContact.textContent = language.eng.sectionHeadingContact;
        fullName.textContent = language.eng.fullName;
        email.textContent = language.eng.email;
        message.textContent = language.eng.message;
        footerContact.textContent = language.eng.footerContact;
        portfolioModal1Title.textContent = language.eng.portfolioModal1Title;
        portfolioModal1Text.textContent = language.eng.portfolioModal1Text;
        portfolioModal2Title.textContent = language.eng.portfolioModal2Title;
        portfolioModal2Text.textContent = language.eng.portfolioModal2Text;
        portfolioModal3Title.textContent = language.eng.portfolioModal3Title;
        portfolioModal3Text.textContent = language.eng.portfolioModal3Text;
        portfolioModal4Title.textContent = language.eng.portfolioModal4Title;
        portfolioModal4Text.textContent = language.eng.portfolioModal4Text;
        portfolioModal5Title.textContent = language.eng.portfolioModal5Title;
        portfolioModal5Text.textContent = language.eng.portfolioModal5Text;
        portfolioModal6Title.textContent = language.eng.portfolioModal6Title;
        portfolioModal6Text.textContent = language.eng.portfolioModal6Text;
        iconPFM1.textContent = language.eng.iconPFM1;
        iconPFM2.textContent = language.eng.iconPFM2;
        iconPFM3.textContent = language.eng.iconPFM3;
        iconPFM4.textContent = language.eng.iconPFM4;
        iconPFM5.textContent = language.eng.iconPFM5;
        iconPFM6.textContent = language.eng.iconPFM6;
    }
}
