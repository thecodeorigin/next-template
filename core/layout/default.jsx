import Navbar from '~/components/layout/navbar';
import Sidebar from '~/components/layout/sidebar';

import styles from './default.module.scss'


export default function Default (props) {
  return (
    <div className={styles.layoutWrapper}>
      <Sidebar />
      <div className={styles.pageWrapper}>
        <Navbar className={styles.pageNavWrapper} />
        <div className={styles.pageInner}>
          {props.children}
        </div>
      </div>
    </div>
  )
}  