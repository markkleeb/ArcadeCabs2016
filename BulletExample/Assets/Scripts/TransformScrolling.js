#pragma strict

var scrollSpeed: float;
var tileSize: float;

var startPosition: Vector3;

function Start () {

startPosition = transform.position;

}

function Update () {

var newPosition: float = Mathf.Repeat(Time.time*scrollSpeed, tileSize);

transform.position = startPosition + Vector3.down*newPosition;

}