const InfoBox = ({title, text1, text2, text3}) => {
    return (
        <div className="w-11/12">
            <p className="mt-2
                          text-sky-400 font-extrabold text-left">
                HOME
            </p>
            <h1 className="text-3xl text-indigo-200 font-extrabold text-left
                           ml-2 mt-2">
                {title}
            </h1>
            <div className="border-l-2 border-indigo-400
                            ml-2 mt-2">
                <p className="text-indigo-400 text-left font-semibold
                              ml-2">
                    {text1}
                </p>
                <p className="text-indigo-400 text-left font-semibold
                              ml-2">
                    {text2}
                </p>
                <p className="text-indigo-400 text-left font-semibold
                              ml-2">
                    {text3}
                </p>
            </div>
        </div>
    );
};

export default InfoBox;