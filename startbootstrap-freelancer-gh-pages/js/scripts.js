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
        sectionContentAboutP2: "I have experience with JavaScript, Python, C, relational databases and ... . Thanks to working in an agile environment I know my way around Confluence, Jira, Github, Scrum and Kanban. For any business inquiries please use the contact form below.",
        sectionHeadingContact: "Contact Me",
        fullName: "Full name",
        nameRequired: "A name is required.",
        email:"Email address",
        emailRequired: "An email is required.",
        emailInvalid: "Email is not valid.",
        phoneNumber: "Phone number",
        phoneNumberRequired: "A phone number is required.",
        message: "Message",
        messageRequired: "A message is required.",
        submitButton: "Send",
        submitSuccessText: "Message send successfully!",
        submitErrorText: "Error sending message!",
        footerContact: "Contact without form",
        portfolioModal1Title: "Data Prediction",
        portfolioModal1Text: "University Project in which I developed a data prediction model. LINK. ",
        portfolioModal2Title: "Web Scraper",
        portfolioModal2Text: "First small project. Created a bot that runs every morning to download free stuff from CreativeFabrica LINK.",
        portfolioModal3Title: "Bug Tracking / Monitoring",
        portfolioModal3Text: "First big own project, created a monitoring website LINK.",
        portfolioModal4Title: "Relational Databases",
        portfolioModal4Text: "Work with relational databases, I know SQL. Also created my own LINK. ",
        portfolioModal5Title: "Quality Assurance",
        portfolioModal5Text: "Worked with CodeceptJS and Cypress. ",
        portfolioModal6Title: "SCRUM & Kanban",
        portfolioModal6Text: "I work with SCRUM and Kanban on a daily basis and am very comfortable with both.",
    },
    de: {
        navbarResponsiveProjects: "Projekte",
        navbarResponsiveAbout: "Über mich",
        navbarResponsiveContact: "Kontakte",
        mastheadSubheading: "Anstrebender Programmierer - Werkstudent - Gaming Enthusiast",
        sectionHeadingProjects: "Projekte",
        sectionHeadingAbout: "Über mich",
        sectionContentAboutP1: "Hi mein Name ist Fabian Ebert. Ich bin ein anstrebender Programmier und arbeite zur Zeit bei Misterspex in Berlin als Werkstudent im QA Bereich. Ich studiere Computational Engineering Sciences an der TU Berlin.",
        sectionContentAboutP2: "Ich hab Erfahrung mit JavaScript, Python, C, Relationalen Datenbanken und ... . Durch das Arbeiten in einem agilen Arbeitsumfeld kenn ich mich zudem sehr gut mit Confluence, Jira, Github, Scrum und Kanban aus. Für alle Business Anfragen benutzt bitte das Kontaktformular weiter unten.",
        sectionHeadingContact: "Kontaktier mich",
        fullName: "Kompletter Name",
        nameRequired: "Name benötigt.",
        emailForm:"Email Adresse",
        emailRequired: "Email Adresse benötigt.",
        emailInvalid: "Email Adresse ist nicht gültig.",
        phoneNumberForm: "Telefonnummer",
        phoneNumberRequired: "Telefonnummer benötigt.",
        messageForm: "Nachricht",
        messageRequired: "Nachricht benötigt.",
        submitButton: "Abschicken",
        submitSuccessText: "Nachricht erfolgreich gesendet!",
        submitErrorText: "Fehler beim Senden der Nachricht!",
        footerContact: "Contact without form",
        portfolioModal1Title: "Daten Vorhersage",
        portfolioModal1Text: "Uni Projekt bei dem ein Model zur Vorhersage von Daten entwickelt wurde. LINK.",
        portfolioModal2Title: "Web Scraper",
        portfolioModal2Text: "Mein erstes kleines Projekt. Es ist ein Bot der täglich kostenlose Inhalte von CreativeFabrica herunterlädt. LINK.",
        portfolioModal3Title: "Bug Verfolgung / Überwachung",
        portfolioModal3Text: "Erstes großes Projekt. Eine Website um Tickets oder Bugs zu überwachen. LINK.",
        portfolioModal4Title: "Relationale Datenbanken",
        portfolioModal4Text: "Meine relationale Datenbank. LINK.",
        portfolioModal5Title: "Qualitätssicherung",
        portfolioModal5Text: " Arbeitserfahrung mit CodeceptJS und Cypress gesammelt.",
        portfolioModal6Title: "SCRUM & Kanban",
        portfolioModal6Text: "Ich arbeite tagtäglich mit SCRUM und Kanban und bin mit beiden sehr vertraut.",
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
        nameRequired.textContent = language.de.nameRequired;
        emailForm.textContent = language.de.emailForm;
        emailRequired.textContent = language.de.emailRequired;
        emailInvalid.textContent = language.de.emailInvalid;
        phoneNumberForm.textContent = language.de.phoneNumberForm;
        phoneNumberRequired.textContent = language.de.phoneNumberRequired;
        messageForm.textContent = language.de.messageForm;
        messageRequired.textContent = language.de.messageRequired;
        footerContact.textContent = language.de.footerContact;
        submitSuccessText.textContent = language.de.submitSuccessText;
        submitErrorText.textContent = language.de.submitErrorText;
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
        nameRequired.textContent = language.eng.nameRequired;
        email.textContent = language.eng.email;
        emailRequired.textContent = language.eng.emailRequired;
        emailInvalid.textContent = language.eng.emailInvalid;
        phoneNumber.textContent = language.eng.phoneNumber;
        phoneNumberRequired.textContent = language.eng.phoneNumberRequired;
        message.textContent = language.eng.message;
        messageRequired.textContent = language.eng.messageRequired;
        footerContact.textContent = language.eng.footerContact;
        submitSuccessText.textContent = language.eng.submitSuccessText;
        submitErrorText.textContent = language.eng.submitErrorText;
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
    }
}