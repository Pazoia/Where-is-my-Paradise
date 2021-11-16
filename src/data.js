const beachImages = ["YmQ0-nmWcV0", "OD9EOzfSOh0", "eXHeq48Z-Q4"];
const mountainImages = ["7bwQXzbF6KE"];
const cityImages = ["kheTI8pIywU"];

function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const themeNames = {
    beach: "By the Beach",
    mountain: "Walking in the Mountains",
    city: "A day in the City",
};

export const positiveAffirmations = {
    life: `You can do this. Be patient and persistent.`,
};

const randomImage = (arr) => {
    return `https://source.unsplash.com/${rando(arr)}/3000x1500`;
};

export const panelImage = {
    beach: randomImage(beachImages),
    mountain: randomImage(mountainImages),
    city: randomImage(cityImages),
}