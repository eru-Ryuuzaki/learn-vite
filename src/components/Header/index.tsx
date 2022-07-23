// import './index.scss';
// export function Header() {
//   return <p className="header">This is Header</p>
// };

// import styles from './index.module.scss';
// export function Header() {
//   return <p className={styles.header}>This is Header</p>
// };

import { devDependencies } from "../../../package.json";

export function Header() {
  return (
    <div className="p-20px text-center">
      <h1 className="font-bold text-2xl mb-2">
        vite version: {devDependencies.vite}
      </h1>
      <div className="flex-c"></div>
<div className="flex justify-center items-center"></div>
    </div>
  );
}