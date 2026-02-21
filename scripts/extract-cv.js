const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.resolve('E:/RAMAN/CERTIFICATES/CV_RESUME/SREERAM_CV.pdf');

if (!fs.existsSync(pdfPath)) {
  console.error('PDF not found at', pdfPath);
  process.exit(2);
}

const dataBuffer = fs.readFileSync(pdfPath);

const pdfFn = (typeof pdf === 'function') ? pdf : (pdf && pdf.default) ? pdf.default : null;
if (!pdfFn) {
  console.error('pdf-parse export shape not supported');
  process.exit(1);
}

pdfFn(dataBuffer).then(function(data) {
  // Output plain text to stdout
  console.log(data.text);
}).catch(err => {
  console.error('Failed to parse PDF:', err);
  process.exit(1);
});
