#pragma strict

var GameController: GameObject;

function Start () {

}

function Update () {

}

function OnCollisionEnter2D( coll : Collision2D ){

if(coll.gameObject.tag == "Player"){


//Increment the score variable in the GameController script
gameObject.Find("GameController").SendMessage("Score");
Destroy(gameObject);

}


}