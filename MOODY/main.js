setScreen("HOME");

// Dropdown menu //

onEvent("dropdown2", "value", function( ) {
	console.log("Selected option: " + getText("dropdown2"));
	

});

// Changes between screens using dropdown //

onEvent("SELECT", "click", function() {
  {
	var choice = getProperty("dropdown2", "value");
	}
	if (choice == "ABOUT US") {
  setScreen("ABOUT_US");
	}
	if (choice == "QUIZ PAGE") {
  setScreen("QUIZ_PAGE");
	}
	if (choice == "MAGIC 8-BALL") {
	setScreen("MAGIC_8-BALL")
	}
	if (choice == "QUOTE") {
	setScreen("QUOTE")
	}
	if (choice == "LINKS") {
	setScreen("LINKS")
	}
	if (choice == "PERSONALITY") {
	setScreen("PERSONALITY_QUIZ")
	}
});

// Home routing buttons for each page //

onEvent("about_us_home","click", function() {
  setScreen("HOME")
  });

onEvent("compliment_home","click", function() {
  setScreen("HOME")
  });
  
onEvent("magic_8-ball_home","click", function() {
  setScreen("HOME")
  });
  
onEvent("quiz_page_home","click", function() {
  setScreen("HOME")
  });
  


onEvent("settings_button", "click", function( ) {
	setScreen("SETTINGS");
});
onEvent("settings_home", "click", function( ) {
	setScreen("HOME");
});

// Settings personal information //

onEvent("username_input", "change", function( ) {
	// var defined in submit button block //
});
onEvent("age_input", "change", function( ) {
	// var defined in submit button block
});
onEvent("settings_submit", "click", function( ) {
	{
	  var userVal = getText("username_input");
	}
	{
	  var ageVal = getText("age_input");
	}
	setScreen("HOME")
});
onEvent("quote_gen", "click", function( ) {

	// Set up randomizer number
	
	var indexInt = randomNumber(1, 6)
	  
	if (indexInt == 1) {
	  {var indexStr = "If life ever feels down, don't worry, sometimes to go to " + 
	"heaven, you have to pass through hell."}
	}
	
	if (indexInt == 2) {
	  {var indexStr = "Light a man a fire, and he'll stay warm for the rest of his " +
	    "day, light a man on fire, and he'll stay warm for the rest of his life."}
	}
	
	if (indexInt == 3) {
	  {var indexStr = "Take every bad thing in life as an obstacle, not a curse"}
	}
	
	if (indexInt == 4) {
	  {var indexStr = "The best is yet to be."}
	}

	if (indexInt == 5) {
	  {var indexStr = "Do good and good will come to you."}
	}
	
	if (indexInt == 6) {
	  {var indexStr = "A positive mindset brings positive thoughts."}
	}

		setText("quote_area", indexStr)
});
onEvent("text_input1", "change", function( ) {
	// This constantly checks the value of the text input
});

onEvent("text_area3", "change", function( ) {
	
});

onEvent("button2", "click", function( ) {
  var niInt = randomNumber(1, 6);
  if (niInt == 1) {
    niStr = "Yes";
  }
  if (niInt == 2) {
    niStr = "No";
  }
  if (niInt == 3) {
    niStr = "I don't know";
  }
  if (niInt == 4) {
    niStr = "Ask again tomorrow";
  }
  if (niInt == 5) {
    niStr = "Maybe";
  }
  if (niInt == 6) {
    niStr = "Go with what your heart says";
  }
	setText("text_area3",niStr)
});
onEvent("button1", "click", function( ) {
  var score = 0;
	{var q1_ua = getText("q1_ui");}
	{var q2_ua = getText("q2_ui");}
	console.log(q1_ua);
	console.log(q2_ua);
	if (q1_ua == "russia") {
	  score += 1;
	  console.log("Correct");
	} else {
	  score += 0;
	  console.log("Incorrect");
	}
	
	if (q2_ua == 1969) {
	  score += 1;
	  console.log("Correct");
	} else {
	  score += 0;
	  console.log("Incorrect");
	}
	console.log(score);
	var so1 = score * 50;
	console.log(so1);
	setScreen("quiz_results");
	setText("score_label",so1);
});
onEvent("button3", "click", function( ) {
	setScreen("HOME");
});

// Links in LINKS page //
onEvent("dailymotiv", "click", function( ) {
	open("https://www.greatday.com/");
});
onEvent("youmatter", "click", function( ) {
	open("https://afsp.org/");
});
onEvent("special", "click", function( ) {
	open("https://www.youarespecial.org/");
});
onEvent("behappy", "click", function( ) {
	open("https://www.wikihow.com/Be-Happy");
});
// Links Page Home Button //
onEvent("links_home", "click", function( ) {
	setScreen("HOME");
});

// CODE FOR THE PERSONALITY QUIZ //

onEvent("image3", "click", function( ) {
	setScreen("HOME");
});
onEvent("submitButton_perquiz", "click", function( ) {
	setScreen("LINKS");
});
