import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  name: string
  category: string
  // price: number
  image: string
}

export default function ProductCard({ name, category,  image }: ProductCardProps) {
  return (

    <Card className="w-full max-w-[450px] h-[300px] flex flex-col md:flex-row">
  <CardHeader className="p-0 md:w-1/2">
    <div className="relative w-full h-[200px] md:h-full">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        fill
        className="object-cover transition-transform hover:scale-105"
      />
      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
        {category}
      </div>
    </div>
  </CardHeader>

  <div className="flex flex-col justify-between p-4 md:w-1/2">
    <CardContent className="p-0">
      <h3 className="font-semibold text-lg">{name}</h3>
      {/* <p className="text-xl font-bold mt-2">${price.toFixed(2)}</p> */}
    </CardContent>

    <CardFooter className="p-0 pt-4">
      <Button className="w-full mt-auto">
        <ShoppingCart className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    </CardFooter>
  </div>
</Card>

  )
}
