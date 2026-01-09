import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

const generateReceipt = (payment, user, property) => {
  const doc = new PDFDocument();
  const fileName = `receipt-${payment._id}.pdf`;
  const filePath = path.join("receipts", fileName);

  if (!fs.existsSync("receipts")) fs.mkdirSync("receipts");

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(20).text("Real Estate Payment Receipt", { align: "center" });
  doc.moveDown();

  doc.fontSize(12).text(`Receipt ID: ${payment._id}`);
  doc.text(`Customer: ${user.name}`);
  doc.text(`Email: ${user.email}`);
  doc.text(`Property: ${property.title}`);
  doc.text(`Amount Paid: ₹${payment.amount}`);
  doc.text(`Status: ${payment.status}`);
  doc.text(`Date: ${new Date().toLocaleDateString()}`);

  doc.end();

  return filePath;
};

export default generateReceipt;
