```javascript
const button = document.getElementById("welcomeButton");
const message = document.getElementById("message");
const clock = document.getElementById("clock");

button.addEventListener("click", function () {
    message.textContent = "Congratulations! JavaScript is working!";
    button.textContent = "Success!";
});

function updateClock() {
    const now = new Date();

    clock.textContent = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

updateClock();

setInterval(updateClock, 1000);
```
