import React from 'react'

interface RecipeDetailProps {
    name: string
    instructions: string[]
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ name, instructions }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="mb-4 text-center text-3xl font-bold">{name}</h1>
            <ol className="list-inside list-decimal">
                {instructions.map((step, index) => (
                    <li key={index} className="mb-2">
                        {step}
                    </li>
                ))}
            </ol>
        </div>
    )
}
