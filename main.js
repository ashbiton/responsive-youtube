// originally youtube gives us an iframe with the porpotions:
// width="560" height="315"
// so height =0.5625 * width and we need to round the answer 
// so height =Math.round (0.5625 * width)

function resizeIframeYoutube(){
    let youtubeVideos = document.getElementsByClassName("youtube");
    let h = 0;
    let w = 0;
    for (let i=0; i < youtubeVideos.length; i++){
        w = youtubeVideos[i].clientWidth;
        h = Math.round(0.5625 * w);
        youtubeVideos[i].style.height = h + "px";
    }
}