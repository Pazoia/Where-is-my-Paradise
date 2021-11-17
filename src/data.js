const beachImages = ["eXHeq48Z-Q4", "p3OzJuT_Dks", "OD9EOzfSOh0"];
const mountainImages = ["IRgTjnoeK5I", "NxSstX5R774", "7bwQXzbF6KE"];
const cityImages = ["Osr6aAlV-MA", "Nyvq2juw4_o", "kheTI8pIywU"];
const beachLastImage = localStorage.getItem("beachLastImage");;
const mountainLastImage = localStorage.getItem("mountainLastImage");
const cityLastImage = localStorage.getItem("cityLastImage");;

// function rando(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

export const themeNames = {
    beach: "Beach",
    mountain: "Mountains",
    city: "City",
};

export const positiveAffirmations = {
    life: `You can do this. Be patient and persistent.`,
};

const beachRandomImage = (beachImages) => {
    const idx = Math.floor(Math.random() * beachImages.length);
    const image = beachImages[idx];
    if (image === beachLastImage) {
        return beachRandomImage(beachImages);
    }
    localStorage.setItem("beachLastImage", image);
    return `https://source.unsplash.com/${image}/2750x1500`;
};

const mountainRandomImage = (mountainImages) => {
    const idx = Math.floor(Math.random() * mountainImages.length);
    const image = mountainImages[idx];
    if (image === mountainLastImage) {
        return mountainRandomImage(mountainImages);
    }
    localStorage.setItem("mountainLastImage", image);
    return `https://source.unsplash.com/${image}/2750x1500`;
};

const cityRandomImage = (cityImages) => {
    const idx = Math.floor(Math.random() * cityImages.length);
    const image = cityImages[idx];
    if (image === cityLastImage) {
        return cityRandomImage(cityImages);
    }
    localStorage.setItem("cityLastImage", image);
    return `https://source.unsplash.com/${image}/2750x1500`;
};

export const panelImage = {
    beach: beachRandomImage(beachImages),
    mountain: mountainRandomImage(mountainImages),
    city: cityRandomImage(cityImages),
}