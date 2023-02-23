import Image from "next/image"
import Link from "next/link"
import Logo from "public/logo.png"
import { Wrapper } from "../shared/Wrapper"
function Header() {
  return (
    <Wrapper>
    <header className="flex justify-between px-2  backdrop-blur-md  py-3  bg-white sticky top-0 bg-opacity-90 items-center">
    <div>
      {/* <h2  className="text-xl font-bold">Panaverse</h2> */}
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

    </header>
    </Wrapper>
  )
}

export default Header
