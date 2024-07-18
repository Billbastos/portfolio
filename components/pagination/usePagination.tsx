import { useSearchParams } from 'next/navigation'

const usePagination = (list) => {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const paginationMap = list.reduce((acc, value, index) => {
    if (index === 0 || index % 3 === 0) {
      acc.push([])
    }
    acc[acc.length - 1].push(value)

    return acc
  }, [])

  const pagesMap = paginationMap.reduce((acc, _, index) => {
    if (index === 0 || index % 5 === 0) {
      acc.push([])
    }
    acc[acc.length - 1].push(index + 1)
    return acc
  }, [])

  const items = paginationMap[currentPage - 1] || []
  const pages = pagesMap.filter((value) => value.includes(currentPage))[0]

  if (!pages) {
    throw new Error(`Page ${currentPage} not found`)
  }

  const previous = pages[0] > 1
  const next = pages !== pagesMap[pagesMap.length - 1]

  return { pages, items, currentPage, previous, next }
}

export { usePagination }
