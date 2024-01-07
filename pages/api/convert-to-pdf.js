import puppeteer from "puppeteer";
import chromium from "chrome-aws-lambda";

export default async (req, res) => {
  try {
    console.log("API Route: Start");

    const { htmlContent } = req.body;

    const browser = await puppeteer.launch({
      headless: "false",
      args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent);

    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    console.log("API Route: End");

    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Internal Server Error");
  }
};
