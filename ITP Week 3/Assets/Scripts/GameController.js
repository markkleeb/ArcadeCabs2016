#pragma strict


var textBox: UnityEngine.UI.Text;
var image: UnityEngine.UI.Image;

var trump : GameObject;
var lastTime : float = 0;


var score: int = 0;

var isStarted: boolean = false;


var a: float = 1;


function Start () {
}

function Update () {


//This will start the game after 5 seconds

if((((Time.time ) > 5)|| Input.GetMouseButtonDown(0)) && isStarted == false){


image.color = new Color( image.color.r , image.color.g , image.color.b,  a);

a = a*0.9;

if(a < 0.01){
a = 0;
isStarted = true;
}



}


//This will spawn a Trump every 3 seconds

if(((Time.time -lastTime) > 3) && isStarted == true){

spawnTrump();
lastTime = Time.time;

}
}

function spawnTrump(){
Instantiate(trump, Vector3(Random.Range(-10, 10), 10, 0), Quaternion.identity);
}


function Score(){

score += 1;
//Debug.Log(score);
textBox.text = "Trumps Killed : " + score;

}


































