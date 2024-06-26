import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary" to="/docs/intro">
            爱前端
          </Link>
          <Link className="button button--secondary" to="/blog">
            爱生活
          </Link>
          <Link
            className="button button--secondary"
            href="https://photo.iameng.cn"
            target="_blank"
          >
            爱摄影
          </Link>
        </div>
      </div>
    </header>
  );
}
