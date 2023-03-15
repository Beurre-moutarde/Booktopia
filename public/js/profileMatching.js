const usingServiceListEl = document.querySelector(".using-service-list");
const sharingServiceListEl = document.querySelector(".sharing-service-list");
const withServiceMessage = document.querySelector("#with-service");

const shareServiceFormHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/sharePage");
};

const selectPlatformFormHandler = async (event) => {
  event.preventDefault();

  const selectedPlatform = document.querySelector(
    "#right-service-dropdown"
  ).value;
  if (selectedPlatform) {
    const response = await fetch("api/profileMatching", {
      method: "put",
      body: JSON.stringify({ selectedPlatform }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      if (data.length === 0) {
        document.querySelector("#application-login").value =
          "Currently Not Available";
        document.querySelector("#application-password").value =
          "Currently Not Available";
      } else if (data.hasMessage) {
        document.querySelector("#application-login").value = data.hasMessage;
        document.querySelector("#application-password").value = data.hasMessage;
      } else {
        const application_login = data[0].application_login;
        const application_password = data[0].application_password;
        document.querySelector("#application-login").value = application_login;
        document.querySelector("#application-password").value =
          application_password;
      }
    } else {
      alert(response.statusText);
    }
  }
};

const stopUsingHandler = async (event) => {
  event.preventDefault();
  const stopUsingService = event.target.children[0].value;
  if (stopUsingService) {
    const response = await fetch("api/profileMatching/stopUsing", {
      method: "put",
      body: JSON.stringify({ stopUsingService }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
      const data = await response.json();
    } else {
      alert(response.statusText);
    }
  }
};

const stopSharingHandler = async (event) => {
  event.preventDefault();
  const stopSharingService = event.target.children[0].value;
  console.log(stopSharingService);
  if (stopSharingService) {
    const response = await fetch("api/profileMatching/stopSharing", {
      method: "delete",
      body: JSON.stringify({ stopSharingService }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
      const data = await response.json();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".start-sharing")
  .addEventListener("submit", shareServiceFormHandler);

document
  .querySelector(".select-platform")
  .addEventListener("submit", selectPlatformFormHandler);

if (usingServiceListEl !== null) {
  usingServiceListEl.addEventListener("submit", stopUsingHandler);
}

if (sharingServiceListEl !== null) {
  sharingServiceListEl.addEventListener("submit", stopSharingHandler);
}
