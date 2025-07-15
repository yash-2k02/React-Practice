import LineChartNew from '../lineChart/LineChartNew'
import PieChartNew from '../pieChart/PieChartNew'
import styles from './Dashboard.module.css'


export default function Dashboard ({name, loginStatus}) {

  const handleLogout = ()=>{
    loginStatus(false)
  }
  return (
    <>
    <div className={styles.navbar}>
      <a className={styles.link} href="">Home</a>
      <a className={styles.link} href="">About</a>
      <a className={styles.link} href="">Career</a>
      <button className={styles.logout_button} onClick={handleLogout}>Logout</button>
    </div>
    <div className={styles.welcome_text}>
            Welcome, {name}
    </div>
    <div className={styles.line_chart}>
      <LineChartNew />
      <PieChartNew />
    </div>
    </>
  )
}
