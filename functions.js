function getSVGString(img) {
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(img);
    return svgString;
}

addEventListener("load", () => {
    colors = ["#ff0000","#1EAFC7","#ffa500","#008000"];

    x = Math.floor(Math.random()*colors.length);
    mycolor = colors[x]

    document.getElementsByClassName("active")[0].style.backgroundColor=mycolor;

    //I want the logo to change color as well
    const logo = document.querySelector('.logo img');    

    // Create a new Image object
    const img = new Image();
    img.src = logo.src;

    // When the image is loaded, handle the SVG manipulation
    img.onload = function() {
        const svgString = getSVGString(img);
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
        
        // Update the fill color of all paths in the SVG
        const paths = svgDoc.querySelectorAll('path');
        paths.forEach(path => {
            path.setAttribute('fill', mycolor);
        });

        // Serialize the updated SVG back to a string and replace the original <img> tag
        const updatedSvgString = new XMLSerializer().serializeToString(svgDoc.documentElement);
        logo.outerHTML = updatedSvgString;
    };
});