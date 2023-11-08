function ShoppingList({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item) => {
        console.log(item);
        return <li key={item.id}>{item.value}</li>;
      })}
    </ul>
  );
}

export default ShoppingList;
