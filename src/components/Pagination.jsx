

export const Pagination = ({totalArticles , productsPerPage, currentPage, setCurrentPage}) => {

    const pages = []
    
    console.log(Math.ceil(totalArticles / productsPerPage))

    for (let i=1; i <= Math.ceil(totalArticles / productsPerPage); i++){
        pages.push(i)
        console.log(pages)
    }

    const handleAnterior = () =>{
        setCurrentPage(currentPage - 1)
    }

    const handleSiguiente = () =>{
        setCurrentPage(currentPage + 1)
    }

    const specificPage = (n) =>{
        setCurrentPage(n)
    }

    return (
        <div className="max-w-screen-xl mx-auto  mt-12 px-4 text-gray-600 md:px-8  ">
            <div className="hidden items-center justify-center sm:flex ">
                <div className="flex items-center gap-12" aria-label="Pagination">
                    <button  className={`px-4 py-2 border rounded-lg duration-150 hover:text-blue-900  ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleAnterior}>
                        Anterior
                    </button>
                    <ul className="flex items-center gap-1">
                        {
                            pages.map((noPage, idx) => (
                                <button key={idx}  aria-current={currentPage == noPage ? "page" : false} className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-blue-900 ${currentPage == noPage ? "bg-blue-900 text-white font-medium" : ""}`} onClick={() => specificPage(noPage)}>
                                    {noPage}
                                </button>
                            ))
                        }
                    </ul>
                    <button  className={`px-4 py-2 border rounded-lg duration-150 hover:text-blue-900 ${currentPage >= pages.length ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleSiguiente}>
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    )
}