import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../store/productSlice";
import "./UpdateProducts.css"

const UpdateProduct = ( {style} ) => {
  
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
   
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({ name, description, price: parseFloat(price) })
        );
        setName("");
        setDescription("");
        setPrice("");
        
    };

    return (
        <form className={style} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Цена"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            {/* <label>
        Доступность:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label> */}
            <button type="submit">Сохранить</button>
        </form>
    );
};

export default UpdateProduct;
