import { errorCode } from "./errors.js";

//function fetchcomments exported for use in blender.js.
export function fetchComments() {
  const commentSection = document.querySelector(".comment_section");
  const fragment = document.createDocumentFragment();
  fetch("../data/video.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(errorCode);
      }
      return response.json();
    })
    .then((data) => {
      const comments = data.comments;
      comments.forEach((comment) => {
        //com.name
        //com.comment.

        const mainDiv = document.createElement("div");
        const figure = document.createElement("figure");
        const section = document.createElement("section");
        const reviewerName = document.createElement("div");
        const reviewerComment = document.createElement("div");

        mainDiv.classList.add("comment_section_child");
        figure.classList.add("figure_container");

        const imageTag = document.createElement("img");
        imageTag.classList.add("image_container");
        imageTag.src = `${comment.image}`;
        figure.appendChild(imageTag);

        //parent comment container
        section.classList.add("comment_container");

        //reviewer name
        reviewerName.classList.add("reviewer");
        reviewerName.textContent = `${comment.name}`;

        reviewerComment.classList.add("reviewer_comment");
        reviewerComment.textContent = `${comment.comment}`;

        section.appendChild(reviewerName);
        section.appendChild(reviewerComment);
        mainDiv.appendChild(figure);
        mainDiv.appendChild(section);

        fragment.appendChild(mainDiv);
      });
      commentSection.appendChild(fragment);
    })
    .catch((error) => {
      console.log("caught error : ", error);
    });
}
