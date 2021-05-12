const fetchData = async (searhTerm) => {
	const response = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "c3c09d02",
			s: searhTerm,
		},
	});

	if (response.data.Error) {
		return [];
	}
	return response.data.Search;
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
    <label for=""><b>Search For a Movie</b></label>
    <input type="text" class="input">
    <div class="dropdown">
    <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
    </div>
    </div>
`;

const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");
const input = document.querySelector("input");

// Fetch data using user's input
const onInput = async (event) => {
	const movies = await fetchData(event.target.value);

	if (!movies.length) {
		dropdown.classList.remove("is-active");
		return;
	}

	resultsWrapper.innerHTML = "";
	dropdown.classList.add("is-active");

	for (let movie of movies) {
		const option = document.createElement("a");
		const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
		option.classList.add("dropdown-item");
		option.innerHTML = `
            <img src="${imgSrc}" />
            ${movie.Title}
        `;

		resultsWrapper.appendChild(option);
	}
};

// Debouncing user input in search box with 500 ms delay
input.addEventListener("input", debounce(onInput, 500));

document.addEventListener("click", (event) => {
	if (!root.contains(event.target)) {
		dropdown.classList.remove("is-active");
	}
});
