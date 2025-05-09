import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "DevStudio - Software Development Services",
  description: "Professional software development services for your business needs",
}

export default function Home() {
  return <ClientPage />
}
