import React from "react";

export const projectData = [
        {
            "id": 1,
            "name": "Shopkeeper - Final Year Projectdata",
            "date": "Present",
            "tools": "ReactJS, Django, Firebase, Rest APIs, CSS",
            "link": "https://github.com/kshitijnariya",
            "border-color": "lightcoral",
            "description": [
                {"des1" : "Provided Front-end Development"},
                {"des2" : "Made Responsive Web & Provided Better"}
            ]
        },
        {
            "id": 2,
            "name": "UI Designs",
            "date": "Present",
            "tools": "Figma, Adobe XD, AI",
            "link": "https://dribbble.com/kshitijnariya",
            "border-color": "lightgreen",
            "description": [
                {"des1" : "Provided Front-end Development"},
                {"des2" : "Made Responsive Web & Provided Better"}
            ]
        },
        {
            "id": 3,
            "name": "Basic Chatting App",
            "date": "Dec '21",
            "tools": "Java, Eclipse",
            "link": "https://github.com.com/kshitijnariya/Basic-Chatting-App",
            "border-color": "lightblue",
            "description": [
                {"des1" : "Provided Front-end Development"},
                {"des2" : "Made Responsive Web & Provided Better"}
            ]
        },
        {
            "id": 4,
            "name": "Text-Utils Web App",
            "date": "Nov '20",
            "tools": "Django, Python, HTML, CSS, Bootstrap",
            "link": "https://github.com.com/kshitijnariya/Text-Utils",
            "border-color": "lightpink",
            "description": [
                {"des1" : "Provided Front-end Development"},
                {"des2" : "Made Responsive Web & Provided Better"}
            ]
        },
        {
            "id": 5,
            "name": "primierproducts.com",
            "date": "Aug '20",
            "tools": "Figma, Javascript, Bootstrap, HTML, CSS, Rest APIs",
            "link": "https://primierproducts.com",
            "border-color": "lightseagreen",
            "description": [
                {"des1" : "Provided Front-end Development"},
                {"des2" : "Made Responsive Web & Provided Better"}
            ]
        },
        {
            "id": 6,
            "name": "mekvahan.com",
            "date": "Apr '21",
            "tools": "Figma, Javascript, HTML, CSS, Rest APIs",
            "link": "https://mekvahan.com",
            "border-color": "orange",
            "description": [
                {"des1" : "Provided Front-end Development"},
                {"des2" : "Made Responsive Web & Provided Better"}
            ]
        },
        {
            "id": 7,
            "name": "Basic Android Apps(Kotlin)",
            "date": "Feb '21",
            "tools": "Kotlin, Android Studio",
            "link": "https://github.com/kshitijnariya",
            "border-color": "lightskyblue",
            "description": [
                {"des1" : "Provided Front-end Development"},
                {"des2" : "Made Responsive Web & Provided Better"}
            ]
        },
        {
            "id": 8,
            "name": "uniquehygienecare.com",
            "date": "Mar '21",
            "tools": "Javascript, Bootstrap, HTML, CSS",
            "link": "https://uniquehygienecare.com",
            "border-color": "lightsteelblue",
            "description": [
                {"des1" : "Provided Front-end Development"},
                {"des2" : "Made Responsive Web & Provided Better"}
            ]
        },
        {
            "id": 9,
            "name": "mekpark.com",
            "date": "Apr '21",
            "tools": "Figma, Javascript, HTML, CSS, Rest APIs",
            "link": "https://www.mekpark.com",
            "border-color": "lightsalmon",
            "description": [
                {"des1" : "Provided Front-end Development"},
                {"des2" : "Made Responsive Web & Provided Better"}
            ]
        },
        {
            "id": 10,
            "name": "mekmeal.com",
            "date": "May '21",
            "tools": "Figma, Javascript, HTML, CSS, Rest APIs",
            "link": "https://mekmeal.com",
            "border-color": "lightslategrey",
            "description": [
                {"des1" : "Provided Front-end Development"},
                {"des2" : "Made Responsive Web & Provided Better"}
            ]
        },

]

export const Projectdata = () => {
  return (
    <>
        {projectData.map((data, key) => {
          return (
              <div className="project-box" style={{borderColor: data["border-color"]}}>
                <a href={data.link} target="_blank">
                  <div className="d-flex">
                      <p className="card-title w-80">{data.name}</p>
                      <p className="card-title w-20 text-align-right">{data.date}</p>
                  </div>
                  <p className="card-position">{data.tools}</p>
                  <ul className="card-extra ullist">
                    <li style={{lineHeight: '1'}}>{data.description[0].des1}</li>
                    <li style={{lineHeight: '1'}}>{data.description[1].des2}</li>
                  </ul>
                </a>
              </div>
          );
        })}
    </>
  );
}
