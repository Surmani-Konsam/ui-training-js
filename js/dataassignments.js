import { fragment,friendListSpace } from "./domConstants.js";

export function dataAssignment(){
fetch("../data/friends.json")
  .then((response) => {
    //if response is not ok then throw error
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    let rowDiv;
    //if no error then json file will be iterated via forEach loop
    data.forEach((element, index)  => {
      if (index % 3 === 0) {
        rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
      }

      //creating div element.
      const divTag = document.createElement("div");
      divTag.classList.add('friend_list_child');

      const listContainerTag = document.createElement('div');
      listContainerTag.classList.add('list_container');

      const imageSpaceTag = document.createElement('div');
      imageSpaceTag.classList.add('image_space');
      
      const imageTag = document.createElement('img');
      imageTag.classList.add('image_container');
      imageTag.src = `${element.img}`;
      imageTag.alt = 'friend list img';

      imageSpaceTag.appendChild(imageTag);

      const friendNameTag = document.createElement('div');
      friendNameTag.classList.add('friend_name');


      const nameDivTag = document.createElement('div');
      nameDivTag.classList.add('name');
      nameDivTag.textContent = `${element.first_name} ${element.last_name}`;


      const emailDivTag = document.createElement('div');
      emailDivTag.classList.add('email_id');
      emailDivTag.textContent = `${element.email}`;

      friendNameTag.appendChild(nameDivTag);
      friendNameTag.appendChild(emailDivTag);

      listContainerTag.appendChild(imageSpaceTag);
      listContainerTag.appendChild(friendNameTag);

      divTag.appendChild(listContainerTag);


      //selecting .list_container from the markup created.
      const friendListClass = divTag.querySelector(".list_container");
      friendListClass.classList.add('list_container_style');;

      //selecting .name from the markup created
      const friendName = divTag.querySelector(".name");
      friendName.classList.add('name_style');

      //selecting .email_id from the markup created.
      const emailId = divTag.querySelector(".email_id");
      emailId.classList.add('email_id_style');
      
      rowDiv.appendChild(divTag);
      fragment.appendChild(rowDiv)

    });
    friendListSpace.append(fragment); //will be added only one time to the parent dom.
  })
  .catch((error) => {
    //if there is error in reading the json file will catch the error and log it to the console.
    console.error("Error fetching the JSON file:", error);
  });
}
