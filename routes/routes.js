const { Router } = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const Matriculado = require("../models/Matriculado");
const Consulta = require("../models/Consulta");

const router = Router();

const ruta = path.join(__dirname, "../public/views/");

// rutas del colegio

router.get("/", (req, res) => {
  res.send(index);
});
router.get("/index", function (req, res) {
  res.sendFile(ruta + "index.html");
});
router.get("/admisiones", function (req, res) {
  res.sendFile(ruta + "admisiones.html");
});
router.get("/administracion", function (req, res) {
  res.sendFile(ruta + "administracion.html");
});
router.get("/galeria", function (req, res) {
  res.sendFile(ruta + "galeria.html");
});
router.get("/tour", function (req, res) {
  res.sendFile(ruta + "tour.html");
});
router.get("/orientacion", function (req, res) {
  res.sendFile(ruta + "orientacion.html");
});
router.get("/inicial", function (req, res) {
  res.sendFile(ruta + "inicial.html");
});
router.get("/primaria", function (req, res) {
  res.sendFile(ruta + "primaria.html");
});
router.get("/secundaria", function (req, res) {
  res.sendFile(ruta + "secundaria.html");
});
router.get("/nuestrocolegio", function (req, res) {
  res.sendFile(ruta + "nuestro-colegio.html");
});
router.get("/informatica", function (req, res) {
  res.sendFile(ruta + "informatica.html");
});
router.get("/deutsch", function (req, res) {
  res.sendFile(ruta + "deutsch.html");
});
router.get("/english", function (req, res) {
  res.sendFile(ruta + "english.html");
});
router.get("/musica", function (req, res) {
  res.sendFile(ruta + "musica.html");
});
router.get("/educacionfisica", function (req, res) {
  res.sendFile(ruta + "ed-fisica.html");
});
router.get("/login", function (req, res) {
  res.sendFile(ruta + "login.html");
});
router.get("/inicial/actividades", function (req, res) {
  res.sendFile(ruta + "i-actividades.html");
});
router.get("/primaria/actividades", function (req, res) {
  res.sendFile(ruta + "p-actividades.html");
});
router.get("/secundaria/actividades", function (req, res) {
  res.sendFile(ruta + "s-actividades.html");
});
router.get("/covid", function (req, res) {
  res.sendFile(ruta + "covid.html");
});
router.get("/ActoInicial", function (req, res) {
  res.sendFile(ruta + "acto-inicial.html");
});
router.get("/ActoPrimaria", function (req, res) {
  res.sendFile(ruta + "acto-primaria.html");
});
router.get("/ActoSecundaria", function (req, res) {
  res.sendFile(ruta + "acto-secundaria.html");
});

router.get("/landing/matricula/ig", (req, res) => {
  res.sendFile(ruta + "matriculacion-ig.html");
});
router.get("/landing/matricula/goo", (req, res) => {
  res.sendFile(ruta + "matriculacion-goo.html");
});
router.get("/landing/matricula/fb", (req, res) => {
  res.sendFile(ruta + "matriculacion-fb.html");
});
router.get("/landing/matricula/in", (req, res) => {
  res.sendFile(ruta + "matriculacion-in.html");
});

router.get("/landing/inicial/ig", (req, res) => {
  res.sendFile(ruta + "inicial-ig.html");
});
router.get("/landing/inicial/goo", (req, res) => {
  res.sendFile(ruta + "inicial-goo.html");
});
router.get("/landing/inicial/fb", (req, res) => {
  res.sendFile(ruta + "inicial-fb.html");
});
router.get("/landing/inicial/in", (req, res) => {
  res.sendFile(ruta + "inicial-in.html");
});

router.post("/landing/matricula", async (req, res) => {
  const {
    nombreApellido,
    nivelEducativo,
    edad,
    institucionProveniente,
    nombrePadre,
    apellidoPadre,
    nombreMadre,
    apellidoMadre,
    direccion,
    telefono,
    mail,
    mensaje,
    como,
    cual,
    red,
  } = req.body;

  if (nombreApellido && mail && edad) {
    contentHtml = `
    <h4>Este es un mensaje autogenerado por el formulario de admisiones, a continuación se detallan los datos del mismo:</h4>
    <p>Nombre del alumno entrante: ${nombreApellido}</p>
    <p>Edad: ${edad}</p>
    <p>Nivel educativo: ${nivelEducativo}</p>
    <p>Institución proveniente: ${institucionProveniente}</p>
    <p>Nombre del Padre: ${nombrePadre + " " + apellidoPadre}</p>
    <p>Nombre de la Madre: ${nombreMadre + " " + apellidoMadre}</p>
    <p>Dirección: ${direccion}</p>
    <p>telefono: ${telefono}</p>
    <p>Correo: ${mail}</p>
    <p>¿Cómo nos conociste?: ${como != "Otro" ? como : "otro, " + cual}</p>
    <p>¿Porque eligieron la institución?: ${mensaje}</p>
    <p>Origen del formulario: ${red}</p>
    `;
    asunto = "Formulario Admisión - " + nombreApellido;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.CCJ_SMTP_USER,
        pass: process.env.CCJ_SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "web-form@colegiociudadjardin.edu.ar",
      to: "retojonatan@colegiociudadjardin.edu.ar",
      subject: asunto,
      html: contentHtml,
    });

    await grabarDatos(req.body);

    res.json({
      success: true,
    });
  } else {
    res.json({
      success: false,
    });
  }

  async function grabarDatos(data) {
    const {
      nombreApellido,
      nivelEducativo,
      edad,
      institucionProveniente,
      nombrePadre,
      apellidoPadre,
      nombreMadre,
      apellidoMadre,
      direccion,
      telefono,
      mail,
      mensaje,
      como,
      cual,
      red,
    } = data;

    const datos = {
      nombreApellido,
      nivelEducativo,
      edad,
      institucionProveniente,
      nombrePadre,
      apellidoPadre,
      nombreMadre,
      apellidoMadre,
      direccion,
      telefono,
      mail,
      mensaje,
      como,
      cual,
    };

    const matriculado = new Matriculado({
      red,
      datos,
    });

    await matriculado.save();
  }
});

router.post("/landing/consulta", async (req, res) => {
  const { nombre, mail, red, nivel } = req.body;
  if (nombre && mail && nivel) {
    const contentHtml = `
    <h4>Este es un mensaje autogenerado por los formularios de contacto,
    a continuación se detallan los datos del mismo:</h4>
    <p>Nombre del contacto: ${nombre}</p>
    <p>Correo: ${mail}</p>
    <p>Origen del formulario: ${red}</p>
    <p>Nivel del cual fue enviado: ${nivel}</p>
    `;

    const asunto = "Formulario de consulta - " + nombre;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.CCJ_SMTP_USER,
        pass: process.env.CCJ_SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "web-form@colegiociudadjardin.edu.ar",
      to: "retojonatan@colegiociudadjardin.edu.ar",
      subject: asunto,
      html: contentHtml,
    });

    await grabarConsulta(req.body);
    res.json({
      success: true,
    });
  } else {
    res.json({
      success: false,
    });
  }

  async function grabarConsulta(data) {
    const { nombre, mail, red, nivel } = data;

    const datos = {
      nombre,
      mail,
      nivel,
    };

    const consulta = new Consulta({
      red,
      datos,
    });

    await consulta.save();
  }
});

router.get("/mati/check/:rrss", async (req, res) => {
  const rrss = req.params.rrss;
  const search = rrss.charAt(0).toUpperCase() + rrss.slice(1);
  const datos = await Matriculado.find({ red: search });
  res.send(datos);
});

module.exports = router;
