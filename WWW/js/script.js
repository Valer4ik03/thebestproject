function handleCheckboxChange() {
	var checkbox = document.getElementById("toggle-darkmode");
	var linkElement = document.getElementById("css-link");
	if (checkbox.checked) {
	  
	  console.log("Checkbox вибрано");
	  // Додайте код, який потрібно виконати, коли checkbox вибрано
	  linkElement.href = "CSS/darkmode.css";
	} else {
	
	  console.log("Checkbox не вибрано");
	  // Додайте код, який потрібно виконати, коли checkbox не вибрано
	  linkElement.href = "CSS/lightmode.css";
	}
  }
  