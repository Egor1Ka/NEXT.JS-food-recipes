'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Recipe } from '@/types'
import { MAX_TAGS, MIN_RATING } from '@/constants'

export const FoodCard: React.FC<Recipe> = ({ image, tags = [], name, ingredients = [], difficulty, cuisine, rating, id }) => {
    const router = useRouter()

    const difficultyColors = {
        Easy: 'text-green-500',
        Medium: 'text-yellow-500',
        Hard: 'text-red-500',
    }

    const handleTagClick = (tag: string) => {
        const params = new URLSearchParams({ tag })
        router.push(`/?${params.toString()}`)
    }

    const handleViewRecipeClick = () => {
        router.push(`/recipe/${id}`)
    }

    return (
        <div className="relative max-w-2xl rounded-lg border border-gray-200 shadow-md">
            {rating >= MIN_RATING && <span className="font-hairline absolute -top-3 left-2 z-50 rounded-lg bg-red-500 px-2 text-xs text-white">Most Popular</span>}
            <div className="p-3">
                <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img className="absolute h-full w-full object-cover" src={image} alt={name} />
                </div>
                <div className="h-24 py-2 pt-6">
                    <div className="flex flex-wrap gap-2">
                        {tags.slice(0, MAX_TAGS).map((tag, index) => (
                            <button key={index} className="Secondary rounded-full bg-black px-3 py-1 text-sm font-semibold text-white" onClick={() => handleTagClick(tag)}>
                                {tag}
                            </button>
                        ))}
                        {tags.length > MAX_TAGS && (
                            <button disabled className="Secondary rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">
                                +{tags.length - MAX_TAGS} more
                            </button>
                        )}
                    </div>
                </div>
                <div className="py-2">
                    <div className="h-18 mb-2 overflow-hidden text-xl font-bold">{name}</div>
                    <div className="line-clamp-2 h-12 text-base text-gray-700">{ingredients.join(', ')}</div>
                </div>
                <div className="pb-2 pt-4">
                    <p className="text-base">
                        Difficulty: <span className={difficultyColors[difficulty]}>{difficulty}</span>
                    </p>
                    <p className="text-base">
                        Cuisine: <span className="font-semibold">{cuisine}</span>
                    </p>
                </div>
                <div className="pb-6 pt-4">
                    <button
                        onClick={handleViewRecipeClick}
                        className="flex w-full items-center justify-between rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
                    >
                        <div />
                        <span>View Recipe</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
