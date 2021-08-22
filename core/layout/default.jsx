import { motion } from 'framer-motion'
import { MOTION_VARIANTS } from '~/constants/framer-motion'

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
          <motion.main
            variants={MOTION_VARIANTS} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
          >
            {props.children}
          </motion.main>
        </div>
      </div>
    </div>
  )
}  