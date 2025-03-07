


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return(
        <main>{children}
        <p>The layout page was rendered</p>
        </main>
    )
}