// console.log("hi");


// var text = document.getElementsByTagName("h1")

// console.log(text[0].innerHTML , "text");








var image = document.getElementById("image")
var button = document.getElementById("mybutton")

var images = [ "https://plus.nasa.gov/wp-content/uploads/2023/08/star-forming_region_carina.en_.jpg?w=985" , "https://www.polytechnique-insights.com/wp-content/uploads/2022/11/adobestock_139734558-scaled.jpeg", "https://images.photowall.com/products/56982/planets-in-space.jpg?h=699&q=85" , "https://moonkidshome.ae/wp-content/uploads/2021/10/GRA5-Space-wallpaper6.jpg"]
var counter = 1
button.addEventListener("click" , function () {
    console.log(counter , "counter");
    
if(counter === images.length) {

    counter = 0
}
image.src = images[counter]
counter++

})
