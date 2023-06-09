import styles from "./index.module.css";
import * as React from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../../context";

type DotIconProps = {
  numberId: number;
  activeDotId: number;
  setActiveDotId: any;
  setTextId: any;
  mode: string;
};

function DotIcon({
  numberId,
  activeDotId,
  setActiveDotId,
  setTextId,
  mode,
}: DotIconProps) {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      className={
        mode
          ? activeDotId === numberId
            ? styles.activeDotLight
            : styles.unactiveDotLight
          : activeDotId === numberId
          ? styles.activeDotDark
          : styles.unactiveDotDark
      }
      onClick={() => {
        setActiveDotId(numberId);
        setTextId(numberId);
      }}
    >
      <path
        d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
        fill="#000000"
      />
    </svg>
  );
}

const aboutData = [
  {
    id: 1,
    content:
      "I am self-taught frontend developer. I started my Frontend journey about a year ago with learning CSS, HTML, JavaScript. Then I moved on to React and recently I started learning TypeScript. Next on my list is learning about Frontend Testing and CSS preprocessors.",
  },
  {
    id: 2,
    content:
      "It's been quite a learning journey for me and every project gave me a lot of satisfaction to complete, especially the ones that created certain challenges. For learning I use pretty much every tool available: books, tutorials, free courses, blogs, forums, chat and support groups. ",
  },
  {
    id: 3,
    content:
      "Learning has become a constant part of my life. For instance, recently renovated wooden garden furniture on my own. I particularly take pleasure in learning from books. Especially interesting for me are the ones covering biographies, self-help, popular science, politics and social sciences or traveling.",
  },
];

export function Description() {
  const [textId, setTextId] = React.useState(1);
  const [activeDotId, setActiveDotId] = React.useState(1);
  const { isLightMode } = React.useContext(ThemeContext);

  return (
    <div className={styles.box}>
      <h3 className={isLightMode ? styles.headingLight : styles.headingDark}>
        Hi! I'm
      </h3>
      <h2 className={isLightMode ? styles.nameLight : styles.nameDark}>
        Adriana Słabosz
      </h2>
      <div className={styles.image} aria-label="WebPage Author" />
      <div className={styles.paragraphBox}>
        <div
          className={
            isLightMode ? styles.contentBoxLight : styles.contentBoxDark
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            key={textId}
          >
            {aboutData[textId - 1].content}
          </motion.div>
        </div>
        <div>
          <DotIcon
            numberId={1}
            activeDotId={activeDotId}
            setActiveDotId={setActiveDotId}
            setTextId={setTextId}
            mode={isLightMode}
          />
          <DotIcon
            numberId={2}
            activeDotId={activeDotId}
            setActiveDotId={setActiveDotId}
            setTextId={setTextId}
            mode={isLightMode}
          />
          <DotIcon
            numberId={3}
            activeDotId={activeDotId}
            setActiveDotId={setActiveDotId}
            setTextId={setTextId}
            mode={isLightMode}
          />
        </div>
      </div>
    </div>
  );
}
