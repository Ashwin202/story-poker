import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PollingContextProvider } from "../store/contexts/PollingContext";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<ClerkProvider>
				<body className={inter.className}>
					<ThemeProvider forcedTheme={"dark"} attribute="class" defaultTheme="system" enableSystem={true}>
						<PollingContextProvider>{children}</PollingContextProvider>
					</ThemeProvider>
				</body>
			</ClerkProvider>
		</html>
	);
}
