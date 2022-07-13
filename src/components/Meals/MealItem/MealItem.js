import styles from './MealItem.module.css';

const mealItem = ({meal}) => {
  const { name, description } = meal;
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>

      </div>
    </li>
  )
}

export default mealItem;
