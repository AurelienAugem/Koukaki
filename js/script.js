//Fonction englobbant le code utilisant JQuery
(function($){
    //Rendre toutes les sections non visibles sur la page au chargement
    let banner = $('.banner');
    banner.addClass("section-fade");
    let story = $('.story');
    story.addClass("section-fade");
    let studio =$('#studio');
    studio.addClass("section-fade");
    let oscar = $('.oscar-display'); 
    oscar.addClass("section-fade");

    //Assignation de la classe "logo" au logo de la bannière
    banner.children([0]).addClass("logo");

     //Préparation des titres pour leur animation
     const storyTitle = $('.story h2');
     const studioTitle = $('#studio h2');
     storyTitle.empty();
     studioTitle.empty();
     storyTitle.append($('<span class=\"span1\">L\'</span>'));
     storyTitle.append($('<span class=\"span2\">histoire</span>'));
     studioTitle.append($('<span class=\"span1\">STUDIO&nbsp;</span>'));
     studioTitle.append($('<span class=\"span2\">KOUKAKI</span>'));
     const span1 = $('h2 .span1');
     const span2 = $('h2 .span2');

    //Fade-in des sections et effet d'apparition des titres
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            let section = $(entry.target);
            if(entry.isIntersecting && section.hasClass('banner')){
                section.addClass("banner-animation");
                section.children([0]).addClass("logo-animation");
                $('#banner-video').removeClass("logo-animation");
                $('#banner-video').removeClass("logo");
                console.dir('Animation de la section : Bannière');
                console.log('Animation du logo');
                return;
            }else if(entry.isIntersecting && section.hasClass('story')){
                section.addClass("story-animation");
                setTimeout(() => {
                    span1.addClass("titre-animation");
                }, 2000);
                setTimeout(() => {
                    span2.addClass("titre-animation");
                }, 2250);
                console.log('Animation de la section : Story');
                console.log('Animation du titre de la section : Story');
                return;
            }else if(entry.isIntersecting && section.attr('id') === 'studio'){
                section.addClass("studio-animation");
                setTimeout(() => {
                    span1.addClass("titre-animation");
                }, 2000);
                setTimeout(() => {
                    span2.addClass("titre-animation");
                }, 2250);
                console.log('Animation de la section : Studio');
                console.log('Animation du titre de la section : Studio');
                return;
            }else if(entry.isIntersecting && section.hasClass('oscar-display')){
                section.addClass("oscar-animation");
                console.log('Animation de la section : Oscar');
                return;
            }
            section.children([0]).removeClass("logo-animation");
            span1.removeClass("titre-animation");
            span2.removeClass("titre-animation");
            section.removeClass("banner-animation");
            section.removeClass("story-animation");
            section.removeClass("studio-animation");
            section.removeClass("oscar-animation");
        });
    });
    //Mise en place des observers pour les sections
    sectionObserver.observe(document.querySelector('.banner'));
    sectionObserver.observe(document.querySelector('.story'));
    sectionObserver.observe(document.querySelector('#studio'));
    sectionObserver.observe(document.querySelector('.oscar-display'));

    //Parallax du logo 
    let logo = $('.logo');
    $(window).scroll(function() {
        let scrollTop = $(this).scrollTop();
        logo.css('top', scrollTop * 0.2 + 'px');
      });

    //Slider Swiper JS
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        centeredSlides: true,
        slidesPerView: 5,
        speed: 2000,
        autoplay:{
            delay:2000,
            disableOnInteraction: false,
        },
        loop: true,
        loopedSlides: 2,
        loopAdditionalSlides: 1,
        effect: 'coverflow',
        coverflowEffect: {
            slideShadows: false,
        },
        
    });
    swiper.slideNext();

    //Parallax des nuages
    let bigCloud = $('.big-cloud');
    let littleCloud = $('.little-cloud');

    function handleScroll() {
        let scrollTop = $(window).scrollTop();
        bigCloud.css('right', scrollTop * 0.2 + 'px');
        littleCloud.css('right', 360 + scrollTop * 0.2 + 'px');
    }

    const placeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(window).on('scroll', handleScroll);
            } else {
                $(window).off('scroll', handleScroll);
            }
        });
    });
    placeObserver.observe(document.querySelector('#place'));

    /********************** Menu burger ******************************/


    const siteLogo = $('.site-logo');
    const siteLogoA = $('.site-logo a');
    const btnMenu = $('.menu-toggle');
    const menu = $('.main-navigation');
    const main = $('main');
    const footer = $('footer');

    //Création des éléments du menu burger d'entête
    const logoBurger = $('<img>');
    logoBurger.attr("src", "/koukaki/wp-content/themes/foce-child/assets/images/logo.png");
    logoBurger.attr("alt", "logo");
    logoBurger.addClass("logo-burger");
    siteLogoA.append(logoBurger);
    siteLogo.css("display", "none");

    const skMenu = $('<p></p>');
    skMenu.text('STUDIO KOKAKI');
    skMenu.css("text-align", "center");
    skMenu.css("background-color", "#fff5e9");
    skMenu.css("margin-top", "0");
    skMenu.css("padding-top", "6em");
    skMenu.css("padding-bottom", "2em");
    skMenu.css("display", "none");
    menu.append(skMenu);
    
    const cat1 = $('<div></div>');
    cat1.addClass("cat1");
    const cat2 = $('<div></div>');
    cat2.addClass("cat2");
    const cat3 = $('<div></div>');
    cat3.addClass("cat3");

    const fleur1 = $('<div></div>');
    fleur1.addClass("fleur1");
    const fleur2 = $('<div></div>');
    fleur2.addClass("fleur2");
    const fleur3 = $('<div></div>');
    fleur3.addClass("fleur3");
    const fleur4 = $('<div></div>');
    fleur4.addClass("fleur4");
    const fleur5 = $('<div></div>');
    fleur5.addClass("fleur5");

    menu.append(cat1);
    menu.append(cat2);
    menu.append(cat3);
    menu.append(fleur1);
    menu.append(fleur2);
    menu.append(fleur3);
    menu.append(fleur4);
    menu.append(fleur5);
    $('.cat1, .cat2, .cat3, .fleur1, .fleur2, .fleur3, .fleur4, .fleur5').addClass("hide");

    const liens = document.querySelectorAll('nav li');
    let lignes = document.querySelectorAll('.menu-toggle span');

    //Attribution d'un id à chaque span formant le bouton burger
    for (let i = 0; i < lignes.length; i++) {
        const ligne = lignes[i];
        ligne.setAttribute("id", i);
    }
    const ligne1 = $('#0');
    const ligne2 = $('#1');
    const ligne3 = $('#2');

    //Fermer le menu en cliquant sur l'un des liens
    liens.forEach(lien => {
        lien.addEventListener("click", () => {
            menu.removeClass("toggled");
            ligne2.removeClass("ligne2");
            ligne2.css("transition", "400ms 500ms ease");
            ligne1.removeClass("ligne1");
            ligne1.css("transition", "transform 300ms 350ms ease");
            ligne3.removeClass("ligne3");
            ligne3.css("transition", "transform 300ms 350ms ease");
            siteLogo.css("display", "none");
            skMenu.css("display", "none");
            main.css("display", "block");
            footer.css("display", "block");
            $('.cat1, .cat2, .cat3, .fleur1, .fleur2, .fleur3, .fleur4, .fleur5').addClass("hide");
        });
    });
    
    //Apparition du titre lorsque le menu est ouvert
    btnMenu.click(function(){
        
        ligne1.addClass("ligne1");
        ligne3.addClass("ligne3");
        ligne2.addClass("ligne2");
        siteLogo.css("display", "block");
        skMenu.css("display", "block");
        main.css("display", "none");
        footer.css("display", "none");
        $('.cat1, .cat2, .cat3, .fleur1, .fleur2, .fleur3, .fleur4, .fleur5').removeClass("hide");

        if(menu.hasClass('toggled')){
            ligne2.removeClass("ligne2");
            ligne2.css("transition", "400ms 500ms ease");
            ligne1.removeClass("ligne1");
            ligne1.css("transition", "transform 300ms 350ms ease");
            ligne3.removeClass("ligne3");
            ligne3.css("transition", "transform 300ms 350ms ease");
            siteLogo.css("display", "none");
            skMenu.css("display", "none");
            main.css("display", "block");
            footer.css("display", "block");
            $('.cat1, .cat2, .cat3, .fleur1, .fleur2, .fleur3, .fleur4, .fleur5').addClass("hide");
        }
    });
    

})(jQuery);
