#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D( coll : Collision2D ){

if(coll.gameObject.tag == "Player"){


Destroy(gameObject);

}


}