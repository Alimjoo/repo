// img source builder
const CDN = "https://gitlab.com/Alimjoo/jb_repo_cdn/-/raw/main";
var to_replace = $("img");
var temp;
for (var i = 0; i < to_replace.length; i++) {
    temp = to_replace[i].getAttribute("src");
    if (to_replace[i].getAttribute("cdn") === "yes") {
        to_replace[i].setAttribute("src", CDN + temp);
    }
}

// Detail's updater
$("#current-version").html(properties['current-version']);
$("#test-ios").html(properties['test-ios']);
$("#last-up-time").html(properties['last-up-time']);
$("#description").html(properties['description']);

//  IMG
for (let index = 1; index <= properties['img']; index++) {
    $(".carousel-inner").append(`<div class="page"><img src="https://gitlab.com/Alimjoo/jb_repo_cdn/-/raw/main/${properties['name']}/${index}.png" alt="${index}"></div>`);
}
