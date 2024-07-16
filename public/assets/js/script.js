document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  async function loadCourses() {
    try {
      const response = await fetch("/courses");
      if (response.ok) {
        const data = await response.json();
        displayCourses(data.files);
      } else {
        content.innerHTML = "Failed to load courses.";
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      content.innerHTML = "Failed to load courses.";
    }
  }

  function displayCourses(files) {
    content.innerHTML = "<h2>Courses</h2>";
    files.forEach((file) => {
      const fileElement = document.createElement("div");
      fileElement.innerHTML = `
                <h3>${file.name}</h3>
                <a href="${file.webContentLink}" target="_blank">View</a>
            `;
      content.appendChild(fileElement);
    });
  }

  loadCourses();
});


