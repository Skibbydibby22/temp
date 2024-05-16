function onLoad() {
    document.getElementById("cover").style.display = "none";
}

function onLoadIndex() {
    document.getElementById("coverIndex").addEventListener("animationend", () => {
        document.getElementById("coverIndex").style.display = "none";
    });
}

function costClick() {
    document.getElementById("cost").classList.add("buttonAnimation");
    document.getElementById("cost").classList.remove("cost");
    document.getElementById("cost").addEventListener("animationend", () => {
        document.getElementById("cover").style.display = "block";
        window.location.href = "cost.html";
      });
}

function loanClick() {
    document.getElementById("loan").classList.add("buttonAnimation");
    document.getElementById("loan").classList.remove("loan");
    document.getElementById("loan").addEventListener("animationend", () => {
        document.getElementById("cover").style.display = "block";
        window.location.href = "loan.html";
      });
}

function factsClick() {
    document.getElementById("facts").classList.add("buttonAnimation");
    document.getElementById("facts").classList.remove("facts");
    document.getElementById("facts").addEventListener("animationend", () => {
        document.getElementById("cover").style.display = "block";
        window.location.href = "facts.html";
      });
}