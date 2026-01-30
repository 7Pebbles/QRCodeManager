"use client";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <html>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>

      <body className="bg-dark">
        {/* Mobile top bar */}
        <div className="d-md-none d-flex align-items-center p-2 bg-dark text-white">
          <button
            className="btn text-white"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <i className="fas fa-bars fs-4"></i>
          </button>
          <span className="ms-2">Minds in Motion</span>
        </div>

        <div className="d-flex">
          {/* Sidebar */}
          <div
            className={`bg-dark text-white p-2 min-vh-100 
            ${showSidebar ? "d-block" : "d-none"} d-md-block`}
            style={{ width: 250 }}
          >
            <h5 className="mb-3">Minds in Motion</h5>
            <ul className="nav nav-pills flex-column gap-2">
              <li>
                <a className="nav-link text-white">
                  <i className="fa-solid fa-chart-line me-2"></i>
                  Dashboard
                </a>
              </li>
              <li>
                <a className="nav-link text-white">
                  <i className="fa-solid fa-qrcode me-2"></i>
                  QR Codes
                </a>
              </li>
              <li>
                <a className="nav-link text-white">
                  <i className="fa-solid fa-link me-2"></i>
                  Link Shortener
                </a>
              </li>
              <li>
                <a className="nav-link text-white">
                  <i className="fa-solid fa-id-card me-2"></i>
                  ID Cards
                </a>
              </li>
              <li>
                <a className="nav-link text-white">
                  <i className="fa-solid fa-certificate me-2"></i>
                  Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Overlay for mobile */}
          {showSidebar && (
            <div
              className="d-md-none"
              onClick={() => setShowSidebar(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
              }}
            />
          )}

          {/* Main content */}
          <main className="flex-grow-1 p-3 bg-black text-light">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
