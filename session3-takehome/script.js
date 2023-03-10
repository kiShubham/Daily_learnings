//Team Data
const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja",
    bio:
      "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    avatar: "https://avatars.dicebear.com/api/avataaars/annakendrick.svg"
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator",
    bio:
      "Creates new illustrations each week, will kill for coffee, and loves beaches",
    avatar: "https://avatars.dicebear.com/api/avataaars/harryfn.svg"
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer",
    bio:
      "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
    avatar: "https://avatars.dicebear.com/api/avataaars/sofiasul.svg"
  }
];

//Modify Code below this line

//Content Selected using ID.
const content = document.getElementById("content");

/**
 * Creates and img HTML element with given src and alt
 * @param {string} src - Source for image
 * @param {string} alt - Alt text for image
 * @returns An Image HTML Element
 */

const getImageElement = (src, alt) => {
  let image = document.createElement("img");
  // console.log(image);
  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
  image.style.height = "100px";
  image.style.width = "100px";
  return image;
};
// console.log(getImageElement("hurray", "shubham"));
/* <img src="hurray" alt="shubham"></img> */

/**
 * Creates a new card with passed parameters.
 * @param {string} id - Unique id from team data
 * @param {string} fullName - Name of the team member
 * @param {string} jobTitle - Job title of the team memeber
 * @param {string} bio - Description Bio
 * @param {string} avatar - Source of the avatar image.
 * @returns section HTML element with Image and Text
 */
function generateCard(id, fullName, jobTitle, bio, avatar) {
  //1. Create a new "section" element and set the className and id
  let section = document.createElement("section");
  section.setAttribute("class", "team-member");
  section.setAttribute("id", id);

  //2. Generate the image using getImageElement() function
  //Hint - Use fullname as alt for the image.
  let img = getImageElement(avatar, fullName);

  //3. Create a div for text content
  let div = document.createElement("div");

  //4. Create an h2 for fullName
  let h2 = document.createElement("h2");
  h2.innerText = fullName;
  //5. Create an h3 for jobTitle
  let h3 = document.createElement("h3");
  h3.innerText = jobTitle;
  //6. Create a p for bio
  let p = document.createElement("p");
  p.innerText = bio;
  //7. Append the fullName, jobTitle, and bio element
  //   to the div created for text.
  div.append(h2);
  div.append(h3);
  div.append(p);
  //8. Append the Image and the Text div
  //   to the new section you created in step 1
  section.append(img);
  section.append(div);
  //Return the new section element created.
  return section; // dom node or say html element .
}
// console.log(generateCard("id", "fullName", "jobtitle", "bio", "avatar"));
/* <section class="team-member" id="id">
   <img src="avatar" alt="fullName"></img>
  <div>
  <h2>fullName</h2>
  <h3>jobtitle</h3>
  <p>bio</p>
  </div>
  </section> */

/**
 * Generates and returns an array of HTML elements
 * @param {Array} data Team data array
 */
// console.log(team);//array of objects ;
function generateCardArray(data) {
  const cards = [];
  for (let i = 0; i < data.length; i++) {
    let element = generateCard(
      data[i].id,
      data[i].fullName,
      data[i].jobTitle,
      data[i].bio,
      data[i].avatar
    );
    cards.push(element);
  }
  //Add logic to populate `cards` array below

  //Return cards array
  return cards;
}
// console.log(generateCardArray(team));//(3) [HTMLElement, HTMLElement, HTMLElement]
const cardsArray = generateCardArray(team);
// [<section>...</section>, <section>...</section>, <section>...</section>]
//Run a loop for the cardsArray and append its elements to content.
for (let card of cardsArray) {
  content.append(card);
}
//Modify Code above this line
