//your JS code here. If required.

const form = document.querySelector("form");
const fontsize = document.getElementById("fontsize");
const fontcolor = document.getElementById("fontcolor");

// Apply saved preferences when page loads
function loadPreferences() {
  const savedFontSize = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("fontsize="));

  const savedFontColor = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("fontcolor="));

  if (savedFontSize) {
    fontsize.value = savedFontSize.split("=")[1];
    document.documentElement.style.setProperty(
      "--fontsize",
      savedFontSize.split("=")[1] + "px"
    );
  }

  if (savedFontColor) {
    fontcolor.value = savedFontColor.split("=")[1];
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedFontColor.split("=")[1]
    );
  }
}

// Save preferences in cookies
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const size = Number(fontsize.value);
  const color = fontcolor.value;

  if (size < 8 || size > 72 || !fontsize.value) {
    alert("Font size must be between 8 and 72.");
    return;
  }

  document.cookie = `fontsize=${size}; max-age=31536000; path=/`;
  document.cookie = `fontcolor=${color}; max-age=31536000; path=/`;

  document.documentElement.style.setProperty(
    "--fontsize",
    size + "px"
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    color
  );
});

// Run on page load
loadPreferences();
