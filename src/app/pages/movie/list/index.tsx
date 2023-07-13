


const List = () => {
    const movies = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];


    return (
        <div className="w-full h-full grid grid-cols-5 gap-8">
            {
                movies.map((movie, index) => (
                    <div key={index} className="shadow-md rounded-lg h-[25rem]">
                        {movie}
                    </div>
                ))
            }

        </div>
    )
}

export default List;