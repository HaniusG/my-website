import ProjectLink from '@/components/ProjectLink'
import styles from './Work.module.scss'



const Works = () => {
  return (
    <div className={styles.worksDiv} id='experience'>
        <h2>Experience</h2>
        <div className={styles.works}>
          <div className={styles.projectDiv}>
            <ProjectLink src='/assets/images/work/DevsData' href='https://devsdata.com/'/>
            <h3>DevsData LLC</h3>
            <p>I started at DevsData as a frontend intern, publishing articles and working with basic HTML. Over time, I moved on to scripting, building widgets, and adding WordPress shortcodes in PHP. I later developed full pages with interactive elements, wrote web scrapers and Chrome extensions, and eventually took on responsibilities like managing merge processes and broader development tasks.</p>
          </div>
        </div>
    </div>
  )
}

export default Works;