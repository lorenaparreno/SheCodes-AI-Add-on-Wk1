function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "130f33ffoc5t4fdc244afb86281fdf02";
let context = "please provide a precise answer";
let prompt = "who was the first female president";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Processing");
axios.get(apiUrl).then(showAnswer);
