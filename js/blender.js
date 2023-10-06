import { movieDetailAssignment } from "./movieDetailAssignment.js";
import { fetchComments } from "./comments.js";
import { assignUpcomingImage } from "./upcomingproject.js";

function initializeApp() {
  movieDetailAssignment();
  fetchComments();
  assignUpcomingImage();
}

initializeApp();
