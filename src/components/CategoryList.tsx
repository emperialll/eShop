import useCategories from "../hooks/useCategories";

const CategoryList = () => {
  const { categories } = useCategories();
  return (
    <ul>
      {categories.map((category) => (
        <li>{category}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
