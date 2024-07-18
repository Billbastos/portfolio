'use client'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import classes from './pagination.module.css'
import Link from 'next/link'

interface PaginationProps {
  pages: number[]
  currentPage: number
  hasNext: boolean
  hasPrevious: boolean
}

const Pagination = ({
  pages,
  currentPage,
  hasNext,
  hasPrevious,
}: PaginationProps) => {
  const { pagination, button, arrow, active, disabled } = classes
  const pageSize = pages.length

  return (
    <div className={pagination}>
      {hasPrevious ? (
        <Link className={arrow} href={`?page=${pages[0] - 1}`}>
          <FaArrowLeft />
        </Link>
      ) : (
        <div className={`${arrow} ${disabled}`}>
          <FaArrowLeft />
        </div>
      )}
      {pageSize >= 1 &&
        pages.map((page) => {
          return page !== currentPage ? (
            <Link key={page} className={button} href={`?page=${page}`}>
              {page}
            </Link>
          ) : (
            <div key={page} className={`${button} ${active}`}>
              {page}
            </div>
          )
        })}
      {hasNext ? (
        <Link className={arrow} href={`?page=${pages[pages.length - 1] + 1}`}>
          <FaArrowRight />
        </Link>
      ) : (
        <div className={`${arrow} ${disabled}`}>
          <FaArrowRight />
        </div>
      )}
    </div>
  )
}

export default Pagination
