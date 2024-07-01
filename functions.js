function getSVGString(img) {
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(img);
    return svgString;
}

/*addEventListener("load", () => {
    colors = ["#ff0000","#1eafc7","#ffa500","#008000","#ff00c5","#ab6cf2"];

    x = Math.floor(Math.random()*colors.length);
    mycolor = colors[x]

    document.getElementsByClassName("active")[0].style.backgroundColor=mycolor;

    const paths = document.querySelectorAll('#logo-svg path');
    paths.forEach(path => {
        path.setAttribute('fill', mycolor); // Change to your desired color
    });

});*/


document.addEventListener('DOMContentLoaded', function () {
    colors = ["#ff0000","#1eafc7","#ffa500","#008000","#ff00c5","#ab6cf2"];

    x = Math.floor(Math.random()*colors.length);
    mycolor = colors[x]

    document.getElementsByClassName("active")[0].style.backgroundColor=mycolor;

    var src;
    console.log(window.location.pathname);
    if (window.location.pathname == "/index.html" || window.location.pathname == "/woow/index.html"){
        src = '/logo-wide.svg'
    } else {
        src = '../logo-wide.svg'
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
