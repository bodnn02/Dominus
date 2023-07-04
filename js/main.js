$('[data-link]').click(function() {
    var link = $(this).attr("data-link");
    $(".overlay").addClass("opened")
    $(".overlay-item[data-overlay=" + link + "]").addClass("opened");
});
$(".overlay-item__close").click(function() {
    $(".overlay").removeClass("opened")
    $(this).parent().parent().removeClass("opened")
});
$(".gallery__prev").click(function() {
    gallery_items = $(this).parent().find(".gallery-img").children("img")
    length = $(gallery_items).length
    current_index = $(this).parent().find(".gallery-img").children(".current").index()
    pagginator_items = $(this).parent().parent().find(".gallery-pagginator").children(".gallery-pagginator__item")

    if(current_index - 1 < 0) {
        $(gallery_items).removeClass("current")
        $(gallery_items).eq(length - 1).addClass("current")

        $(pagginator_items).removeClass("selected")
        $(pagginator_items).eq(length - 1).addClass("selected")
    } else {
        $(gallery_items).removeClass("current")
        $(gallery_items).eq(current_index - 1).addClass("current")

        $(pagginator_items).removeClass("selected")
        $(pagginator_items).eq(current_index - 1).addClass("selected")
    }
});
$(".gallery__next").click(function() {
    gallery_items = $(this).parent().find(".gallery-img").children("img")
    length = $(gallery_items).length
    current_index = $(this).parent().find(".gallery-img").children(".current").index()
    pagginator_items = $(this).parent().parent().find(".gallery-pagginator").children(".gallery-pagginator__item")

    if(current_index + 1 == length) {
        $(gallery_items).removeClass("current")
        $(gallery_items).eq(0).addClass("current")

        $(pagginator_items).removeClass("selected")
        $(pagginator_items).eq(0).addClass("selected")
    } else {
        $(gallery_items).removeClass("current")
        $(gallery_items).eq(current_index + 1).addClass("current")

        $(pagginator_items).removeClass("selected")
        $(pagginator_items).eq(current_index + 1).addClass("selected")
    }
});

/*  */

$(".detailed-control-tabs__item").click(function() {
    tab_name = $(this).attr("data-tab")

    $(this).parent().children(".detailed-control-tabs__item").removeClass("selected")
    $(this).addClass("selected")

    $(".detailed-control-content").children(".detailed-control-content__item").removeClass("active")
    $(".detailed-control-content__item[data-tab="+tab_name+"]").addClass("active")
});

$(".documentation-content__prev").click(function() {
    pages = $(this).parent().find(".documentation-pages")
    length = $(this).parent().find(".documentation-pages").children(".documentation-pages__item").length
    pagginator = $(this).parent().parent().find(".documentation-pagginator")
    current_index = $(pages).find(".selected").index()

    if(current_index - 1 < 0) {
        $(pages).children(".documentation-pages__item").removeClass("selected")
        $(pages).children(".documentation-pages__item").eq(length - 1).addClass("selected")

        $(pagginator).children(".documentation-pagginator__item").removeClass("selected")
        $(pagginator).children(".documentation-pagginator__item").eq(length - 1).addClass("selected")
    } else {
        $(pages).children(".documentation-pages__item").removeClass("selected")
        $(pages).children(".documentation-pages__item").eq(current_index - 1).addClass("selected")

        $(pagginator).children(".documentation-pagginator__item").removeClass("selected")
        $(pagginator).children(".documentation-pagginator__item").eq(current_index - 1).addClass("selected")
    }
});

$(".documentation-content__next").click(function() {
    pages = $(this).parent().find(".documentation-pages")
    length = $(this).parent().find(".documentation-pages").children(".documentation-pages__item").length
    pagginator = $(this).parent().parent().find(".documentation-pagginator")
    current_index = $(pages).find(".selected").index()

    if(current_index + 1 == length) {
        $(pages).children(".documentation-pages__item").removeClass("selected")
        $(pages).children(".documentation-pages__item").eq(0).addClass("selected")

        $(pagginator).children(".documentation-pagginator__item").removeClass("selected")
        $(pagginator).children(".documentation-pagginator__item").eq(0).addClass("selected")
    } else {
        $(pages).children(".documentation-pages__item").removeClass("selected")
        $(pages).children(".documentation-pages__item").eq(current_index + 1).addClass("selected")

        $(pagginator).children(".documentation-pagginator__item").removeClass("selected")
        $(pagginator).children(".documentation-pagginator__item").eq(current_index + 1).addClass("selected")
    }
});

