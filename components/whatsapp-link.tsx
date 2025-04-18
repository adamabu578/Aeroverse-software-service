// import { Phone } from "lucide-react"
// import Link from "next/link"

// export default function WhatsAppLink() {
//   const phoneNumber = "+2348082557358"
//   const whatsappLink = `https://wa.me/${phoneNumber.replace(/[+\s]/g, "")}`

//   return (
//     <Link
//       href={whatsappLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
//     >
//       <Phone className="h-4 w-4" />
//       <span>{phoneNumber}</span>
//     </Link>
//   )
// }

import Image from "next/image"
import Link from "next/link"

export default function WhatsAppImageLink() {
  const phoneNumber = "+2348082557358"
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[+\s]/g, "")}`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block hover:opacity-80 transition-opacity"
      aria-label="Contact us on WhatsApp"
    >
      <span className="flex gap-2 ">whatsapp Contact <Image src="/assets/whatsapp.png" alt="WhatsApp" width={30} height={25} className="rounded-md mb-6" /></span>
    </Link>
  )
}
