const beachImages = ["eXHeq48Z-Q4", "p3OzJuT_Dks", "OD9EOzfSOh0"];
const mountainImages = ["IRgTjnoeK5I", "NxSstX5R774", "7bwQXzbF6KE"];
const cityImages = ["Osr6aAlV-MA", "Nyvq2juw4_o", "kheTI8pIywU"];
const beachLastImage = localStorage.getItem("beachLastImage");;
const mountainLastImage = localStorage.getItem("mountainLastImage");
const cityLastImage = localStorage.getItem("cityLastImage");

export const themeNames = {
    beach: "Beach",
    mountain: "Mountains",
    city: "City",
};

export const affirmationsList = [
    "You can do this. Be patient and persistent.",
    "I give myself permission to do what is right for me.",
    "I am confident in my ability to solve complex problems.",
    "I feel proud of myself when I pursue my dreams.",
    "I give myself space to grow and learn.",
    "I allow myself to be who I am without judgment.",
    "I listen to my intuition and trust my inner guide.",
    "I accept my emotions and let them serve their purpose.",
    "I give myself the care and attention that I deserve.",
    "My drive and ambition allow me to achieve my goals.",
    "I am always headed in the right direction. I trust that I am on the right path.",
    "I am creatively inspired by the world around me.",
    "My mind is full of brilliant ideas.",
    "I put my energy into things that matter to me.",
    "I trust myself to make the right decision.",
    "I am becoming closer to my true self every day.",
    "I am grateful to have people in my life who believe in me.",
    "I am learning valuable lessons from myself every day.",
    "I am at peace with who I am as a person.",
    "I make a difference in the world by simply existing in it.",
];

// Random images for all themes:

const beachRandomImage = (beachImages) => {
    const idx = Math.floor(Math.random() * beachImages.length);
    const image = beachImages[idx];
    if (image === beachLastImage) {
        return beachRandomImage(beachImages);
    }
    localStorage.setItem("beachLastImage", image);
    return `https://source.unsplash.com/${image}/2500x1500`;
};

const mountainRandomImage = (mountainImages) => {
    const idx = Math.floor(Math.random() * mountainImages.length);
    const image = mountainImages[idx];
    if (image === mountainLastImage) {
        return mountainRandomImage(mountainImages);
    }
    localStorage.setItem("mountainLastImage", image);
    return `https://source.unsplash.com/${image}/2500x1500`;
};

const cityRandomImage = (cityImages) => {
    const idx = Math.floor(Math.random() * cityImages.length);
    const image = cityImages[idx];
    if (image === cityLastImage) {
        return cityRandomImage(cityImages);
    }
    localStorage.setItem("cityLastImage", image);
    return `https://source.unsplash.com/${image}/2500x1500`;
};

export const panelImage = {
    beach: beachRandomImage(beachImages),
    mountain: mountainRandomImage(mountainImages),
    city: cityRandomImage(cityImages),
}