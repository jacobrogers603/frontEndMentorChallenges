window.onload = function() {
    // A query parameter was passed from script.js accepted() to here.
    var params = new URLSearchParams(window.location.search);
    var rating = params.get('rating');

    var ratingText = document.getElementById("ratingText");
    if(ratingText && rating){
        ratingText.textContent = "You selected " + rating + " out of 5";
    }
}