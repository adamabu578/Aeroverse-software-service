"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Video, X } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

export default function VideoUploadSection() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)
//   const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type.startsWith("video/")) {
        setSelectedFile(file)
        const url = URL.createObjectURL(file)
        setVideoPreview(url)
      } else {
        // toast({
        //   title: "Invalid file type",
        //   description: "Please select a video file",
        //   variant: "destructive",
        // })
      }
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    setVideoPreview(null)
    if (videoPreview) {
      URL.revokeObjectURL(videoPreview)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedFile) {
    //   toast({
    //     title: "No video selected",
    //     description: "Please select a video to upload",
    //     variant: "destructive",
    //   })
      return
    }

    setIsUploading(true)

    // This would be replaced with actual upload logic using Vercel Blob
    try {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

    //   toast({
    //     title: "Video uploaded successfully",
    //     description: "Your video has been uploaded and will be reviewed shortly",
    //   })

      // Reset form
      setSelectedFile(null)
      setTitle("")
      setDescription("")
      setVideoPreview(null)
    } catch (error) {
    //   toast({
    //     title: "Upload failed",
    //     description: "There was an error uploading your video. Please try again.",
    //     variant: "destructive",
    //   })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    // <Card className="">
    //   <CardContent className="p-6">
    //     <form onSubmit={handleSubmit} className="space-y-6">
    //       <div className="space-y-2">
    //         <Label htmlFor="title">Video Title</Label>
    //         <Input
    //           id="title"
    //           value={title}
    //           onChange={(e) => setTitle(e.target.value)}
    //           placeholder="Enter a title for your video review"
    //           required
    //         />
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="description">Description</Label>
    //         <Textarea
    //           id="description"
    //           value={description}
    //           onChange={(e) => setDescription(e.target.value)}
    //           placeholder="Describe your review and the product(s) featured"
    //           required
    //         />
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="video">Upload Video</Label>
    //         {!selectedFile ? (
    //           <div
    //             className="border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
    //             onClick={() => document.getElementById("video")?.click()}
    //           >
    //             <div className="flex flex-col items-center gap-2">
    //               <Upload className="h-8 w-8 text-muted-foreground" />
    //               <p className="font-medium">Click to upload or drag and drop</p>
    //               <p className="text-sm text-muted-foreground">MP4, MOV, or WebM (max 100MB)</p>
    //             </div>
    //             <Input id="video" type="file" accept="video/*" onChange={handleFileChange} className="hidden" />
    //           </div>
    //         ) : (
    //           <div className="relative rounded-lg overflow-hidden">
    //             {videoPreview && <video src={videoPreview} controls className="w-full h-auto max-h-[300px]" />}
    //             <Button
    //               type="button"
    //               variant="destructive"
    //               size="icon"
    //               className="absolute top-2 right-2"
    //               onClick={handleRemoveFile}
    //             >
    //               <X className="h-4 w-4" />
    //             </Button>
    //             <div className="p-2 bg-muted">
    //               <p className="text-sm font-medium truncate">{selectedFile.name}</p>
    //               <p className="text-xs text-muted-foreground">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
    //             </div>
    //           </div>
    //         )}
    //       </div>

    //       <Button type="submit" className="w-full" disabled={isUploading}>
    //         {isUploading ? (
    //           <>Uploading...</>
    //         ) : (
    //           <>
    //             <Video className="mr-2 h-4 w-4" />
    //             Upload Video Review
    //           </>
    //         )}
    //       </Button>
    //     </form>
    //   </CardContent>
    // </Card>

    <Card className="max-w-sm mx-auto">
  <CardContent className="p-4">
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="title" className="text-sm">Video Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter video title"
          required
          className="text-sm"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="description" className="text-sm">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your review"
          required
          className="text-sm"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="video" className="text-sm">Upload Video</Label>
        {!selectedFile ? (
          <div
            className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => document.getElementById("video")?.click()}
          >
            <div className="flex flex-col items-center gap-1">
              <Upload className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">MP4, MOV, or WebM (max 100MB)</p>
            </div>
            <Input id="video" type="file" accept="video/*" onChange={handleFileChange} className="hidden" />
          </div>
        ) : (
          <div className="relative rounded-md overflow-hidden">
            {videoPreview && <video src={videoPreview} controls className="w-full h-auto max-h-[200px]" />}
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-1 right-1 h-6 w-6"
              onClick={handleRemoveFile}
            >
              <X className="h-3 w-3" />
            </Button>
            <div className="p-1 bg-muted text-sm">
              <p className="truncate">{selectedFile.name}</p>
              <p className="text-xs text-muted-foreground">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <Button type="submit" className="px-4 py-2 text-sm" disabled={isUploading}>
          {isUploading ? (
            <>Uploading...</>
          ) : (
            <>
              <Video className="mr-2 h-4 w-4" />
              Upload
            </>
          )}
        </Button>
      </div>
    </form>
  </CardContent>
</Card>

  )
}
