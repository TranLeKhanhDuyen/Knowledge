import { useLocation, useNavigate } from 'react-router-dom'
import CardCategory from '@components/CardCategory'
import './Categories.css'
import { Category } from '@services'

const CategoriesPage = () => {
  const location = useLocation()
  const { categories } = location.state || { categories: [] }
  const navigate = useNavigate()

  const handleCategoryClick = (category: Category) => {
    navigate(`/categories/${category.id}/products`, {
      state: { products: category.products }
    })
  }

  return (
    <>
      <h1 className='title-page'>Categories List Of {}</h1>
      <section className='container categories-page'>
        {categories.map((item: Category) => (
          <article key={item.id}>
            <CardCategory
              imageUrl={item.image}
              name={item.name}
              variant='circle'
              onClick={() => handleCategoryClick(item)}
            />
          </article>
        ))}
      </section>
    </>
  )
}

export default CategoriesPage
