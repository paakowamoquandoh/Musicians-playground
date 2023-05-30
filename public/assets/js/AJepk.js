 // Function to generate the PDF
        function generatePDF() {
          // Create a new jsPDF instance
          const doc = new jsPDF();
      
          // Get the HTML content to be converted to PDF
          const htmlContent = document.querySelector('html');
      
          // Convert the HTML to PDF
          doc.html(htmlContent, {
            callback: function (pdf) {
              // Save the PDF file
              pdf.save('downloaded.pdf');
            },
          });
        }
      
        // Add click event listener to the download button
        const downloadButton = document.getElementById('download-btn');
        downloadButton.addEventListener('click', generatePDF);