function starClick(input) {
  console.log("input is, ...", input);
  let starOutput = Number(document.getElementById("StarOutput").innerHTML);
  let newRating = 0;
  console.log("current starOutput is, ...", starOutput);

  if (input === "add") {
    if (starOutput === 5) {
      return;
    }
    newRating = starOutput + 1;
    document.getElementById("StarOutput").innerHTML = newRating;
  }

  if (input === "remove") {
    if (starOutput === 1) {
      return;
    }
    newRating = starOutput - 1;
    document.getElementById("StarOutput").innerHTML = newRating;
  }

  console.log("new starOutput rating is, ...", newRating);

  const stars = document.getElementsByClassName("star");

  for (star of stars) {
    star.classList.remove("glow");
    star.classList.add("glow-off");
  }

  for (let i = 0; i <= newRating - 1; i++) {
    stars[i].classList.remove("glow-off");
    stars[i].classList.add("glow");
  }
}
