# JSX

## 1 - Afficher les données d'un tableau

```
const ingredients = [
  {"id":1,"libelle":"samourai"},
  {"id":1,"libelle":"ketchup"},
  {"id":1,"libelle":"mayonnaise"}
]

const App = ()=>{
  return(
      <ul>
       {
          ingredients.map((ingredient)=>(
              <li>{ingredient.libelle}</li>
          ))
       }

      </ul>

  )
}

Ex 2 : 
const listItems = ingredients.map((ingredient)=>(
              <li>{ingredient.libelle}</li>
          ));

```

## 2 - L'importance de la propriété key

```
  https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key

  const allItems = [
  {id: 'ketchup', value: 'ketchup'},
  {id: 'mustard', value: 'mustard'},
  {id: 'salsa', value: 'salsa'},
  {id: 'oil', value: 'oil'},
]

// Component
function App() {
  // Local state
  const [items, setItems] = useState(allItems)

  // Method to add Item
  const addItem = () => {
    const itemIds = items.map(i => i.id)
    const item = allItems.find(i => !itemIds.includes(i.id));
    if(item){
      setItems([...items, item ])
    }
    
  }

  // Method to remove item
  const removeItem = (item: { id: string; value?: string; }) => {
    setItems(items.filter(i => i.id !== item.id))
  }

  // HTML render
  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          <li>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

sans la propriété key, React n'arrive pas indexer correctement les élements de la liste

rajouter la key dans la balise li => key={item.id}

```