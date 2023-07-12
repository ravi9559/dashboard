function fetchSynonyms() {
    const url = "https://wordsapiv1.p.rapidapi.com/words/climb/synonyms";
    const headers = {
        "X-RapidAPI-Key": "ac24e16516msh5ca01bd40c3c763p108cd5jsn716e0c96950a",
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    };

    fetch(url, { headers })
        .then((response) => response.json())
        .then((data) => {
            const synonyms = data.synonyms;

            const selectElement = document.getElementById("synonymsSelect");
            const selectedSynonymElement = document.getElementById("selectedSynonym");

            selectElement.options[0].text = "Synonyms of the word  " + data.word;

            synonyms.forEach((synonym) => {
                const option = document.createElement("option");
                option.text = synonym;
                selectElement.add(option);
            });

            // Event listener for select change
            selectElement.addEventListener("change", function () {
                const selectedSynonym = this.value;
                selectedSynonymElement.textContent = selectedSynonym;
            });
        })
        .catch((error) => {
            console.log("Error fetching synonyms:", error);
        });
}

window.addEventListener("load", fetchSynonyms);
 
