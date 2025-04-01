import { subCategories } from "../../../utils/selectionData"
import {Link} from 'react-router'

export default function ShopFilters(){
    
    return(
        <>
              <form className="lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <Link to={category.href}>{category.name}</Link>
                    </li>
                  ))}
                </ul>
              </form>
            
        
        </>
    )
}