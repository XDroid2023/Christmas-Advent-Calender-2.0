// Christmas messages for each day
const messages = [
    "✨ The magic of Christmas lies in the warmth of giving. Today, share a smile with someone special!",
    "🎄 Like twinkling lights in the dark, may your heart shine bright with hope and joy today.",
    "🌟 Christmas reminds us that the greatest gifts come wrapped in love and tied with faith.",
    "❄️ Each snowflake is unique, just like you. Embrace your special role in spreading holiday cheer!",
    "🕊️ May peace be your gift at Christmas and your blessing all year through.",
    "🎅 Santa's secret? The best presents aren't wrapped in paper, but in moments of kindness.",
    "🦌 Like Rudolph's nose guiding the way, let your inner light lead others to joy.",
    "🎁 The greatest Christmas gift is the presence of family wrapped in the warmth of love.",
    "🌠 Stars shine brightest on the darkest nights. Be someone's guiding star today!",
    "💝 Christmas magic is silent... but its power lies in how it makes us feel inside.",
    "🔔 Ring out the old, ring in the new. Each day is a gift waiting to be unwrapped.",
    "🕯️ A single candle can light up a room, just as a single act of kindness can brighten someone's day.",
    "🎶 Let the melody of Christmas fill your heart with songs of joy and gratitude.",
    "⭐ Miracles happen when we believe. Keep faith in the magic of Christmas!",
    "🤶 Mrs. Claus's wisdom: 'A warm heart melts the coldest winter.'",
    "🍪 Like fresh-baked cookies, spread the sweet aroma of kindness wherever you go.",
    "🎭 The best decorations are the smiles we put on others' faces.",
    "🌲 Like an evergreen tree, may your spirit stay forever young and vibrant.",
    "🎨 Paint your day with colors of joy, just as Christmas lights color the night.",
    "💫 Make a wish upon the Christmas star - then be the magic that makes others' wishes come true.",
    "🎵 Dance to the rhythm of jingle bells and let your heart be light!",
    "🌺 Even in winter's chill, love blooms like a Christmas rose.",
    "🕊️ The spirit of Christmas is found in moments of quiet grace and shared joy.",
    "💖 Tomorrow is Christmas Eve! Fill your heart with wonder and anticipation.",
    "🎄 Merry Christmas! May this day be filled with love, laughter, and magical moments to cherish forever!"
];

// Create calendar boxes
const calendarContainer = document.querySelector('.calendar-container');
const modal = document.getElementById('modal');
const messageElement = document.getElementById('message');
const closeBtn = document.querySelector('.close');
const speakButton = document.getElementById('speak-button');

// Create snow
function createSnow() {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakes = '❄❅❆';
    
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.opacity = Math.random();
        snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowContainer.appendChild(snowflake);
        
        // Remove snowflake after animation
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            createSnowflake();
        });
    }
}

function createSnowflake() {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakes = '❄❅❆';
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowflake.style.opacity = Math.random();
    snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    snowContainer.appendChild(snowflake);
    
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        createSnowflake();
    });
}

// Create calendar boxes
for (let i = 1; i <= 25; i++) {
    const box = document.createElement('div');
    box.className = 'calendar-box';
    box.textContent = i;
    box.dataset.day = i;
    
    box.addEventListener('click', () => {
        const message = messages[i - 1];
        messageElement.textContent = message;
        modal.style.display = 'block';
        box.classList.add('opened');
        saveOpenedBox(i);
    });
    
    calendarContainer.appendChild(box);
}

// Speech synthesis
speakButton.addEventListener('click', () => {
    const message = messageElement.textContent;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Music Control
const musicButton = document.getElementById('music-toggle');
const musicInfo = document.querySelector('.music-info');
const audio = document.getElementById('christmas-music');

// Set initial volume
audio.volume = 0.3;

let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicButton.classList.remove('playing');
        musicButton.innerHTML = '<span class="music-icon">🎵</span><span class="music-text">Play Music</span>';
        musicInfo.classList.remove('visible');
        isPlaying = false;
    } else {
        audio.play()
            .then(() => {
                musicButton.classList.add('playing');
                musicButton.innerHTML = '<span class="music-icon">⏸️</span><span class="music-text">Pause Music</span>';
                musicInfo.classList.add('visible');
                isPlaying = true;
            })
            .catch(error => {
                console.error('Error playing audio:', error);
                alert('Unable to play music. Please try again.');
            });
    }
}

// Add click event listener to music button
musicButton.addEventListener('click', toggleMusic);

// Handle audio errors
audio.addEventListener('error', (e) => {
    console.error('Audio error:', e);
    alert('Unable to load music. Please try again later.');
});

// Start snow animation
createSnow();

// Local storage to remember opened boxes
document.addEventListener('DOMContentLoaded', () => {
    const openedBoxes = JSON.parse(localStorage.getItem('openedBoxes') || '[]');
    openedBoxes.forEach(day => {
        const box = document.querySelector(`[data-day="${day}"]`);
        if (box) box.classList.add('opened');
    });
});

// Save opened boxes
function saveOpenedBox(day) {
    const openedBoxes = JSON.parse(localStorage.getItem('openedBoxes') || '[]');
    if (!openedBoxes.includes(day)) {
        openedBoxes.push(day);
        localStorage.setItem('openedBoxes', JSON.stringify(openedBoxes));
    }
}
