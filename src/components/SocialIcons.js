import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
                <a href="https://facebook.com">
                    <FaFacebook />
                </a>
                <a href="https://instagram.com">
                    <FaInstagram />
                </a>
                <a href="https://linkedin.com">
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    )
}
