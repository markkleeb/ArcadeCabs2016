#pragma strict

var scrollSpeed: float;

var rend: Renderer;

var materialTile: float;

function Start () {

rend = GetComponent.<Renderer>();


}

function Update () {

var y: float = Mathf.Repeat(Time.time*scrollSpeed, materialTile);


var offset: Vector2 = new Vector2(0, y);


rend.material.SetTextureOffset("_MainTex", offset);


}