import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{ type IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface LinkProps {
    href: string,
    icon: IconDefinition
}
const GithubSiteLink = (prop: LinkProps) => {
    return (
        <a href={prop.href} target = "_blank" className="block" >
            <FontAwesomeIcon icon={prop.icon} size="xl"  />   
        </a>
    )
}

export default GithubSiteLink