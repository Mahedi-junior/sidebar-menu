const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const reamingDiv = document.querySelector(".reamingDiv");
const active_listItem = document.querySelector(".list-item.active.reamingDark");
// console.log(active_listItem)

dark.addEventListener("click", ()=>{
   sidebar.className = "sidebar";
   console.log(reamingDiv);
   reamingDiv.className = "reamingDark";
    active_listItem = "list-item active";
})

night.addEventListener("click", ()=>{
    sidebar.className = "sidebar night";
    reamingDiv.className = "reamingNight";
    active_listItem = "list-item active";
})
light.addEventListener("click", ()=>{
    sidebar.className = "sidebar light";
    reamingDiv.className = "reamingLight";
    active_listItem = "list-item active light";
})
