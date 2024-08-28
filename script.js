let animationBox = document.getElementsByClassName("animationBox");
let emitObject = document.getElementById("emitObject");

let time = new Date().getHours();
let day;
if(time > 6 && time < 16){
    day = "dayLight";
}else if(time>16 && time<=18){
    day ="eveningLight";
}else{
    day = "nightLight";
}

switch(day){
    case 'dayLight':
        animationBox[0].style.background = "linear-gradient(0deg, rgba(250,244,248,1) 0%, rgba(153,209,215,0.9417016806722689) 10%, rgb(49, 234, 255) 100%)";
        if(emitObject.classList.contains("moon") || emitObject.classList.contains("eveningSun")){
            emitObject.classList.remove("moon");
            emitObject.classList.remove("eveningSun");
            emitObject.classList.add("sun");
            
        }
        break;

    case 'eveningLight':
        animationBox[0].style.background = "linear-gradient(0deg, rgba(141,138,124,0.8772759103641457) 9%, rgba(252,251,160,0.9529061624649859) 36%, rgba(248,156,57,1) 100%)";
        if(emitObject.classList.contains("sun") || emitObject.classList.contains("moon")){
            emitObject.classList.remove("sun");
            emitObject.classList.remove("moon");
            emitObject.classList.add("eveningSun");
        }
        break;

    case 'nightLight':
        animationBox[0].style.background = "#1a2238";
        if(emitObject.classList.contains("sun") || emitObject.classList.contains("eveningSun")){
            emitObject.classList.remove("sun");
            emitObject.classList.remove("eveningSun");
            emitObject.classList.add("moon");
            emitObject.style.top = `12%`;

        }
        let stars = document.createElement('div');
        stars.className = "stars";
        for(let i=1; i<=20 ;i++){
            let spotStar = document.createElement("div");
            spotStar.className = `star star-${i}`;
            stars.appendChild(spotStar);
        }
        animationBox[0].appendChild(stars);
        break;



        //background: rgb(250,244,248);background: linear-gradient(0deg, rgba(250,244,248,1) 0%, rgba(153,209,215,0.9417016806722689) 47%, rgba(114,238,252,1) 100%);
}

