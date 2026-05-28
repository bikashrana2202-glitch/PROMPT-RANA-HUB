<}ALLPROMPTZ

    └── (images optional)
    <body></body>
    <\p>
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AllPromptZ - AI Prompt Hub</title>
  <link rel="stylesheet" href="css/style.css"body {
  font-family: Arial;
  margin: 0;
  background: #0f0f0f;
  color: white;
}

header {
  text-align: center;
  padding: 20px;
  background: #1f1f1f;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  background: #111;
  padding: 10px;
}

nav a {
  color: white;
  text-decoration: none;
}

.search-box {
  text-align: center;
  margin: 20px;
}

#search {
  padding: 10px;
  width: 60%;
}

#prompts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  padding: 20px;
}

.card {
  background: #222;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.card:hover {
  background: #333;
}
    >
</head>
<body font-family: Arial;
  margin: 0;
  background: #0f0f0f;
  color: white;\p>
}

<header>
  <h1>🔥 AllPromptZ</h1>
  <p>Best AI Prompts Collection</p>
</header>

<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>

<section class="search-box">// COPY FUNCTION
function copy(id) {
  let text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Copied ✔");
}

// FILTER FUNCTION
function filter(type) {
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (type === "all") {
      card.style.display = "block";
    } else {
      card.classList.contains(type)
        ? card.style.display = "block"
        : card.style.display = "none";
    }
  });
}

// SEARCH
document.getElementById("search").addEventListener("keyup", function() {
  let value = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});
  <input type="text" id="search" placeholder="Search prompts...">
</section>

<section id="prompts">
  <div class="card">💡 Instagram Caption Prompt</div>
  <div class="card">🎨 Logo Design Prompt</div>
  <div class="card">📸 AI Image Prompt</div>
  <div class="card">💻 Coding Prompt</div>
</section>

<script src="js/app.js"></script <let search = document.getElementById("search");

search.addEventListener("keyup", function() {
  let value = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (card.innerText.toLowerCase().includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
</body>
</html>
<h1>About AllPromptZ</h1>
<p>This is a prompt sharing website for AI users.</p>
  <h1>Contact</h1>
<p>Email: example@gmail.com</p>
