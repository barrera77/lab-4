(function () {
  let newUsersList = document.querySelector(".new-users-list");

  // READ THE PDF BEFORE STARTING
  // Step 1-5 is read the pdf.

  // Add your code here

  const newUserForm = document.querySelector(".new-user-form");
  newUserForm.addEventListener("submit", onHandleNewUserForm);

  function onHandleNewUserForm(e) {
    e.preventDefault();

    isSuccess();
    //Reset input values
    resetInputValues();
  }

  const usernameElement = document.querySelector("#input-username");
  usernameElement.addEventListener("input", onHandleUsernameElementInput);

  const cityElement = document.querySelector("#input-city");
  cityElement.addEventListener("input", onHandleCityElementInput);

  const provinceElement = document.querySelector("#select-province");
  provinceElement.addEventListener("select", onHandleProvinceElementSelection);

  let isFormValid = true;

  function onHandleUsernameElementInput() {
    const username = usernameElement.value;

    if (isValueNotEmpty(username) && !hasWhiteSpace(username)) {
      usernameElement.classList.remove("is-invalid");
      return username;
    } else {
      isFormValid = false;
      usernameElement.classList.add("is-invalid");
    }
  }

  function onHandleCityElementInput() {
    const city = cityElement.value;
    if (isValueNotEmpty(city)) {
      cityElement.classList.remove("is-invalid");
      return city;
    } else {
      isFormValid = false;
      cityElement.classList.add("is-invalid");
    }
  }

  function onHandleProvinceElementSelection() {
    const province = provinceElement.value;
    if (isValueNotEmpty(province)) {
      provinceElement.classList.remove("is-invalid");
      return province;
    } else {
      provinceElement.classList.add("is-invalid");
      isFormValid = false;
    }
  }

  function isSuccess() {
    let username = onHandleUsernameElementInput();
    let city = onHandleCityElementInput();
    let province = onHandleProvinceElementSelection();
    console.log(username, city, province);

    if (isFormValid === true) {
      addUser(username, city, province);
    }
  }

  //Reset input values
  function resetInputValues() {
    provinceElement.value = "";
    cityElement.value = "";
    usernameElement.value = "";
  }

  // the isValueNotEmpty function:
  // returns true if value not empty
  // returns false if the value is empty
  function isValueNotEmpty(value) {
    if (value !== "") {
      return true;
    }
    return false;
  }

  // the hasWhiteSpace function
  // returns true if s has whitespace
  // returns false if s does not have whitespace
  function hasWhiteSpace(s) {
    return /\s/.test(s);
  }

  // adds user to the page.
  function addUser(username, city, province) {
    let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
              <div class="fw-bold">${username}</div>
              ${city}, ${province}
          </div>
          </li>`;
    newUsersList.innerHTML = newUsersList.innerHTML + newUser;
  }
})();
