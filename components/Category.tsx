import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

interface CategoryCardProps {
  id: string
  title: string
  description: string
  icon: ReactNode
  image?: string;
  imageUrl?: string;
}

export default function CategoryCard({ id, title, description, icon, image }: CategoryCardProps) {
  return (
   
    <div className="flex flex-wrap justify-center gap-4">
  <Card className="flex lg:w-[450px] lg:h-[300px]  flex-col md:flex-col md:h-[400px] h-[250px]">
    <div className="relative w-full md:w-1/2 h-48 md:h-auto">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="w-[200px]" />
    </div>
    <CardContent className="flex flex-col justify-center p-4">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1 text-muted-foreground text-sm">{description}</p>
      <Link href={`#${id}`} className="mt-4">
        <Button size="sm">Browse {title}</Button>
      </Link>
    </CardContent>
  </Card>

  {/* Duplicate card here if you have more than one */}
</div>




  )
}
