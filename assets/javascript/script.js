$(() => {
    $("#sidebarOpen").click(() => {
        $(".sidebar").addClass("sidebar-active");
    });
    $("#sidebarClose").click(() => {
        $(".sidebar").removeClass("sidebar-active");
    });
    $(".nav-link").click((e) => {
        $(".nav-link").removeClass("active");
        $(e.target).addClass("active");
    });
});