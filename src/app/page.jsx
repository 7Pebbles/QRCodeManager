"use client";
import css from "styled-jsx/css"

export default function Home() {
    return (
        <><div className="bg-black text-light min-vh-100 " >
            <header>
                <div className="container-fluid mx-0">
                    <div className="row py-2 px-2">
                        <div className="col  ">
                            <h4 className="fw-semibold ">QR Codes</h4>
                        </div>
                    </div>
                </div>
            </header>
            <hr className="m-0" />
            <section className="Upper">
                <div className="container-fluid mx-0 py-2 ">
                    <div className="row ">
                        <div className="col">
                            <h3 className="m-0" >QR Code Management</h3>

                        </div>

                    </div>
                    <div className="row  justify-content-between ">
                        <div className="col-12 col-md-6 d-flex align-items-center ">
                            <p className="text-secondary m-0 ">Create, manage, and download QR Codes for events and internal use </p>

                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center ">
                            <div className="buttons m-2 d-flex justify-content-center gap-3 flex-wrap ">
                                <button type="button" className="btn btn-outline-secondary btn-sm px-3 "><i className="fa-solid fa-rotate me-2"></i>Refresh</button>
                                <button type="button" className="btn btn-primary btn-sm px-3">Create  New</button>
                            </div>

                        </div>

                    </div>

                    <div className="row g-2  m-0">
                        <div className="col-12 col-md-6    ">
                            <div className="bg-dark rounded-2 p-2">
                                <h4 className="m-0"> Total QR Codes</h4>
                                <p className="fs-4 m-0">2</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6  ">
                            <div className="bg-dark rounded-2 p-2">
                                <h4 className="m-0">Total Downloads</h4>
                                <p className="fs-4 m-0">0</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <hr className="" />

            <section className="lower">
                <div className="container-fluid">
                    <div className="row px-2 ">
                        <div className="col table-responsive p-3 rounded-2 bg-dark">
                            <table className="table table-dark mb-0 align-middle ">
                                <thead className="bg-primary">
                                    <tr >
                                        <th scope="col-sequence">Sr</th>
                                        <th scope="col-priview">Preview</th>
                                        <th scope="col-label">Label</th>
                                        <th scope="col-type">Type</th>
                                        <th scope="col-content">Content</th>
                                        <th scope="col-downloads">Downloads</th>
                                        <th scope="col-created">Created</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td> <img
                                            src="/qr.png"
                                            alt="qr"
                                            className="qr-img" style={{ height: "40px" }}
                                        /></td>
                                        <td>Untitled</td>
                                        <td>Dynamic</td>
                                        <td> https://www.example.com/very/long/link/that/should/truncate
                                        </td>
                                        <td>0</td>
                                        <td>  <div className="d-flex align-items-center justify-content-between"> <span>Jan 27, 2027</span> <i className="fa-solid fa-ellipsis-vertical"></i></div></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td> <img
                                            src="/qr.png"
                                            alt="qr"
                                            className="qr-img" style={{ height: "40px" }}
                                        /></td>
                                        <td>Untitled</td>
                                        <td>Dynamic</td>
                                        <td> https://www.example.com/very/long/link/that/should/truncate
                                        </td>
                                        <td>0</td>
                                        <td>  <div className="d-flex align-items-center justify-content-between"> <span>Jan 27, 2027</span> <i className="fa-solid fa-ellipsis-vertical"></i></div></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td> <img
                                            src="/qr.png"
                                            alt="qr"
                                            className="qr-img" style={{ height: "40px" }}
                                        /></td>
                                        <td>Untitled</td>
                                        <td>Dynamic</td>
                                        <td> https://www.example.com/very/long/link/that/should/truncate
                                        </td>
                                        <td>0</td>
                                        <td>  <div className="d-flex align-items-center justify-content-between"> <span>Jan 27, 2027</span> <i className="fa-solid fa-ellipsis-vertical"></i></div></td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}