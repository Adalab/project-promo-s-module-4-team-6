import { Link, NavLink } from "react-router-dom"
import ls from '../services/localStorage'
import '../styles/App.scss';
import user from '../images/user.png';
import Profile from './Profile';
import { useState } from "react";


const Landing = () => {


  const [cardLanding, setCardLanding] = useState(ls.get('cardList', []));
  const handleClickDeleteCard = (ev) => {
    ev.preventDefault()
    cardLanding.splice(ev.target.id, 1);
    ls.set('cardList', cardLanding);
    setCardLanding([...cardLanding]);
  }

  const renderCardLanding = () => {
    if (cardLanding.length > 0) {
      return cardLanding.map((eachCard, i) => {
        return (
          <NavLink className='link--navlink' key={i} to={`/detailcard/${eachCard.id}`}>
            <li className="li--items" >
              <section className='landing--autor'>
                <section className='info--project'>
                  <div className='wrap--title__preview'>
                    <div className='info--project__line1'></div>
                    <p className='info--project__subtitle'>Personal Project Card</p>
                    <div className='info--project__line2'></div>
                  </div>
                  <h2 className='info--project__title'>{eachCard.name}</h2>
                  <p className='info--project__slogan'>{eachCard.slogan}</p>
                  <p className='info--project__desc'>{eachCard.desc}</p>
                  <section className='info--proyect__section'>
                    <div className='info--project__technologies'>
                      <p className='info--project__technologies-text'>{eachCard.technologies}</p>
                    </div>
                    <div className='wrap--icon'>
                      <NavLink href={eachCard.demo} target="_blank" rel="noreferrer"><i className='fa-solid fa-globe info--project__technologies-icon1'></i></NavLink>
                      <NavLink href={eachCard.repo} target="_blank" rel="noreferrer"><i className='fa-brands fa-github info--project__technologies-icon1'></i></NavLink>
                    </div>
                  </section>
                </section>

                <section className='info--autor'>
                  <Profile className='info--autor__image' defaultAvatar={user} avatar={eachCard.photo} />
                  <p className='info--autor__job'>{eachCard.job}</p>
                  <p className='info--autor__name'>{eachCard.autor}</p>
                </section>
              </section>
              <i onClick={handleClickDeleteCard} className=" btn--delete__landing fa-solid fa-trash-can"></i>
            </li>
          </NavLink>
        )
      })
    } else {
      return (
        <>
          <li className="li--items opacity--landing" >
            <section className='landing--autor'>
              <section className='info--project'>
                <div className='wrap--title__preview'>
                  <div className='info--project__line1'></div>
                  <p className='info--project__subtitle'>Personal Project Card</p>
                  <div className='info--project__line2'></div>
                </div>
                <h2 className='info--project__title'>Proyecto 1</h2>
                <p className='info--project__slogan'>Slogan proyecto 1</p>
                <p className='info--project__desc'>DescProyecto 1</p>
                <section className='info--proyect__section'>
                  <div className='info--project__technologies'>
                    <p className='info--project__technologies-text'>React</p>
                  </div>
                  <div className='wrap--icon'>
                    <NavLink href='#' target="_blank" rel="noreferrer"><i className='fa-solid fa-globe info--project__technologies-icon1'></i></NavLink>
                    <NavLink href='#' target="_blank" rel="noreferrer"><i className='fa-brands fa-github info--project__technologies-icon1'></i></NavLink>
                  </div>
                </section>
              </section>

              <section className='info--autor'>
                <img className='info--autor__image' src='https://ca.slack-edge.com/T2Q8FS5QB-U04HECEE459-f2cd3c16227d-512' alt='foto' />
                <p className='info--autor__job'>Front-end developer</p>
                <p className='info--autor__name'>Team 6</p>
              </section>
            </section>

          </li>
          <li className="li--items opacity--landing" >
            <section className='landing--autor'>
              <section className='info--project'>
                <div className='wrap--title__preview'>
                  <div className='info--project__line1'></div>
                  <p className='info--project__subtitle'>Personal Project Card</p>
                  <div className='info--project__line2'></div>
                </div>
                <h2 className='info--project__title'>Proyecto 1</h2>
                <p className='info--project__slogan'>Slogan proyecto 1</p>
                <p className='info--project__desc'>DescProyecto 1</p>
                <section className='info--proyect__section'>
                  <div className='info--project__technologies'>
                    <p className='info--project__technologies-text'>React</p>
                  </div>
                  <div className='wrap--icon'>
                    <NavLink href='#' target="_blank" rel="noreferrer"><i className='fa-solid fa-globe info--project__technologies-icon1'></i></NavLink>
                    <NavLink href='#' target="_blank" rel="noreferrer"><i className='fa-brands fa-github info--project__technologies-icon1'></i></NavLink>
                  </div>
                </section>
              </section>

              <section className='info--autor'>
                <img className='info--autor__image' src='https://ca.slack-edge.com/T2Q8FS5QB-U04HECD2P0B-2cdc06ec2680-512' alt='foto' />
                <p className='info--autor__job'>Frontend</p>
                <p className='info--autor__name'>Team 6</p>
              </section>
            </section>

          </li>
          <li className="li--items opacity--landing" >
            <section className='landing--autor'>
              <section className='info--project'>
                <div className='wrap--title__preview'>
                  <div className='info--project__line1'></div>
                  <p className='info--project__subtitle'>Personal Project Card</p>
                  <div className='info--project__line2'></div>
                </div>
                <h2 className='info--project__title'>Proyecto 1</h2>
                <p className='info--project__slogan'>Slogan proyecto 1</p>
                <p className='info--project__desc'>DescProyecto 1</p>
                <section className='info--proyect__section'>
                  <div className='info--project__technologies'>
                    <p className='info--project__technologies-text'>React</p>
                  </div>
                  <div className='wrap--icon'>
                    <NavLink href='#' target="_blank" rel="noreferrer"><i className='fa-solid fa-globe info--project__technologies-icon1'></i></NavLink>
                    <NavLink href='#' target="_blank" rel="noreferrer"><i className='fa-brands fa-github info--project__technologies-icon1'></i></NavLink>
                  </div>
                </section>
              </section>

              <section className='info--autor'>
                <img className='info--autor__image' src='https://ca.slack-edge.com/T2Q8FS5QB-U04HECE4PT5-87a795a18acc-48' alt='foto' />
                <p className='info--autor__job'>Frontend</p>
                <p className='info--autor__name'>Team 6</p>
              </section>
            </section>

          </li>
          <li className="li--items opacity--landing" >
            <section className='landing--autor'>
              <section className='info--project'>
                <div className='wrap--title__preview'>
                  <div className='info--project__line1'></div>
                  <p className='info--project__subtitle'>Personal Project Card</p>
                  <div className='info--project__line2'></div>
                </div>
                <h2 className='info--project__title'>Proyecto 1</h2>
                <p className='info--project__slogan'>Slogan proyecto 1</p>
                <p className='info--project__desc'>DescProyecto 1</p>
                <section className='info--proyect__section'>
                  <div className='info--project__technologies'>
                    <p className='info--project__technologies-text'>React</p>
                  </div>
                  <div className='wrap--icon'>
                    <NavLink href='#' target="_blank" rel="noreferrer"><i className='fa-solid fa-globe info--project__technologies-icon1'></i></NavLink>
                    <NavLink href='#' target="_blank" rel="noreferrer"><i className='fa-brands fa-github info--project__technologies-icon1'></i></NavLink>
                  </div>
                </section>
              </section>

              <section className='info--autor'>
                <img className='info--autor__image' href='#' alt='foto' />
                <p className='info--autor__job'>Frontend</p>
                <p className='info--autor__name'>Team 6</p>
              </section>
            </section>
          </li>
        </>
      )
    }
  }
  return (
    <div className='container'>
      <main>
        <section className="wrap--landing">
          <h1 className="landing--title">Proyectos molones</h1>
          <p className="landing--text">Escaparate en línea para recoger ideas a través de la tecnología</p>
          <Link className="landing--link btn-large" to="/create">Nuevo proyecto</Link>
        </section>

        <section>
          <ul className="list--element">



            {renderCardLanding()}

          </ul>
        </section>
      </main >
    </div>

  )
}
export default Landing