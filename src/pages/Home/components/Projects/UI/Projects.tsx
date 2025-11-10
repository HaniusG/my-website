import ProjectLink from '@/components/ProjectLink'
import styles from './Projects.module.scss'



const Projects = () => {
  return (
    <div className={styles.projectsDiv} id='projects'>
        <h2>My Projects</h2>
        <div className={styles.projects}>

          <div className={styles.projectDiv}>
            <ProjectLink src='/assets/images/projects/JobPortalApp' href='https://job-portal-client-nu-ebon.vercel.app/'/>
            <h3>Job Portal App</h3>
            <p>Job Portal is a full-stack web app built with React & TypeScript on the frontend and Node.js (Express.js) with MongoDB on the backend. It features two logins: employers can post jobs, view applications, and accept or reject candidates, while employees can browse jobs and apply with uploaded CVs.</p>
          </div>

          <div className={styles.projectDiv}>
            <ProjectLink src='/assets/images/projects/CarRentApp' href='https://car-rent-app-theta.vercel.app/'/>
            <h3>Car Rental App</h3>
            <p>This project was created while I was learning about responsiveness. I focused on designing beautiful, simple, and highly responsive components. The concept was inspired by a car rental website but has been completely reworked with an emphasis on enhanced responsiveness</p>
          </div>

          <div className={styles.projectDiv}>
            <ProjectLink src='/assets/images/projects/MyTrelloApp' href='https://trello-v2.vercel.app/'/>
            <h3>Trello-like App</h3>
            <p>This project was developed as the final project for my ACA React Developer course. It's a Trello-like app where you can log in, create cards and tasks, drag and drop, and edit them. <strong>Please make sure to download this project from GitHub and run it locally, as the demo version on Vercel does not fully support the functionality with the scripts.</strong></p>
          </div>
        </div>
    </div>
  )
}

export default Projects;