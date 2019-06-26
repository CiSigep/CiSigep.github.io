$(() => {
    function selectBlock(element) {
        var target = $(element).attr("data-target");
        if (!$("#" + target).hasClass("active-content")) {
            var active = $(".active-content");
            active.animate({opacity: 0, top: "20px"}, 250, "swing", function(){
                $(this).css("display", "none");
                $(this).removeClass("active-content");
                $("#" + target).addClass("active-content").css({display: "block", opacity: "0"}).animate({opacity: 1, top: "0px"}, 250);
            });
        }
    }

    $("#sidebarOpen").click(() => {
        $(".sidebar").addClass("sidebar-active");
    });
    $("#sidebarClose").click(() => {
        $(".sidebar").removeClass("sidebar-active");
    });
    $(".nav-link").click((e) => {
        $(".nav-link").removeClass("active");
        $(e.target).addClass("active");
        selectBlock(e.target);
    });
    $(".sidebar a").click((e) => {
        $(".sidebar").removeClass("sidebar-active");
        selectBlock(e.target);
    })

    $("#aboutBlock").addClass("active-content").css({display: "block", opacity: "0"}).animate({opacity: 1, top: "0px"}, 500);
});