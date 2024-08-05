import React from 'react'

interface TagProps {
    tag: string
    isActive: boolean
    onClick: (tag: string) => void
}

export const Tag: React.FC<TagProps> = ({ tag, isActive, onClick }) => {
    return (
        <button className={`mb-2 mr-2 rounded-full px-4 py-1 text-sm font-semibold ${isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => onClick(tag)}>
            {tag}
        </button>
    )
}
