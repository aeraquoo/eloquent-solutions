// Get the input field and suggestions elements
var field = document.getElementById("field");
var suggestions = document.getElementById("suggestions");

// Build up a list of terms to autocomplete (from the global namespace)
var terms = [];
for (var name in window)
    terms.push(name);

// Return a list of terms that start with input
function getSuggestions(input, terms) {
    // Filter terms by which start with input
    matches = terms.filter(function(term) {
        return term.startsWith(input);
    });

    if (matches.length === 1 && matches[0] === input) {
        // The input already exactly matches our one suggestion, so don't bother
        // suggesting it
        return [];
    } else {
        // We have multiple (or zero) matches, return them all
        return matches;
    }
}

// Make an HTML list (ul) from an array
function makeList(array) {
    var list = document.createElement("ul");

    for (var i = 0, el, li, len = array.length; i < len; i++) {
        el = array[i];

        // Make a list element
        li = document.createElement("li");
        // Set the textContent to our array element
        li.textContent = el;

        list.appendChild(li);
    }

    return list;
}

// Clear all content inside the suggestions area
function clearSuggestions() {
    suggestions.innerHTML = "";
}

// Set the field content to the text of the suggestion selected
function selectSuggestion(event) {
    // Set the field content
    field.value = event.srcElement.textContent;
    // Stop suggesting things, they already picked one
    clearSuggestions();
}

// Get and display new suggestions according to input
function updateSuggestions() {
    var curr = getSuggestions(field.value, terms);
    clearSuggestions();
    suggestions.appendChild(makeList(curr));
}

// When the input box changes, update the suggestions
field.addEventListener("input", updateSuggestions);
// When a suggestion is clicked, select it
suggestions.addEventListener("click", selectSuggestion);
