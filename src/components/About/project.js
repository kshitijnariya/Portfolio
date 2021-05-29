import React from "react";

import { projectData } from "./projects";

export const Project = () => {
  return (
    <>
        {projectData.map((data, key) => {
          return (
              <div className="project-box">
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
