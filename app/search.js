var items = ["apple", "banana", "orange", "grape", "kiwi", "pineapple"];

function search() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    if (searchInput) {
        var results = items.filter(function(item) {
            return item.toLowerCase().includes(searchInput);
        });

        if (results.length > 0) {
            var resultList = document.createElement("ul");
            results.forEach(function(result) {
                var listItem = document.createElement("li");
                listItem.textContent = result;
                resultList.appendChild(listItem);
            });
            searchResults.appendChild(resultList);
        } else {
            searchResults.innerHTML = "<p>No results found.</p>";
        }
    } else {
        searchResults.innerHTML = "<p>Please enter a search query.</p>";
    }
}
