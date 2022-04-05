import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [addedItem, setAddedItem] = useState("");
  const [newItemCategory, setItemCategory] = useState("Produce");
  const newItem = {
    id: uuid(),
    name: addedItem,
    category: newItemCategory,
  };

  function handleItemChange(event) {
    console.log(event.target.value);
    setAddedItem(event.target.value);
  }
  function handleCategoryChange(event) {
    console.log(event.target.value);
    setItemCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: addedItem,
      category: newItemCategory,
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List </button>
    </form>
  );
}

export default ItemForm;
