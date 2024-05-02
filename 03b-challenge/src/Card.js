import "./Card.css";
import React from "react";

import Card from "react-bootstrap/Card";

import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaCode,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa"; // Importe os ícones necessários

import { SiCplusplus, SiCsharp } from "react-icons/si";

const skillData = [
  {
    name: "Java",
    icon: <FaJava className="icon" />,
    backgroundColor: "orange",
    soldOut: false,
  },
  {
    name: "Python",
    icon: <FaPython className="icon" />,
    backgroundColor: "#0d91c1",
    soldOut: false,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="icon" />,
    backgroundColor: "rgb(157,168,4)",
    soldOut: false,
  },
  {
    name: "C",
    icon: <FaCode className="icon" />,
    backgroundColor: "blue",
    soldOut: false,
  },
  {
    name: "C++",
    icon: <SiCplusplus className="icon" />,
    backgroundColor: "#00599C",
    soldOut: false,
  },
  {
    name: "C#",
    icon: <SiCsharp className="icon" />,
    backgroundColor: "#178600",
    soldOut: false,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="icon" />,
    backgroundColor: "#F05032",
    soldOut: false,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="icon" />,
    backgroundColor: "#181717",
    soldOut: false,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="icon" />,
    backgroundColor: "#E34F26",
    soldOut: false,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="icon" />,
    backgroundColor: "#1572B6",
    soldOut: false,
  },
  {
    name: "React",
    icon: <FaReact className="icon" />,
    backgroundColor: "#61DAFB",
    soldOut: false,
  },
];

function CardLuiz() {
  return (
    <Card style={{ width: "18rem" }}>
      <CardImage />
      <Card.Body>
        <CardTitle />
        <Description />
        <Skills />
      </Card.Body>
    </Card>
  );
}

function CardImage() {
  return <Card.Img variant="top" src="./eu.png" />;
}

function CardTitle() {
  return (
    <Card.Title style={{ fontWeight: "bold" }}>
      Luiz Paulo Saud Gonçalves
    </Card.Title>
  );
}

function Description() {
  return (
    <Card.Text>
      Software Engeneering Student at Puc Minas, Teaching Assistant at
      Algorithms and Data Structures and Interface Web Development.
    </Card.Text>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.backgroundColor }}>
      {skill.icon}
      {skill.name}
    </div>
  );
}

function Skills() {
  return (
    <div>
      {skillData.map((skill) => (
        <Skill skill={skill} key={skill.name} />
      ))}
    </div>
  );
}

export default CardLuiz;
