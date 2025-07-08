import { Fade } from "react-awesome-reveal";
import './Footer.css'
interface FooterProps {
  theme: any
}
const Footer: React.FC<FooterProps> = ({theme }) => {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Copyright &copy; 2025 Dan's Page
        </p>
      </Fade>
    </div>
  );
};

export default Footer;