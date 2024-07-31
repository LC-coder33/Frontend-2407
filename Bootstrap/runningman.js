$(document).ready(() => {
    let frames = [];
    for (let i = 0; i <= 14; i++)
    frames.push(`../jQuery/human/${i}.png`)

let count = 0;
setInterval(() => {
    $('#runningImage').attr('src', frames[count++ % frames.length])
}, 1000/30);        // 30 frame per second(FPS)
})