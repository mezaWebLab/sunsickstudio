<?php

/*
||----------------------------------||
||									||
||    Sunsick Studio 				||
||	  Sunsick Studio Class   	  	||
||	  Alex Meza (Meza Web Lab)  	||
||	  2018					  		||
||									||
||----------------------------------||
*/

class SunsickStudio {
    public $home = array(
        "Professional<br />recording<br />studio based<br />off San Diego<span>.</span>", 
        "At <strong>Sunsick Studio</strong>, our goal is to be a home for bands, artists, and creatives to express their vision on their own terms.Along with the space, instruments, and recording equipment, we use our 15 years of experience to help you make the recording you want.<br /><br />In that, we're happy to answer any questions about the studio or recording process, whether you're working with us or not.");
    public $services;
    public $our_work;
    public $gear;
    public $contact;
    public $artists;
}

echo json_encode(new SunsickStudio());

?>