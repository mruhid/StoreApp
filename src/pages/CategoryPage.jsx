import AllProducts from '../components/AllProducts'
import { useParams } from 'react-router-dom'
function CategoryPage() {
    const { category, id } = useParams()
    return (
        <>
            <AllProducts category={category}
                category_id={id} />
        </>
    )
}

export default CategoryPage