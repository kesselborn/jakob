class Flashcard {
    constructor() {
        this._front = '';
        this._back = '';
    }

    // Getter method for front
    get front() {
        return this._front;
    }

    // Setter method for front
    set front(value) {
        this._front = value;
    }

    // Getter method for back
    get back() {
        return this._back;
    }

    // Setter method for back
    set back(value) {
        this._back = value;
    }
}

let flashcards = [];

function printKarteikasten(karteikasten) {
    for (i = 0; i < karteikasten.length; i++) {
        console.log(`Fach ${5 - i}:`);
        for (const flaschcard of karteikasten[i]) {
            console.log(flaschcard)
        }
    }
}
// flashcards.js

document.addEventListener('DOMContentLoaded', function () {
    const flashcardForm = document.getElementById('flashcardForm');
    const flashcardContainer = document.getElementById('flashcardContainer');
    const abfrageButton = document.getElementById('abfragen');
    const abfrageContainer = document.getElementById('abfrageContainer')

    abfrageButton.addEventListener('click', function () {

        const countOfFlashcards = flashcards.length;

        const kARTEIkASTEN = [flashcards, [], [], [], []]

        while (true) {

            if (kARTEIkASTEN[4].length === countOfFlashcards) {

                alert('Daniel müffelt');
                break


            }

            for (i = 0; i < kARTEIkASTEN.length; i++) {
                const curFlashcards = kARTEIkASTEN[i];
                for (j = 0; j < curFlashcards.length || curFlashcards.length === 0;) {
                    const curFlashcard = curFlashcards[j];

                    alert(`Frage: ${curFlashcard.front}`);
                    const reply = confirm(`Antwort: ${curFlashcard.back}\n\n\nDid you know the answer?`);

                    if (reply == true) {
                        curFlashcards.splice(j, 1)
                        if (i !== kARTEIkASTEN.length - 1) {
                            kARTEIkASTEN[i + 1].push(curFlashcard);
                        }
                    } else {
                        if (i !== 0) {
                            curFlashcards.splice(j, 1);
                            kARTEIkASTEN[i - 1].push(curFlashcard);
                        }
                        j++;
                    }

                }
                printKarteikasten(kARTEIkASTEN);

            }

        }

    });



    flashcardForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input values
        const frontValue = document.getElementById('frontInput').value;
        const backValue = document.getElementById('backInput').value;

        // Create a new flashcard
        const newFlashcard = new Flashcard();
        newFlashcard.front = frontValue;
        newFlashcard.back = backValue;
        flashcards.push(newFlashcard);

        // Display the new flashcards

        displayFlashcards(flashcards);

        // Reset the form
        flashcardForm.reset();

        document.getElementById('frontInput').focus();
    });

    function displayFlashcards(flashcards) {

        flashcardContainer.innerHTML = "";

        for (const flashcard of flashcards) {
            displayFlashcard(flashcard);
        }

    }

    function displayFlashcard(flashcard) {
        // Create a new div element for the flashcard
        const flashcardDiv = document.createElement('div');
        flashcardDiv.className = 'flashcard';

        // Display the front and back values
        flashcardDiv.innerHTML = `
            <p><strong>Front:</strong> ${flashcard.front}</p>
            <p><strong>Back:</strong> ${flashcard.back}</p>
        `;

        // Append the flashcard to the container
        flashcardContainer.appendChild(flashcardDiv);
    }
});
