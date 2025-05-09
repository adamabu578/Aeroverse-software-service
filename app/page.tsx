import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Aeroverse - Software Development Services",
  description: "Professional software development services for your business needs",
}

export default function Home() {
  return <ClientPage />
}
