const PercentageCircle = ({ value, size }: { value: number, size: string }) => {
    let color = value > 0 && value < 15 ? 'bg-red-600' :
        value > 20 && value < 35 ? 'bg-orange-600' :
            value > 30 && value < 60 ? 'bg-yellow-600' :
                value > 60 && value < 70 ? 'bg-lime-600' :
                    value > 85 ? 'bg-lime-600' :
                        'bg-green-700';

    return (
        <div>
            {size == 'sm' ? (
                <div className={`border-cyan-600 border border-4 absolute bottom-24 left-2 rounded-full ${color} border-2 bg-black w-10 p-2 h-10 flex items-center justify-center text-xs font-medium text-white`}
                >
                    {value}%
                </div>
            ) :
                (
                    <div className={`w-[5rem] h-[5rem] border-black border-double border-[9px] border-cyan-800 rounded-full ${color} border-2 bg-black p-2 flex items-center justify-center text-xs font-medium text-white`}
                    >
                        {value}%
                    </div>
                )
            }
        </div >
    )
}

export default PercentageCircle;