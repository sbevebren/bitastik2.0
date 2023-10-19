function Filter() {
    return (
        <div className="relative inline-block">
            <button className="bg-green-500 text-white py-4 px-6 text-xl border-none rounded-t-lg">Dropdown</button>
            <div className="hidden absolute bg-gray-200 min-w-[160px] shadow-lg z-10">
                <a href="#" className="block px-4 py-3 hover:bg-gray-300">Link 1</a>
                <a href="#" className="block px-4 py-3 hover:bg-gray-300">Link 2</a>
                <a href="#" className="block px-4 py-3 hover:bg-gray-300">Link 3</a>
            </div>
        </div>
    );
}

export default Filter;
