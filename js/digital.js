let titile = document.querySelector("h1");

if(document.location.href.includes("project-pets")){
    let all= document.querySelectorAll(".pets");

    titile.innerHTML = "Prject charter - PETS WEB";
    all.forEach((item) => {
        item.style.display = "flex"
    });
}else if(document.location.href.includes("project-cv")){
    titile.innerHTML ="Prject charter - CVWEB";
    let all = document.querySelectorAll(".cv")
    all.forEach((item) =>{
        item.style.display = "flex"
    })
}else if(document.location.href.includes("project-news")){
    titile.innerHTML = "Prject charter - NEWS WEB";
    let all = document.querySelectorAll(".news");
    all.forEach((item) =>{
        item.style.display = "flex"
    });
}