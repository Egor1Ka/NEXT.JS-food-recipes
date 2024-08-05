'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
    total: number
    pageSize: number
}

export const Pagination: React.FC<PaginationProps> = ({ total, pageSize }) => {
    const totalPages = Math.ceil(total / pageSize)
    const router = useRouter()
    const searchParams = useSearchParams()
    const activePage = parseInt(searchParams.get('page') || '1')

    const handlePageClick = (page: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', page.toString())
        router.push(`/?${params.toString()}`)
    }

    const handlePreviousClick = () => {
        if (activePage > 1) handlePageClick(activePage - 1)
    }

    const handleNextClick = () => {
        if (activePage < totalPages) handlePageClick(activePage + 1)
    }

    const renderPageNumbers = () => {
        const pageNumbers = []

        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i)
            }
        } else if (activePage <= 2) {
            pageNumbers.push(1, 2, 3)
        } else if (activePage >= totalPages - 1) {
            pageNumbers.push(totalPages - 2, totalPages - 1, totalPages)
        } else {
            pageNumbers.push(activePage - 1, activePage, activePage + 1)
        }

        return pageNumbers
    }

    return (
        <div className="my-4 flex items-center justify-center space-x-2">
            <button onClick={handlePreviousClick} disabled={activePage === 1} className="rounded border px-3 py-1 disabled:opacity-50">
                Previous
            </button>
            {renderPageNumbers().map((page) => (
                <button key={page} onClick={() => handlePageClick(page)} className={`rounded border px-3 py-1 ${page === activePage ? 'bg-gray-300' : ''}`}>
                    {page}
                </button>
            ))}
            <button onClick={handleNextClick} disabled={activePage === totalPages} className="rounded border px-3 py-1 disabled:opacity-50">
                Next
            </button>
        </div>
    )
}
