import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
// import Gallery from '../components/Gallery'

// import thumb01 from '../assets/images/thumbs/01.jpg'
// import thumb02 from '../assets/images/thumbs/02.jpg'
// import thumb03 from '../assets/images/thumbs/03.jpg'
// import thumb04 from '../assets/images/thumbs/04.jpg'
// import thumb05 from '../assets/images/thumbs/05.jpg'
// import thumb06 from '../assets/images/thumbs/06.jpg'

// import full01 from '../assets/images/fulls/01.jpg'
// import full02 from '../assets/images/fulls/02.jpg'
// import full03 from '../assets/images/fulls/03.jpg'
// import full04 from '../assets/images/fulls/04.jpg'
// import full05 from '../assets/images/fulls/05.jpg'
// import full06 from '../assets/images/fulls/06.jpg'

// const DEFAULT_IMAGES = [
//   {
//     id: '1',
//     src: full01,
//     thumbnail: thumb01,
//     caption: 'Photo 1',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
//   {
//     id: '2',
//     src: full02,
//     thumbnail: thumb02,
//     caption: 'Photo 2',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
//   {
//     id: '3',
//     src: full03,
//     thumbnail: thumb03,
//     caption: 'Photo 3',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
//   {
//     id: '4',
//     src: full04,
//     thumbnail: thumb04,
//     caption: 'Photo 4',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
//   {
//     id: '5',
//     src: full05,
//     thumbnail: thumb05,
//     caption: 'Photo 5',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
//   {
//     id: '6',
//     src: full06,
//     thumbnail: thumb06,
//     caption: 'Photo 6',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
// ]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Luke Sanwick'
    const siteDescription = 'The personal site of Luke Sanwick.'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>I'll find something to put here.</h2>
            </header>
            <p>
              Still working out what I would like to share here, but my current
              interests are focused around{' '}
              <a href="https://www.typescriptlang.org/">Typescript</a>,{' '}
              <a href="https://www.gatsbyjs.org/">Gatsby</a> (and other static
              site generators), <a href="https://graphql.org/">GraphQL</a>, and
              new languages and technologies like{' '}
              <a href="https://elm-lang.org/">Elm</a> and{' '}
              <a href="https://elixir-lang.org/">Elixir</a>.
            </p>
          </section>

          <section id="two">
            <h2>Get In Touch</h2>
            <p>If you'd like to contact me, just use the form below.</p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form name="contact" netlify>
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
