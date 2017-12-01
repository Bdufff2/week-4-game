

// global variables
var randomComputerValue;
var losses = 0;
var wins = 0;
var total = 0;
;
// global reset function that resets the total variable, creates new computer random value and new crystal values 

function (reset()){
    for (var i = 0; i < 4; i++) {// for loop is working in conole log creating 4 random variables
        var randomNum = Math.floor(Math.random() * 12) + 1;
    
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "value": randomNum
            });
        $(".crystals").append(crystal); // can't make this generate div for crystal in index.html file.... revisit
    
    };
    total = 0;
}
// computer generates random number for the user to target the start of the game (19-120)

randomComputerValue = Math.floor(Math.random() * 101) + 19;
console.log(randomComputerValue);


// create 4 divs to use as crystals to click for the game
// 4 crystals each assigned a random number at start of the game (1-12)


for (var i = 0; i < 4; i++) {// for loop is working in conole log creating 4 random variables
    var randomNum = Math.floor(Math.random() * 12) + 1;

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "value": randomNum
        });
    $(".crystals").append(crystal); // can't make this generate div for crystal in index.html file.... revisit

}


// when user clicks crystal should add to a total score

$(".crystal").on('click', function() {
    var num = parseInt($(this).attr('value'));
    total += num;

// if user score less than computer gen number add selected crystal value to user score
if (total < randomComputerValue) {
    total += num;
// if user score equals computer gen number add to wins and reset game
} else (total === randomComputerValue)
    wins++;
    $("#wins").html("wins:" + wins);
    reset();
// if user score exceeds computer gen number add to losses and reset game
} else (total > randomComputerValue){
    losses++;
    $("#losses").html(losses);
    reset();

}

});
