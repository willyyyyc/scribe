const BodyContainer = ({ children }) => {
    return (
        <div className="w-2/3 h-[48rem] 
                        mx-auto 
                        p-6 
                        bg-indigo-950 
                        rounded-[60px] shadow-2xl 
                        text-center 
                        place-items-center
                        flex flex-col space-y-4">
            {children}
        </div>
    );
};

export default BodyContainer;