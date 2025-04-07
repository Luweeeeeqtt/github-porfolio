<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>My Portfolio</title>
  <link rel="stylesheet" href="index.css" />
</head>
<body>
  <header>
    <div class="container">
      <h1 class="logo">Your Name</h1>
      <nav id="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button id="menu-toggle">☰</button>
    </div>
  </header>

  <section id="hero">
    <div class="container">
      <h2>Hi, I'm Your Name</h2>
      <p>A passionate web developer creating modern and responsive websites.</p>
      <a href="#portfolio" class="btn">View My Work</a>
    </div>
  </section>

  <section id="about">
    <div class="container">
      <h2>About Me</h2>
      <p>I love building beautiful and functional websites. My goal is to bring ideas to life in the browser with clean code and smart design.</p>
    </div>
  </section>

  <section id="portfolio">
    <div class="container">
      <h2>My Portfolio</h2>
      <div class="portfolio-grid">
        <div class="portfolio-item">
          <img src="https://via.placeholder.com/300x200" alt="Project 1">
          <h3>Project 1</h3>
          <p>Brief description of your project.</p>
        </div>
        <div class="portfolio-item">
          <img src="https://via.placeholder.com/300x200" alt="Project 2">
          <h3>Project 2</h3>
          <p>Brief description of your project.</p>
        </div>
        <div class="portfolio-item">
          <img src="https://via.placeholder.com/300x200" alt="Project 3">
          <h3>Project 3</h3>
          <p>Brief description of your project.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <h2>Contact Me</h2>
      <p>Email: your.email@example.com</p>
      <p>LinkedIn: <a href="#" target="_blank">Your LinkedIn</a></p>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2025 Your Name. All rights reserved.</p>
    </div>
  </footer>

  <script src="index.js"></script>
</body>
</html>
