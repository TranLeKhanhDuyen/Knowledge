import { useLocation, useNavigate } from 'react-router-dom'
import { MainLayout } from '@layout'
import CardCategory from '@components/CardCategory'
import './Categories.css'

const CategoriesPage = () => {
  const location = useLocation()
  const { categories } = location.state || { categories: [] }
  const navigate = useNavigate()

  const handleCategoryClick = (category: any) => {
    navigate(`/products/${category.id}`, {
      state: { products: category.products }
    })
  }

  return (
    <MainLayout>
      <div>
        <h1 className='title-page'>Categories List Of {}</h1>
        <section className='container categories-page'>
          {categories.map((item: any, index: number) => (
            <article key={index}>
              <CardCategory
                imageUrl={item.image}
                name={item.name}
                variant='circle'
                onClick={() => handleCategoryClick(item)}
              />
            </article>
          ))}
        </section>
      </div>
    </MainLayout>
  )
}

export default CategoriesPage
