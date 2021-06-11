// fb
let share_btn = document.querySelector(".share_btn");
window.fbAsyncInit = function () {
    FB.init({
        appId: '4315036485174483',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v11.0'
    });

    share_btn.addEventListener("click",()=>{
        FB.ui({
            method: 'share',
            href: 'https://yuni0107.github.io/kac_tool/',
            quote: "你好你好"
          }, function(response){
              
          });
    })
};

