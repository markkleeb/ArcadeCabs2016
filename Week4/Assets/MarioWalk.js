#pragma strict

var speed: float = 0.1;
var anim: Animator;
var facingRight: boolean = true;


function Start () {

anim.GetComponent(Animator);

}

function Update () {
Debug.Log(Input.GetAxis("Mouse X"));


//move to the left
if(Input.GetAxis("Horizontal") < 0){

	if(facingRight == true){

		Flip();

	}
	anim.SetInteger("Walking", 1);
	transform.position.x += speed*-1;

}

//move to the right
if(Input.GetAxis("Mouse X") > 0){

	if(facingRight == false){

		Flip();

	}
	anim.SetInteger("Walking", 1);
	transform.position.x += speed;


}

if(Input.GetAxis("Horizontal") == 0){

	anim.SetInteger("Walking", 0);

}





}





function Flip(){

facingRight = !facingRight;

//var theScale: Vector3 = transform.localScale;
//
//theScale.x *= -1;
//
//transform.localScale = theScale;	

transform.localScale.x *=-1;


}