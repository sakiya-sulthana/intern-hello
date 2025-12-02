function loadEvents() {
    fetch("events.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load events.json");
            }
            return response.json();
        })
        .then(events => {
            const eventList = document.getElementById("event-list");

            // Clear existing list
            eventList.innerHTML = "";

            // Loop through the event objects and add them to the list
            events.forEach(event => {
                const li = document.createElement("li");
                 li.innerHTML = `
                    <strong>${event.name}</strong><br>
                    Date: ${event.date}<br>
                    Location: ${event.location}
                `;

       eventList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error loading events:", error);
        });
}

// Automatically load events when the script runs
loadEvents();