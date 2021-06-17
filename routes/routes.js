const { Router } = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const router = Router();

const ruta = path.join(__dirname, "../public/");

// rutas del colegio

router.get("/", (req, res) => {
  res.send(index);
});
router.get("/index", function (req, res) {
  res.sendFile(ruta + "Index.html");
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

// operaciones de formularios del colegio
router.post("/OperacionFormulario/MensajeAyuda", async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  if (false) {
    res.json({
      success: true,
    });
  } else {
    res.json({
      success: false,
    });
  }
});

router.post("/OperacionFormulario/RegistroAdmision", async (req, res) => {
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
  } = req.body;

  if (false) {
    contentHtml = `
    <h4>Este es un mensaje autogenerado por el formulario de la web, a continuacion se detallan los datos del mismo:</h4>
    <p>Nombre: ${nombre}</p>
    <p>Correo: ${email}</p>
    <p>Asunto: ${asunto}</p>
    `;

    const transporter = nodemailer.createTransport({
      host: "mail.ccj.edu.ar",
      port: 465,
      secure: true,
      auth: {
        user: "mail-form@ccj.edu.ar",
        pass: "xxxxxx",
      },
    });

    const info = await transporter.sendMail({
      from: "mail-form@ccj.edu.ar",
      to: "mail-form@ccj.edu.ar",
      subject: "Formulario Admisiones",
      html: contentHtml,
    });

    console.log("Mensaje enviado", info);
    res.json({
      success: true,
    });
  } else {
    res.json({
      success: false,
    });
  }
});

module.exports = router;
