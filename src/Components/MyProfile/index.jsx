import styles from "./style.module.css";

function MyProfile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.avatar} alt={props.name} />
      <h2 className={styles.name}>{props.name}</h2>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.mail}</div>

      <div className={styles.links}>
        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a href={props.Instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default MyProfile;
