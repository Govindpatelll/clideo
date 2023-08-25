

document.getElementById("stopmotion").onclick=(()=>{
    document.getElementById("srcc").src="https://static.clideo.com/media/stop-motion-processed.hvc.mp4"
})
document.getElementById("loop").onclick=(()=>{
    document.getElementById("srcc").src="https://static.clideo.com/media/loop-video.av1.mp4"
})

document.getElementById("reverse").onclick=(()=>{
    document.getElementById("srcc").src="https://static.clideo.com/media/reverse-video.av1.mp4"
})

document.getElementById("meme").onclick=(()=>{
    document.getElementById("srcc").src="https://static.clideo.com/media/meme-maker-processed.av1.mp4"

})

document.getElementById("speed").onclick=(()=>{
    document.getElementById("srcc").src="https://static.clideo.com/media/slow-motion-index.av1.mp4"
})


const buttons = document.querySelectorAll('.custom-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('active-button');
    });
    button.classList.add('active-button');
  });
});











