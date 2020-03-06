let tossState = 0;
let tossWin = 0;
let innings = 2;
var a = 0; var b = 0;
function toss(){
    let headTail = Math.floor(Math.random() * 10);
        if(tossState==0){

            if(headTail<5){
                tossState = 1;
                tossWin = 1;
                alert("Team A won the toss");
            }
            else{
                tossState = 1;
                tossWin = 2;
                alert("Team B won the toss");
            }
        }
    }
    
class Team{ 
    constructor(){
        this.teamName = '';
        this.totalBalls = 36;
        this.currentBall = 0;
        this.noOfPlyrs = 11;
        this.currentPlayer = 0;
        this.players=[];
        this.total=0;
        this.overs=0;
        this.wicket=0;
        this.scoreId='';
    }
    createTeam(name){
        this.teamName = name;
        for(var i=0;i<11;i++){
           this.players.push({score:0,balls:0,Team:name});
        }
    }
    bat()
        {
            if(innings>0)
            {
            this.totalBalls -= 1;
            this.currentBall +=1;
            if(this.currentBall%6==0){this.overs+=1;this.currentBall=0;}
            if(this.totalBalls>0){
                if(this.currentPlayer<11){
                    let x = Math.floor(Math.random() * 7);
                    document.getElementById('ball').innerText = 'This Ball: '+ x;
                    if(x==0)
                        {this.currentPlayer+=1;this.wicket+=1;}
                    if(this.players[this.currentPlayer].balls===6)
                        this.currentPlayer+=1;
                    else
                        {
                        this.players[this.currentPlayer].score += x;
                        this.players[this.currentPlayer].balls += 1;
                        this.total += x; 
                    }
                    }
                }
            else 
            {
            alert("End of the innings. Score is "+this.total);
            localStorage.setItem(this.teamName,JSON.stringify(this));
            innings -=1;
            if(tossWin==1)
               { tossWin=2;
                }
            else if(tossWin==2)
               {tossWin=1;
                }
            }
            //document.getElementById('playerName').innerHTML = 'Current Player is: ' + this.currentPlayer + ' : ' + this.players[this.currentPlayer].score;
            document.getElementById(`score${this.teamName}`).innerText = this.total+'/'+this.wicket   ;
            document.getElementById('overs'+this.teamName).innerText = this.overs +'.'+this.currentBall;
            
        }
            else
            {
                alert("Match Over");
            }

        }
    }

let teamA = new Team();
let teamB = new Team();
teamA.createTeam('TeamA');
teamB.createTeam('TeamB');

document.getElementById('batA').addEventListener('click', function(){
    if(tossState==1){
        if(tossWin == 1){
            teamA.bat();
        }
        else
        {
            alert("Its Team B's turn to play");
        }
    }
    else
        alert("Toss is pending");
    });
    
document.getElementById('batB').addEventListener('click', function(){
    if(tossState==1){
        if(tossWin == 2){
            teamB.bat();
        }
        else
        {
            alert("Its Team A's turn to play");
        }
    }
    else 
        alert("Toss is pending");
    });


    