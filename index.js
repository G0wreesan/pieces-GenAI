const dogFacts = [
    { fact: "Dogs are descendants of wolves and were domesticated around 15,000 years ago." },
    { fact: "There are over 340 different dog breeds recognized worldwide." },
    { fact: "Dogs have an extraordinary sense of smell, which is 10,000 to 100,000 times more sensitive than humans." },
    { fact: "The Basenji dog is known as the 'barkless dog' because it doesn't bark like other dogs." },
    { fact: "Dogs are social animals and thrive on companionship, both with humans and other dogs." },
    { fact: "The Labrador Retriever has been the most popular dog breed in the United States for several years." },
    { fact: "Dogs can understand up to 165 words, signs, and signals, and some can even learn more." },
    { fact: "The world's smallest dog breed is the Chihuahua, while the largest is the Great Dane." },
    { fact: "Dogs have a special organ called the Jacobsen's organ that helps them detect pheromones." },
    { fact: "A dog's sense of hearing is four times more acute than that of humans." }
];

let currentCount = 5;

function displayFacts() {
    const factList = document.getElementById('factList');
    factList.innerHTML = ''; // Clear existing facts
    for (let i = 0; i < currentCount && i < dogFacts.length; i++) {
        const li = document.createElement('li');
        li.className = 'fact-button';
        li.innerHTML = `${dogFacts[i].fact} <span class="fact-paragraph"> - This fact highlights the unique characteristics of dogs.</span>`;
        factList.appendChild(li);
    }
}

document.getElementById('loadMore').addEventListener('click', () => {
    if (currentCount < dogFacts.length) {
        currentCount += 5;
        displayFacts();
    } else {
        alert("No more facts available.");
    }
});

// Initial display of facts
displayFacts();
