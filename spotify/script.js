// console.log("Let's going to java");
async function getsongs(){
let a=fetch("http://127.0.0.1:3000/java_script/spotify/songs/");
let response= await  (await a).text()
console.log(response)
let div= document.createElement("div")
div.innerHTML=response;
let as= div.getElementsByTagName("a")
let songs=[]
for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if(element.href.endsWith(".mp3")){
        songs.push(element.href.split("/songs/")[1])
    }
}
return songs
}
async function main(){
    let songs=await getsongs();
    console.log(songs);

let songUL = document.querySelector(".song_list").getElementsByTagName("ul")[0]
for (const song of songs) {
    songUL.innerHTML=songUL.innerHTML + `<li> ${song.replaceAll("%20"," ")}</li>`;
}


    let audio = new Audio(songs[0]);
audio.play();

audio.addEventListener("loadeddata", () => {
  let duration = audio.duration;
  console.log(audio.duration,audio.currentTime,audio.currentSrc)
  // The duration variable now holds the duration (in seconds) of the audio clip
});

}
main()
