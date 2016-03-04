#pragma strict


var speed: float = 10;

var particles: ParticleSystem;

function Start () {

Destroy(gameObject, 5);

}

function Update () {


transform.Translate(Vector3.up*speed, Space.World);


}


function OnTriggerEnter2D( trig: Collider2D){


	if(trig.gameObject.tag == "Invader"){


	//call the Score function

	particles.transform.parent = null;
	particles.Emit(1000);


	Destroy(trig.gameObject);
	Destroy(gameObject);


	}




}