const shareServiceFormHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/sharePage');
};


const selectPlatformFormHandler = async (event) => {
  event.preventDefault();
  const selectedPlatform = document.querySelector('#platform').value.trim(); 
  
  if (selectedPlatform){
    const response = await fetch('api/profileMatching',{
      method: 'put',
      body: JSON.stringify({ selectedPlatform }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok){

      const data = await response.json();
      console.log(data);
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