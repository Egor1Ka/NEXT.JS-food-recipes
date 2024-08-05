import React from 'react'
import FoodCard from '../FoodCard'
import { Recipe } from '@/types'

interface FoodListProps {
    recipes: Recipe[]
}

export const FoodList: React.FC<FoodListProps> = ({ recipes }) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe, index) => (
                <FoodCard key={index} {...recipe} />
            ))}
        </div>
    )
}

export default FoodList
