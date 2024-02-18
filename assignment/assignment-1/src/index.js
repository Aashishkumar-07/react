import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

const skillSet = [
  { name: "HTML + CSS", level: "advanced", bgc: "blue" },
  { name: "JavaScript", level: "advanced", bgc: "yellow" },
  { name: "Python", level: "intermediate", bgc: "cyan" },
  { name: "React", level: "beginner", bgc: "lightgreen" },
  { name: "AWS CP", level: "intermediate", bgc: "lightgrey" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro skillSet={skillSet} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="profilePic.jpg"
      alt="Profile pic"
      height="400px"
    />
  );
}

function Intro({ skillSet }) {
  return (
    <>
      <h2>John Mathew</h2>
      <p>
        A college student who is proficient in HTML, CSS, Javascript and is
        currenly learning React.Has a basic understanding of cloud & is AWS
        Certified cloud practitioner.
      </p>
      <div className="skill-list">
        {skillSet.map((skill) => (
          <SkillList skill={skill.name} color={skill.bgc} level={skill.level} />
        ))}
      </div>
    </>
  );
}

function SkillList({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😎"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
