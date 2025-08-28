const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

const upload = multer({
  limits: { fileSize: 100 * 1024 }, 
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", upload.single("photo"), (req, res) => {
  const formData = req.body;
  const photo = req.file ? req.file.originalname : "No file uploaded";

  console.log("Form Data:", formData);
  console.log("Uploaded File:", photo);

  
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Thank You</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #6dd5fa, #2980b9);
          color: white;
          text-align: center;
          padding: 50px;
        }
        .container {
          background: rgba(0,0,0,0.6);
          padding: 30px;
          border-radius: 15px;
          display: inline-block;
          text-align: left;
        }
        h1 {
          color: #f1c40f;
        }
        p {
          margin: 8px 0;
        }
      </style>
    </head>
    <body>
      <h1>🎉 Thank You for Registering!</h1>
      <div class="container">
        <p><strong>Full Name:</strong> ${formData.fullname}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Gender:</strong> ${formData.gender}</p>
        <p><strong>Course:</strong> ${formData.course}</p>
        <p><strong>Date of Birth:</strong> ${formData.dob}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>Photo:</strong> ${photo}</p>
      </div>
    </body>
    </html>
  `);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
