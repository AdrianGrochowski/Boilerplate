var $videoSrc;
$('.video-btn').click(function() {
    $videoSrc = $(this).data("src");
});
$('#myModal').on('shown.bs.modal', function() {
    $("#video").attr('src', $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1");
})
$('#myModal').on('hide.bs.modal', function() {
    $("#video").attr('src', $videoSrc);
})
