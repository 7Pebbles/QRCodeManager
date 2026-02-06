"use client";


export default function RootLayout({ children }) {

    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('collapsed');
    }

    return (
        <html>
            <head>
                <style>
                    {`
                      .nav a:hover {
                        background: rgba(255, 255, 255, 0.1);
                        color: white;
                        transform: translateX(1px);
                      }
                    `}
                </style>

                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
            </head>

            <body>

                {/* Mobile Sidebar (Offcanvas) */}
                <div
                    className="offcanvas offcanvas-start d-md-none bg-dark text-white "
                    id="mobileSidebar"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">Minds In Motion</h5>
                        <button
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                        ></button>
                    </div>

                    <div className="offcanvas-body p-2">
                        <div className="nav flex-column">
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-chart-line me-3" />
                                Dashboard
                            </a>
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-qrcode me-3" />
                                QR Code
                            </a>
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-share-nodes me-3" />
                                Link Shortener
                            </a>
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-address-card me-3" />
                                ID Card
                            </a>
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-award me-3" />
                                Certificate
                            </a>
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-file-arrow-up me-3" />
                                File Upload
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Wrapper */}
                <div className="d-flex">

                    {/* Desktop Sidebar (your original) */}
                    <nav className="sidebar d-none d-md-flex d-flex flex-column flex-shrink-0 bg-dark"
                        style={{ width: "250px" }}>

                        <div className="p-2">
                            <p className="text-white small hide-on-collapse fs-4">
                                Minds In Motion
                            </p>
                        </div>

                        <div className="nav flex-column">
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3 ">
                                <i className="fas fa-chart-line me-3 " />
                                <span className="hide-on-collapse">Dashboard</span>
                            </a>
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-qrcode me-3" />
                                <span className="hide-on-collapse">QR Code</span>
                            </a>
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-share-nodes me-3" />
                                <span className="hide-on-collapse">Link Shortener</span>
                            </a>
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-address-card me-3" />
                                <span className="hide-on-collapse">ID Card</span>
                            </a>
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-award me-3" />
                                <span className="hide-on-collapse">Certificate</span>
                            </a>
                            <a href="#" className="sidebar-link text-white text-decoration-none p-3">
                                <i className="fas fa-file-arrow-up me-3" />
                                <span className="hide-on-collapse">File Upload</span>
                            </a>
                        </div>
                    </nav>

                    {/* Main Section (UNCHANGED) */}
                    <section className="main flex-grow-1" style={{ flex: 1 }}>

                        {/* Hamburger (mobile only) */}
                        <div className="d-md-none bg-dark text-white p-2">
                            <button
                                className="btn btn-dark"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#mobileSidebar"
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>

                        {children}
                    </section>

                </div>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
            </body>
        </html>
    );
}

// export default function RootLayout({ children }) {

//     function toggleSidebar() {
//         const sidebar = document.querySelector('.sidebar');
//         sidebar.classList.toggle('collapsed');
//     }

//     return (
//         <html>
//             <head>
//                 <style>
//                     {`
//             .nav a:hover {
//               background-color: rgba(255, 255, 255, 0.1);
//               color: white;
//               transform: translateX(4px);
//             }
              
//           `}
//                 </style>

//                 <link
//                     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
//                     rel="stylesheet"
//                 />
//                 <link
//                     rel="stylesheet"
//                     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
//                 />
//             </head>

//             <body>
//                 <div className="d-flex" >

//                     <nav className="sidebar d-none d-md-flex d-flex flex-column flex-shrink-0 bg-dark" style={{ width: "250px" }}>
//                         <button className="toggle-btn" onclick="toggleSidebar()">
//                             <i className="fas fa-chevron-left" />
//                         </button>
//                         <div className="p-2">
//                             <p className="text-white  small hide-on-collapse fs-4">Minds In Motion</p>
//                         </div>
//                         <div className="nav flex-column">
//                             <a href="#" className="sidebar-link text-white text-decoration-none p-3">
//                                 <i className="fas fa-chart-line me-3" />
//                                 <span className="hide-on-collapse">Dashboard</span>
//                             </a>
//                             <a href="#" className="sidebar-link text-white text-decoration-none p-3">
//                                 <i className="fas fa-qrcode me-3" />
//                                 <span className="hide-on-collapse">QR Code</span>
//                             </a>
//                             <a href="#" className="sidebar-link text-white text-decoration-none p-3">
//                                 <i className="fas fa-share-nodes me-3" />
//                                 <span className="hide-on-collapse"> Link Shortener</span>
//                             </a>
//                             <a href="#" className="sidebar-link text-white text-decoration-none p-3">
//                                 <i className="fas fa-address-card me-3" />
//                                 <span className="hide-on-collapse">ID Card</span>
//                             </a>
//                             <a href="#" className="sidebar-link text-white text-decoration-none p-3">
//                                 <i className="fas fa-award me-3" />
//                                 <span className="hide-on-collapse">Certificate</span>
//                             </a>
//                             <a href="#" className="sidebar-link text-white text-decoration-none p-3">
//                                 <i className="fas fa-file-arrow-up me-3" />
//                                 <span className="hide-on-collapse">File Upload</span>
//                             </a>
//                         </div>

//                     </nav>

//                     <section className="main flex-grow-1" style={{ flex: 1 }} >
//                         {children}
//                     </section>
//                 </div>
//                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

//             </body>
//         </html>
//     );
// }
