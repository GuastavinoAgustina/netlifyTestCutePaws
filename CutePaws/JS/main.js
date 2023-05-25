document.getElementById('myBtn').addEventListener('click', get_random_image)
function get_random_image(){
    url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        display_image(data.message)
    })
    .catch(function(error){
        console.log(error)
    })
}
function display_image(image){
    document.getElementById("image").src = image;
}