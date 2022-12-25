const tabsBtn = document.querySelectorAll(".dop__knopka");
const tabsItems = document.querySelectorAll(".Stranici");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.dop__knopka').click();

$('#razmer').change(function(){
  var a = $(this).val();
$('p').css({
    'font-size': a+'px'
  })
});

function LightTheme() {
    let PageItem = document.querySelectorAll( ".Stranici" ); 
    for( let i = 0; i < PageItem.length; i++){ 
      PageItem[i].style.color = "black";
      PageItem[i].style.backgroundColor = "White"; 
    } 
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";

    let h3 = document.querySelector("h3");
    h4.style.color = "black";

    let dark = document.querySelector (".dark");
    dark.style.backgroundColor = "black";
    dark.style.color = "white";

    let light = document.querySelector (".light");
    light.style.backgroundColor = "black";
    light.style.color = "white";
}

function DarkTheme() {
  let PageItem = document.querySelectorAll( ".Stranici" ); 
  for( let i = 0; i < PageItem.length; i++){ 
    PageItem[i].style.color = "white";
    PageItem[i].style.backgroundColor = "black"; 
  }   
  let body = document.querySelector("body");
  body.style.backgroundColor = "black";    

  let h3 = document.querySelector("h3");
  h4.style.color = "white";

  let light = document.querySelector (".light");
  light.style.backgroundColor = "white";
  light.style.color = "black";

  let dark = document.querySelector (".dark");
  dark.style.backgroundColor = "white";
  dark.style.color = "black";
}
