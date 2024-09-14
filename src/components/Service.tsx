import '../styles/Service/Service.css';

const Service: React.FC = () => {
    return (
        <section className="services" id="services">
            <h3 className="services__title">
                Serv<span className="services__title--lightblue">ices</span>
            </h3>

            <div className="services__item">
                <h4 className="services__item__title">Développement Web</h4>
                <p className="services__item__text">
                    Je propose des services complets de développement web
                    front-end responsives et back-end, ainsi que
                    l'implémentation de base de données.
                </p>
            </div>

            <div className="services__item">
                <h4 className="services__item__title">
                    Optimisation et Performances
                </h4>
                <p className="services__item__text">
                    J'optimise les performances de votre site web (FCP, SI, LCP,
                    CLS), son référencement naturel SEO, son accessibilité,
                    ainsi que la manière dont vous apparaissez sur les réseaux
                    sociaux.
                </p>
            </div>
        </section>
    );
};

export default Service;
