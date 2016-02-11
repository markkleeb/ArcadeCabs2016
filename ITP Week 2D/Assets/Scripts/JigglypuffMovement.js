#pragma strict

var moveLeft : KeyCode;
var moveRight : KeyCode;

var jump : KeyCode;

var speed : float = 1;


function Start () {
}

function Update () {


if ( Input.GetKey(moveRight)){

	transform.position.x += speed;
}



if ( Input.GetKey(moveLeft)){
transform.position.x += speed*-1;
}


if ( Input.GetKey(jump)){

transform.position.y += speed*0.5;

}


}