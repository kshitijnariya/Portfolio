(this.webpackJsonpkshitij=this.webpackJsonpkshitij||[]).push([[0],{19:function(e,t,s){},27:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(3),n=s.n(i),l=(s(19),s(4)),r=s(5),o=s(7),d=s(6),j=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).month_list=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e.day_list=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e.state={hour_12:!0,current_time:new Date},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.update_time=setInterval((function(){e.setState({current_time:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.update_time)}},{key:"render",value:function(){var e=this.state.current_time,t=this.day_list[e.getDay()],s=e.getHours(),c=e.getMinutes(),a=this.month_list[e.getMonth()],i=e.getDate().toLocaleString(),n=s<12?"AM":"PM";return 1===c.toLocaleString().length&&(c="0"+c),this.state.hour_12&&s>12&&(s-=12),void 0!==this.props.onlyTime&&null!==this.props.onlyTime?s+":"+c+" "+n:void 0!==this.props.onlyDay&&null!==this.props.onlyDay?t+" "+a+" "+i:t+" "+a+" "+i+" "+s+":"+c+" "+n}}]),s}(c.Component),m=s(0);var b=function(){function e(){document.querySelector(".about-container").style.display="block",document.querySelector(".about-container").style.zIndex="11",document.querySelector(".safari-container").style.zIndex="10"}function t(){document.querySelector(".safari-container").style.display="block",document.querySelector(".safari-container").style.zIndex="11",document.querySelector(".about-container").style.zIndex="10"}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{id:"nav",className:"nav-panel"}),Object(m.jsxs)("div",{className:"nav-container",children:[Object(m.jsxs)("div",{className:"apple",children:[Object(m.jsx)("button",{className:"applebtn"}),Object(m.jsxs)("div",{className:"apple-content",children:[Object(m.jsx)("p",{children:"About This Mac"}),Object(m.jsx)("div",{className:"section-border1"}),Object(m.jsx)("p",{children:"System Preferences..."}),Object(m.jsx)("p",{children:"App Store..."}),Object(m.jsx)("div",{className:"section-border1"}),Object(m.jsx)("p",{children:"Recent Items"}),Object(m.jsx)("div",{className:"section-border1"}),Object(m.jsx)("p",{children:"Force Quit Finder"}),Object(m.jsx)("div",{className:"section-border1"}),Object(m.jsx)("p",{children:"Sleep"}),Object(m.jsx)("p",{children:"Restart..."}),Object(m.jsx)("p",{children:"Shut Down..."}),Object(m.jsx)("div",{className:"section-border1"}),Object(m.jsx)("p",{children:"Lock Screen"}),Object(m.jsx)("p",{children:"Log Out Kshitij Nar..."})]}),Object(m.jsx)("p",{className:"apple-text",children:"Finder"}),Object(m.jsx)("p",{className:"apple-text",children:"File"}),Object(m.jsx)("p",{className:"apple-text",children:"Edit"}),Object(m.jsx)("p",{className:"apple-text",children:"View"}),Object(m.jsx)("p",{className:"apple-text",children:"Go"}),Object(m.jsx)("p",{className:"apple-text",children:"Window"}),Object(m.jsx)("p",{className:"apple-text",children:"Help"})]}),Object(m.jsxs)("div",{className:"wi-fi-con",children:[Object(m.jsx)("div",{className:"battery-svg"}),Object(m.jsx)("div",{className:"wifi-svg"}),Object(m.jsx)("div",{className:"search-svg"}),Object(m.jsxs)("button",{className:"switch",children:[Object(m.jsx)("button",{className:"switch-svg"}),Object(m.jsxs)("div",{className:"switch-content",children:[Object(m.jsxs)("div",{className:"switch-container1",children:[Object(m.jsxs)("div",{className:"inner-con inner-con1",children:[Object(m.jsxs)("div",{className:"invisible-con1",children:[Object(m.jsx)("div",{className:"blue-circle",children:Object(m.jsx)("div",{className:"wifi-svg"})}),Object(m.jsxs)("div",{className:"circle-text-con",children:[Object(m.jsx)("p",{className:"head-tex",children:"Wi-Fi"}),Object(m.jsx)("p",{className:"tex-bottom",children:"Home"})]})]}),Object(m.jsxs)("div",{className:"invisible-con1",children:[Object(m.jsx)("div",{className:"blue-circle",children:Object(m.jsx)("div",{className:"bluetooth-svg"})}),Object(m.jsx)("div",{className:"circle-text-con",children:Object(m.jsx)("p",{className:"head-tex",children:"Bluetooth"})})]}),Object(m.jsxs)("div",{className:"invisible-con1",children:[Object(m.jsx)("div",{className:"blue-circle",children:Object(m.jsx)("div",{className:"hotspot-svg"})}),Object(m.jsxs)("div",{className:"circle-text-con",children:[Object(m.jsx)("p",{className:"head-tex",children:"AirDrop"}),Object(m.jsx)("p",{className:"tex-bottom",children:"Contacts Only"})]})]})]}),Object(m.jsxs)("div",{className:"second-inner",children:[Object(m.jsxs)("div",{className:"inner-con inner-con2",children:[Object(m.jsx)("div",{className:"blue-circle",children:Object(m.jsx)("div",{className:"disturb-svg"})}),Object(m.jsxs)("div",{className:"circle-text-con",children:[Object(m.jsx)("p",{className:"head-tex",children:"Do Not"}),Object(m.jsx)("p",{className:"head-tex",children:"Disturb"})]})]}),Object(m.jsxs)("div",{className:"third-inner",children:[Object(m.jsxs)("div",{className:"inner-con inner-con3",children:[Object(m.jsx)("div",{className:"britness-img"}),Object(m.jsxs)("div",{className:"circle-text-con",children:[Object(m.jsx)("p",{className:"head-tex kbtex",children:"Keyboard"}),Object(m.jsx)("p",{className:"head-tex kbtex",children:"Brightness"})]})]}),Object(m.jsxs)("div",{className:"inner-con inner-con3",children:[Object(m.jsx)("div",{className:"airplay-svg"}),Object(m.jsxs)("div",{className:"circle-text-con",children:[Object(m.jsx)("p",{className:"head-tex kbtex",children:"AirPlay"}),Object(m.jsx)("p",{className:"head-tex kbtex",children:"Display"})]})]})]})]})]}),Object(m.jsxs)("div",{className:"inner-con switch-container2",children:[Object(m.jsx)("p",{className:"head-tex",children:"Display"}),Object(m.jsxs)("div",{className:"br-slider",children:[Object(m.jsx)("div",{className:"bright-svg"}),Object(m.jsx)("input",{className:"range",type:"range",min:"0",max:"100"})]})]}),Object(m.jsxs)("div",{className:"inner-con switch-container2",children:[Object(m.jsx)("p",{className:"head-tex",children:"Sound"}),Object(m.jsxs)("div",{className:"br-slider",children:[Object(m.jsx)("div",{className:"volume-svg"}),Object(m.jsx)("input",{className:"range vol-wid",type:"range",min:"0",max:"100"}),Object(m.jsx)("div",{className:"blue-circle airs-circle",children:Object(m.jsx)("div",{className:"airvolume-svg"})})]})]}),Object(m.jsx)("div",{className:"inner-con switch-container2"})]})]}),Object(m.jsx)("p",{className:"time",children:Object(m.jsx)(j,{})})]})]}),Object(m.jsx)("div",{className:"screen-container",children:Object(m.jsxs)("div",{className:"app-column",children:[Object(m.jsxs)("button",{onDoubleClick:e,className:"app-img-txt-con",children:[Object(m.jsx)("div",{className:"app-img user-img center-img"}),Object(m.jsx)("p",{className:"app-txt",children:"About Kshitij"})]}),Object(m.jsxs)("button",{onDoubleClick:t,className:"app-img-txt-con",children:[Object(m.jsx)("div",{className:"app-img safari-img center-img"}),Object(m.jsx)("p",{className:"app-txt",children:"Safari"})]}),Object(m.jsxs)("button",{className:"app-img-txt-con",children:[Object(m.jsx)("div",{className:"app-img message-img center-img"}),Object(m.jsx)("p",{className:"app-txt",children:"Send Message"})]}),Object(m.jsxs)("button",{className:"app-img-txt-con",children:[Object(m.jsx)("div",{className:"app-img mail-img center-img"}),Object(m.jsx)("p",{className:"app-txt",children:"Send Mail"})]})]})}),Object(m.jsx)("div",{className:"bt-con",children:Object(m.jsx)("div",{className:"bottom-container",children:Object(m.jsxs)("div",{className:"bt-inner-con",children:[Object(m.jsx)("button",{className:"app-img finder-img"}),Object(m.jsx)("div",{onClick:t,className:"app-img safari-img"}),Object(m.jsx)("div",{className:"section-border"}),Object(m.jsx)("button",{onClick:e,className:"app-img user-img"}),Object(m.jsx)("div",{className:"app-img linkedin-img"}),Object(m.jsx)("div",{className:"app-img message-img"}),Object(m.jsx)("div",{className:"app-img mail-img"}),Object(m.jsx)("div",{className:"app-img map-img"}),Object(m.jsx)("div",{className:"section-border"}),Object(m.jsx)("div",{className:"app-img appstore-img"}),Object(m.jsx)("div",{className:"app-img settings-img"}),Object(m.jsx)("div",{className:"section-border"}),Object(m.jsx)("div",{className:"app-img recyclebin-img"})]})})})]})};var h=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(b,{})})},x=s(9),u=s.n(x),p=s(14),g=[{id:1,name:"Shopkeeper - Final Year Projectdata",date:"Present",tools:"ReactJS, Django, Firebase, Rest APIs, CSS",link:"https://github.com/kshitijnariya","border-color":"lightcoral",description:[{des1:"Provided Front-end Development"},{des2:"Made Responsive Web & Provided Better"}]},{id:2,name:"UI Designs",date:"Present",tools:"Figma, Adobe XD, AI",link:"https://dribbble.com/kshitijnariya","border-color":"lightgreen",description:[{des1:"Provided Front-end Development"},{des2:"Made Responsive Web & Provided Better"}]},{id:3,name:"Basic Chatting App",date:"Dec '21",tools:"Java, Eclipse",link:"https://github.com.com/kshitijnariya/Basic-Chatting-App","border-color":"lightblue",description:[{des1:"Provided Front-end Development"},{des2:"Made Responsive Web & Provided Better"}]},{id:4,name:"Text-Utils Web App",date:"Nov '20",tools:"Django, Python, HTML, CSS, Bootstrap",link:"https://github.com.com/kshitijnariya/Text-Utils","border-color":"lightpink",description:[{des1:"Provided Front-end Development"},{des2:"Made Responsive Web & Provided Better"}]},{id:5,name:"primierproducts.com",date:"Aug '20",tools:"Figma, Javascript, Bootstrap, HTML, CSS, Rest APIs",link:"https://primierproducts.com","border-color":"lightseagreen",description:[{des1:"Provided Front-end Development"},{des2:"Made Responsive Web & Provided Better"}]},{id:6,name:"mekvahan.com",date:"Apr '21",tools:"Figma, Javascript, HTML, CSS, Rest APIs",link:"https://mekvahan.com","border-color":"orange",description:[{des1:"Provided Front-end Development"},{des2:"Made Responsive Web & Provided Better"}]},{id:7,name:"Basic Android Apps(Kotlin)",date:"Feb '21",tools:"Kotlin, Android Studio",link:"https://github.com/kshitijnariya","border-color":"lightskyblue",description:[{des1:"Provided Front-end Development"},{des2:"Made Responsive Web & Provided Better"}]},{id:8,name:"uniquehygienecare.com",date:"Mar '21",tools:"Javascript, Bootstrap, HTML, CSS",link:"https://uniquehygienecare.com","border-color":"lightsteelblue",description:[{des1:"Provided Front-end Development"},{des2:"Made Responsive Web & Provided Better"}]},{id:9,name:"mekpark.com",date:"Apr '21",tools:"Figma, Javascript, HTML, CSS, Rest APIs",link:"https://www.mekpark.com","border-color":"lightsalmon",description:[{des1:"Provided Front-end Development"},{des2:"Made Responsive Web & Provided Better"}]},{id:10,name:"mekmeal.com",date:"May '21",tools:"Figma, Javascript, HTML, CSS, Rest APIs",link:"https://mekmeal.com","border-color":"lightslategrey",description:[{des1:"Provided Front-end Development"},{des2:"Made Responsive Web & Provided Better"}]}],O=function(){return Object(m.jsx)(m.Fragment,{children:g.map((function(e,t){return Object(m.jsx)("div",{className:"project-box",style:{borderColor:e["border-color"]},children:Object(m.jsxs)("a",{href:e.link,target:"_blank",children:[Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsx)("p",{className:"card-title w-80",children:e.name}),Object(m.jsx)("p",{className:"card-title w-20 text-align-right",children:e.date})]}),Object(m.jsx)("p",{className:"card-position",children:e.tools}),Object(m.jsxs)("ul",{className:"card-extra ullist",children:[Object(m.jsx)("li",{style:{lineHeight:"1"},children:e.description[0].des1}),Object(m.jsx)("li",{style:{lineHeight:"1"},children:e.description[1].des2})]})]})})}))})},v=s.p+"static/media/Resume.cc77c2c8.pdf",N=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).changeScreen=function(t){var s=t.id||t.target.id;localStorage.setItem("about-section",s),p.a("/".concat(s)),e.setState({screen:e.screens[s],active_screen:s})},e.showNavBar=function(){e.setState({navbar:!e.state.navbar})},e.renderNavLinks=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{id:"about",onFocus:e.changeScreen,className:"about"===e.state.active_screen?" about-menu-text active":" about-menu-text",children:"About"}),Object(m.jsx)("button",{id:"projects",onFocus:e.changeScreen,className:"projects"===e.state.active_screen?" about-menu-text active":" about-menu-text",children:"Projects"}),Object(m.jsx)("button",{id:"experience",onFocus:e.changeScreen,className:"experience"===e.state.active_screen?" about-menu-text active":" about-menu-text",children:"Experience"}),Object(m.jsx)("button",{id:"education",onFocus:e.changeScreen,className:"education"===e.state.active_screen?" about-menu-text active":" about-menu-text",children:"Education"}),Object(m.jsx)("button",{id:"skills",onFocus:e.changeScreen,className:"skills"===e.state.active_screen?" about-menu-text active":" about-menu-text",children:"Skills"}),Object(m.jsx)("button",{id:"resume",onFocus:e.changeScreen})]})},e.screens={},e.state={screen:function(){},active_screen:"about",navbar:!1},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.screens={about:Object(m.jsx)(k,{}),education:Object(m.jsx)(S,{}),experience:Object(m.jsx)(w,{}),projects:Object(m.jsx)(F,{}),skills:Object(m.jsx)(D,{}),resume:Object(m.jsx)(C,{})};var e=localStorage.getItem("about-section");null!==e&&void 0!==e||(e="about"),this.changeScreen(document.getElementById(e))}},{key:"render",value:function(){return Object(m.jsx)(u.a,{handle:".taskbar-container",defaultPosition:{x:100,y:50},position:null,grid:[25,25],scale:1,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:Object(m.jsxs)("div",{onClick:f,className:"about-container",children:[Object(m.jsxs)("div",{className:"taskbar-container",children:[Object(m.jsxs)("div",{className:"close-bar",children:[Object(m.jsx)("button",{onClick:function(){document.querySelector(".about-container").style.display="none"},className:"close-button closebar-button",children:Object(m.jsx)("div",{className:"close-svg"})}),Object(m.jsx)("button",{className:"minimize-button closebar-button",children:Object(m.jsx)("div",{className:"minimize-svg"})}),Object(m.jsx)("button",{className:"maxmize-button closebar-button",disabled:!0,children:Object(m.jsx)("div",{className:"maximize-svg"})})]}),Object(m.jsx)("div",{onClick:this.showNavBar,id:"active",className:"about-menu-container",children:this.renderNavLinks()})]}),Object(m.jsx)("div",{id:"aboutmain",className:"about-main-container",children:this.state.screen}),Object(m.jsx)("div",{className:"copyright-container",children:Object(m.jsx)("p",{className:"copyright",children:"\xa9 2020 HorizonLight. All Rights Reserved."})})]})})}}]),s}(a.a.Component);n.a.render(Object(m.jsx)(N,{}),document.getElementById("root"));var y=N;function f(){document.querySelector(".safari-container").style.zIndex="10",document.querySelector(".about-container").style.zIndex="11"}function k(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{id:"about",className:"h-100",children:Object(m.jsxs)("div",{className:"row h-100",children:[Object(m.jsx)("div",{className:"col-lg-6 center",children:Object(m.jsx)("div",{className:"about-image-container center",children:Object(m.jsx)("div",{className:"about-image"})})}),Object(m.jsx)("div",{className:"col-lg-6 center justify-content-end",children:Object(m.jsxs)("div",{className:"about-txt-con",children:[Object(m.jsx)("p",{className:"kshitij-name",children:"Kshitij Nariya"}),Object(m.jsx)("p",{className:"kshitij-position",children:"Frond-end Developer"}),Object(m.jsx)("p",{className:"kshitij-summary",children:"Self-motivated and hardworking student seeking an opportunity to work in a challenging environment to prove my coding skills and utilize my knowledge of various databases for the growth of the organization. "}),Object(m.jsxs)("div",{className:"d-flex button-con",children:[Object(m.jsx)("button",{onClick:function(){document.getElementById("resume").focus()},className:"about-buttons center",children:"Resume"}),Object(m.jsx)("a",{href:"mailto:knariya7422@gmail.com",className:"about-buttons center",children:"Contact"})]})]})})]})})})}function S(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{id:"education",className:"h-100",children:[Object(m.jsx)("div",{className:"education-divider"}),Object(m.jsxs)("div",{className:"education-card-container pu d-flex",children:[Object(m.jsx)("div",{className:"education-card-image pu"}),Object(m.jsxs)("div",{className:"education-card-txt-con",children:[Object(m.jsx)("p",{className:"card-title",children:"Parul University"}),Object(m.jsx)("p",{className:"card-position",children:"B.Tech - Information Technology"}),Object(m.jsx)("p",{className:"card-extra",children:"CGPA : 7.16 / 10.00"}),Object(m.jsx)("p",{className:"card-extra",children:"2018 - 2022"})]})]}),Object(m.jsx)("div",{className:"container-after pu"}),Object(m.jsx)("div",{className:"container-after jb1"}),Object(m.jsxs)("div",{className:"education-card-container xii d-flex",children:[Object(m.jsx)("div",{className:"education-card-image jb"}),Object(m.jsxs)("div",{className:"education-card-txt-con",children:[Object(m.jsx)("p",{className:"card-title",children:"J.B. & KARP Vidya Sankul"}),Object(m.jsx)("p",{className:"card-position",children:"XII | GHSEB"}),Object(m.jsx)("p",{className:"card-extra",children:"Percentage : 68.92 / 100"}),Object(m.jsx)("p",{className:"card-extra",children:"2018"})]})]}),Object(m.jsxs)("div",{className:"education-card-container x d-flex",children:[Object(m.jsx)("div",{className:"education-card-image jb"}),Object(m.jsxs)("div",{className:"education-card-txt-con",children:[Object(m.jsx)("p",{className:"card-title",children:"J.B. & KARP Vidya Sankul"}),Object(m.jsx)("p",{className:"card-position",children:"X | GSEB"}),Object(m.jsx)("p",{className:"card-extra",children:"Percentage : 69 / 100"}),Object(m.jsx)("p",{className:"card-extra",children:"2016"})]})]}),Object(m.jsx)("div",{className:"container-after jb2"})]})})}function w(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{id:"experience",className:"h-100",children:[Object(m.jsx)("div",{className:"education-divider"}),Object(m.jsxs)("div",{className:"education-card-container pu d-flex",children:[Object(m.jsx)("div",{className:"education-card-image mekvahan"}),Object(m.jsxs)("div",{className:"education-card-txt-con",children:[Object(m.jsx)("p",{className:"card-title",children:"Front-end Developer"}),Object(m.jsx)("p",{className:"card-position",children:"MekVahan | Intern"}),Object(m.jsx)("p",{className:"card-extra",children:"April 2021 - May 2021"}),Object(m.jsxs)("ul",{className:"card-extra ullist",children:[Object(m.jsx)("li",{style:{lineHeight:"1"},children:"Provided Front-end Developmen"}),Object(m.jsx)("li",{style:{lineHeight:"1"},children:"Made Responsive Web & Provided Better Web experiance"})]})]})]}),Object(m.jsx)("div",{className:"container-after pu"}),Object(m.jsx)("div",{className:"container-after jb1"}),Object(m.jsxs)("div",{className:"education-card-container xii d-flex",children:[Object(m.jsx)("div",{className:"education-card-image techfest"}),Object(m.jsxs)("div",{className:"education-card-txt-con",children:[Object(m.jsx)("p",{className:"card-title",children:"Social Media Marketing"}),Object(m.jsx)("p",{className:"card-position",children:"Techfest, IIT Bombay | Intern"}),Object(m.jsx)("p",{className:"card-extra",children:"July 2020 - February 2021"}),Object(m.jsxs)("ul",{className:"card-extra ullist",children:[Object(m.jsx)("li",{style:{lineHeight:"1"},children:"Active Leader in my campus community"}),Object(m.jsx)("li",{style:{lineHeight:"1"},children:"Silver Certificate Received in this internship"})]})]})]})]})})}function F(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{id:"projects",className:"h-100",children:Object(m.jsx)("div",{className:"project-container",children:Object(m.jsx)(O,{})})})})}function D(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{id:"skills",className:"h-100",children:[Object(m.jsxs)("ul",{className:"text-align-center skill mt-lg-3",children:[Object(m.jsxs)("li",{children:["My areas of expertise are ",Object(m.jsx)("strong",{className:"apple-blue",children:"Front-end development, UI Designing & React.js!"})]}),Object(m.jsx)("li",{children:"I actively learn new things based on my projects."})]}),Object(m.jsxs)("div",{className:"w-80 m-auto mt-lg-3 d-flex",children:[Object(m.jsxs)("div",{className:"col-lg-6 text-align-center",children:[Object(m.jsx)("ul",{className:"skill",children:Object(m.jsx)("li",{children:Object(m.jsx)("b",{children:"Language & Libraries"})})}),Object(m.jsxs)("div",{className:"d-flex flex-wrap justify-content-center items-start m-auto w-70",children:[Object(m.jsx)("img",{className:"m-1",src:"https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",alt:"javascript"}),Object(m.jsx)("img",{className:"m-1",src:"https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",alt:"c++"}),Object(m.jsx)("img",{className:"m-1",src:"https://img.shields.io/badge/Kotlin-0095D5?&style=for-the-badge&logo=kotlin&logoColor=white",alt:"kotlin"}),Object(m.jsx)("img",{className:"m-1",src:"https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",alt:"HTML"}),Object(m.jsx)("img",{className:"m-1",src:"https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",alt:"Css"}),Object(m.jsx)("img",{className:"m-1",src:"https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",alt:"Bootstrap"}),Object(m.jsx)("img",{src:"https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",alt:"java",className:"m-1"}),Object(m.jsx)("img",{src:"https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white",alt:"jquery",className:"m-1"})]})]}),Object(m.jsxs)("div",{className:"col-lg-6 text-align-center",children:[Object(m.jsx)("ul",{className:"skill",children:Object(m.jsx)("li",{children:Object(m.jsx)("b",{children:"Framework & Tools"})})}),Object(m.jsxs)("div",{className:"d-flex flex-wrap justify-content-center items-start m-auto w-70",children:[Object(m.jsx)("img",{className:" m-1",src:"https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=white",alt:"react"}),Object(m.jsx)("img",{className:"m-1",src:"https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",alt:"Django"}),Object(m.jsx)("img",{className:"m-1",src:"https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=white",alt:"react native"}),Object(m.jsx)("img",{src:"https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",alt:"Google Cloud",className:"m-1"}),Object(m.jsx)("img",{src:"https://img.shields.io/badge/Git-E84E31?style=for-the-badge&logo=git&logoColor=white",alt:"git",className:"m-1"}),Object(m.jsx)("img",{className:"m-1",src:"https://img.shields.io/badge/Figma-1E1829?style=for-the-badge&logo=figma&logoColor=9D56F7",alt:"Figma"}),Object(m.jsx)("img",{className:"m-1",src:"https://img.shields.io/badge/Adobe_XD-450135?style=for-the-badge&logo=adobe-xd&logoColor=F75EEE",alt:"XD"})]})]})]})]})})}function C(){return Object(m.jsx)("iframe",{className:"w-100 h-100",src:v,frameBorder:"0"})}var B=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).storeVisitedUrl=function(e,t){localStorage.setItem("safari-url",e),localStorage.setItem("safari-display-url",t)},e.refreshSafari=function(){document.getElementById("safari-screen").src+=""},e.goToHome=function(){e.setState({url:e.home_url,display_url:"https://www.google.com"}),e.refreshSafari()},e.checkKey=function(t){if("Enter"===t.key){var s=t.target.value,c="";if(0===(s=s.trim()).length)return;0!==s.indexOf("http://")&&0!==s.indexOf("https://")&&(s="https://"+s),c=s=encodeURI(s),s.includes("google.com")&&(s="https://www.google.com/webhp?igu=1",c="https://www.google.com"),e.setState({url:s,display_url:s}),e.storeVisitedUrl(s,c),document.getElementById("safari-url-bar").blur()}},e.handleDisplayUrl=function(t){e.setState({display_url:t.target.value})},e.displayUrlBar=function(){return Object(m.jsxs)("div",{className:"taskbar-container",children:[Object(m.jsxs)("div",{className:"close-bar",children:[Object(m.jsx)("button",{onClick:I,className:"close-button closebar-button",children:Object(m.jsx)("div",{className:"close-svg"})}),Object(m.jsx)("button",{className:"minimize-button closebar-button",children:Object(m.jsx)("div",{className:"minimize-svg"})}),Object(m.jsx)("button",{onClick:M,className:"maxmize-button closebar-button",children:Object(m.jsx)("div",{className:"maximize-svg"})})]}),Object(m.jsx)("div",{className:"about-menu-container d-flex",children:Object(m.jsx)("input",{onKeyDown:e.checkKey,onChange:e.handleDisplayUrl,value:e.state.display_url,id:"safari-url-bar",className:"safari-url-bar",type:"url",spellCheck:!1,autoComplete:"off"})})]})},e.home_url="https://www.google.com/webhp?igu=1",e.state={url:"https://www.google.com/webhp?igu=1",display_url:"www.google.com"},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("safari-url"),t=localStorage.getItem("safari-display-url");null!==e&&void 0!==e&&this.setState({url:e,display_url:t},this.refreshSafari)}},{key:"render",value:function(){return Object(m.jsx)(u.a,{handle:".taskbar-container",defaultPosition:{x:200,y:150},position:null,grid:[25,25],scale:1,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:Object(m.jsxs)("div",{onClick:P,className:"safari-container",children:[this.displayUrlBar(),Object(m.jsx)("div",{id:"aboutmain",className:"w-100 h-100 mt-lg-3",children:Object(m.jsx)("iframe",{src:this.state.url,className:"w-100 h-100",id:"safari-screen",frameBorder:"0",title:"Ubuntu Safari Url"})})]})})}}]),s}(c.Component);function P(){document.querySelector(".safari-container").style.zIndex="11",document.querySelector(".about-container").style.zIndex="10"}function I(){document.querySelector(".safari-container").style.display="none"}function M(){var e=document.querySelector(".safari-container");e.style.width="100%",e.style.height="97%",e.style.transform="translate(0, 25px)"}var A=B;var R=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(A,{})]})};var _=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{}),Object(m.jsx)(R,{})]})};n.a.render(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c24bbcf0.chunk.js.map