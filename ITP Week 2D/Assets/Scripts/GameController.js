#pragma strict


var trump : GameObject;
var lastTime : float = 0;



function Start () {
}

function Update () {


if((Time.time -lastTime) > 3){

spawnTrump();
lastTime = Time.time;

}
}

function spawnTrump(){
Instantiate(trump, Vector3(Random.Range(-10, 10), 10, 0), Quaternion.identity);
}