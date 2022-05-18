function removeStar() {
  let starOutput = Number(document.getElementById("StarOutput").innerHTML);
  console.log("removeStar...", starOutput);

  if (starOutput > 1) {
    document.getElementById("StarOutput").innerHTML = starOutput - 1;
  }

  return;
}

function addStar() {
  console.log(starOutput + 1);

  return;
}

function starClick(input) {
  console.log("Starting starClick...");
  console.log("input is, ...", input);
  let starOutput = Number(document.getElementById("StarOutput").innerHTML);
  console.log("current starOutput is, ...", starOutput);

  if (input === "add") {
    if (starOutput < 5) {
      document.getElementById("StarOutput").innerHTML = starOutput + 1;
    }
  }
}
