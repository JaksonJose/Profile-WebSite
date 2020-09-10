

var index = 0
var image = []
image[0] = "/_img/HTMLLogo.jpg"
image[1] = "/_img/CSSLogo.jpg"
image[2] = "/_img/JavaScriptLogo.jpg"

function photoChange()
{
    setTimeout(function(){
        document.getElementById("photo").src = image[index++]
    }, 3000)
    if (index >= image.length){
        index = 0
    }
}
photoChange()