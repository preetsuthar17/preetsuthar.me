const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.post("/convert-to-pdf", async (req, res) => {
  const { htmlContent } = req.body;

  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  await page.setContent(htmlContent);

  const pdfBuffer = await page.pdf({ format: "A4" });

  await browser.close();

  res.setHeader("Content-Type", "application/pdf");
  res.send(pdfBuffer);
});

app.listen(port, () => {
  console.log(`PDF converter server is running at http://localhost:${port}`);
});
