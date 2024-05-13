$(document).ready(function() {
  enableChips();
  $ ('#info').click(function(){
    alert ("The flow of the game is first driven by betting on a card suit.  You will then be dealt a card that will be compared against the dealer’s card.  If your card is higher, you have the advantage.  If it is not, you do not have the advantage.  If you have the advantage, then you are hoping the third card matches the color of the suit that you originally bet on.  Black matches with Clubs and Spades; red matches with Hearts and Diamonds.  Match correctly and you win your bet 1:1.  If you do not have the advantage, you will need to match the suit exactly.  However, match correctly and you now win your bet 2:1.  An additional edge you have as the player is given if you receive an Ace as the third card.  You will win your bet automatically 1:1 unless your bet happens to match the Ace suit, in which you will win 2:1.")
    });
    var base64Diamond = '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';
  var imgDiamond = document.createElement('img');
  imgDiamond.src = `data:image/png;base64,${base64Diamond}`;

  var base64Heart = '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';
  var imgHeart = document.createElement('img');
    imgHeart.src = `data:image/png;base64,${base64Heart}`;

  var base64Spade = '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';
  var imgSpade = document.createElement('img');
  imgSpade.src = `data:image/png;base64,${base64Spade}`;

  var base64Club = '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';
  var imgClub = document.createElement('img');
  imgClub.src = `data:image/png;base64,${base64Club}`;

  var Diamond2 = imgDiamond.cloneNode(true);
  var Diamond3 = imgDiamond.cloneNode(true);
  var Spade2 = imgSpade.cloneNode(true);
  var Spade3 = imgSpade.cloneNode(true);
  var Club2 = imgClub.cloneNode(true);
  var Club3 = imgClub.cloneNode(true);
  var Heart2 = imgHeart.cloneNode(true);
  var Heart3 = imgHeart.cloneNode(true);
  
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
  var start=1;
  
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
        if(start == 1){
        if(playerS=="Diamond")
        {document.getElementById("playerS").appendChild (imgDiamond);}
        else if(playerS=="Heart")
        {document.getElementById("playerS").appendChild (imgHeart);}
        else if(playerS=="Spade")
        {document.getElementById("playerS").appendChild (imgSpade);}
        else if(playerS=="Club")
        {document.getElementById("playerS").appendChild (imgClub);}
        }
        if(start!=1){
          var pSuit = document.getElementById("card").children[1];
          if(playerS=="Diamond"){
          pSuit.replaceChild(imgDiamond, pSuit.childNodes[0]);
          }
        else if(playerS=="Heart"){
          pSuit.replaceChild(imgHeart, pSuit.childNodes[0]);
        }
        else if(playerS=="Spade"){
          pSuit.replaceChild(imgSpade, pSuit.childNodes[0]);
        }
        else if(playerS=="Club"){
          pSuit.replaceChild(imgClub, pSuit.childNodes[0]);
        }
        }
        var dealerV = local[5];
        var dealerS = local[4];
        document.getElementById("dealerV").innerHTML = dealerV;
        if(start==1){
        if(dealerS=="Diamond")
        {document.getElementById("dealerS").appendChild (Diamond2);}
        else if(dealerS=="Heart")
        {document.getElementById("dealerS").appendChild (Heart2);}
        else if(dealerS=="Spade")
        {document.getElementById("dealerS").appendChild (Spade2);}
        else if(dealerS=="Club")
        {document.getElementById("dealerS").appendChild (Club2);}
        }
       else if(start!=1){
          var dSuit = document.getElementById("card2").children[1];
          if(dealerS=="Diamond"){
          dSuit.replaceChild(Diamond2, dSuit.childNodes[0]);
          }
        else if(dealerS=="Heart"){
          dSuit.replaceChild(Heart2, dSuit.childNodes[0]);
        }
        else if(dealerS=="Spade"){
          dSuit.replaceChild(Spade2, dSuit.childNodes[0]);
        }
        else if(dealerS=="Club"){
          dSuit.replaceChild(Club2, dSuit.childNodes[0]);
        }
        }
               
        document.getElementById("playerV").style.color=local[9];        
        document.getElementById("playerS").style.color=local[9];        
        document.getElementById("dealerV").style.color=local[10];        
        document.getElementById("dealerS").style.color=local[10];
        
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
        if(start == 1){
        if(thirdS=="Diamond")
        {document.getElementById("thirdS").appendChild (imgDiamond);}
        else if(thirdS=="Heart")
        {document.getElementById("thirdS").appendChild (imgHeart);}
        else if(thirdS=="Spade")
        {document.getElementById("thirdS").appendChild (imgSpade);}
        else if(thirdS=="Club")
        {document.getElementById("thirdS").appendChild (imgClub);}
          start =2;
        }
        else if(start!=1){
          var tSuit = document.getElementById("cardf").children[1];
          if(thirdS=="Diamond"){
          tSuit.replaceChild(Diamond3, tSuit.childNodes[0]);
          }
        else if(thirdS=="Heart"){
          tSuit.replaceChild(Heart3, tSuit.childNodes[0]);
        }
        else if(thirdS=="Spade"){
          tSuit.replaceChild(Spade3, tSuit.childNodes[0]);
        }
        else if(thirdS=="Club"){
          tSuit.replaceChild(Club3, tSuit.childNodes[0]);
        }
        }
        
    if(color==local[11]){
        colormatch=true;
    }
    if(local[6]==14 && local[7]==c)
    {
        document.getElementById("last").innerHTML="You got an Ace and matched the suit!  You won " + 2*toBet;
        balance = balance + 2*toBet;
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
