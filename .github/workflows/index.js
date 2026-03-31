<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>StarNora Official</title>
<style>
/* Reset & Basic Styles */
* { margin:0; padding:0; box-sizing:border-box; font-family: Arial, sans-serif;}
body { background-color:#0f0f0f; color:#fff; line-height:1.6; scroll-behavior:smooth;}
header { background:#1a1a1a; padding:20px 0; text-align:center; border-bottom:2px solid #ff004f;}
header h1 { font-size:3rem; color:#ff004f;}
nav { display:flex; justify-content:center; margin-top:10px;}
nav a { color:#fff; text-decoration:none; margin:0 15px; font-size:1.1rem; transition:color 0.3s;}
nav a:hover { color:#ff004f;}
section { padding:60px 20px; text-align:center;}
section h2 { font-size:2.5rem; margin-bottom:20px; color:#ff004f;}
section p { max-width:800px; margin:0 auto; font-size:1.1rem; color:#ddd;}
.music-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:20px; margin-top:40px;}
.music-card { background:#1a1a1a; padding:20px; border-radius:10px; transition: transform 0.3s;}
.music-card:hover { transform:scale(1.05);}
.music-card img { width:100%; border-radius:10px;}
.music-card h3 { margin-top:15px; color:#ff004f;}
.social-icons { margin-top:20px;}
.social-icons a { margin:0 10px; color:#fff; font-size:1.5rem; transition:color 0.3s;}
.social-icons a:hover { color:#ff004f;}
audio { margin-top:20px; outline:none; }
footer { background:#1a1a1a; padding:20px; text-align:center; border-top:2px solid #ff004f; margin-top:40px; font-size:0.9rem; color:#aaa;}
footer p a { color:#ff004f; text-decoration:none;}
footer p a:hover { text-decoration:underline;}
</style>
</head>
<body>

<header>
  <h1>StarNora</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#music">Music</a>
    <a href="#videos">Videos</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section id="home">
  <h2>Welcome to StarNora Official</h2>
  <p>Experience the music, the vibe, and the story of StarNora. Your one-stop destination for all tracks, videos, and updates from the artist.</p>
</section>

<section id="music">
  <h2>Latest Music</h2>
  <div class="music-grid">
    <div class="music-card">
      <img src="song1.jpg" alt="Song 1">
      <h3>Song Title 1</h3>
      <audio controls>
        <source src="song1.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
    <div class="music-card">
      <img src="song2.jpg" alt="Song 2">
      <h3>Song Title 2</h3>
      <audio controls>
        <source src="song2.mp3" type="audio/mpeg">
      </audio>
    </div>
  </div>
</section>

<section id="videos">
  <h2>Music Videos</h2>
  <p>Watch official music videos and behind-the-scenes footage from StarNora.</p>
  <div class="music-grid">
    <div class="music-card">
      <iframe width="100%" height="200" src="https://www.youtube.com/embed/VIDEO_ID" title="Video 1" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="music-card">
      <iframe width="100%" height="200" src="https://www.youtube.com/embed/VIDEO_ID2" title="Video 2" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</section>

<section id="about">
  <h2>About StarNora</h2>
  <p>StarNora is an innovative artist blending styles from Shona, UK drill, and trap music. Explore his journey, inspirations, and upcoming projects.</p>
</section>

<section id="contact">
  <h2>Contact</h2>
  <p>Phone: +263 717 518 366<br>Email: <a href="mailto:starnora55@gmail.com">starnora55@gmail.com</a></p>
  <div class="social-icons">
    <a href="https://instagram.com/starnora" target="_blank">Instagram</a>
    <a href="https://www.tiktok.com/@starnora" target="_blank">TikTok</a>
    <a href="https://www.youtube.com/@starnora" target="_blank">YouTube</a>
  </div>
</section>

<footer>
  <p>&copy; 2026 StarNora. All rights reserved.<br>
  Logo & Website created by Arnold Armstrong Gumbo</p>
</footer>

</body>
</html>
