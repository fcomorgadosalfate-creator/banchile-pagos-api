const express = require("express");

const app = express();
app.use(express.json());

// Salud / base
app.get("/", (req, res) => res.status(200).send("OK"));
app.get("/health", (req, res) => res.status(200).send("OK"));

// Return (usuario)
app.get("/pagos/return", (req, res) => {
  res.status(200).send("RETURN OK (aun sin validar con Banchile)");
});

// Webhook (servidor a servidor)
app.post("/pagos/webhook", (req, res) => {
  // por ahora solo confirmamos recepción
  console.log("WEBHOOK recibido:", JSON.stringify(req.body || {}));
  res.status(200).send("WEBHOOK OK");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Listening on", port));
