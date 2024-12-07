/*
Sushil Thapa
C0919991
*/

document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files.length) {
      alert('Please select a file before uploading.');
      return;
    }
  
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      //Simulate file upload (replace with actual S3 logic later)
      alert('File uploaded successfully! Waiting for processing...');

      //Read the file content as text
      const reader = new FileReader();

      reader.onload = function (event) {
        const fileContent = event.target.result;

        //Split file content into lines, sort them, and join them back
        const sortedContent = fileContent.split('\n').sort().join('\n');

        //Display sorted content on the webpage
        document.getElementById('sortedContent').textContent = sortedContent;
        document.getElementById('output').style.display = 'block';
      };

      // Read the file as text
      reader.readAsText(file);
      
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload the file.');
    }
});
