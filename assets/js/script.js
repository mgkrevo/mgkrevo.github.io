init();

function init() {
    nav();
    language();
}

function nav() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbar = document.querySelector('.page-navbar');

    nav.isActive = function() {
        return navbar.className.includes('active');
    }

    nav.close = function () {
        if(nav.isActive()) {
            navbar.classList.remove('active');
            mobileToggle.querySelector('i').className = 'fa fa-bars';
        }
    }

    mobileToggle.addEventListener('click', function() {
        language.close();
        
        if(nav.isActive()) {
            navbar.classList.remove('active');
            this.querySelector('i').className = 'fa fa-bars';
        } else {
            navbar.classList.add('active');
            this.querySelector('i').className = 'fa fa-times';
        }
    });
}

function language() {
    const languageCurrent = document.querySelector('.language-current');
    const languageOptions = document.querySelector('.language-options');

    language.isActive = function() {
        return languageCurrent.className.includes('active');
    }

    language.close = function () {
        if(language.isActive()) {
            languageCurrent.classList.remove('active');
            languageOptions.classList.remove('active');

        }
    }

    languageCurrent.addEventListener('click', function() {
        nav.close();

        if(language.isActive()) {
            languageOptions.classList.remove('active');
            this.classList.remove('active');
        } else {
            languageOptions.classList.add('active');
            this.classList.add('active');
        }
    });
}