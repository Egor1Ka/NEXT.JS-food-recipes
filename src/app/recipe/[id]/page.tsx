import React from 'react'
import { Metadata } from 'next'
import { RecipeDetail } from '@/app/components/RecipeDetail'
import { getRecipe } from '@/lib/api'

interface RecipePageProps {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
    const recipe = await getRecipe({ id: params.id })
    if (!recipe) {
        return {
            title: 'Recipe Not Found',
        }
    }
    return {
        title: recipe.name,
    }
}

const RecipePage = async ({ params }: RecipePageProps) => {
    const recipe = await getRecipe({ id: params.id })

    if (!recipe) {
        return <div>Recipe not found</div>
    }

    return <RecipeDetail name={recipe.name} instructions={recipe.instructions} />
}

export default RecipePage
