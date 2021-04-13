(this.webpackJsonpduck_driver=this.webpackJsonpduck_driver||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},76:function(e,t){},80:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(40),r=c.n(s),a=(c(48),c.p+"static/media/duck_driver.e4e1f771.png"),o=(c(49),c(11)),d=(c(50),c(41)),h=c(42),j=c.n(h),u=c.p+"static/media/quack.b86c3823.mp3",l=c(0);function b(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(!1),r=Object(o.a)(s,2),a=r[0],h=r[1],b=Object(n.useState)([]),p=Object(o.a)(b,2),x=p[0],m=p[1],f=Object(d.a)(u),v=Object(o.a)(f,1)[0];Object(n.useEffect)((function(){var e=j()("http://duckdriver.co.uk:5000");e.on("connect",(function(){h(e.id)})),e.on("move",(function(e){return console.log(e)})),e.on("quack",v),e.on("queue",(function(e){m(e.queue)})),i(e)}),[v]);var w=function(e){c.emit("move",{data:e})};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"twitch-container",children:[Object(l.jsx)("div",{className:"stream-container",children:Object(l.jsx)("iframe",{className:"stream",src:"https://player.twitch.tv/?channel=duckdriverbath&parent=duckdriver.co.uk",title:"Stream",frameBorder:"0",scrolling:"no",height:"100%",width:"100%"})}),Object(l.jsx)("div",{className:"chat-container",children:Object(l.jsx)("iframe",{src:"https://www.twitch.tv/embed/duckdriverbath/chat?parent=duckdriver.co.uk",title:"chat",height:"100%",width:"100%"})})]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("div",{id:"queueStatusContainer",children:Object(l.jsx)(O,{queue:x,sid:a})}),Object(l.jsxs)("div",{className:"joypad-container",children:[Object(l.jsx)("div",{className:"button",children:Object(l.jsx)("a",{onMouseDown:function(){return w("F")},onMouseUp:function(){return w("F_OFF")},children:"\u2b06"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"button",children:Object(l.jsx)("a",{onMouseDown:function(){return w("L")},onMouseUp:function(){return w("L_OFF")},children:"\u2b05"})}),Object(l.jsx)("div",{className:"button",children:Object(l.jsx)("a",{onMouseDown:function(){return w("B")},onMouseUp:function(){return w("B_OFF")},children:"\u2b07"})}),Object(l.jsx)("div",{className:"button",children:Object(l.jsx)("a",{onMouseDown:function(){return w("R")},onMouseUp:function(){return w("R_OFF")},children:"\u2b95\ufe0f\ufe0f"})})]})]}),Object(l.jsx)("div",{className:"button",id:"quack",children:Object(l.jsx)("a",{onClick:function(){c.emit("quack",{data:"quack"})},children:Object(l.jsx)("span",{id:"quackText",children:"Quack!"})})})]})]})}function O(e){return e.queue[0]===e.sid?Object(l.jsx)("p",{id:"queueStatus",children:"> YOUR GO"}):-1===e.queue.indexOf(e.sid)?Object(l.jsx)("p",{id:"queueStatus",children:"> END OF YOUR GO"}):1===e.queue.indexOf(e.sid)?Object(l.jsxs)("p",{id:"queueStatus",children:["> PLEASE WAIT, THERE IS ",e.queue.indexOf(e.sid)," PERSON AHEAD OF YOU"]}):Object(l.jsxs)("p",{id:"queueStatus",children:["> PLEASE WAIT, THERE ARE ",e.queue.indexOf(e.sid)," PEOPLE AHEAD OF YOU"]})}c(80);var p=c.p+"static/media/UoB_campus.6cd9cd02.jpg",x=c.p+"static/media/alex.f5b5feec.jpeg",m=c.p+"static/media/luke.b69980f1.jpeg",f=c.p+"static/media/joe.5a1b65c9.jpeg",v=c.p+"static/media/sergios.7121528e.jpeg";function w(){return Object(l.jsxs)("div",{id:"info",children:[Object(l.jsxs)("div",{id:"back",children:[Object(l.jsx)("div",{className:"button",children:Object(l.jsx)("a",{href:"/",children:"\u2b05"})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"home"]}),Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{src:a,className:"homepage-logo",alt:"logo"})}),Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:"About"}),Object(l.jsx)("br",{}),Object(l.jsx)("h2",{children:"What is this?"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Duck Driver"})," is a remote-controlled duck that anybody can control from their browser. Users can join a queue and enjoy the views of the ",Object(l.jsx)("b",{children:"University of Bath Campus"})," while adhering to government restrictions regarding COVID-19. todo: add image of the W A G O N"]}),Object(l.jsx)("h3",{children:"Demo"}),Object(l.jsx)("p",{children:Object(l.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/KTW3xjT6-zQ",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(l.jsx)("h2",{children:"How does it work?"}),Object(l.jsxs)("p",{children:["The hardware is a ",Object(l.jsx)("b",{children:"Revell Control"})," RC truck with a raspberry pi connected to the controller, running Python code to control the steering. This raspberry pi is then controlled remotely by a Python server, which also serves this lovely React frontend and also allows for users to take control of the duck, and become ",Object(l.jsx)("i",{children:"duck drivers"}),".",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Resources for doing this were notoriously scarce, especially as we didn't have a motor driver (and couldn't find a datasheet for the chip found inside the truck). After frying a raspberry pi and breaking another car down to bits, we ended up simulating button presses on the controller with the GPIO pins on the raspberry pi. With better planning, we could have avoided a lot of headaches, but let's be honest, none of us knew what we were doing and we didn't have the ideal tools.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"To be more specific, the hardware at our disposal consisted of a couple of RC trucks (only one of which survived), two raspberry pi boards (one got accidentally fried), Joe's webcam, a spatula to mount the webcam on and a duck plushie."]}),Object(l.jsx)("h2",{children:"Why did you make it?"}),Object(l.jsxs)("p",{children:["This was our contribution to the ",Object(l.jsx)("i",{children:"2021 Bath Hack"})," Hackathon. We wanted to create a tribute to celebrate our campus, which we've missed over during the national lockdowns, and couldn't think of a better way of exploring it than from the perspective of the iconic Bath ducks.",Object(l.jsx)("img",{src:p,id:"campus",alt:"Bath campus"}),Object(l.jsx)("br",{}),"We believe that students currently staying abroad, attending university remotely, would appreciate the opportunity to ",Object(l.jsx)("i",{children:"waddle"})," down the parade, enjoy a view of the lake, and even interact with the other ducks. Additionally, our project could be used in virtual open days, giving applicants a chance to wander around campus on their own, so they can get a better understanding of what it's like to study at the University of Bath."]}),Object(l.jsx)("h2",{children:"Who are you?"}),Object(l.jsxs)("div",{id:"headshots",children:[Object(l.jsx)("a",{href:"https://github.com/ouked",children:Object(l.jsx)("img",{src:x,alt:"Team member Alex",class:"headshot"})}),Object(l.jsx)("a",{href:"https://github.com/joedownard",children:Object(l.jsx)("img",{src:f,alt:"Team member Joe",class:"headshot"})}),Object(l.jsx)("a",{href:"https://github.com/lc2232",children:Object(l.jsx)("img",{src:m,alt:"Team member Luke",class:"headshot"})}),Object(l.jsx)("a",{href:"https://github.com/sg2295",children:Object(l.jsx)("img",{src:v,alt:"Team member Sergios",class:"headshot"})})]}),Object(l.jsx)("p",{children:"We're Alex, Joe, Luke and Sergios. We're in our second-year of studying Computer Science at the University of Bath. We all worked on all parts on this project."}),Object(l.jsx)("h2",{children:"Credits"}),Object(l.jsxs)("p",{children:["Logo Design by ",Object(l.jsx)("b",{children:"Romane Darniche"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Photograph of University of Bath campus by ",Object(l.jsx)("b",{children:Object(l.jsx)("a",{href:"https://www.bathchronicle.co.uk/news/bath-news/new-university-bath-campus-masterplan-1277112",children:"Bath Chronicle"})})]}),Object(l.jsx)("br",{})]})}var g=c(16),k=c(2);var y=function(){return Object(l.jsxs)(g.a,{basename:"/",children:[Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(k.c,{children:[Object(l.jsx)(k.a,{path:"/feed",children:Object(l.jsx)(b,{})}),Object(l.jsx)(k.a,{path:"/about",children:Object(l.jsx)(w,{})}),Object(l.jsx)(k.a,{exact:!0,path:"/",children:Object(l.jsxs)("div",{className:"homepage-container",children:[Object(l.jsx)("img",{src:a,className:"homepage-logo",alt:"logo"}),Object(l.jsx)("p",{children:"Waddle about campus"}),Object(l.jsx)("div",{className:"button",children:Object(l.jsx)(g.b,{to:"/feed",children:"Let's get rollin'"})})]})})]})}),Object(l.jsxs)("div",{id:"footer",children:["<",Object(l.jsx)(g.b,{to:"/about",children:"about"}),"; made with \u2764 for ",Object(l.jsx)("b",{children:"Bath Hack 2021"}),"; source on ",Object(l.jsx)("a",{href:"https://github.com/Duck-Drivers-2k21",children:"GitHub"}),";>"]})]})},q=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,90)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),q()}},[[88,1,2]]]);
//# sourceMappingURL=main.abf2c0ce.chunk.js.map