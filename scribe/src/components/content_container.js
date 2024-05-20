const ContentContainer = ({ children }) => {
    return (
        <div className="bg-indigo-900 rounded-3xl
                        w-11/12
                        h-full max-h-full">
            {children}
        </div>
    );
};

export default ContentContainer;