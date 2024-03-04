"use client";
import Link from "next/link";
import styles from "./menu.module.css";

const Menu = ({ item }) => {
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default Menu;
