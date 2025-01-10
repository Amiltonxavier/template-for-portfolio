
import { Header, NavLink, Nav as NavBar } from "./styled";
import { CONSTANTS } from "../../data/constants";
import { Menu } from "lucide-react";



export function Nav() {
    return (
        <Header>
            <span>
                <Menu color="#fff" size={20} />
            </span>

            <NavBar>
                <NavLink>Home</NavLink>
                <NavLink>Case Studies</NavLink>
                <NavLink>Recent Work</NavLink>
                <NavLink> Project</NavLink>
            </NavBar>
            <div>
                {
                    CONSTANTS.profile.socials.map((social) => (
                        <NavLink key={social.name} href={social.url}><img src={social.icon} alt="linkedin" /></NavLink>
                    ))
                }
            </div>
        </Header>
    )
}
