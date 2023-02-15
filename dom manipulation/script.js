let team = [
  {
    id: "SS",
    src: "./assests/army.jpg",
    name: "S_S",
    stream: "π",
    role:
      "dfjskldjf ddddjfkdjfdjfjd ffjdk jf dfjskldjf ddddjfkdjfdjfjd ffjdk jf dfjskldjf ddddjfkdjfdjfjd ffjdk jf dfjskldjf ddddjfkdjfdjfjd ffjdk radhe"
  },
  {
    id: "AS",
    src: "./assests/roslina.jpg",
    name: "A_S",
    stream: "xyz",
    role:
      "dfjskldjf ddddjfkdjfdjfjd ffjdk jf dfjskldjf ddddjfkdjfdjfjd ffjdk jf dfjskldjf ddddjfkdjfdjfjd ffjdk jf dfjskldjf ddddjfkdjfdjfjd ffjdk radhe"
  },
  {
    id: "VS",
    src: "./assests/ronaldo.jpg",
    name: "V_S",
    stream: "abc",
    role:
      "dfjskldjf ddddjfkdjfdjfjd ffjdk jf dfjskldjf ddddjfkdjfdjfjd ffjdk jf dfjskldjf ddddjfkdjfdjfjd ffjdk jf dfjskldjf ddddjfkdjfdjfjd ffjdk radhe"
  }
];
//just make a section element;
function htmlElement(id, src, name, stream, role) {
  let section = document.createElement("section");

  section.className = "team-member";
  section.id = id;
  let image = document.createElement("img");
  image.src = src;
  image.alt = name;
  image.style.height = "100px";
  image.style.width = "100px";

  let article = document.createElement("article");
  article.id = "container";

  let div = document.createElement("div");
  div.id = "container_1";

  let h3 = document.createElement("h3");
  h3.innerText = name;

  let h4 = document.createElement("h4");
  h4.innerText = stream;

  let divRole = document.createElement("div");
  divRole.id = "role";
  let p = document.createElement("p");
  p.innerText = role;
  //append all accordingly;
  divRole.append(p);

  div.append(h3);
  div.append(h4);
  article.append(div);
  article.append(divRole);
  section.append(image);
  section.append(article);

  return section;
}
console.log(htmlElement("id", "src", "name", "stream", "role"));
//now make a array of containing information in html element

let dataArray = [];
team.forEach((element) => {
  dataArray.push(
    htmlElement(
      element.id,
      element.src,
      element.name,
      element.stream,
      element.role
    )
  );
});
//console.log(dataArray);//(3) [HTMLElement, HTMLElement, HTMLElement]

//now append the arrr[i] in <body>
dataArray.forEach((element) => {
  document.getElementById("main").append(element);
});

// <section class="team-member" id="full-name">
//         <img src="./assests/army.jpg" alt="" height="100px" width="100px" />
//         <article id="container">
//           <div id="container_1">
//             <h3>Shubham Singh</h3>
//             <h4>stream</h4>
//           </div>
//           <div id="role">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
//               minus veniam quia?
//             </p>
//           </div>
//         </article>
//       </section>
