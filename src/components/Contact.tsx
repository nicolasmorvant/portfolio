import "../styles/Contact/Contact.css";

const Contact: React.FC = () => {
  return (

        <section className="contact">
            <h3 className="contact__title">Con<span className="contact__title--lightblue">tact</span></h3>

            {
                /*    
                    <form action="" method="post">
                    <div className="user">
                        <label htmlFor="user__prenom">Prénom</label>
                        <input type="text" name="prenom" id="user__prenom" required/>
                        <label htmlFor="user__nom">Nom</label>
                        <input type="text" name="nom" id="user__nom" required/>
                        <label htmlFor="user__email">Email</label>
                        <input type="email" name="email" id="user__email" required/>
                        <label htmlFor="user__telephone">Téléphone</label>
                        <input type="tel" name="telephone" id="user__telephone" />
                    </div>
                    <div className="message">
                        <label htmlFor="message__objet">Objet</label>
                        <input type="text" name="objet" id="message__objet" />
                        <label htmlFor="message__text">Message</label>
                        <textarea name="text" id="message__text"></textarea>
                    </div>
                    <div className="buttons">
                        <button type="submit">Envoyer</button>
                        <button type="reset">Effacer</button>
                    </div>
                    </form>
                */
            }

            <div className="contact__mail__and__phone">
                <div className="contact__mail">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:nicolas.morvant@tuta.io" className="contact__mail">nicolas.morvant@tuta.io</a>
                </div>
                <div className="contact__phone">
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:+" className="contact__number">06 33 10 13 63</a>
                </div>
            </div>

            <div className="contact__social">
                <a href="https://www.linkedin.com/in/nicolas-morvant/" className="contact__linkedin">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="" className="contact__twitter">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://github.com/nicolasmorvant" className="contact__github">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            
        </section>
    
    )
}

export default Contact