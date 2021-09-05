const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: true
});

sr.reveal(`.header-content, .service-header, .service-title, .service-card-block, .count, .contact-header, .contact-title `, {
    interval: 200
})
const img = ScrollReveal({
    origin: 'right',
    distance:'50px',
    duration:2000,
    reset: true
})
img.reveal(` .about-text, .right, .bio-img, .address`,{
    interval:100
})
const text = ScrollReveal({
    origin: 'left',
    distance:'50px',
    duration:2000,
    reset: true
})
text.reveal(`.about-img, .left, .bio-text, .form `,{
    interval: 200
})