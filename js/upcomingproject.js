import { errorCode } from "./errors.js";


//exporting function for the right block upcoming projects.
export function assignUpcomingImage() {
  const movieContainer = document.querySelector(".movie_project");
  const fragment = document.createDocumentFragment();
  fetch("../data/posters.json")
    .then((response) => {
      if (!response.ok) {
        console.log(errorCode);
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((x) => {
        
        const imageTag = document.createElement("div");
        imageTag.classList.add("movie_image");

        const movieImage = document.createElement("img");
        movieImage.classList.add("project_image");
        movieImage.src = `${x.imageUrl}`;

        imageTag.appendChild(movieImage);
        fragment.appendChild(imageTag);
      });
      movieContainer.appendChild(fragment);
    })
    .catch((error) => console.log("error : ", error));
}
