document.addEventListener("DOMContentLoaded", function () {
        let path = document.location.pathname.split("/")
        let newPath = path[path.length-1]
        document.querySelectorAll('a').forEach(function (navmenuItem){
            if(navmenuItem.getAttribute('href') == newPath){
                navmenuItem.classList.add('contact-data-new')

            }
        })
    });
