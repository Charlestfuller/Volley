$(document).ready(function() {
  enableChips();
  $ ('#info').click(function(){
    alert ("The flow of the game is first driven by betting on a card suit.  You will then be dealt a card that will eventually be compared against the dealer’s card.  If your card is higher, you have the advantage.  If it is not, you do not have the advantage.  If you have the advantage, then you are hoping the third card matches the color of the suit that you originally bet on.  Black matches with Clubs and Spades, red matches with Hearts and Diamonds.  Match correctly and you win your bet 1:1.  If you do not have the advantage, you will need to match the suit exactly.  However, match correctly and you now win your bet 2:1.  An additional edge you have as the player is given if you receive an Ace as the third card.  You will win your bet automatically 1:1 in this case.  But if your bet happens to match the Ace suit, you will win 3:1.")
    });
    
    var colormatch=false;
    var suitmatch=false;
    var adv=false;    
    var toBet=1;
    var balance=100;
  var c = "nil";
          var color="nil";
  var b = "nil";
  var displaylabel = document.getElementById("label");
  var displaycard = document.getElementById("card");
  var displaycard2 = document.getElementById("card2");
  var displaylabelf = document.getElementById("labelf");
  var displaycardf = document.getElementById("cardf");  
  
  var saveGame = localStorage.setItem(balance, JSON.stringify(balance));
  var retrieveGame = localStorage.getItem(balance);
  
        var orig_array=[[2,'Heart','2','red'],             [2,'Diamond','2','red'],
        [2,'Club','2','black'],
        [2,'Spade','2','black'],
        [3,'Heart','3','red'],
        [3,'Diamond','3','red'],
        [3,'Club','3','black'],
        [3,'Spade','3','black'],
        [4,'Heart','4','red'],
        [4,'Diamond','4','red'],
        [4,'Club','4','black'],
        [4,'Spade','4','black'],
        [5,'Heart','5','red'],
        [5,'Diamond','5','red'],
        [5,'Club','5','black'],
        [5,'Spade','5','black'],
        [6,'Heart','6','red'],
        [6,'Diamond','6','red'],
        [6,'Club','6','black'],
        [6,'Spade','6','black'],
        [7,'Heart','7','red'],
        [7,'Diamond','7','red'],
        [7,'Club','7','black'],
        [7,'Spade','7','black'],
        [8,'Heart','8','red'],
        [8,'Diamond','8','red'],
        [8,'Club','8','black'],
        [8,'Spade','8','black'],
        [9,'Heart','9','red'],
        [9,'Diamond','9','red'],
        [9,'Club','9','black'],
        [9,'Spade','9','black'],
        [10,'Heart','10','red'],
        [10,'Diamond','10','red'],
        [10,'Club','10','black'],
        [10,'Spade','10','black'],
        [14,'Heart','A','red'],
        [11,'Diamond','J','red'],
        [11,'Club','J','black'],
        [11,'Spade','J','black'],
        [11,'Heart','J','red'],
        [12,'Diamond','Q','red'],
        [12,'Club','Q','black'],
        [12,'Spade','Q','black'],
        [12,'Heart','Q','red'],
        [13,'Diamond','K','red'],
        [13,'Club','K','black'],
        [13,'Spade','K','black'],
        [13,'Heart','K','red'],
        [14,'Diamond','A','red'],
        [14,'Club','A','black'],
        [14,'Spade','A','black']];        
        
    document.getElementById("Balance").innerHTML="Balance = " + balance;
    document.getElementById("CurrentBet").innerHTML="Bet Amount: " + toBet;
  
    $('.chips').on('click', function(e){
        b = $(e.target).text();
        toBet = Number(toBet) + Number(b);
      document.getElementById("CurrentBet").innerHTML="Bet Amount: " + toBet;
    })
  
    $('#bet').click(function() {
      local=getRandom();
    	if(toBet>balance)
    	{
    	    alert("Bet is higher than available balance");
    	    disableButtons();
    	}
      else if (toBet<1){
          alert("Bet is invalid")
          disableButtons();
      }
    	else
    	{
    	    disableChips();
        displaylabel.style.display ="inline-block";
        displaycard.style.display="inline-block";
        displaycard2.style.display="inline-block";
        var playerV = local[2];
        var playerS = local[1];
        document.getElementById("playerV").innerHTML = playerV;
        document.getElementById("playerS").innerHTML = playerS;
        var dealerV = local[5];
        var dealerS = local[4];
        document.getElementById("dealerV").innerHTML = dealerV;
        document.getElementById("dealerS").innerHTML = dealerS;
        document.getElementById("playerV").style.color=local[9];        document.getElementById("playerS").style.color=local[9];        document.getElementById("dealerV").style.color=local[10];        document.getElementById("dealerS").style.color=local[10];
        
        if(local[0]>=local[3]){
            adv=true;
          document.getElementById("pair").innerHTML="You have the advantage.  You ONLY need to predict the next color.  Pick a suit and then click Final Card.";
        }
    else {
        adv=false;
            document.getElementById("pair").innerHTML="You do not have the advantage.  You need to predict the next suit.  Pick a suit and then click Final Card.";
        }
    	    enableButtons();
    	}
    });
        
    $('.choices').on('click', function(e){
        c = $(e.target).text();
        if(c=='Diamond' || c=='Heart'){
            color="red";
        }
        else{
            color='black';
        }
        disableButtons();
    });
    $('#new').click(function(){
        colormatch=false;
        c="nil";
        color="nil";
        suitmatch=false;
        document.getElementById("last").innerHTML="";
        document.getElementById("pair").innerHTML="";
        displaylabel.style.display ="none";
        displaycard.style.display="none";  
        displaycard2.style.display="none";    
        displaylabelf.style.display ="none";
        displaycardf.style.display="none";
        enableButtons();
        enableButtonsF();
        enableChips();
    });              
        
    $('#final').click(function(){
      if(c==="nil"){
        alert("Please select a suit and color")
      }
      else {        
        displaylabelf.style.display ="inline-block";
        displaycardf.style.display="inline-block";
                document.getElementById("thirdV").style.color=local[11];        document.getElementById("thirdS").style.color=local[11];
        
        var thirdV = local[8];
        var thirdS = local[7];
        document.getElementById("thirdV").innerHTML = thirdV;
        document.getElementById("thirdS").innerHTML = thirdS;
        
    if(color==local[11]){
        colormatch=true;
    }
    if(local[6]==14 && local[7]==c)
    {
        document.getElementById("last").innerHTML="You got an Ace and matched the suit!  You won " + 3*toBet;
        balance = balance + 3*toBet;
    }
    else if (local[6]==14 && local[7]!=c){
        document.getElementById("last").innerHTML="You got an Ace!  You won " + toBet;
        balance = balance + 1*toBet;
    }
    else if(adv===true && colormatch===true){
        document.getElementById("last").innerHTML="You win!  You matched the color!  You won " + toBet;
        balance = balance + 1*toBet;
    }
    else if(adv===false && c==local[7]){
        document.getElementById("last").innerHTML="You win!  You matched the suit!  You won " + 2*toBet;
        balance = balance + 2*toBet;
    }
    else{
        document.getElementById("last").innerHTML="You lost " + toBet;
        balance = balance - toBet;
    }
    disableButtonsF();
    document.getElementById("Balance").innerHTML="Balance = " + balance;
        toBet=1;
      document.getElementById("CurrentBet").innerHTML="Bet Amount: " + toBet;
      }
    });
    
function getRandom(){
    var rando1=Math.floor((Math.random()     * 52) + 1);
    var value1=orig_array[rando1][0];
    var suit1=orig_array[rando1][1];
    var simple1=orig_array[rando1][2];
    var rando2=Math.floor((Math.random       ()*52)+1);
    var value2=orig_array[rando2][0];
    var suit2=orig_array[rando2][1];
    var simple2=orig_array[rando2][2];
    var rando3=Math.floor((Math.random       ()*52)+1);
    var value3=orig_array[rando3][0];
    var suit3=orig_array[rando3][1];
    var simple3=orig_array[rando3][2];
    var color1=orig_array[rando1][3];
    var color2=orig_array[rando2][3];
    var color3=orig_array[rando3][3];
    return [value1,suit1,simple1,value2,suit2,simple2,value3,suit3,simple3,color1,color2,color3];
    }
    function disableButtonsF() {
    $('button.final').attr('disabled', true);
  }
  function enableButtonsF() {
    $('button.final').attr('disabled', false);
  }
  function disableChips() {
    $('button.chips').attr('disabled', true);
  }
  function enableChips() {
    $('button.chips').attr('disabled', false);
  }
    function disableButtons() {
    $('button.choices').attr('disabled', true);
  }

  function enableButtons() {
    $('button.choices').attr('disabled', false);
  }
  });
