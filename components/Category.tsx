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
    <Card className="overflow-hidden w-full  md:w-[400px] lg:w-[500px]">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardContent className="flex flex-col justify-center p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">{icon}</div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
          <Link href={`#${id}`} className="mt-6">
            <Button>Browse {title}</Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  )
}
