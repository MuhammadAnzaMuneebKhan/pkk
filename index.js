/** @format */
const express = require('express');
const app = express();

// Route to handle date inputs
app.get('/api/timestamp/:date_string?', (req, res) => {
  let dateString = req.params.date_string;

  // If no date is provided, use current date
  if (!dateString) {
    dateString = new Date().toISOString();
  }

  // Parse the date string
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return res.json({ error: 'Invalid date' });
  }

  // Send back the date in Unix and UTC formats
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});
app.get('/', (req, res) => {
  res.json({
    TypeSearch: 'http://localhost:3000/api/timestamp/2024-02-07',
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
