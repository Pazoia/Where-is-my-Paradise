export const randomAffirmationGenerator = (array, lastChoice) => {
    const idx = Math.floor(Math.random() * array.length);
    const randomAffirmation = array[idx];

    if (randomAffirmation === lastChoice) {
        return randomAffirmationGenerator(array, lastChoice);
    }

    return randomAffirmation;
}