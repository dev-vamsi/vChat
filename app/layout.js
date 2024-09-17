import "./globals.css";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    src="https://kit.fontawesome.com/4fe38eed67.js"
                    crossOrigin="anonymous"
                ></script>
            </head>
            <body className={`antialiased bg-[#fdf9f7]`}>
                <div className="container mx-auto py-4 px-2 flex_row_center min-h-[100vh]">
                    {children}
                </div>
            </body>
        </html>
    );
}
