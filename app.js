document.getElementById('ban-appeal-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var formData = new FormData(this);
  
  axios.post('https://discord.com/api/webhooks/1203751729414283415/y4dyw6sASlippCfTuH9kCT4MYEY5EZuTvxno4FUL2n4_Wud8ueI2iZWC_G5vkYI8j4Pr', formData)
    .then(function(response) {
      console.log('Success:', response);
      alert('Ban appeal submitted successfully!');
      // Optionally, redirect the user to a thank you page
    })
    .catch(function(error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
});
