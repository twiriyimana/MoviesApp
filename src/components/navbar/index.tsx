import styled from "styled-components"
import logo from '../../assets/images/logos/logo.png'
import { useNavigate } from "react-router"
import { useEffect, useRef, useState } from "react"

export const Navbar = () => {
    const route = useNavigate()
    const [visible, setVisible] = useState(true)
    const lastScroll = useRef(0)

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY
            if (y <= 100) {
                setVisible(true)
            } else if (y > lastScroll.current) {
                setVisible(false)
            } else {
                setVisible(true)
            }
            lastScroll.current = y
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleClick = (url: string) => {
        if (url.startsWith('#')) {
            const el = document.getElementById(url.slice(1))
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                return
            }
        }
        route(url)
    }
    const navItem: { label: string; url: string }[] = [
        { label: "Home", url: "#home" },
        { label: "Trends", url: "#trends" },
        { label: "Movies", url: "#movies" },
        { label: "Golden Globe", url: "#goldenglobe" },
        { label: "Series", url: "#series" },
        { label: "Pricing", url: "#pricing" },
        { label: "Collections", url: "#collections" },
        { label: "Continue", url: "#continue" },
        { label: "Switch", url: "#switch" },
        { label: "Kids", url: "#kids" },
        { label: "FAQ", url: "#faq" },
        { label: "Studios", url: "#studios" },
        { label: "Footer", url: "#footer" }
    ]
    return <NavBarContainer $visible={visible}>
        <div className="container">
            <div className="content">
                <img src={logo.toString()} alt="logo" />
                <ul>
                    {navItem.map((nav, index) => {
                        return <li key={index} onClick={() => handleClick(nav.url)}>{nav.label}</li>
                    })}
                </ul>
            </div>
        </div>

    </NavBarContainer>
}
const NavBarContainer = styled.div<{ $visible: boolean }>`
position:fixed;
width:100%;
top:20px;
left: 0;
z-index: 2;
transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(-120px)'};
transition: transform 0.3s ease-in-out;
&::after{
position:fixed;
top:20px;
filter:blur(20px);
margin:auto;
}
.container{
backdrop-filter:blur(10px);
width:fit-content;
margin:auto;

}

.content{
margin:auto;
display:flex;
justify-content:center;
align-items:center;
border:1px solid #006486;
padding-left:20px;
padding-right:20px;
border-radius:10px;

img{
width:60px;
object-fit:contain;

}
}
ul{
list-style:none;
display:flex;
gap:20px;

}

`