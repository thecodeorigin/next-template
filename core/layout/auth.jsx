import styles from './auth.module.scss'

export default function Auth (props) {
  return (
    <div className={styles.layoutWrapper}>
      {props.children}
    </div>
  )
}
