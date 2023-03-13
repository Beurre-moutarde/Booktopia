const shareServiceFormHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/sharePage');
};


const selectPlatformFormHandler = async (event) => {
  event.preventDefault();
  // const selectedPlatform = document.querySelector('#platform').value.trim();
  const selectedPlatform = document.querySelector('#service-dropdown').value; 
  // console.log(selectedPlatform);
  if (selectedPlatform){
    const response = await fetch('api/profileMatching',{
      method: 'put',
      body: JSON.stringify({ selectedPlatform }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if(response.ok){
      const data = await response.json();
      console.log(data)
      if (data.length === 0){
        document.querySelector('#application-login').value = "Current Not Available";
        document.querySelector('#application-password').value = "Current Not Available";
      } else if (data.hasMessage) {
        //console.log(data.hasMessage);
        document.querySelector('#application-login').value = data.hasMessage;
        document.querySelector('#application-password').value = data.hasMessage;
      } else {
        const application_login = data[0].application_login;
        const application_password = data[0].application_password;
        document.querySelector('#application-login').value = application_login;
        document.querySelector('#application-password').value = application_password;
      }
    }else{
    alert(response.statusText);
    }
  }
};
  
  
  
  document
    .querySelector('.start-sharing')
    .addEventListener('submit', shareServiceFormHandler);

  document
  .querySelector('.select-platform')
  .addEventListener('submit', selectPlatformFormHandler);