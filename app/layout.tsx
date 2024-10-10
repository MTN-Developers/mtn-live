import "./globals.css";
import type { Metadata } from "next";

//

export const metadata: Metadata = {
  title: "MTN LIVE",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //

  return (
    <>{children}</>
    // <html lang="en" className={`${poppins.variable}`}>
    //   {/* <body suppressHydrationWarning={true} className="font-poppins"> */}
    //   <UserSessionProvider
    //     session={
    //       serverSession as {
    //         user: User;
    //         expires: string;
    //       }
    //     }
    //   >
    //     <Providers>{children}</Providers>
    //   </UserSessionProvider>
    //   {/* </body> */}
    // </html>
  );
}
