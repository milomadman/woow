function getSVGString(img) {
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(img);
    return svgString;
}

var mycolor;

window.addEventListener('beforeunload', function() {
    // Store current color
    localStorage.setItem('elementColor', mycolor);
});


document.addEventListener('DOMContentLoaded', function () {
    const previousColor = localStorage.getItem('elementColor');
    colors = ["#ff0000","#1eafc7","#ffa500","#008000","#ff00c5","#ab6cf2","#003EFF"];
    colors = colors.filter(item => item !== previousColor);

    x = Math.floor(Math.random()*colors.length);
    mycolor = colors[x]


    document.getElementsByClassName("active")[0].style.backgroundColor=mycolor;

    if (window.location.pathname == "/html/Kontakt.html"){
        document.getElementById("arrowpath").style.fill = mycolor;
        console.log("hello");
    }
    console.log(window.location);

    var src;
    if (window.location.pathname == "/index.html" ){
        src = 'Logos/logo-wide.svg'
    } else if (window.location.pathname == "/woow/index.html") {
        src = '/woow/Logos/logo-wide.svg'
    } else {
        src = '../Logos/logo-wide.svg'
    }

    fetch(src)
        .then(response => response.text())
        .then(svg => {
            container = document.getElementById('logo-container')
            container.innerHTML = svg;

            const svgElement = container.querySelector('svg');
            svgElement.setAttribute('height', '100%');

            const paths = document.querySelectorAll('#logo-svg path');
            paths.forEach(path => {
            path.setAttribute('fill', mycolor); // Change to your desired color
    });
        })
        .catch(error => console.error('Error loading SVG:', error));
});






