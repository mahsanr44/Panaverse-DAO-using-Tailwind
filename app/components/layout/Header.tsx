import Image from "next/image"
import Link from "next/link"
import Logo from "public/logo.png"
import { Wrapper } from "../shared/Wrapper"
function Header() {
  return (
    <header className="sticky top-0 bg-white backdrop-blur-md bg-opacity-70 z-10">

    
    <Wrapper>
    <div className="flex justify-between px-2    py-3  items-center">
    <div>
      
<Image src={Logo} width={120} alt="Panaverse Logo"/>
    </div>
<ul className="flex space-x-8 font-semibold">
    <li>
        <Link href={"/"}>
        Home
        </Link>
        </li>
    <li>
        <Link href={"courses"}>
        Courses
        </Link>
        </li>
</ul>
</div>
    </Wrapper>
    </header>
  )
}

export default Header