$(".gallery-pagginator__prev").click(function() {
    pages = $(this).parent().parent().find(".builder-gallery__images")
    length = $(pages).children("img").length
    pagginator = $(this).parent().find(".pagginatior-pages").children(".pagginatior-pages__item")
    current_index = $(pages).find(".current").index()

    if(current_index - 1 < 0) {
        $(pages).children("img").removeClass("current")
        $(pages).children("img").eq(length - 1).addClass("current")

        $(pagginator).removeClass("selected")
        $(pagginator).eq(length - 1).addClass("selected")
    } else {
        $(pages).children("img").removeClass("current")
        $(pages).children("img").eq(current_index - 1).addClass("current")

        $(pagginator).removeClass("selected")
        $(pagginator).eq(current_index - 1).addClass("selected")
    }
});
$(".gallery-pagginator__next").click(function() {
    pages = $(this).parent().parent().find(".builder-gallery__images")
    length = $(pages).children("img").length
    pagginator = $(this).parent().find(".pagginatior-pages").children(".pagginatior-pages__item")
    current_index = $(pages).find(".current").index()

    if(current_index + 1 == length) {
        $(pages).children("img").removeClass("current")
        $(pages).children("img").eq(0).addClass("current")

        $(pagginator).removeClass("selected")
        $(pagginator).eq(0).addClass("selected")
    } else {
        $(pages).children("img").removeClass("current")
        $(pages).children("img").eq(current_index + 1).addClass("current")

        $(pagginator).removeClass("selected")
        $(pagginator).eq(current_index + 1).addClass("selected")
    }
});

$(".builder-form__type").click(function() {
    attr = $(this).attr("data-gallery")

    $(".home-builder-function").removeClass("selected")
    $(".home-builder-function[data-gallery="+attr+"]").addClass("selected")
});

$(".layout-tabs__item").click(function() {
    if($(this).parent().children().first().is(this)) {
        $(".main-section").removeClass("tera")
    } else {
        $(".main-section").addClass("tera")
    }
});

$(".planner-list__next").click(function() {
    list = $(this).parent().find(".planner-list").children(".planner-list__item")
    current_index = $(this).parent().find(".planner-list").children(".selected").index()

    if(current_index + 1 == $(list).length) {
        if($(list).eq(0).hasClass("blocked")) return false;
        $(list).removeClass("selected")
        $(list).eq(0).addClass("selected")
    } else {
        if($(list).eq(current_index + 1).hasClass("blocked")) return false;
        $(list).removeClass("selected")
        $(list).eq(current_index + 1).addClass("selected")
    }
});

$(document).ready(function(){
    $('input[type="tel"]').mask("+7 999 999-99-99");
});  

$(".mm-button").click(function() {
    $(this).toggleClass("opened")
    $(".m-menu").toggleClass("opened")
});

$(".m-pagginator__prev").click(function() {
    attr = $(this).parent().attr("data-pagginator")
    current_index = $(this).parent().find(".selected").index()
    pagginator_list = $(this).parent().find(".m-pagginator__pages").children(".m-pagginator__page")
    list = $("[data-list="+attr+"]").children("*")

    if ($(list).eq(current_index - 1).hasClass("blocked")) {
        $(list).removeClass("selected")
        $(list).eq(0).addClass("selected")

        $(pagginator_list).removeClass("selected")
        $(pagginator_list).eq(0).addClass("selected")

        return false;
    }

    if(current_index - 1 < 0) {
        $(list).removeClass("selected")
        $(list).eq($(list).length - 1).addClass("selected")

        $(pagginator_list).removeClass("selected")
        $(pagginator_list).eq($(list).length - 1).addClass("selected")
    } else {
        $(list).removeClass("selected")
        $(list).eq(current_index - 1).addClass("selected")

        $(pagginator_list).removeClass("selected")
        $(pagginator_list).eq(current_index - 1).addClass("selected")
    }
});

$(".m-pagginator__next").click(function() {
    attr = $(this).parent().attr("data-pagginator")
    current_index = $(this).parent().find(".selected").index()
    pagginator_list = $(this).parent().find(".m-pagginator__pages").children(".m-pagginator__page")
    list = $("[data-list="+attr+"]").children("*")

    if(current_index + 1 == $(list).length || $(list).eq(current_index + 1).hasClass("blocked")) {
        $(list).removeClass("selected")
        $(list).eq(0).addClass("selected")

        $(pagginator_list).removeClass("selected")
        $(pagginator_list).eq(0).addClass("selected")
    } else {
        $(list).removeClass("selected")
        $(list).eq(current_index + 1).addClass("selected")

        $(pagginator_list).removeClass("selected")
        $(pagginator_list).eq(current_index + 1).addClass("selected")
    }
});


$(".planner-list__fulscreen").click(function() {
    src = $(this).parent().find(".planner-list__item.selected").find(".planner-list__preview").attr("src")

    $(".fullscreen-overlay").addClass("opened")
    $(".fullscreen-overlay__img").children("img").attr("src", src)
});
$(".fullscreen-overlay__close").click(function() {
    $(".fullscreen-overlay").removeClass("opened")
    $(".fullscreen-overlay").find(".opened").removeClass("opened")
});

$(".contact-form-submit, .planner-form").submit(function() {
    var formData = this.serialize();
        $.ajax({
        url: '/api',
        type: 'GET',
        data: formData,
        success: function(data) {
            data = JSON.parse(data);
            if(data.status == "error") {
                alert(data.message);
            }
        },
        error: function(xhr, status, error) {
            console.error('Ошибка ' + xhr.status + ': ' + error);
        }
    });
});