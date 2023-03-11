const shareServiceFormHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/sharePage');
};
  
  
  
  document
    .querySelector('.start-sharing')
    .addEventListener('submit', shareServiceFormHandler);