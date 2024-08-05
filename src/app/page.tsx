import React, { Suspense } from 'react'
import { getRecipes, getTags } from '../lib/api'
import { TagList } from './components/Tags/TagsList'
import { Pagination } from './components/Pagination'
import { FoodList } from './components/FoodCard/FoodList'
import { PAGE_SIZE } from '@/constants'
import Loading from './components/FoodCard/FoodList/Loading'

const fetchData = async (page: number, tag: string | null) => {
    const effectiveTag = tag === 'All Recipes' ? null : tag
    const [tags, recipesData] = await Promise.all([getTags(), getRecipes({ page, tag: effectiveTag })])
    const flattenedRecipes = recipesData.recipes.flat()
    return { tags, recipesData: { ...recipesData, recipes: flattenedRecipes } }
}

const HomePage = async ({ searchParams }: { searchParams: { page?: string; tag?: string } }) => {
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1
    const activeTag = searchParams.tag || null

    const { tags, recipesData } = await fetchData(page, activeTag)

    return (
        <div className="container mx-auto p-4">
            <h1 className="mb-4 text-center text-2xl font-bold">Increasio Recipes</h1>
            <p className="mb-8 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, laboriosam.</p>
            <TagList tags={tags || []} recipes={recipesData.recipes || []} />
            <Suspense fallback={<Loading />}>
                <FoodList recipes={recipesData.recipes} />
            </Suspense>

            <Pagination total={recipesData.total || 0} pageSize={PAGE_SIZE} />
        </div>
    )
}

export default HomePage
