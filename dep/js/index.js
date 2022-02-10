const CDN = "https://gitlab.com/Alimjoo/jb_repo_cdn/-/raw/main";
var to_replace = $("img");
var temp;
for(var i = 0; i < to_replace.length; i++){
    temp = to_replace[i].getAttribute("src");
    if(to_replace[i].getAttribute("cdn") === "yes"){
        to_replace[i].setAttribute("src", CDN + temp);
    }
}
console.log("yes");