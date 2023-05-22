import React from 'react'
import Head from 'next/head';


export default function bd() {
  return (
    <div >
        <Head>
            <title>i am sorry</title>
            <meta charset="UTF-8" />
            <meta name="description" content="Happy Birthday THUY TRANG"/>
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="Birthday, Happy"/>
            <meta property="og:type" content="E-Greeting" />
            <meta property="og:image" content="favicon.ico" />
            <meta property="og:description" content="Wish you a very Happy Birthday"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
            <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="hb/stylesheet.css"/>
            <link rel="stylesheet" href="hb/loading.css"/>
            <link href='http://fonts.googleapis.com/css?family=Signika' rel='stylesheet' type='text/css'/>
            <link rel="stylesheet/less" href="hb/cake.less"/>
            <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.1.0/less.min.js"></script>
        </Head>

        <main>
            <div className="loading"></div>
            <audio className="song" controls loop>
                <source src="hb/hbd.mp3"></source>
            Your browser isn't supported for this Audio!!.
            </audio>
            <div className="balloons text-center" id="b1">
                <h2 style={{color:'#F2B300'}}>H</h2>
            </div>
            <div className="balloons text-center" id="b2">
                <h2 style={{color:"#0719D4;"}}>B</h2>
            </div>
            <div className="balloons text-center" id="b3">
                <h2 style={{color:"#D14D39;"}}>D</h2>
            </div>
            <div className="balloons text-center" id="b4">
                <h2 style={{color:"#8FAD00;"}}></h2>
            </div>
            <div className="balloons text-center" id="b5">
                <h2 style={{color:"#8377E4;"}}>T</h2>
            </div>
            <div className="balloons text-center" id="b6">
                <h2 style={{color:"#99C96A;"}}>R</h2>
            </div>
            <div className="balloons text-center" id="b7">
                <h2 style={{color:"#20CFB4;"}}>A</h2>
            </div>
            <div className="balloons text-center" id="b8">
                <h2 style={{color:"#D14D39;"}}>N</h2>
            </div>
            <div className="balloons text-center" id="b9">
                <h2 style={{color:"#F2B300;"}}>G</h2>
            </div>

            <img src="hb/Balloon-Border.png" style={{width:"100%"}} className="balloon-border"/>
            <div className="container">
                
                <div className="row">
                    <div className="col-md-2 col-xs-2 bulb-holder">
                        <div className="bulb" id="bulb_yellow"></div>
                    </div>
                    <div className="col-md-2 col-xs-2 bulb-holder">
                        <div className="bulb" id="bulb_red"></div>
                    </div>
                    <div className="col-md-2 col-xs-2 bulb-holder">
                        <div className="bulb" id="bulb_blue"></div>
                    </div>
                    <div className="col-md-2 col-xs-2 bulb-holder">
                        <div className="bulb" id="bulb_green"></div>
                    </div>
                    <div className="col-md-2 col-xs-2 bulb-holder">
                        <div className="bulb" id="bulb_pink"></div>
                    </div>
                    <div className="col-md-2 col-xs-2 bulb-holder">
                        <div className="bulb" id="bulb_orange"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src="hb/banner.png" className="bannar"/>
                    </div>
                </div>
                <div className="row cake-cover">
                    <div className="col-md-12 texr-center">
                        <div className="cake">
                        <div className="velas">
                            <div className="fuego"></div>
                            <div className="fuego"></div>
                            <div className="fuego"></div>
                            <div className="fuego"></div>
                            <div className="fuego"></div>
                        </div>
                        <div className="cobertura"></div>
                        <div className="bizcocho"></div>
                        </div>
                    </div>
                </div>
                <div className="row message">
                    <div className="col-md-12">
                        <p>Happy</p>
                        <p>Birthday</p>
                        <p>THUY TRANG!!!!</p>
                        <p>I</p>
                        <p>LOVE</p>
                        <p><strong>YOU!!!!!!!!!!</strong></p>
                    </div>
                </div>
                <div className="navbar navbar-fixed-bottom">
                    <div className="row">
                        <div className="col-md-6 text-center col-md-offset-3">
                            <button className="btn btn-primary" id="turn_on">Turn On Lights</button>
                            <button className="btn btn-primary" id="play">Special Music for You!! Let's play</button>
                            <button className="btn btn-primary" id="bannar_coming">Let's do some decoration!!</button>
                            <button className="btn btn-primary" id="balloons_flying">Some Balloons!!</button>
                            <button className="btn btn-primary" id="cake_fadein">Special Cake for You</button>
                            <button className="btn btn-primary" id="light_candle">Light a Candle</button>
                            <button className="btn btn-primary" id="wish_message">Happy Birthday THUY TRANG!!</button>
                            <button className="btn btn-primary" id="story">Message for You Buddy!!</button>
                        </div>
                    </div>
                </div>
                <div class="text-center" >
                    <img src="hb/luan.jpg" style={{height:"400px"}} class="rounded" alt="..."/>
                </div>
            </div>
        </main>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
        <script src="hb/effect.js"></script>
        <script src="hb/script.js">
        </script>
    </div>
)
}
