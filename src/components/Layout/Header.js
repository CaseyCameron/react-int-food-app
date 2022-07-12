import React from 'react'

import mealsImage from '../../assets/meals.jpeg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="meal table"/>
      </div>
    </>
  )
}
