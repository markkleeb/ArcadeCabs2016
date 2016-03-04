#pragma strict

var GC: GameObject; 
var rb: Rigidbody2D;


function Start () {

	GC= GameObject.Find("GCShip");

	rb =  GetComponent.<Rigidbody2D>();

}

function Update () {
	rb.velocity.x = GC.GetComponent(GCShip).invaderSpeed;


}

function OnCollisionEnter2D(coll: Collision2D){


	if(coll.gameObject.tag == "Wall"){

		GC.GetComponent(GCShip).invaderSpeed *= -1;
	}

}