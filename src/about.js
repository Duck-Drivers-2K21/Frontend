import './about.css';
import logo from "./res/img/duck_driver.png";
import campus from "./res/img/UoB_campus.jpg"

import img_alex from "./res/img/team/alex.jpeg"
import img_luke from "./res/img/team/luke.jpeg"
import img_joe from "./res/img/team/joe.jpeg"
import img_sergios from "./res/img/team/sergios.jpeg"

export function About() {
    let gh_alex = "https://github.com/ouked";
    let gh_joe = "https://github.com/joedownard";
    let gh_luke = "https://github.com/lc2232";
    let gh_sergios = "https://github.com/sg2295";

    return (
        <div id="info">
            <div id="back">
                <div className="button" >
                    <a href="/">⬅</a>
                </div>
                <br></br>
                <br></br>
                home
            </div>

           <a href="/"><img src={logo} className="homepage-logo" alt="logo"/></a><br/>

            <h1>About</h1>



            <br/>
            <h2>What is this?</h2>
            <p>
                <b>Duck Driver</b> is a remote-controlled duck that anybody can control from their browser. Users can
                join a queue and enjoy the views of the <b>University of Bath Campus</b> while adhering to government
                restrictions regarding COVID-19.
                todo: add image of the W A G O N
            </p>
            <h3>Demo</h3>
            <p>
                todo: embed youtube video
            </p>

            <h2>How does it work?</h2>
            <p>
                The hardware is a <b>Revell Control</b> RC truck with a raspberry pi connected to the controller, running
                Python code to control the steering. This raspberry pi is then controlled remotely by a Python server,
                which also serves this lovely React frontend and also allows for users to take control of the duck, and
                become <i>duck drivers</i>.
                <br/><br/>
                Resources for doing this were notoriously scarce, especially as we didn't have a motor driver (and couldn't
                find a datasheet for the chip found inside the truck). After frying a raspberry pi and breaking another car
                down to bits, we ended up simulating button presses on the controller with the GPIO pins on the raspberry
                pi. With better planning, we could have avoided a lot of headaches, but let's be honest, none of us knew
                what we were doing and we didn't have the ideal tools.
                <br/><br/>
                To be more specific, the hardware at our disposal consisted of a couple of RC trucks (only one of which
                survived), two raspberry pi boards (one got accidentally fried), Joe's webcam, a spatula to mount the
                webcam on and a duck plushie.

            </p>

            <h2>Why did you make it?</h2>
            <p>
                This was our contribution to the <i>2021 Bath Hack</i> Hackathon. We wanted to create a tribute to celebrate
                our campus, which we've missed over during the national lockdowns, and couldn't think of a better way of
                exploring it than from the perspective of the iconic Bath ducks.
                <img src={campus} id="campus"/><br/>
                We believe that students currently staying abroad, attending university remotely, would appreciate the
                opportunity to <i>waddle</i> down the parade, enjoy a view of the lake, and even interact with the other
                ducks. Additionally, our project could be used in virtual open days, giving applicants a chance to
                wander around campus on their own, so they can get a better understanding of what it's like to study at
                the University of Bath.
            </p>

            <h2>Who are you?</h2>
            <div id="headshots">
                <a href={gh_alex}><img src={img_alex} class="headshot"/></a>
                <a href={gh_joe}><img src={img_joe} class="headshot"/></a>
                <a href={gh_luke}><img src={img_luke} class="headshot"/></a>
                <a href={gh_sergios}><img src={img_sergios} class="headshot"/></a>
            </div>
            <p>
                We're Alex, Joe, Luke and Sergios. We're in our second-year of studying Computer Science at the
                University of Bath. We all worked on all parts on this project.
            </p>

            <h2>Credits</h2>
            <p>
                Logo Design by <b>Romane Darniche</b><br/><br/>
                Photograph of University of Bath campus
                by <b><a href="https://www.bathchronicle.co.uk/news/bath-news/new-university-bath-campus-masterplan-1277112">Bath Chronicle</a></b>
            </p>
            <br/>
        </div>
    );

}
