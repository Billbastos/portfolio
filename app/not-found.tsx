import Link from 'next/link'
import classes from './not-found.module.css'
import Image from 'next/image'
import catImageGif from './assets/cat-animation.gif'
import lockedDoorPng from './assets/locked-door.png'

const Custom404 = () => {
  const {
    wrapper,
    'return-class': returnClass,
    link,
    cat,
    icons,
    tip,
    door,
  } = classes
  return (
    <main className={wrapper}>
      <div className={tip}>
        <h1>There's no exit</h1>
        <h2>from this point.</h2>
      </div>
      <div className={returnClass}>
        <div className={icons}>
          <span className={door}>
            <Image src={lockedDoorPng} width={280} height={280} alt='door' />
          </span>
          <span className={cat}>
            <Image src={catImageGif} width={100} height={100} alt='cat' />
          </span>
        </div>{' '}
        <Link href='/' className={link}>
          <div>404 - return two steps.</div>
        </Link>
      </div>
    </main>
  )
}

export default Custom404
