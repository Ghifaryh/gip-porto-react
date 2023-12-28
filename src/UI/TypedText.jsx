import { TypeAnimation } from 'react-type-animation'

export default function TypedText() {
  return (
    <div>
      <TypeAnimation
        className="typed-text"
        sequence={['Software Engineer', 1000, 'Web Developer', 1000]}
        wrapper="div"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  )
}
