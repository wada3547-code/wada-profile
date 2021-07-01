//ハンバーガーメニュー
$(function(){
    $("#nav-button, .hm-list-li").click(function(){
        $("#hm-list").slideToggle();
    });
});