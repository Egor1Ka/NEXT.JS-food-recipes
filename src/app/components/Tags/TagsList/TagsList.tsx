'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Tag } from '../Tag'

interface Recipe {
    image: string
    tags: string[]
    title: string
    ingredients: string[]
    difficulty: 'Easy' | 'Medium' | 'Hard'
    cuisine: string
    isPopular: boolean
    rating: number
}

interface TagListProps {
    tags: string[]
    recipes: Recipe[]
}

export const TagList: React.FC<TagListProps> = ({ tags }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const activeTag = searchParams.get('tag')

    const handleTagClick = (tag: string) => {
        const params = new URLSearchParams({ tag })
        if (tag === activeTag) {
            return
        } else {
            params.set('tag', tag)
        }
        router.push(`/?${params.toString()}`)
    }

    return (
        <div>
            <div className="scrollbar-hide mb-4 flex space-x-2 overflow-x-auto whitespace-nowrap">
                {['All Recipes', ...tags].map((tag) => (
                    <Tag key={tag} tag={tag} isActive={tag === activeTag || (tag === 'All Recipes' && !activeTag)} onClick={() => handleTagClick(tag)} />
                ))}
            </div>
        </div>
    )
}
