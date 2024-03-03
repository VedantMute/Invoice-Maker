const express = require('express');
const pdf = require('html-pdf');
const bodyParser = require('body-parser');
const path = require('path');
const handlebars = require('handlebars');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Read template file
const templateHtml = fs.readFileSync(path.join(__dirname, 'public', 'template.html'), 'utf-8');
const template = handlebars.compile(templateHtml);
app.post('/generate-pdf', (req, res) => {
    // Ensure all arrays have the same length as productName
    const productNameLength = req.body.productName.length;
    const paddedArrays = ['sr_no', 'sacNo', 'unit', 'quantity', 'rate', 'amount'].reduce((acc, key) => {
        const arr = req.body[key] || []; // If the array is not present, use an empty array
        acc[key] = arr.length < productNameLength ? arr.concat(Array(productNameLength - arr.length).fill('')) : arr;
        return acc;
    }, {});
// Multiply grandTotal by 0.09 and round to 2 decimal points

console.log(req.body.grand_total);
const tax = (req.body.grand_total * 0.09).toFixed(2);
console.log(tax);

// Multiply tax by 2 (assuming this is the tax amount)
const tax_amt = (tax * 2).toFixed(2);
console.log(tax_amt);

// Add grandTotal, tax, and tax_amt to get the total amount after tax
const after_tax = (parseFloat(req.body.grand_total) + parseFloat(tax_amt)).toFixed(2);
console.log(after_tax);
    // Compile data into HTML using Handlebars
    const html = template({
        invoiceNo: req.body.invoice_no,
        invoiceDate: req.body.invoice_date,
        workNo: req.body.work_no,
        workDate: req.body.work_date,
        customerName: req.body.cname,
        customerAddress: req.body.caddress,
        customerGSTIN: req.body.cgst,
        customerState: req.body.cstate,
        customerHSN: req.body.chsn,
        customerPAN: req.body.cpan,
        siteName: req.body.site_name,
        siteAddress: req.body.site_address,
        products: req.body.productName.map((productName, index) => ({
            srNo: paddedArrays.sr_no[index],
            description: productName,
            sacNo: paddedArrays.sacNo[index],
            unit: paddedArrays.unit[index],
            quantity: paddedArrays.quantity[index],
            rate: paddedArrays.rate[index],
            amount: paddedArrays.amount[index]
        })),
        grandTotal: req.body.grand_total,
        tax: tax, // Add tax to the template data
        tax_amt: tax_amt,
        after_tax: after_tax
    });
    // Generate PDF from HTML
    pdf.create(html).toBuffer((err, buffer) => {
        if (err) {
            console.error(err);
            return res.send('PDF generation error');
        }
        // Set headers for file download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="invoice.pdf"');
        
        // Send the buffer as the response
        res.send(buffer);
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// Code by - Vedant Mute 