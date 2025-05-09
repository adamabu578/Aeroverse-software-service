import type { Metadata } from "next"
import ProjectClientPage from "./ProjectClientPage"

// This would typically come from a database or API
const projects = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
    fullDescription:
      "We developed a comprehensive e-commerce solution for a retail client looking to expand their online presence. The platform includes advanced inventory management, secure payment processing with multiple gateways, customer analytics dashboard, and a responsive design optimized for mobile shopping. The solution resulted in a 45% increase in online sales within the first quarter after launch.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    client: "RetailCorp Inc.",
    duration: "4 months",
    team: "6 developers, 2 designers, 1 project manager",
    features: [
      "Product catalog with advanced filtering",
      "Secure checkout with multiple payment options",
      "Inventory management system",
      "Customer accounts and order history",
      "Analytics dashboard for business insights",
      "Mobile-responsive design",
    ],
  },
  "healthcare-app": {
    title: "Healthcare Mobile App",
    description:
      "A mobile application for healthcare providers to manage patient records, appointments, and communications.",
    fullDescription:
      "We created a HIPAA-compliant mobile application for a network of healthcare clinics to streamline their patient management processes. The app allows healthcare providers to securely access patient records, manage appointments, and communicate with patients through a secure messaging system. The solution has improved appointment attendance rates by 30% and reduced administrative workload by 25%.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React Native", "Firebase", "Express", "Socket.io"],
    client: "MediCare Network",
    duration: "6 months",
    team: "4 developers, 1 designer, 1 project manager, 1 security specialist",
    features: [
      "Secure patient records management",
      "Appointment scheduling and reminders",
      "HIPAA-compliant messaging system",
      "Prescription management",
      "Lab results viewing",
      "Telemedicine integration",
    ],
  },
  "fintech-dashboard": {
    title: "FinTech Dashboard",
    description:
      "An analytics dashboard for financial institutions to monitor transactions, detect fraud, and generate reports.",
    fullDescription:
      "We developed a sophisticated analytics dashboard for a financial services company to monitor transactions, detect potential fraud, and generate comprehensive reports. The dashboard provides real-time insights into financial activities, with customizable alerts and visualization tools. The implementation has helped the client identify fraudulent activities 60% faster and improved reporting efficiency by 40%.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    client: "FinSecure Solutions",
    duration: "5 months",
    team: "5 developers, 1 data scientist, 1 designer, 1 project manager",
    features: [
      "Real-time transaction monitoring",
      "Fraud detection algorithms",
      "Customizable reporting tools",
      "Interactive data visualizations",
      "Regulatory compliance tracking",
      "Secure API integrations with banking systems",
    ],
  },
  "logistics-system": {
    title: "Logistics Management System",
    description: "A comprehensive system for tracking shipments, managing inventory, and optimizing delivery routes.",
    fullDescription:
      "We built an end-to-end logistics management system for a transportation company to optimize their operations. The system includes real-time shipment tracking, inventory management, and route optimization using advanced algorithms. The implementation has reduced delivery times by 20% and lowered fuel costs by 15% through more efficient routing.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Angular", "Node.js", "Redis", "Google Maps API"],
    client: "Global Logistics Inc.",
    duration: "7 months",
    team: "7 developers, 1 designer, 1 project manager, 1 logistics specialist",
    features: [
      "Real-time shipment tracking",
      "Inventory management system",
      "Route optimization algorithms",
      "Driver mobile application",
      "Customer notification system",
      "Analytics and reporting dashboard",
    ],
  },
  "education-platform": {
    title: "Online Learning Platform",
    description:
      "An interactive platform for online courses, featuring video lessons, quizzes, and student progress tracking.",
    fullDescription:
      "We developed a comprehensive online learning platform for an educational institution to expand their digital offerings. The platform features video lessons, interactive quizzes, progress tracking, and a community forum for student discussions. The solution has enabled the client to reach 300% more students and increase course completion rates by 45%.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
    client: "EduTech Academy",
    duration: "6 months",
    team: "5 developers, 2 designers, 1 project manager, 1 educational consultant",
    features: [
      "Video lesson hosting and streaming",
      "Interactive quiz system",
      "Student progress tracking",
      "Community discussion forums",
      "Certificate generation",
      "Instructor dashboard for content management",
    ],
  },
  "iot-monitoring": {
    title: "IoT Monitoring Solution",
    description:
      "A real-time monitoring system for industrial IoT devices with alerts, data visualization, and predictive maintenance.",
    fullDescription:
      "We created a sophisticated IoT monitoring solution for a manufacturing client to track their industrial equipment performance. The system collects data from sensors, provides real-time monitoring, sends alerts for anomalies, and uses machine learning for predictive maintenance recommendations. The implementation has reduced equipment downtime by 35% and maintenance costs by 25%.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "GraphQL", "MQTT", "TimescaleDB"],
    client: "Industrial Innovations Corp.",
    duration: "8 months",
    team: "6 developers, 1 data scientist, 1 designer, 1 project manager, 1 IoT specialist",
    features: [
      "Real-time device monitoring",
      "Anomaly detection and alerts",
      "Data visualization dashboards",
      "Predictive maintenance algorithms",
      "Historical data analysis",
      "Remote device configuration",
    ],
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | DevStudio Projects`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: PageProps) {
  return <ProjectClientPage params={params} />
}
