// App.tsx
import { createSignal } from "solid-js";

const App = () => {
  const [count, setCount] = createSignal(0);

  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          2.0-Website-Breaker | This ultimate site breaker that can break sites
          in 2 different ways
        </title>
        <link rel="stylesheet" href="%PUBLIC_URL%/styles.css" />
        <link rel="stylesheet" href="%PUBLIC_URL%/video.css" />
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
                <a href="%PUBLIC_URL%/docs.tsx">Docs</a>
              </li>
            </ul>
          </nav>
        </div>
        <h1>{count()}</h1>
        <p>Sorry, the prompt cannot open at this time.</p>
        <p>You can use the 2.0-Website-Breaker from the extension.</p>
        <p>
          <u>
            https://chrome.google.com/webstore/detail/website-breaker/kehlflmgfbkjncaoogcangeeejhbgfnm
          </u>
        </p>
        <p>
          If you want to install the website-breaker on your computer, read the
          docs
        </p>
      </body>
    </html>
  );
};

export default App;
