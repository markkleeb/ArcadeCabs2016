#pragma strict

var speed: float=100;
var shoot: KeyCode;
var bullet: GameObject;
var animator : Animator;
var rb2d : Rigidbody2D;

var laser: AudioSource;

var shootTime: float = 0;

function Start () {

	animator.GetComponent(Animator);
	rb2d.GetComponent.<Rigidbody2D>();
	laser.GetComponent(AudioSource);

}

function Update () {


	transform.Translate(Vector3.down*speed*0.02);


	if(Input.GetAxisRaw("Horizontal") < 0){
		speed = -100;
		animator.SetFloat("Speed", -100);

	}

	if(Input.GetAxisRaw("Horizontal") > 0){
		speed = 100;
		animator.SetFloat("Speed", 100);


	}

	if(Input.GetAxisRaw("Horizontal") ==0){

		speed = 0;
		animator.SetFloat("Speed", 0);
	}

	if(Input.GetKey(shoot)){


	if(Time.time - shootTime > 0.5){
		Instantiate(bullet, transform.position, Quaternion.Euler(0, 0, 90));
		laser.Play();
		shootTime = Time.time;
		}
			
	}	



}