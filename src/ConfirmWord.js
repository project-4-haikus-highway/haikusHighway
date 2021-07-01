function ConfirmWord({ searchedWord, handleAddToHaiku, isLoading}) {

    return (
        <>
            {
                isLoading ? <p>Loading...</p> :
                    <div className="searchedWord">
                        {
                            searchedWord.map((returnedWord, index) => {
                                return (
                                    <div key={index}>
                                        <p>Click the word, if you would like to add it your haiku</p>
                                        <button onClick={handleAddToHaiku} className="addToHaiku">{returnedWord.word}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </>
    )
};

export default ConfirmWord;