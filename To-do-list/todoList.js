//add an event listener to the add button
document.getElementById("addButton").addEventListener("click", addOneTask);
//add an event listener to the input field
document.getElementById("addInput").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addOneTask();
    }
});
//Select the spans in the LI's and give them an event listener
let liClose = document.getElementsByClassName("close");
Object.keys(liClose).map(function(key) {
  liClose[key].addEventListener("click", deleteLi);
});

//give an event listener to the spanText
let liDone = document.getElementsByClassName("textSpan");
console.log(typeof liDone)
Object.keys(liDone).map(function(key) {
  liDone[key].addEventListener("click", addDoneClass);
});
//toggle the done class on the clicked span (li);
function addDoneClass(clickEvent) {
    clickEvent.target.classList.toggle("done");
}
//delete the li when "X" span is clicked
function deleteLi(clickEvent) {
    const unorderedList = document.getElementById("list");
    
    unorderedList.removeChild(clickEvent.target.parentNode.parentNode)
}

function addOneTask() {
    
  if(document.getElementById("addInput").value != "" && document.getElementsByTagName('li').length < 11) {
      
        const unorderedList = document.getElementById("list");
        const listItem = document.createElement("li");
        //TEXT SPAN//
        const textSpan = document.createElement("span");
        textSpan.classList.add("textSpan");
        const textNode = document.createTextNode(document.getElementById("addInput").value);
        textSpan.appendChild(textNode);
        textSpan.addEventListener("click", addDoneClass);
        listItem.appendChild(textSpan);
        //CLOSE SPAN//
        const closeSpan = document.createElement("span");
        closeSpan.classList.add("close");
        closeSpan.addEventListener("click", deleteLi);
        closeSpan.innerHTML = ('<i class="fa fa-trash" aria-hidden="true"></i>');
        listItem.appendChild(closeSpan);
        //append the li to the ul. It display it;
        unorderedList.appendChild(listItem);
        //clear the input field
        document.getElementById("addInput").value = "";
      console.log(textSpan)
  }
};