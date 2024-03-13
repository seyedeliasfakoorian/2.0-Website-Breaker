import { createSignal, onCleanup, onCleanupEffect } from "solid-js";

const App = () => {
  const websiteUrl = createSignal("");
  const loadedWebsiteIframeRef = createSignal<HTMLIFrameElement | null>(null);

  const loadWebsite = async () => {
    const websiteInput = websiteUrl()[0];

    if (websiteInput) {
      try {
        const proxyUrl =
          "http://localhost:3001/proxy?url=" + encodeURIComponent(websiteInput);

        const cssStyles = encodeURIComponent(
          "height=30px;width=30px;outline:none;margin:10px;border:none;border-radius:2px;box-shadow:0 0 0 2px white, 0 0 0 4px black;background-color:blueviolet;",
        );
        const buttonInfo = encodeURIComponent("buttonText=Break Me");
        const additionalParams = encodeURIComponent(
          "param1=value1&param2=value2",
        );

        const finalUrl =
          proxyUrl +
          "&css=" +
          cssStyles +
          "&button=" +
          buttonInfo +
          "&params=" +
          additionalParams;

        // Clean up previous iframe before replacing the content
        const prevIframe = loadedWebsiteIframeRef()[0];
        if (prevIframe) {
          prevIframe.remove();
        }

        // Create a new iframe
        const newIframe = document.createElement("iframe");
        newIframe.id = "loadedWebsiteIframe";
        newIframe.title = "Loaded Website";
        newIframe.style.width = "100%";
        newIframe.style.height = "100vh";
        newIframe.style.border = "none";

        // Append the iframe to the body
        document.body.appendChild(newIframe);

        // Replace the iframe's content with the loaded website, CSS styles, button information, and additional parameters
        newIframe.contentWindow?.location.replace(finalUrl);

        // Attach an event listener to the iframe's load event
        const loadListener = () => {
          // Inject the button into the loaded website and set up its functionality
          injectButton(newIframe.contentWindow || window);

          // Cleanup the load event listener
          onCleanup(() => newIframe.removeEventListener("load", loadListener));
        };

        newIframe.addEventListener("load", loadListener);
      } catch (error) {
        console.error("Error loading website:", error.message);
      }
    } else {
      console.error("Error loading website. Please enter a valid URL.");
    }
  };

  // Function to inject a button into the loaded website
  const injectButton = (window: Window) => {
    const breakButton = window.document.createElement("button");
    breakButton.textContent =
      getParameterByName(window.location.href, "buttonText") ||
      "Default Button";
    breakButton.className = "break-button";

    const cssStyles = getParameterByName(window.location.href, "css");
    if (cssStyles) {
      const styleArray = cssStyles.split(";");
      styleArray.forEach((style) => {
        const [property, value] = style.split(":");
        if (property && value) {
          breakButton.style[property.trim()] = value.trim();
        }
      });
    }

    breakButton.addEventListener("click", () => {
      const additionalParams = getParameterByName(
        window.location.href,
        "params",
      );
      console.log(
        "Button clicked with additional parameters:",
        additionalParams,
      );
      window.breakFunction(additionalParams); // Replace with the actual function from the npm package
    });

    window.document.body.appendChild(breakButton);
  };

  // Function to retrieve query parameters from the URL
  const getParameterByName = (url: string, name: string) => {
    const urlObject = new URL(url);
    return urlObject.searchParams.get(name);
  };

  return (
    <>
      <div class="header">
        <video autoplay loop playsinline class="back-video" muted>
          <source
            src="https://res.cloudinary.com/seyedeliasfakoorian/video/upload/v1709848889/video_2160p.mp4"
            type="video/mp4"
          />
        </video>
        <nav>
          <img src="https://res.cloudinary.com/seyedeliasfakoorian/image/upload/v1698639510/website-breaker.png" />
          <ul class="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link href="docs.tsx">Docs</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="content">
        <form>
          <label for="websiteUrlInput">Enter Website URL</label>
          <input
            type="url"
            id="websiteUrlInput"
            name="websiteUrlInput"
            placeholder="Enter URL"
            required
            bind:value={websiteUrl[0]}
          />
          <button type="button" onClick={loadWebsite}>
            GO
          </button>
        </form>
      </div>

      {/* The iframe will be dynamically created and replaced with the loaded website */}
    </>
  );
};

export default App;
