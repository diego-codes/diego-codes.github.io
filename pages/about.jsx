import LayoutContainer from '../components/LayoutContainer'

export default function AboutPage() {
  return (
    <LayoutContainer>
      <p>
        I enjoy coding and design. I currently work at Spiceworks where I
        surround myself with very talented people to develop digital advertising
        experiences for companies like Microsoft, Lenovo, and HP. I use mostly
        front-end web technology to create these experiences as well as design
        tools and a little bit of back-end elbow grease to polish everything
        off.
      </p>
      <p>
        I enjoy helping my local community using the skills that I have. This
        includes the Budget in a Box application for the City of Austin and
        context notes for Austin EcoNetwork. I also think it&apos;s important to
        give back to the tech community. I&apos;ve presented on exciting tools
        like design patterns and{' '}
        <a
          href="http://cuyaproductions.github.io/sass-color-functions/presentation/#/"
          target="_blank"
          rel="noreferrer"
        >
          Sass color functions
        </a>{' '}
        at Spiceworks and to groups like Sass ATX and Open Austin.
      </p>
      <p>
        In my time off, when I&apos;m not coding away on a personal or volunteer
        project, you&apos;ll often find me hiking or exploring delicious food
        around Austin, TX.
      </p>
      <p>
        If you want to know what I&apos;m up to and things I find interesting
        please follow me on{' '}
        <a
          href="https://twitter.com/CuyaProductions"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        . See some of my projects on <a href="../projects">here</a> and on{' '}
        <a
          href="https://github.com/cuyaproductions"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        . To learn more about my professional journey look me up on{' '}
        <a
          href="https://www.linkedin.com/in/diegoahernandez"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        . Also check out my random code experiments on{' '}
        <a
          href="http://codepen.io/cuyaproductions/"
          target="_blank"
          rel="noreferrer"
        >
          CodePen
        </a>
        .
      </p>
      <p>Nice to meet you!</p>
    </LayoutContainer>
  )
}

AboutPage.propTypes = {}

AboutPage.defaultProps = {}
