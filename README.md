# Invoice Generation System

This is a Node.js application for generating PDF invoices based data. It provides efficient solution for automating the invoicing process.
<img src="https://github.com/Vedant-edu/Invoice-Maker/blob/master/data-input.png" alt="Image of webpage for taking input" width="300" height="200">
<img src="https://github.com/Vedant-edu/Invoice-Maker/blob/master/pdf-output.png" alt="Image of webpage for taking input" width="300" height="200">
## Features

- Generate PDF invoices dynamically from HTML templates.
- Handle input data for invoice generation, including product details and customer information.
- Perform calculations for tax and total amounts.
- Customizable HTML template using Handlebars.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/Vedant-edu/InvoicePDF.git
```

2. Navigate to the project directory:

```
cd invoice-generation
```

3. Install dependencies:

```
npm install
```

## Usage

1. Customize the HTML template (`template.html`) located in the `public` directory according to your requirements.

2. Start the server:

```
node app.js
```

3. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

4. Fill out the invoice details in the provided form and submit.

5. Your PDF invoice will be generated and downloaded automatically.

## Configuration

- The default port for the server is 3000. You can change this by modifying the `port` variable in `app.js`.
- You can customize the input fields and styling of the invoice template by modifying the HTML in `template.html`.

## Author

- Vedant Mute(https://github.com/VedantMute)

## Disclaimer
created as a project for sahyadri dcllp company for educational purpose. The invoice generated and details used are for educational purpose only.
