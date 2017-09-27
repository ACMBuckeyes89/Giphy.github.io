
//Adding initial variable that will hold the array of soccer players. 

var topics = ["Cristiano Ronaldo", "Neymar", "Lionel Messi"];

//Initializing function to display soccer player data 

function hitButtons() {
	// We delete the data buttons prior to adding new ones to prevent repetitive buttons.
	$("#players-view").empty();

	//Now we loop through the topics array

	for (var i = 0; i < topics.length; i++) {
		
		//Now we declare a variable that will generate buttons for the characters.

		var players = $("<button>");
		//Adding a class to the button element
		players.addClass("copa");
		//Adding an the data-attribute, with the value being topics[i].
		players.attr("data-person", topics[i]);
		//Giving the buttons the text of the player submitted.
		players.text(topics[i]);
		//Now we are adding the buttons to the HTML page.
		$("#players-view").append(players);
	}	
}

//The following function displays data when the player is submitted into the input box. 

$(".btn").on("click", function(event) {

	//This method prevents the form 
	event.preventDefault();
	
	//Initializing a variable to grab the text typed inside the input box.
	var europe = $("#futbol-input").val().trim();

	//The soccer player is added to the array
	topics.push(europe);

	//Finally call the following function to process the character array
	hitButtons();
	
});


$(".copa").on("click", function() {
	$("#gif").empty();
	var maracana = $(this).attr("data-person");
	var sanSiro = maracana.replace(/ + /g, "+");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sanSiro + "&api_key=PkzHR9HJF4pCDvW9KIm2sXWc3EC5DFVF&limit=10";
	//var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=PkzHR9HJF4pCDvW9KIm2sXWc3EC5DFVF&tag=" + sanSiro;

		$.ajax({url: queryURL,method: "GET"})
		.done(function(response){
			console.log(response);
			
			var olimpico = response.data;

			for (var i = 0; i < olimpico.length; i++) {
			
			
				var imgDiv = $("<div class='image'>");

				var champions = $("<p>").text("Rating: " + olimpico[i].rating);
				
				var gifImage = $("<img>"); 

				gifImage.attr("src", olimpico[i].fixed_height_small_still_url);
				gifImage.attr("data-animate", olimpico[i].fixed_height_small_url);
				gifImage.attr("data-state", "still");
				gifImage.attr("data-still", olimpico[i].fixed_height_small_still_url);

				imgDiv.append(champions);

				imgDiv.append(gifImage);

				$("#gif").append(gifImage);
			}	

	   }); 
}); 	

   hitButtons();

$(".image").on("click", function(){
	var ref = $("this").attr("data-state");

	if (ref === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});





