import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello World!</h1>
    <div class="card">
      <p id='cc'>Loading...</p>
    </div>
  </div>
`;

// Initialize the agent on application start.
const fpPromise = FingerprintJS.load({
  apiKey: "2a84LvCBBx8okCwgNSnZ",
});

// Fetch the visitorId and display it on the page.
fpPromise
  .then((fp) => fp.get())
  .then((result) => {
    // Display the visitorId in the "cc" element
    console.log(result);
    document.getElementById(
      "cc"
    ).textContent = `Visitor ID: ${result.visitorId}`;
  })
  .catch((error) => {
    // Handle errors and display them on the page
    document.getElementById("cc").textContent = `Error: ${error.message}`;
  });
