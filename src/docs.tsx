// docs.tsx
import { createSignal } from "solid-js";

const Docs = () => {
  const [menuVisible, setMenuVisible] = createSignal(false);
  const [selectedSection, setSelectedSection] = createSignal("home");

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const showContent = (sectionId: string) => {
    setSelectedSection(sectionId);
    setMenuVisible(false);
  };

  return (
    <div>
      <div class="menu-container">
        <div
          class={`open-close-menu ${menuVisible() ? "clicked" : ""}`}
          onClick={toggleMenu}
        >
          <span>☰</span>
        </div>
        <div class="menu" style={{ display: menuVisible() ? "block" : "none" }}>
          <ul>
            <li>
              <a href="#" onClick={() => showContent("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#">Demos</a>
              <ul>
                <li>
                  <a href="#" onClick={() => showContent("demo1")}>
                    Demo 1
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => showContent("demo2")}>
                    Demo 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="content">
        <section
          style={{ display: selectedSection() === "home" ? "block" : "none" }}
          id="home"
        >
          <h1>Welcome to 2.0-Website-Breaker Docs</h1>
          <p>The website-breaker can break any website by react or code</p>
          <h1>How to use 🚀</h1>
          <p>
            There are 2 ways to use the 2.0-Website-Breaker. You can break any
            website by typing the website URL into the homepage of this website.
            Or, you can install it from the{" "}
            <a href="https://chromewebstore.google.com/detail/website-breaker/kehlflmgfbkjncaoogcangeeejhbgfnm">
              Extension
            </a>
          </p>
        </section>

        <section
          style={{ display: selectedSection() === "demo1" ? "block" : "none" }}
          id="demo1"
        >
          <h1>Demo 1 Info</h1>
          <p>
            Demo 1 runs on HTML, JS, and CSS and is powered by <i>vercel</i>
          </p>
          <p>It can break a site into 1000 pieces by clicking a button</p>
          <p>
            Head to the link and grab a block with your cursor and swing it
            around and watch what it can do!
          </p>
          <p>
            Link: <u>website-breaker-demo.vercel.app</u>
          </p>
        </section>

        <section
          style={{ display: selectedSection() === "demo2" ? "block" : "none" }}
          id="demo2"
        >
          <h1>Demo 2 Info</h1>
          <p>
            Demo 2 runs on HTML and CSS and is powered by <i>Heroku</i>
          </p>
          <p>It can break a site into 20 pieces automatically</p>
          <p>
            Link:{" "}
            <u>https://website-breaker-demo-2e92fbab7def.herokuapp.com/</u>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Docs;
