
// import "./globals.css";

// export const metadata = {
//   title: "DBAVMK - Official Registration",
//   description: "DBAVMK Member Registration Portal",
//   icons: {
//     icon: [
//       { url: "/favicon.ico" },
//       { url: "/icon.png", type: "image/png", sizes: "32x32" },
//     ],
//     apple: "/apple-icon.png",  // for iPhone home screen
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="theme-color" content="#4f46e5" />
//       </head>
//       <body className="font-sans antialiased min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
//         {children}
//       </body>
//     </html>
//   );
// }
import "./globals.css";

export const metadata = {
  title: "DBAVMK - Official Registration",
  description: "DBAVMK Member Registration Portal",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "DBAVMK - Official Registration",
    description: "DBAVMK Member Registration Portal",
    url: "https://dbavmk-registration-form.vercel.app",
    siteName: "DBAVMK Registration",
    images: [
      {
        url: "https://dbavmk-registration-form.vercel.app/og-image.png",
        width: 256,
        height: 256,
        alt: "DBAVMK Logo",
      }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body className="font-sans antialiased min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {children}
      </body>
    </html>
  );
}