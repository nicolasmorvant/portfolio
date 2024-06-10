import '../styles/Formation/Formation.css';

const Formation: React.FC = () => {
  return (
    <section className="formation" id='formation'>
        <h3 className="formation__title">Form<span className='formation__title--lightblue'>ation</span></h3>
        
        <div className="formation__details">
          <ul className='formation__list'>

            <li className='formation__item'>
              <p className="formation__year">20<span className="formation__year--tearose">24</span></p>
              <div className="formation__desc">
                <h4 className='formation__desc__title'>Développeur Web OpenClassrooms</h4>
                <p className="formation__desc__text">
                Formation axée sur le développement web complet avec React, Sass, Node.js et MongoDB. <br />
                Les projets pratiques permettent d'appliquer les compétences acquises dans des contextes réels de développement.
                </p>
              </div>
            </li>
            
            <li className='formation__item'>
              <p className="formation__year">20<span className="formation__year--tearose">18</span></p>
              <div className="formation__desc">
                <h4 className='formation__desc__title'>DUT Informatique</h4>
                <p className="formation__desc__text">
                  Formation complète en informatique. <br/>
                  Développement web et logiciel, bases de données, réseaux et systèmes, gestion de projet.
                </p>
              </div>
            </li>

          </ul>
        </div>
    </section>
  )
}

export default Formation
