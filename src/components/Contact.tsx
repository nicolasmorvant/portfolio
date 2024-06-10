import '../styles/Contact/Contact.css';
import Loader from './Loader.tsx';

const Contact: React.FC = () => {
    return (
        <footer className="contact" id="contact">
            <h3 className="contact__title">
                Con<span className="contact__title--lightblue">tact</span>
            </h3>
            <div className="contact__mail__and__phone">
                <div className="contact__mail">
                    <i className="fa-solid fa-envelope"></i>
                    <a
                        href="mailto:nicolas.morvant@tuta.io"
                        className="contact__mail"
                    >
                        nicolas.morvant@tuta.io
                    </a>
                </div>
                <div className="contact__phone">
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:+" className="contact__number">
                        06 33 10 13 63
                    </a>
                </div>
            </div>

            <Loader />

            <div className="contact__social">
                <a
                    href="https://www.linkedin.com/in/nicolas-morvant/"
                    className="contact__linkedin"
                >
                    <i className="fa-brands fa-linkedin" title="Linkedin"></i>
                </a>
                <a
                    href="https://discordapp.com/users/nicolasmorvant"
                    className="contact__discord"
                >
                    <i className="fa-brands fa-discord" title="Discord"></i>
                </a>
                <a
                    href="https://github.com/nicolasmorvant"
                    className="contact__github"
                >
                    <i className="fa-brands fa-github" title="Github"></i>
                </a>
            </div>
        </footer>
    );
};

export default Contact;
