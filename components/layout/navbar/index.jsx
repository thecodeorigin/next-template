import { useRouter } from 'next/router'
import { ROUTE_LABELS } from '~/constants/routes'
import { NAVBAR_HEIGHT as navbarheight } from '~/constants/layout'
import { Button } from 'antd';

import styles from './style.module.scss'

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbarWrapper} style={{ height: navbarheight }}>
      <h1 className={styles.navbarTitle}>
        {ROUTE_LABELS[router.route]}
      </h1>
      <div>
        <Button className="inline-block" type="primary">Add stuff</Button>
      </div>
    </nav>
  )
} 

export default Navbar
