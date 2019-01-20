$('[data-fancybox]').fancybox({
    protect: true,
    buttons: [
        'zoom',
        'thumbs',
        'close'
    ]
});


$('[data-fancybox="watermark"]').fancybox({
    protect: true,
    slideClass: 'watermark',
    toolbar: false,
    smallBtn: true
});

// Preload watermark image
// Please, use your own image
(new Image()).src = "https://fancyapps.com/GJbkSPU.png";
