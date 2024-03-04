import { createSignal } from "solid-js";
import breakWebPage from "website-breaker";

export const WebsiteBreaker = () => {
  const [websiteUrl, setWebsiteUrl] = createSignal("");
  const [loadedWebsite, setLoadedWebsite] = createSignal(null);

  const handleGoButtonClick = () => {
    // Load the website with the provided URL (you may need to implement this part)
    // For simplicity, I'm just setting the loaded website in state
    setLoadedWebsite(websiteUrl());
  };

  const handleBreakButtonClick = () => {
    // Break the loaded website
    breakWebPage();
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          2.0-Website-Breaker | This ultimate site breaker that can break sites
          in 2 different ways
        </title>
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="video.css" />
      </head>
      <body>
        <div class="header">
          <video autoplay loop class="back-video" muted playsinline>
            <source
              src="https://res.cloudinary.com/seyedeliasfakoorian/video/upload/v1699655824/technology.mp4"
              type="video/mp4"
            />
          </video>
          <nav>
            <img
              src="https://res.cloudinary.com/seyedeliasfakoorian/image/upload/v1698639510/website-breaker.png"
              alt="Website Breaker Logo"
            />
            <ul class="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="docs.d.tsx">Docs</a>
              </li>
            </ul>
          </nav>
        </div>

        <div style={{ display: "flex", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Enter website URL"
            value={websiteUrl()}
            onInput={(e) => setWebsiteUrl(e.target.value)}
            style={{ flex: 1, marginRight: "10px", padding: "5px" }}
          />
          <button
            onClick={handleGoButtonClick}
            style={{ backgroundColor: "red", color: "white", padding: "5px" }}
          >
            GO
          </button>
        </div>
        {loadedWebsite() && (
          <div>
            {/* Display the loaded website (you may replace this with your implementation) */}
            <iframe
              src={loadedWebsite()}
              style={{ width: "100%", height: "400px" }}
            />
            <button
              id="break-website-button"
              className="btn"
              onClick={handleBreakButtonClick}
            >
              Break Me
            </button>
          </div>
        )}
      </body>
    </html>
  );
};
