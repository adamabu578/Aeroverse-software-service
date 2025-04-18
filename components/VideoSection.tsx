// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Upload, Video, X } from "lucide-react"
// // import { useToast } from "@/hooks/use-toast"

// export default function VideoUploadSection() {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null)
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [isUploading, setIsUploading] = useState(false)
//   const [videoPreview, setVideoPreview] = useState<string | null>(null)
// //   const { toast } = useToast()

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       if (file.type.startsWith("video/")) {
//         setSelectedFile(file)
//         const url = URL.createObjectURL(file)
//         setVideoPreview(url)
//       } else {
//         // toast({
//         //   title: "Invalid file type",
//         //   description: "Please select a video file",
//         //   variant: "destructive",
//         // })
//       }
//     }
//   }

//   const handleRemoveFile = () => {
//     setSelectedFile(null)
//     setVideoPreview(null)
//     if (videoPreview) {
//       URL.revokeObjectURL(videoPreview)
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!selectedFile) {
//     //   toast({
//     //     title: "No video selected",
//     //     description: "Please select a video to upload",
//     //     variant: "destructive",
//     //   })
//       return
//     }

//     setIsUploading(true)

//     // This would be replaced with actual upload logic using Vercel Blob
//     try {
//       // Simulate upload delay
//       await new Promise((resolve) => setTimeout(resolve, 2000))

//     //   toast({
//     //     title: "Video uploaded successfully",
//     //     description: "Your video has been uploaded and will be reviewed shortly",
//     //   })

//       // Reset form
//       setSelectedFile(null)
//       setTitle("")
//       setDescription("")
//       setVideoPreview(null)
//     } catch (error) {
//     //   toast({
//     //     title: "Upload failed",
//     //     description: "There was an error uploading your video. Please try again.",
//     //     variant: "destructive",
//     //   })
//     } finally {
//       setIsUploading(false)
//     }
//   }

//   return (


//     <Card className="max-w-sm mx-auto">
//   <CardContent className="p-4">
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="space-y-1">
//         <Label htmlFor="title" className="text-sm">Video Title</Label>
//         <Input
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter video title"
//           required
//           className="text-sm"
//         />
//       </div>

//       <div className="space-y-1">
//         <Label htmlFor="description" className="text-sm">Description</Label>
//         <Textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Describe your review"
//           required
//           className="text-sm"
//         />
//       </div>

//       <div className="space-y-1">
//         <Label htmlFor="video" className="text-sm">Upload Video</Label>
//         {!selectedFile ? (
//           <div
//             className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors"
//             onClick={() => document.getElementById("video")?.click()}
//           >
//             <div className="flex flex-col items-center gap-1">
//               <Upload className="h-6 w-6 text-muted-foreground" />
//               <p className="text-sm">Click to upload or drag and drop</p>
//               <p className="text-xs text-muted-foreground">MP4, MOV, or WebM (max 100MB)</p>
//             </div>
//             <Input id="video" type="file" accept="video/*" onChange={handleFileChange} className="hidden" />
//           </div>
//         ) : (
//           <div className="relative rounded-md overflow-hidden">
//             {videoPreview && <video src={videoPreview} controls className="w-full h-auto max-h-[200px]" />}
//             <Button
//               type="button"
//               variant="destructive"
//               size="icon"
//               className="absolute top-1 right-1 h-6 w-6"
//               onClick={handleRemoveFile}
//             >
//               <X className="h-3 w-3" />
//             </Button>
//             <div className="p-1 bg-muted text-sm">
//               <p className="truncate">{selectedFile.name}</p>
//               <p className="text-xs text-muted-foreground">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="flex justify-center">
//         <Button type="submit" className="px-4 py-2 text-sm" disabled={isUploading}>
//           {isUploading ? (
//             <>Uploading...</>
//           ) : (
//             <>
//               <Video className="mr-2 h-4 w-4" />
//               Upload
//             </>
//           )}
//         </Button>
//       </div>
//     </form>
//   </CardContent>
// </Card>

//   )
// }



"use client"

import { Play } from "lucide-react"
import { useState } from "react"

interface VideoSectionProps {
  title: string
  description?: string
  videoSrc: string
  videoType?: "self-hosted" | "youtube" | "vimeo"
  posterImage?: string
  aspectRatio?: "16:9" | "4:3" | "1:1"
}

export function VideoSection({
  title,
  description,
  videoSrc,
  videoType = "self-hosted",
  posterImage,
  aspectRatio = "16:9",
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Calculate aspect ratio padding
  const aspectRatioPadding = {
    "16:9": "pb-[56.25%]", // 9/16 = 0.5625 or 56.25%
    "4:3": "pb-[75%]", // 3/4 = 0.75 or 75%
    "1:1": "pb-[100%]", // 1/1 = 1 or 100%
  }[aspectRatio]

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
          {description && <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">{description}</p>}
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className={`relative w-full ${aspectRatioPadding}`}>
            {videoType === "self-hosted" ? (
              <>
                {!isPlaying && posterImage && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/5 cursor-pointer"
                    onClick={handlePlayClick}
                  >
                    <img
                      src={posterImage || "/placeholder.svg"}
                      alt="Video thumbnail"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 bg-black/30 rounded-full p-4">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                )}
                <video
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                  src={videoSrc}
                  poster={posterImage}
                  controls={isPlaying}
                  preload="metadata"
                  playsInline
                  autoPlay={isPlaying}
                  muted={!isPlaying}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow-xl"
                src={videoSrc}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
