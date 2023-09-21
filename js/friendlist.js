
// selecting friendList container
const friendListSpace = document.querySelector(".friendList");


//fetching json file using fetch api
fetch("friends.json")
  .then((response) => {

    //if response is not ok then throw error
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => { //if no error then json file will be iterated via forEach loop 
    data.forEach((element) => {

      //creating div element.
      const divTag = document.createElement("div");

      //setting created element with class name.
      divTag.setAttribute("class", "friend_list_child");
      const divTagCssText =  "width: 507px; height : 120px; background-color: #4d66b4; margin-bottom: 15px;";
      divTag.style.cssText = divTagCssText; //setting css style to the div tag created div tag.
      
      //creating markup structure for the value received from the json file.
      const innerHTMLText =
        `<div class='list_container'>` +
        `<div class='image_space'>` +
        `<img style='width:80px; height: 80px; border-radius: 50%' src='${element.img}' alt='friend list img'>` +
        `</div>` +
        `<div class='friend_name'>` +
        `<div class='name' style='color: white'>${element.first_name} ${element.last_name}</div>` +
        `<div class='email_id'>${element.email}</div>` +
        `</div>` +
        `</div>`;
      //assigned the markup to the divTag innerhtml
      divTag.innerHTML = innerHTMLText;

      //selecting .list_container from the markup created.
      const friendListClass = divTag.querySelector(".list_container");
      const friendListCssText =  "display : flex; margin-top: 20px; box-sizing: border-box;padding-left: 20px;";
      friendListClass.style.cssText = friendListCssText; //adding style to the list_container

      //selecting .name from the markup created
      const friendName = divTag.querySelector('.name');
      const friendNameCssText = "color: #ffff; font-size: 21px";
      friendName.style.cssText = friendNameCssText; //adding style to the .name 

      //selecting .email_id from the markup created.
      const emailId = divTag.querySelector('.email_id');
      const emailIdCssText = "color: #ffff;font-weight: 300";
      emailId.style.cssText = emailIdCssText; //adding style to the email_id for ux to ui match

      const cssText =
        "box-sizing: border-box;margin-left: 20px; display: flex;flex-direction: column;justify-content: space-evenly;height: 60px;margin-top: 10px;";
      divTag.querySelector(".friend_name").style.cssText = cssText; //adding style to the friend name for ux to ui match.
      friendListSpace.append(divTag); //divTag will be appended iteratively to the parent container friendListSpace until last value of the json file read.
    });
  })
  .catch((error) => { //if there is error in reading the json file will catch the error and log it to the console.
    console.error("Error fetching the JSON file:", error);
  });
