function getSVGString(img) {
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(img);
    return svgString;
}

var mycolor;

window.addEventListener('beforeunload', function() {
    localStorage.setItem('elementColor', mycolor);
});



document.addEventListener('DOMContentLoaded', function () {
    const previousColor = localStorage.getItem('elementColor');
    colors = ["#ff0000","#1eafc7","#ffa500","#008000","#ff00c5","#ab6cf2","#003EFF"];
    colors = colors.filter(item => item !== previousColor);

    x = Math.floor(Math.random()*colors.length);
    mycolor = colors[x]


    if (window.location.pathname == "/index.html" || window.location.pathname == "/") {
        fetch("html/navigation.html")
            .then(response => response.text())
            .then(htmlText => {
                document.getElementsByClassName("topnav")[0].innerHTML = htmlText;
                document.getElementById("indexhtml").style.backgroundColor=mycolor;

                
                for (var i = 0 ; i < document.getElementsByClassName("navigationLinks").length ; i++){
                    var link = document.getElementsByClassName("navigationLinks")[i]
                    var linkstring = link.getAttribute("href")
                    linkstring = "html/" + linkstring;

                    link.setAttribute("href", linkstring);
                }
            }
        )

        for (var i = 0; i< document.getElementsByClassName("colorletter").length ; i++){
            document.getElementsByClassName("colorletter")[i].style.color = mycolor;
        }

    } else if (window.location.pathname == "/html/Training.html"){
        fetch("navigation.html")
            .then(response => response.text())
            .then(htmlText => {
                document.getElementsByClassName("topnav")[0].innerHTML = htmlText;
                document.getElementById("Trainings").style.backgroundColor=mycolor;
            }
        ) 
        
        for (var i = 0; i< document.getElementsByClassName("colorletter").length ; i++){
            document.getElementsByClassName("colorletter")[i].style.color = mycolor;
        }

        for (var i = 0; i<document.getElementsByClassName("TrainingPIcs").length; i++){
            document.getElementsByClassName("TrainingPIcs")[i].style.border = "5px ridge " + mycolor;
        }

        for (let j=0 ; j<3 ; j++){
            for (let i = 0; i< 4 ; i++){
                fetch("/photos/icon"+i+".svg")
                    .then(response => response.text())
                    .then(svgText => {
                        var iconid = "icon" + (4*j + i);
                        const container = document.getElementById(iconid)
                        
                        container.innerHTML=svgText;
                        
                        const icon = container.querySelector("svg");
                        icon.style.width = "100%";


                        const paths = icon.querySelectorAll('path')
                        paths.forEach(path=> {
                            path.style.fill = mycolor;
                            if (i==0){
                                path.style.fill="none";
                                path.style.stroke = mycolor;
                            }
                        });}
                        
                    )
            }
        }

    } else if (window.location.pathname == "/html/Einrad.html"){
        fetch("navigation.html")
            .then(response => response.text())
            .then(htmlText => {
                document.getElementsByClassName("topnav")[0].innerHTML = htmlText;
                document.getElementById("Einradsport").style.backgroundColor=mycolor;
            }
        ) 

        fetch("/photos/arrow.svg")
            .then(response => response.text())
            .then(svgText => {
                const container = document.getElementsByClassName("arrow-right")
                for (var i =0 ; i<container.length ; i++){
                    
                    container[i].innerHTML=svgText;
                    
                    const paths = container[i].querySelector("svg").querySelectorAll('path')
                    paths.forEach(path=> {
                        path.style.fill = mycolor;
                    });
                }
            })

        var coloring = document.querySelectorAll("h1, h2, h3, h4, a, dt")
        
        for (var i = 0; i< coloring.length ; i++){
            if (coloring[i].className != "uni-shop"){
                coloring[i].style.color = mycolor;
            }             
        }

        fetch("/photos/javier.svg")
            .then(response => response.text())
            .then(svgText => {
                var logoFrame = document.getElementById("javier-container");
                logoFrame.innerHTML = svgText;

                var javier = document.getElementById("javier");

                javier.removeAttribute("width");
                javier.removeAttribute("height");

                javier.style.width = "100%";
                javier.style.height = "100%";
                javier.setAttribute("preserveAspectRatio", "xMidYMid meet");
                

                javier.setAttribute("preserveAspectRatio", "xMidYMid meet");

                const paths = javier.querySelectorAll('path')
                paths.forEach(path=> {
                    path.style.fill = mycolor;
                    if (path.getAttribute("inkscape:label") == "onlystroke") {
                        path.style.fill = "none";
                        path.style.stroke = mycolor;
                    }
                    });}
        )


    } else if (window.location.pathname == "/html/Wir.html"){
        fetch("navigation.html")
            .then(response => response.text())
            .then(htmlText => {
                document.getElementsByClassName("topnav")[0].innerHTML = htmlText;
                document.getElementById("Wir").style.backgroundColor=mycolor;
            }
        ) 

        fetch("/Logos/stockhorn.svg")
            .then(response => response.text())
            .then(svgText => {
                var logoFrame = document.getElementById("newlogo-container");
                logoFrame.innerHTML = svgText;

                document.getElementById("newlogo").style.aspectRatio = "3/4";

                var logo = document.getElementById("svg1");

                logo.removeAttribute("width");
                logo.removeAttribute("height");
                
                logo.style.width = "100%";
                logo.style.height = "100%";
                logo.setAttribute("preserveAspectRatio", "xMidYMid meet");

                const paths = document.querySelectorAll('g[inkscape\\:label="main"] path')
                paths.forEach(path=> {
                    path.style.fill = mycolor;
                    if (path.getAttribute("inkscape:label") == "tire") {
                        path.style.fill = "none";
                        path.style.stroke = mycolor;
                    }
                    });}
        )

        document.getElementById("newlogo").style.border = "5px ridge " + mycolor;

        for (var i = 0; i< document.getElementsByClassName("ourPics").length ; i++){
            document.getElementsByClassName("ourPics")[i].style.border = "5px ridge " + mycolor;
        }

    } else if (window.location.pathname == "/html/Kontakt.html"){
        fetch("navigation.html")
            .then(response => response.text())
            .then(htmlText => {
                document.getElementsByClassName("topnav")[0].innerHTML = htmlText;
                document.getElementById("Kontakt").style.backgroundColor=mycolor;
            }
        ) 

        document.getElementById("arrowpath").style.fill = mycolor;
        for (var i = 0; i< document.getElementsByClassName("abschicken").length ; i++){
            document.getElementsByClassName("abschicken")[i].style.background = mycolor;
        }

    } else if (window.location.pathname == "/html/Spiel.html"){
        document.getElementById("memory-ui").style.background = mycolor+"80";
        document.getElementsByClassName("modal-header")[0].style.background = mycolor;
    } else if (["/index.html","/html/Training.html","/"].includes(window.location.pathname)){
        
    } 
    

    var src;
    if (window.location.pathname == "/index.html" ){
        src = 'Logos/newlogo-wide.svg';
    } else if (window.location.pathname == "/woow/index.html") {
        src = '/woow/Logos/newlogo-wide.svg';
    } else {
        src = '../Logos/newlogo-wide.svg';
    }


    
    fetch(src)
        .then(response => response.text())
        .then(svg => {
            container = document.getElementById('logo-container')
            container.innerHTML = svg;

            const svgElement = container.querySelector('svg');
            svgElement.setAttribute('height', '100%');

            document.getElementById("WoOW").style.fill = mycolor;
            document.getElementById("tires").style.stroke = mycolor;
            
            
        })
        .catch(error => console.error('Error loading SVG:', error));

});







