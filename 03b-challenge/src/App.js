import "./App.css";
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

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="./eu.png" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>
          Luiz Paulo Saud Gonçalves
        </Card.Title>
        <Card.Text>
          Software Engeneering Student at Puc Minas, Teaching Assistant at
          Algorithms and Data Structures and Interface Web Development.
        </Card.Text>
        <div>
          <div className="skill" style={{ backgroundColor: "orange" }}>
            <FaJava className="icon" />
            Java
          </div>
          <div className="skill" style={{ backgroundColor: "#0d91c1" }}>
            <FaPython className="icon" />
            Python
          </div>
          <div className="skill" style={{ backgroundColor: "rgb(157,168,4)" }}>
            <FaJsSquare className="icon" />
            JavaScript
          </div>
          <div className="skill" style={{ backgroundColor: "blue" }}>
            <FaCode className="icon" />C
          </div>
          <div className="skill" style={{ backgroundColor: "#00599C" }}>
            <SiCplusplus className="icon" />
            C++
          </div>
          <div className="skill" style={{ backgroundColor: "#178600" }}>
            <SiCsharp className="icon" />
            C#
          </div>
          <div className="skill" style={{ backgroundColor: "#F05032" }}>
            <FaGitAlt className="icon" />
            Git
          </div>
          <div className="skill" style={{ backgroundColor: "#181717" }}>
            <FaGithub className="icon" />
            GitHub
          </div>
          <div className="skill" style={{ backgroundColor: "#E34F26" }}>
            <FaHtml5 className="icon" />
            HTML
          </div>
          <div className="skill" style={{ backgroundColor: "#1572B6" }}>
            <FaCss3Alt className="icon" />
            CSS
          </div>
          <div className="skill" style={{ backgroundColor: "#61DAFB" }}>
            <FaReact className="icon" />
            React
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <div className="container">
      <BasicExample />
    </div>
  );
}

export default App;
