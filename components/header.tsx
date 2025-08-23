import type React from "react"
import AiDisclosureBanner from "@/components/ai-disclosure-banner"

const Header: React.FC = () => {
  return (
    <>
      <AiDisclosureBanner />
      <header>{/* rest of code here */}</header>
    </>
  )
}

export default Header
