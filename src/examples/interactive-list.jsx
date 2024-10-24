import {useState} from 'react'

const defaultItems = [
  {id: 'item1', label: 'Item 1'},
  {id: 'item2', label: 'Item 2'},
  {id: 'item3', label: 'Item 3'},
  {id: 'item4', label: 'Item 4'},
]

export default function InteractiveList() {
  const [items, setItems] = useState(defaultItems)
  const [selectedItems, setSelectedItems] = useState([])

  const toggleItem = id =>
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    )

  const deleteItem = id => setItems(prev => prev.filter(item => item.id !== id))

  const reset = () => {
    setItems(defaultItems)
    setSelectedItems([])
  }

  if (!items.length) {
    return <button onClick={reset}>Reset</button>
  }

  return (
    <ul
      aria-label="Interactive list"
      className="flex w-80 flex-col gap-1 rounded-box bg-base-300 px-4 py-2"
    >
      {items.map(({id, label}) => (
        <li key={id} className="relative m-0 flex items-center">
          <button
            tabIndex={0}
            className="relative flex grow items-center gap-4 rounded-sm p-2 outline-none hover:bg-base-100 focus:bg-base-100"
            onClick={() => toggleItem(id)}
          >
            <input
              tabIndex={-1}
              type="checkbox"
              defaultChecked={selectedItems.includes(id)}
              className="checkbox"
            />
            {label}
          </button>
          <button
            className="btn btn-circle btn-error btn-sm absolute right-2"
            aria-label="Delete item"
            onClick={() => deleteItem(id)}
          >
            <DeleteIcon />
          </button>
        </li>
      ))}
    </ul>
  )
}

const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)
