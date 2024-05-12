$(document).ready(function() {
  enableChips();
  $ ('#info').click(function(){
    alert ("The flow of the game is first driven by betting on a card suit.  You will then be dealt a card that will be compared against the dealer’s card.  If your card is higher, you have the advantage.  If it is not, you do not have the advantage.  If you have the advantage, then you are hoping the third card matches the color of the suit that you originally bet on.  Black matches with Clubs and Spades; red matches with Hearts and Diamonds.  Match correctly and you win your bet 1:1.  If you do not have the advantage, you will need to match the suit exactly.  However, match correctly and you now win your bet 2:1.  An additional edge you have as the player is given if you receive an Ace as the third card.  You will win your bet automatically 1:1 unless your bet happens to match the Ace suit, in which you will win 2:1.")
    });
    const base64Diamond = 'iVBORw0KGgoAAAANSUhEUgAAADAAAAA3CAYAAABKB8k/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAuiSURBVGhDzVqJc5TlHe7/0JmOJCSBhBxyGETAg0NUYKhOq9XWqjhi1SrWURFHKYKiqJ2xHa9WbaetI1rBo1NRaZ22XmgVrdoZb4RAzk32+PY+ssf37T59nvfbTSKEZLPZtP52ftmD/d7v9/zO532Xb6HaUpDyTyEP5Km5LJBJm9d5/qNUD/eLk5eqAjAm0WYZW0inYHccgv3xJ8h//jmQTPLjPGx+IU9wLojJS3UjUHJs3oF9qAPBdVcjuOIcJNb9DPkv96OQzdJ4BoRfsfX9KkgVAdAypU3BRurdfbA2b4N1wmIEa5sRbj8Fsdu2IfPOeyg4DjIFAvzmRYBJkU3D7jmEwO13orNuNsK1sxCtnYlgXSN8TfMQueMepA8fRpbp5QhsFaQCAKU80ZPrdVOefG139yJw3Y3oX7QMA3VtiNQ2IVrTZJ5Ddc3oOXEJOn56AxLdPQTAa1XkxXqoFM6EAbg9pAjCAOA7asbjQeyF3QisWAXfjDb461oQYgQiNYwCNTi9Cd76ZvSdtBR9d92L6L8/ZD2415YelUgFANxGo7/mtszpfDyO+D/+Dv/GjQi1L6S3Z8GaLm1BuKaFAJph1TEa0oYWHGidB++Dv4adzjAAWq3okApk4ik0dC+3r2dpfPKtNxHdeAvC8xYh1DjbpEuYxRupaTXGu2nUjBABBepaMVDfhvjP70DhQAeQHuR6XLAy+ysEoNTlI5+zkensZtGy46xYTQ/T4zQuPF0AlD6KwCy+bqSyDkxUCETFveY8pH71EPLdXQDbqwnrkHPKl4oAqIHI+3a/D4O7X0Hf6avhZd5HmOPh6QSg1kmDw/S+jA1Ob6Txroap0ZpGBOtbYS1fzetfhNPn4WBwuDDdMhQN91lvx5LxAWiBkkq0KKdRAQ4STz0D3/Kz4W+cC4uGysMhpYpej6GKTpAA/Uw3z/I1iD2+AxhMsClx0HFdJSeLy0xswhq69WhSPoCS0HgnGkPq7X0IX7cBgfoWY3xwhIHlqEUAPnYmD+vF+6NLEdqxExnLgs2idhy1ZY46teixrKeUB2CkpDms9h/gpN3OFFjJ4mwoGjW+50uqCKgWfOxWgWl16GXddK66AIl9HyITTZD/0fukI8VcHVPGBVAKgMEhd3R0wfnTcwivPhvWrLk0qBmxae7AGs3Y0dSkENMtwGfrOEaChe5rPxWJzfeQhryHVD5DOlU0/kgHHiFlFbHWyatTeHqRe3InEhdfgfDs+TRCXlebVMcpH0BJlXbBaQShQdc4B7Ezv4f4/Q8j8dUXsAcHjb/GCUAZEdAiVCcSgfPXl5C4/CozoEYzaFKq1svOFLlwLWJP7EDO62UtOCxiNYxjy5gAdGGOqqJyOHTia9ciPGc+b1h9ACalGphKjGzg/B8jt28fCtHo5NqoerLj5EiD9yG5+U5E55/MPq4bll+wE1GLHcnoCYsQufFmpF/fS+8xicYAcQwA7kDJMw+z3JjEt2xDqGE2IhxSEXpfRTiaAZNTOoXUw6zPdBqYcTxCt29HtqsbhYy2QEJxNJIhAIaaFRNePdhxskhxS9h99QZ4Fi4lALW+VhbeFOS/UXqe66u9Bkn6VA+eJWeg6+Zbke3ppV3qSqqIYmsqYhkCoFJxB0ceaRZP9P334b/zHvSftBy+hjaO/lmGIpe4zFSodm96VoTDvJeXk7p36Zlkrr9B/JNPmU10s9lDDEdiOIUMKBarnUXMCsP7ywfRe3w7+Q3psPFKCwEoCqPfvBoq/qT9g0igIi0iGKLzOpacBe9jv0cmFGI7Z1sZDYA+kqpdRna/jMBlV5ImuN1BLU5UWFxH781noxgweVUaNRtH6V4CEyMhjLD+Ymt/guSuZ5ELEoQB4IIwAPRSmWV7fci8+jqC629A4OTThziOy3OGU2eivKd8FQC2UwHge0WgFJEod3KJ9dfD/uIL5ElnSlFwAfCNk8ki8/a/OM5vN6cJAS02wuj/nzJ9a1uZXqQsi5cjvXMXHO5BSFaN590UovGFzh6k7nsAwUVLEWxqMxeHj+MCysOjFv1fa5OhLX7Sjb5TliH6xyeY67R+CIB4Tk8P4tvuhm8mt4TMfXGbyDRG4BsAQDs6pa2P29GD3DRZDzzstlWKC8C2gbCFxCOPwXfqCoRncmCZ3FMKfRPSyCWKAUagkxQ+9OTT9P5IAKyBfMY2PD/N3VGIBRzgSPdzoCh06s9T13mGVU7T88h7yfMB2aCuROcO7t6D3ICX2TOyiKmGfieSsD/9DKFNWxEk0nAdQ8cLj+w6U9GFtKZVnDPu+vJ68SCAMyhy+ioM3rYV+c4uFHLarcnykQCo6q92LIbIm3sRuvZ6hBuE3F2oxH8MIOqRBkxWtaaXtee2UN2z0dUGzp+5C5HceCuct/eiEI+5e/KRACT6QLw/RxoxGI/D8/Cj+ErtVOGrmcl0ajSLC1Alm5dyVK1SzzrF8HOrGqxpRKRtAcJXrUfq5T1waJe879BQ0Xxh+BoAdSYde+sMP/LhR+i9+z70LlgOj7xTWw9/0fvmjOeIm09WFeGozpH4bNXOROA7DfA1zYH/7HORfO7PyHWz92vc0lCdqx4FQDXtKj/mlNA+IHmoE93X3ISuBaehr3aGC2AKu5Lb9QSAEfj2DPQvWwnv9u3I9Q8UrXOn1/CrEQAk+sAV5Zg6UxrZ7k4u8gscbF0An7iR8f7UgCgRRe2RD08jedxC4/v6zA8jJbtKUnr1NQBHi77mIPnBB/DfdS+83JHpJGEqAJh2yZw3dL39VFg33orkG2+59HkMGQcARcXBDY59+CCsy65CYN5i3nAKALAx+I+bCav9ZMSuWA/no/+gkGDRjvD6aDI2ABmvbOPUK2hGcNHYhlvMSK92LeikzsNuF9m0Gc7BLw2tN6lTnLjHkvEjoJIREB2+xhPI7nkFMdJaa/ZJ7sEU2+pow64c1TUmdaQt7bAuuASJv7xAZpOl5tguxztUKQsA7Zfqj81I+AOwX3sd4XN+yJuewNngAhjNwGNpaSga7k8d4K5r4LSVSPzhCaQPdEAlq1Ze2gGPJeUDoOp3XodbulxvP+zfPo7EeRcZ492TuaMNHVuVgmSW9TPQPX8RDl52DWKkMbnBNO8jvxfNHzsA5QGQuFHgkgKRSqHw2X5Ym+5AB4eNuErJq+WoIYcErNTpIX3vvfJaBPb8DZlwxExZ3cf1/TjWU8oGUBKdXBTynNcc2wO7nsena74Pz/HzERBnKdaCWw9fL/IhLiWvs1X6+F1P01x0nPUDWE8/T8dwTXEZY7we5cnEAeihgiB9zQWDiL3xBnrOOReelrmwSP78LGp3K6qoDBNB9/S6mTnfyi7WjEONbdi/8ruIvrYXOStk6qtsq0fIhAHoJmKDOqPRGb5jBRHd9SwCl1wOv342MmxSPzG1sD5Y4EOT2+VPJn342n/+RfBz75GzAsWoVmA9pWIAbHIGBGx+wMJOPf4UrCWrzK+Upd1cqcUqGobnU3XOlJi3ENmHHgFiCUYyxyXNj0oVycQBUOQr0yOUSgLBSOS9HmReehHW4hUITitRbveHPnNQReNFlxPzToG9ZQvy777Dy9whqbw3i1YgFQBQFRjOal6ZjiGlJ53Dh5DasAlhbv00H5T75nSNhisasQVLkF23HoV/voqCb4DXCYCu13qVxaACAPJYicy6f6W6fT4SRYGTOs7dnHfOfG5JW01nCtSz67BoExevA57cBbBuzBoF95jQTaHhNSciFaXQaDfS5MzaGThhC4PPPIfoResQmn2i+W8HgSadb54B69HfocDOVSBVcCGPXGfixksqBHC0KAnM/8ZiPeT0a86Onehdcy56yF77l62G//6HkPz4Y37L9XilBh8pVQMwJLRLP0klez04vPVudFx6Dfpv2oqsOQ7UaQK/UB3bjVQXgDFMe1YbmcFBpDr7ET/QiURXN+xkmqlDz7t1WzWpfgQIwPwXAQ06zgibRttqs+I4GlbKnqoJ8F9+Bt+61Y5QZQAAAABJRU5ErkJggg=='
  const imgDiamond = document.createElement('img');
  imgDiamond.src = `data:image/png;base64,${base64Diamond}`;

  const base64Heart = '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';
  const imgHeart = document.createElement('img');
    imgHeart.src = `data:image/png;base64,${base64Heart}`;

  const base64Spade = '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';
  const imgSpade = document.createElement('img');
  imgSpade.src = `data:image/png;base64,${base64Spade}`;

  const base64Club = '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';
  const imgClub = document.createElement('img');
  imgClub.src = `data:image/png;base64,${base64Club}`;
  
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
         document.getElementById("playerS").appendChild (imgDiamond);
        var dealerV = local[5];
        var dealerS = local[4];
        document.getElementById("dealerV").innerHTML = dealerV;
        document.getElementById("dealerS").appendChild (imgDiamond);
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
        document.getElementById("thirdS").appendChild (imgDiamond);
        
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
