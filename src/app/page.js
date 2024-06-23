import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
      <main className={styles.main}>
          <div className={styles.center}>
              <div>
                  <div className={styles.center}>
                      <div>
                          <h1>Hola, I am Roman</h1>
                          <p className={styles.description}>I am proud CS student at the University of Southern California.
                              I have gained experience in Software develoment at Amazon as an SDE I</p>
                      </div>
                  </div>
                  <hr/>
                  <div>
                      <h2>Skillset</h2>
                      <div className={styles.center}>
                          <div className={styles.grid}>
                              <div className={styles.card}>
                                  <h4>C++</h4>
                                  <p className={styles.description}>I have used C++ to develop bitmap editor,
                                      and the implementation of the fundamental data structures.
                                  </p>
                              </div>
                              <div className={styles.card}>
                                  <h4>Java</h4>
                                  <p className={styles.description}> Developed a full-stack marketplace
                                      application for the CSCI201 final project
                                  </p>

                              </div>
                              <div className={styles.card}>
                                  <h4>Python + Pyspark</h4>
                                  <p className={styles.description}> Migrated legacy data pipeline written purely
                                      in SQL to PySpark using its API.
                                  </p>
                              </div>
                              <div className={styles.card}>
                                  <h4>Management</h4>
                                  <p className={styles.description}> Led the development of the CSCI 201 marketplace
                                      application as part of the final project.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <hr/>
                  <div>
                      <h2>Projects / Experience</h2>
                      <div className={styles.center}>
                          <div className={styles.grid}>
                              <div className={styles.card}>
                                  <h6 className={styles.description}>SDE I @ Amazon (2024)</h6>
                              </div>
                              <div className={styles.card}>
                                  <h6 className={styles.description}>SDE I AFE @ Amazon (2023)</h6>
                              </div>
                              <div className={styles.card}>
                                  <h6 className={styles.description}>Cybersecurity Intern @ CisoShare (2022)</h6>
                              </div>
                          </div>
                      </div>
                  </div>
                  <hr/>
                  <div>
                      <h2>Contact + Blog</h2>
                      <div className={styles.description}>
                          <div>
                              <h3>Contact</h3>
                              <ul>
                                  <div className={styles.description}>
                                      <code>LinkedIn</code>
                                  </div>
                                  <div className={styles.description}>
                                      <code>X</code>
                                  </div>
                                  <div className={styles.description}>
                                      <code>Email</code>
                                  </div>
                              </ul>
                          </div>
                          <div>
                              <h3>Blog</h3>
                              <ul>
                                  <span className={styles.description}>Check this out later...</span>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <footer><p>Roman 2024</p></footer>
      </main>
  );
}
