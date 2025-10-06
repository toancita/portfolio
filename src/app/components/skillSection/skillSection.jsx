import Image from "next/image";
import styles from "./skillSection.module.css";
import { skillsData } from "../../constants/constants.js";

export default function SkillsSection() {
  return (
    <section>
      <div className={styles.grid}>
        {skillsData.map((skill) => (
          <div key={skill.title} className={styles.skillItem}>
            <Image
              src={skill.icon}
              alt={skill.title}
              width={90}
              height={90}
              className={styles.icon}
            />
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}