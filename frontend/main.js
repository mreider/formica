let emijuUl = document.getElementById("emijuUl");

let sub = [];
let interval;
function validate() {
  emo();
  return true;
}

function emo() {
  var post = document.getElementById("post").value;
  console.log(post);
  var complexity = document.getElementById("complexity").value;
  console.log(complexity);
  var leakage = document.getElementById("leakage").value;
  console.log(leakage);
  if(interval) {
	 clearInterval(interval); 
  }
  if (!post || !complexity || !leakage) {
    alert("please enter all the values");
  } else {
	interval = setInterval(function() {
		sendreq({
			"complexity": complexity,
			"leakage": leakage
		});
	}, post*1000);
  }
}

function sendreq(data) {
	console.log(data);
	var url = "http://54.196.232.87:3000/";
	fetch(url, {
    method : "POST",
    body: JSON.stringify(data),
    }).then(
		response => response.json()
	).then(
		data => {
			console.log(data);
			var json = JSON.parse(data.data);
			var emojiLi = document.createElement("li");
		    emojiLi.style = `display: inline; margin: .5vh 0;`;
		    emojiLi.innerHTML = `&#x${json.codes};`;
		    emijuUl.appendChild(emojiLi);
		}
	);
}
