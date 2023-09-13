document.addEventListener("DOMContentLoaded", () => {
    console.log("Vous êtes connecté");
    let date, foot
    date = new Date();
    foot = document.querySelector("footer p");
    foot.innerText += `${date.getFullYear()} - Ryan Vaugarni | Tous droits réservés`

    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();

    });
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('affix');
                console.log("OK");
            } else {
                $('nav').removeClass('affix');
            }
        });

    });
