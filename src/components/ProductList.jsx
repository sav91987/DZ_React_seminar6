import { useSelector, useDispatch } from "react-redux";
import {
    deleteProduct,
    toggleAvailability,
    updateProduct,
} from "../store/productSlice";
import UpdateProduct from "./UpdateProducts/UpdateProduct";

const ProductList = () => {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();


    return (
        <div>
            <h2>Список продуктов</h2>
            {products.length === 0 ? (
                <p>Нет доступных продуктов.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Цена: {product.price}</p>
                            <p>
                                Доступность: {product.available ? "Да" : "Нет"}
                            </p>
                            <button
                                onClick={() =>
                                    dispatch(deleteProduct(product.id))
                                }
                            >
                                Удалить
                            </button>
                            <button
                                onClick={() =>
                                    dispatch(toggleAvailability(product.id))
                                }
                            >
                                Доступность (Да/Нет)
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(updateProduct(product));
                                }}
                            >
                                Редактировать
                            </button>
                            <UpdateProduct />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
