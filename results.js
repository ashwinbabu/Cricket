let A = JSON.parse(localStorage.getItem('TeamA'));
console.log(A);
let B = JSON.parse(localStorage.getItem('TeamB'));
console.log(B);

// TOTAL
document.getElementById('totalScoreB').innerText = `${B.total}/${B.wicket}`
document.getElementById('totalScoreA').innerText = `${A.total}/${A.wicket}`

//Player & Score
for(i=1;i<=11;i++){
document.getElementById(`a${i}`).innerText = `Player ${i}`;
document.getElementById(`sa${i}`).innerText = `${A.players[i-1].score}`;
document.getElementById(`b${i}`).innerText = `Player ${i}`;
document.getElementById(`sb${i}`).innerText = `${B.players[i-1].score}`;
}

if(A.total>B.total)
    document.getElementById('result').innerText = 'Team A won the match';
else
    document.getElementById('result').innerText = 'Team B won the match';

document.getElementById('new').addEventListener('click',()=>{
    localStorage.clear();
    window.location.href='table.html';
});