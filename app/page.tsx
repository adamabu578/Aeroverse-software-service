import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Laptop, Smartphone, ShoppingCart, Search, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// import VideoUploadSection from "@/components/VideoSection"
import ProductCard from "@/components/Product-Card"
import CategoryCard from "@/components/Category"
import logo from "@/public/assets/banitech.png" // Adjust the path to your logo image
import ArticleSection from "@/components/article-management"
import { VideoSection } from "@/components/VideoSection"
import WhatsAppLink from "@/components/whatsapp-link"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Menu className="h-6 w-6 md:hidden" />
            <Link href="/" className="flex items-center gap-2">
              {/* <ShoppingCart className="h-6 w-6" /> */}
              <span className="font-bold text-xl w-20"><Image src={logo} alt="logo" /></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="#laptops" className="text-sm font-medium hover:underline underline-offset-4">
              Laptops
            </Link>
            <Link href="#accessories" className="text-sm font-medium hover:underline underline-offset-4">
              Accessories
            </Link>
            <Link href="#videos" className="text-sm font-medium hover:underline underline-offset-4">
              Videos
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search products..." className="w-[200px] lg:w-[300px] pl-8" />
            </div>
            <Button>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart (0)
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Premium Tech Gadgets for Everyone
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover the latest laptops and mobile accessories at unbeatable prices. Plus, share your tech
                    reviews with our community!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#laptops">
                    <Button size="lg">Shop Laptops</Button>
                  </Link>
                  <Link href="#accessories">
                    <Button size="lg" variant="outline">
                      Shop Accessories
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/assets/man-smilin.jpg"
                width={550}
                height={550}
                alt="Latest tech products"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Shop by Category</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our wide selection of tech products
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <CategoryCard
                id="laptops"
                title="Laptops"
                description="Powerful laptops for work and play"
                icon={<Laptop className="h-8 w-8" />}
                image="/assets/lapi.png" 
              />
              <CategoryCard
                id="accessories"
                title="Mobile Accessories"
                description="Enhance your mobile experience"
                icon={<Smartphone className="h-8 w-8" />}
                image="/assets/iphone.jpg"
              />
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our most popular items
                </p>
              </div>
            </div>
            <div className="flex  justify-center gap-8 mt-8">
              <ProductCard
                name="UltraBook Pro"
                category="Laptop"
                // price={1299.99}
                image="/assets/hp.png"
              />
              <ProductCard
                name="PowerBook Air"
                category="Laptop"
                // price={999.99}
                image="/assets/lapi5.png"
              />
              <ProductCard
                name="Mobile-phone"
                category="Mobile-phone"
                // price={89.99}
                image="/assets/iphone-tech.png"
              />
              <ProductCard
                name="Mobile-phone"
                category="Mobile-phone"
                // price={49.99}
                image="/assets/iphone-tech1.png"
              />
            </div>
            <div className="flex justify-center mt-10">
              <Button size="lg">View All Products</Button>
            </div>
          </div>
        </section>

        {/* Video Upload Section */}
        {/* <section id="videos" className=" py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center ">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Share Your Tech Reviews</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Upload your video reviews and help other customers make informed decisions
                </p>
              </div>
            </div>
            <div className="mt-8"> */}
              {/* <VideoUploadSection /> */}
            {/* </div>
          </div>
        </section> */}


      <main className="flex min-h-screen flex-col items-center justify-between">
            {/* Self-hosted video example */}
            <VideoSection
              title="Product Demo"
              description="Watch our product demo to see how our solution can help your business."
              videoSrc="/assets/banitechvideo.mp4"
              videoType="self-hosted"
              posterImage="/assets/hplapi.jpg"
            />

            {/* YouTube video example */}
            {/* <VideoSection
              title="Tutorial"
              description="Learn how to get started with our platform in this step-by-step tutorial."
              videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
              videoType="youtube"
            /> */}

            <VideoSection
              title="Product Demo"
              description="Watch our product demo to see how our solution can help your business."
              videoSrc="/assets/banitech.mp4"
              videoType="self-hosted"
              posterImage="/assets/mackbook1.jpg"
            />
          </main>

        {/* New Article Section */}
      <ArticleSection />

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col p-6 bg-background rounded-lg shadow">
                <p className="text-muted-foreground mb-4">
                  "The laptop I purchased exceeded my expectations. Great performance and battery life!"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Adamu abu</p>
                  <p className="text-sm text-muted-foreground">Software Developer</p>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-background rounded-lg shadow">
                <p className="text-muted-foreground mb-4">
                  "Fast shipping and excellent customer service. The wireless earbuds are amazing quality."
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Engr David</p>
                  <p className="text-sm text-muted-foreground">Lecturer</p>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-background rounded-lg shadow">
                <p className="text-muted-foreground mb-4">
                  "I love being able to watch video reviews before making a purchase. It's helped me make better
                  decisions."
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Raphael</p>
                  <p className="text-sm text-muted-foreground">Sofware developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay Updated</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Subscribe to our newsletter for the latest product releases and exclusive deals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 lg:justify-center">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input placeholder="Enter your email" type="email" />
                  <Button>Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="w-full border-t py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6" />
                <span className="font-bold text-xl">Banitechtoks</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your one-stop shop for premium tech products and accessories.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Banex plaza Abuja FA76</li>
                <li className="text-muted-foreground">support@banitechtoks.com</li>
                <li className="text-muted-foreground">+2348082557358</li>
                <WhatsAppLink />
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Banitechtoks. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-muted-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
