var words = [];
words = prompt("Enter your numbers").split(" ");
Main(words);

function Main(words) {
    if ((words.length < 2) && (typeof words !== 'string')) {
        console.error('Enter atleast 2 words');
        console.log('usage: Enter words for the list');
    }

   
    else {
        function ReversedList(words) {
            words.reverse();
            return words;
        }

        function AlphabeticallyOrderedList(words) {
            words.sort();
            return words;
        }

        function RandomisedList(words) {
            for (let i = words.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = words[i];
                words[i] = words[j];
                words[j] = temp;
            }
            return words;
        }




        function DisplayValues(heading, words) {
            console.log("-----------------------------");
            console.log(heading);
            console.log("-----------------------------");
            words.forEach(element => console.log(element));

        }


        DisplayValues('Original List', (words));
        DisplayValues('Reversed List', ReversedList(words));
        DisplayValues('Alphabetically Ordered List', AlphabeticallyOrderedList(words));
        DisplayValues('Randomised List', RandomisedList(words));

    }
}