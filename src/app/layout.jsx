"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import "./globals.css";
import { Image } from 'react-bootstrap';
export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    setTimeout(() => {setLoading(true)}, 2500);
  }, [])
  const [loading, setLoading] = React.useState(false)

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="assets/images/favicon.png" type="image/png" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />

      </head>
      <body>
        <main>
        {/* {loading ? (
        <React.Fragment>    
        </React.Fragment>
        ) : (
          <div className="pageloaderbox">
          <div className="loader">
            <div><Image src="assets/images/logoicon.svg"/></div>             
          </div>
      </div>
        )}   */}
          {children}<ProgressBar height="2px" color="#237BAB" options={{ showSpinner: false }} shallowRouting />
        </main>
      </body>
    </html>
  );
} 
