#pragma strict

var invader : GameObject;

var scoreText: UnityEngine.UI.Text;

var invaderSpeed : float =-20;

var score : int = 0;


function Score(){

	score += 1;
	scoreText.text = "Score: " + score;



}

function Start () {


	for(var i: int=0; i < 20; i++){
		for(var j: int=0; j<7; j++){

			Instantiate(invader, Vector3(i*10-100, j*10+20	, 0), Quaternion.identity);

		}
	}

}















