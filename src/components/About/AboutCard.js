import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Estudiante de 6to ciclo de la carrera de Diseño y Desarrollo de Software con conocimientos sólidos en lenguaje <span className="purple">Java, framework Spring Boot, Figma. </span>
          Con capacidad de solución de problemas, trabajo en equipo y adaptabilidad. <span className="purple"> Perteneciente al quinto superior de la carrera y nivel intermedio de inglés.</span>
            <br />
            <br />
            Educación Superior
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> TECSUP – Diseño y Desarrollo de Software
Estudiante | 2020 – En Proceso

            </li>
            <li className="about-activity">
              <ImPointRight /> Nivel básico de inglés – UPC
(2022)

            </li>
            <li className="about-activity">
              <ImPointRight /> Nivel intermedio de inglés – Conversa
(2022 - 2023)

            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
