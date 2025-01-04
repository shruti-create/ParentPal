import "./globals.css";

export const metadata = {
  title: "ParentPal",
  description: "Official website for ParentPal.",
};

export default function RootLayout({ children }) {
  const premium = true; // set to true for a premium user (just for us to check)

  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>ParentPal</h1>
        </header>
        <body>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/marketplace">Marketplace</a></li>
              <li><a href="/blog">Anonymous Blog</a></li>
              <li><a href="/tutorials">Tutorials</a></li>
              <li><a href="/support-groups">Support Groups</a></li>
              <li><a href="/advice">Advice Column</a></li>
              <br />
              <hr />
              <br />
              {/* for the locked items (non-premium users)*/}
              <li className={premium ? "" : "locked-item"}>
                <a href="/ask-doctor">
                  {!premium && <img src="/images/lock-icon.png" alt="Lock" className="lock-icon" />} 
                  Ask A Doctor
                </a>
              </li>
              <li className={premium ? "" : "locked-item"}>
                <a href="/counseling">
                  {!premium && <img src="/images/lock-icon.png" alt="Lock" className="lock-icon" />} 
                  1:1 Counseling
                </a>
              </li>
              <li className={premium ? "": "locked-item"}>
                <a href="/therapy">
                  {!premium && <img src="/images/lock-icon.png" alt="Lock" className="lock-icon" />} 
                  Therapy
                </a>
              </li>
            </ul>
          </nav>
          <main className="main-content">
            <div className="tile">{children}</div>
          </main>
        </body>
      </body>
    </html>
  );
}
