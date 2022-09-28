$(document).ready(function () {
    $('.fa-toggle-on').click(function () {
        $(this).toggleClass("fa-toggle-on fa-toggle-off");
    });

    if (!$(".cron-ui").hasClass('row')) {
        $(".cron-ui").addClass('row');
    }

    $('.modal-header').each(function () {
        let el = $(this).children();
        if (el.length > 0) {
            if ($(el[0]).hasClass('mr-auto') || $(el[0]).hasClass('modal-title')) {
                $(this).css('flex-direction', 'row');
            }
        }
    });

    let navTabs = $('.nav-tabs > li');
    for (let tab of navTabs) {
        if ($(tab).hasClass('active')) {
            $(tab).children('a').addClass('active');
            console.log(1);
        }
    }

});