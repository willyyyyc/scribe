const MainTitle = ({title, text}) => {
    return (
        <div className="flex flex-row items-end
                        border-b-2 border-indigo-400
                        w-11/12">
            <span className="material-symbols-outlined 
                            text-6xl text-indigo-200">
                stylus_note
            </span>
            <h1 className="text-6xl tracking-widest font-serif text-indigo-200 font-extrabold italic">
                {title}
            </h1>
            <p className="text-lg tracking-wide font-sans text-indigo-400 font-semibold
                          ml-16">
                {text}
            </p>
        </div>
    );
};

export default MainTitle;