

const body = document.getElementsByTagName("body");
const root = document.getElementById('root');
const mainContainer = document.getElementById('mainContainer');

// 태그 생성 함수
function CreateTag(tagname) {

  let element = document.createElement(tagname);

  return element;
}

function getTagname(get) {

  let divTag = document.getElementsByTagName(get);
  // let tag = document.getElementsByTagName(get);

  return divTag;
}

for (let i = 0; i < 6; i++) {

  let div = CreateTag("div");
  mainContainer.appendChild(div);

}

const div = getTagname("div");
console.dir(div);

mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "row";

for (let i = 0; i < div.length; i++) {
  mainContainer.children[i].style.width = "100px"
  mainContainer.children[i].style.height = "100px"
  mainContainer.children[i].style.backgroundColor = "green"
  mainContainer.children[i].style.border = "1px solid black"


}
