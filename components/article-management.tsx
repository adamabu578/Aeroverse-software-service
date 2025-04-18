"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Trash2 } from "lucide-react"

// Define the Article type
interface Article {
  id: string
  title: string
  content: string
  createdAt: Date
}

export default function ArticleSection() {
  const [articles, setArticles] = useState<Article[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  // Create a new article
  const handleCreateArticle = () => {
    if (!title.trim() || !content.trim()) return

    const newArticle: Article = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date(),
    }

    setArticles([newArticle, ...articles])
    setTitle("")
    setContent("")
  }

  // Delete an article
  const handleDeleteArticle = (id: string) => {
    setArticles(articles.filter((article) => article.id !== id))
  }

  return (
    <section id="articles" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Share Your Tech Articles</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Write and share your tech reviews and insights with the community
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="create" className="">
        
            <TabsList className="flex w-[400px] justify-center gap-2 mx-auto">
            <TabsTrigger className="text-sm px-3 py-1" value="create">
              Create Article
            </TabsTrigger>
            <TabsTrigger className="text-sm px-3 py-1" value="view">
                View Articles ({articles.length})
            </TabsTrigger>
            </TabsList>

                <TabsContent
                value="create"
                className="flex justify-center items-center w-full "
                >
                <Card className=" w-[1000px]">
                    <CardHeader>
                    <CardTitle>Create a New Article</CardTitle>
                    <CardDescription>
                        Share your thoughts, reviews, and tech insights with others.
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                        id="title"
                        placeholder="Enter article title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                        id="content"
                        placeholder="Write your article content here..."
                        className="min-h-[200px]"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    </CardContent>
                    <CardFooter>
                    <Button
                        className="w-full"
                        onClick={handleCreateArticle}
                        disabled={!title.trim() || !content.trim()}
                    >
                        <PlusCircle className="mr-2 h-4 w-4" /> Publish Article
                    </Button>
                    </CardFooter>
                </Card>
                </TabsContent>


            <TabsContent value="view"  className="flex justify-center items-center w-full" >
              <Card className="w-[1000px] ">
                <CardHeader>
                  <CardTitle>Your Articles</CardTitle>
                  <CardDescription>Manage and view all your published articles.</CardDescription>
                </CardHeader>
                <CardContent>
                  {articles.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No articles yet. Create your first article to get started!
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {articles.map((article) => (
                        <Card key={article.id} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle>{article.title}</CardTitle>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive"
                                onClick={() => handleDeleteArticle(article.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </div>
                            <CardDescription>{new Date(article.createdAt).toLocaleDateString()}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="whitespace-pre-wrap">{article.content}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
