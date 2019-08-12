function hide_sidebar() {
    
    document.getElementsByClassName('sidebar')[0].style.display = 'none';
    document.getElementsByClassName('main-menu-mobile')[0].style.display = 'block';
    document.getElementsByClassName('mask')[0].style.display = 'none';
       
    document.getElementsByClassName('sidebar')[0].style.transition = 'all 0.3s ease';
    document.getElementsByClassName('content')[0].style.transition = 'all 0.3s ease';

   /* 
    * document.getElementsByClassName('sidebar')[0].style.width = '0';
    document.getElementsByClassName('content')[0].style.padding = '0';
    document.getElementsByClassName('main-menu-mobile')[0].style.display = 'block';
   */		
}

function show_sidebar() {
    document.getElementsByClassName('sidebar')[0].style.display = 'block';
    document.getElementsByClassName('main-menu-mobile')[0].style.display = 'none';
    document.getElementsByClassName('mask')[0].style.display = 'block';
}

