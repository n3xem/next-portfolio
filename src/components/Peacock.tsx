"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Peacock.module.css";

export const Peacock = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 初期値を0にして、スクロールしないと羽が開かないように設定
  const featherSpread = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.3, 0.6, 1]);
  const featherScale = useTransform(featherSpread, [0, 1], [0.1, 1]);

  // 左側の羽の角度（スクロール進行に応じて0度から徐々に開く）
  const leftFeather1 = useTransform(scrollYProgress, [0.1, 0.2], [0, -18]);
  const leftFeather2 = useTransform(scrollYProgress, [0.2, 0.3], [0, -36]);
  const leftFeather3 = useTransform(scrollYProgress, [0.3, 0.4], [0, -54]);
  const leftFeather4 = useTransform(scrollYProgress, [0.4, 0.5], [0, -72]);
  const leftFeather5 = useTransform(scrollYProgress, [0.5, 0.6], [0, -90]);

  // 右側の羽の角度（スクロール進行に応じて0度から徐々に開く）
  const rightFeather1 = useTransform(scrollYProgress, [0.1, 0.2], [0, 18]);
  const rightFeather2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 36]);
  const rightFeather3 = useTransform(scrollYProgress, [0.3, 0.4], [0, 54]);
  const rightFeather4 = useTransform(scrollYProgress, [0.4, 0.5], [0, 72]);
  const rightFeather5 = useTransform(scrollYProgress, [0.5, 0.6], [0, 90]);

  return (
    <div ref={containerRef} className={styles.peacockContainer}>
      <motion.div className={styles.peacock} style={{ opacity }}>
        <div className={styles.body}>
          <div className={styles.head}></div>
          <div className={styles.neck}></div>
          <div className={styles.torso}></div>
        </div>
        <motion.div
          className={styles.feathers}
          initial={{ scale: 0 }}
          style={{ scale: featherSpread }}
        >
          {/* 中央の羽 */}
          <motion.div
            className={styles.feather}
            initial={{ scale: 0, rotate: 0 }}
            style={{ scale: featherScale }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>

          {/* 左側の羽 */}
          <motion.div
            className={styles.feather}
            initial={{ rotate: 0, scale: 0 }}
            style={{
              rotate: leftFeather1,
              scale: featherScale,
            }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>

          <motion.div
            className={styles.feather}
            initial={{ rotate: 0, scale: 0 }}
            style={{
              rotate: leftFeather2,
              scale: featherScale,
            }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>

          <motion.div
            className={styles.feather}
            initial={{ rotate: 0, scale: 0 }}
            style={{
              rotate: leftFeather3,
              scale: featherScale,
            }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>

          <motion.div
            className={styles.feather}
            initial={{ rotate: 0, scale: 0 }}
            style={{
              rotate: leftFeather4,
              scale: featherScale,
            }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>

          <motion.div
            className={styles.feather}
            initial={{ rotate: 0, scale: 0 }}
            style={{
              rotate: leftFeather5,
              scale: featherScale,
            }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>

          {/* 右側の羽 */}
          <motion.div
            className={styles.feather}
            initial={{ rotate: 0, scale: 0 }}
            style={{
              rotate: rightFeather1,
              scale: featherScale,
            }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>

          <motion.div
            className={styles.feather}
            initial={{ rotate: 0, scale: 0 }}
            style={{
              rotate: rightFeather2,
              scale: featherScale,
            }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>

          <motion.div
            className={styles.feather}
            initial={{ rotate: 0, scale: 0 }}
            style={{
              rotate: rightFeather3,
              scale: featherScale,
            }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>

          <motion.div
            className={styles.feather}
            initial={{ rotate: 0, scale: 0 }}
            style={{
              rotate: rightFeather4,
              scale: featherScale,
            }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>

          <motion.div
            className={styles.feather}
            initial={{ rotate: 0, scale: 0 }}
            style={{
              rotate: rightFeather5,
              scale: featherScale,
            }}
          >
            <div className={styles.featherEye}></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Peacock;
