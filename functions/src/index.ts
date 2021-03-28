import * as functions from "firebase-functions";
import fetch from "node-fetch";
import * as nodemailer from "nodemailer";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

exports.getPropertyList = functions.https.onCall(async data => {
  const response = await fetchProperties(data);

  return response;
});

exports.getProperty = functions.https.onCall(async data => {
  const response = await fetchProperties(data);
  const property = response.results[0];
  const pictures = property.pictures.map((picture: string) => {
    return {
      original: picture,
      thumbnail: picture,
    };
  });

  const related = await fetchProperties({
    zone: property.zone,
    town: property.town,
    buyop: property.selling ? "sell" : "rent",
    min_price: property.selling
      ? property.selling_cost - 100000
      : property.renting_cost - 100,
    max_price: property.selling
      ? property.selling_cost + 100000
      : property.renting_cost + 100,
  });

  return {
    ...property,
    pictures,
    related:
      related.results.length > 4
        ? related.results.slice(0, 4)
        : related.results,
  };
});

const fetchProperties = async (params: any) => {
  const urlParams = new URLSearchParams();

  for (const [key, value] of Object.entries<string>(params)) {
    if (Array.isArray(value)) {
      value.map(item => urlParams.append(key, item));
    } else {
      urlParams.append(key, value);
    }
  }

  const url = `${functions.config().witei.url}?${urlParams.toString()}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${functions.config().witei.key}`,
    },
  })
    .then(res => res.json())
    .catch(error => {
      functions.logger.error("Error", error);
    });

  return response;
};

const transporter = nodemailer.createTransport({
  host: "mail.geknology.com",
  port: 465,
  secure: true,
  auth: {
    user: functions.config().mail.user,
    pass: functions.config().mail.pass,
  },
});

transporter.verify((error, success) => {
  if (error) {
    functions.logger.error("Verify Error", error);
  }
});

const template = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return `
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Barreras Tenerife</title>
  </head>
  <body bgcolor="#eee" style="background-color: #eee !important">
    <div
      bgcolor="#eee"
      style="
        background-color: #eee !important;
        padding: 50px 0;
        font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      "
    >
      <h2 style="width: 600px; margin: 0 auto">Nuevo mensaje desde la página web</h2>

      <div
        style="
          background-color: white;
          color: #555;
          font-size: 16px;
          font-weight: 400;
          width: 560px;
          text-align: left;
          margin: 15px auto;
          padding: 20px;
          border-radius: 5px;
        "
      >
        <p>Detalles</p>

        <div style="background-color: #eee; color: black; padding: 1px 6px; border-radius: 5px">
          <p>Nombre: ${name}</p>
          <p>Correo: ${email}</p>
          <p>Mensaje: ${message}</p>
        </div>

    </div>
  </body>
</html>
    `;
};

exports.sendMail = functions.https.onCall(async data => {
  const mailOptions = {
    from: `Inmobiliaria Barreras <${functions.config().mail.user}>`,
    to: "inmobiliariabarreras@gmail.com",
    subject: "Correo de prueba",
    html: template({
      name: data.name,
      email: data.email,
      message: data.message,
    }),
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      functions.logger.error("Error", error);
      return error;
    }
    return "enviado";
  });
});
