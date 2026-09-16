
interface PaginationProps{
    currentPage: number
    totalPage: number
    onPageChange: (page:number) => void
}

const Pagination = ({
    currentPage,
    totalPage,
    onPageChange,
}: PaginationProps) => {
    return (
        <div className="flex items-center justify-center gap-2 border-t border-[#f0f1f3] px-6 py-5">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-3 py-2 cursor-pointer"
            >
                이전
            </button>
            {
                Array.from({ length: totalPage }, (_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`px-3 py-2 cursor-pointer ${
                                currentPage === page ? 'font-bold' : ''
                            }`}
                        >
                            {page}
                        </button>
                    )
                })
            }

            <button
                disabled={currentPage === totalPage}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-3 py-2 cursor-pointer"
            >
                다음
            </button>
        </div>
    )
}

export default Pagination