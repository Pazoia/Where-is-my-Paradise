const beachImages = ["eXHeq48Z-Q4", "p3OzJuT_Dks", "OD9EOzfSOh0"];
const mountainImages = ["7bwQXzbF6KE"];
const cityImages = ["kheTI8pIywU"];

function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const themeNames = {
    beach: "Beach",
    mountain: "Mountains",
    city: "City",
};

export const positiveAffirmations = {
    life: `You can do this. Be patient and persistent.`,
};

const randomImage = (arr) => {
    return `https://source.unsplash.com/${rando(arr)}/2750x1500`;
};

export const panelImage = {
    beach: randomImage(beachImages),
    mountain: randomImage(mountainImages),
    city: randomImage(cityImages),
}