let snare = $("button#snare")
snare.click(function(){
    let audio = new Audio("snare.mp3")
    audio.play()
})


let highhat = $("button#high-hat")
highhat.click(function(){
    let audio = new Audio("hi-hat.mp3")
    audio.play()
})


let bamboo = $("button#bamboo")
bamboo.click(function(){
    let audio = new Audio("bamboo-hit.mp3")
    audio.play()
})


let hightom = $("button#high-tom")
hightom.click(function(){
    let audio = new Audio("high-tom.mp3")
    audio.play()
})