import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Amit Kolpe | AI Engineer & Data Scientist",
  description:
    "Portfolio of Amit Kolpe — AI Engineer, Data Scientist, and Machine Learning Developer specializing in Python, FastAPI, LangChain, RAG, LLMs, and intelligent applications.",
  keywords: [
    "Amit Kolpe",
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "Generative AI",
    "Python",
    "FastAPI",
    "LangChain",
    "RAG",
    "LLM",
    "NLP",
    "Portfolio",
  ],
  authors: [{ name: "Amit Kolpe" }],
  openGraph: {
    title: "Amit Kolpe | AI Engineer & Data Scientist",
    description:
      "Portfolio of Amit Kolpe — Building intelligent applications with Machine Learning, Generative AI, LangChain, and FastAPI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kolpe | AI Engineer & Data Scientist",
    description:
      "Portfolio of Amit Kolpe — Building intelligent applications with Machine Learning, Generative AI, LangChain, and FastAPI.",
  },
  metadataBase: new URL("https://amitkolpe.dev"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
