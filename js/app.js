
    if(screen.width <= 500) {
        let navLinks = Array.from(document.getElementsByClassName('nav-item'));
        navLinks.forEach( item => {
            item.onclick = function() {
                document.getElementById("main-header").classList.remove('show-dropdown');
                document.getElementById('dropdownMenu').style.display = 'none';
            }
        })
    }

    function loadJSON(callback) {   

        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', 'assets/products.json', true);
        xhr.onreadystatechange = function () {
              if (xhr.readyState == 4 && xhr.status == "200") {
                callback(xhr.responseText);
              }
        };
        xhr.send(null);  
    }
    loadJSON(function(response) {
        let products = JSON.parse(response);   
        const wraper = document.getElementById('allProducts');
        products.data.forEach(prod => {
            let elem = document.createElement('div');
            elem.className = 'prod-item';    
            elem.setAttribute('id','prod_' + prod._id);
            let allProducts = `<div class="prod-img"><img src="assets/images/${prod.path}" alt="${prod.title}"></div>`
            allProducts += `<p class="prod-title">${prod.title}</p><p class="prod-price">${prod.price}</p>`;
            elem.innerHTML = allProducts;
            wraper.appendChild(elem);
        })
    });


    document.getElementById("toggleOpen").onclick = function() {
        document.getElementById("main-header").classList.add('show-dropdown');
        document.getElementById('dropdownMenu').style.display = 'block';
    }

    document.getElementById("toggleClose").onclick = function() {
        document.getElementById("main-header").classList.remove('show-dropdown');
        document.getElementById('dropdownMenu').style.display = 'none';
    }

    document.getElementById("shoping").onclick = function() {
        window.open('https://www.google.com');
    }

    document.getElementById("sndMsg").addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("sndMsg").click();
      }
    });

    document.getElementById("rightArr").onclick = function() {
        const wraper = document.getElementById('allProducts');
        let child = wraper.childNodes[0];
        wraper.appendChild(child);
    }
    document.getElementById("leftArr").onclick = function() {
        const wraper = document.getElementById('allProducts');
        let array = wraper.childNodes;
        let child = array[array.length-1];
        wraper.insertBefore(child,wraper.childNodes[0]);
    }

$(document).ready(function() { 
    
    $(".accordion-card").on("click", function(){   
        $(this).children().eq(1).slideToggle(300);  
        $(this).toggleClass("accordBlue");
        $(this).siblings().find(".accordion-header i").removeClass("goUp");
        $(this).find(".arrDown").toggleClass("goUp");
    
        $(".accordion-card .accordion-body").not($(this).children().eq(1)).slideUp(300).parent().removeClass("accordBlue");;
    });
    
});