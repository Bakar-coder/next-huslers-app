import React, { useState } from "react";
import { Link } from "../routes";
import { useRouter } from 'next/router'



const ContactComponent = ({ sendMessage }) => {
  const router = useRouter()
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    text: ''
  })
  const handleInputChange = e => setState({...state, [e.target.name]: e.target.value})

  const handleSubmission = e => {
    e.preventDefault();
    sendMessage(state, router)
  }


  const { name, email, subject, text } = state

  return (
    <div>
      <section
        className='section section--first section--bg'
        data-bg='img/section/section.jpg'
        style={{
          background:
            "url(/img/section/section.jpg) center center / cover no-repeat",
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section__wrap'>
                <h2 className='section__title'>Contacts</h2>

                <ul className='breadcrumb'>
                  <li className='breadcrumb__item'>
                    <Link route='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className='breadcrumb__item breadcrumb__item--active'>
                    Contacts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-7 col-xl-8'>
              <div className='row'>
                <div className='col-12'>
                  <h2 className='section__title'>Contact Form</h2>
                </div>

                <div className='col-12'>
                  <form onSubmit={handleSubmission}  className='form form--contacts'>
                    <input
                      type='text'
                      className='form__input'
                      placeholder='name'
                      onChange={handleInputChange}
                      name='name'
                      value={name}
                    />
                    <input
                      type='text'
                      className='form__input'
                      placeholder='email'
                      onChange={handleInputChange}
                      name='email'
                      value={email}
                    />
                    <input
                      type='text'
                      className='form__input'
                      placeholder='subject'
                      onChange={handleInputChange}
                      name='subject'
                      value={subject}
                    />
                    <textarea
                      id='text'
                      name='text'
                      className='form__textarea'
                      placeholder='Type your message...'
                      onChange={handleInputChange}
                      name='text'
                      value={text}
                    ></textarea>
                    <button type='submit' className='form__btn'>
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-5 col-xl-4'>
              <div className='row'>
                <div className='col-12'>
                  <h2 className='section__title'>Info</h2>
                </div>

                <div className='col-12'>
                  

                  <ul className='contacts__list'>
                    <li>
                      <a href='tel:+256792701157'>+256 (792) 701-157</a>
                    </li>
                    <li>
                      <a href='mailto:ghettohustlers256@gmail.com'>
                        ghettohustlers256@gmail.com
                      </a>
                    </li>
                  </ul>
                  <ul className='contacts__social'>
                    <li className='facebook'>
                      <a href='https://web.facebook.com/GhettoHustlersEnt' target='_blank'>
                        <i className='icon ion-logo-facebook'></i>
                      </a>
                    </li>
                    <li className='instagram'>
                      <a href='https://www.instagram.com/ghettohustlersent/' target='_blank'>
                        <i className='icon ion-logo-instagram'></i>
                      </a>
                    </li>
                    <li className='twitter'>
                      <a href='https://twitter.com/Ghetto_hustlers' target='_blank'>
                        <i className='icon ion-logo-twitter'></i>
                      </a>
                    </li>
                    <li className='vk'>
                      <a href='https://www.youtube.com/channel/UCIql2msjhJOnbGL2uOymaGA?disable_polymer=true&nv=1' target='_blank'>
                        <i className='icon ion-logo-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
