# 🎄 Interactive Christmas Advent Calendar 2023

A magical, interactive web-based advent calendar that brings the joy of Christmas to life with daily inspirational messages, festive animations, and holiday music.

## ✨ Features

- **25 Interactive Days**: Beautiful animated boxes for each day leading up to Christmas
- **Inspirational Messages**: Unique, heartwarming Christmas messages revealed each day
- **Text-to-Speech**: Listen to messages being read aloud in a festive spirit
- **Falling Snow Effect**: Enchanting snow animation for a winter wonderland feel
- **Christmas Music**: Built-in holiday music to enhance the festive atmosphere
- **Progress Saving**: Your opened boxes remain marked between visits
- **Responsive Design**: Perfect experience on any device
- **Accessibility**: Designed for everyone to enjoy

## 🎯 Demo

Visit the live demo: [Christmas Advent Calendar](https://your-demo-url.com)

## 🚀 Quick Start

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/christmas-advent-calendar.git
cd christmas-advent-calendar
```

2. **Start the Server**
```bash
python3 server.py
```

3. **Open in Browser**
```
http://localhost:3000
```

## 💻 Usage Guide

### Opening Calendar Boxes
- Click any numbered box to reveal that day's special message
- Boxes can be opened in any order
- Previously opened boxes stay marked

### Music Controls
- Click the music button (🎵) to play/pause festive music
- Music will loop continuously
- Volume is preset to a comfortable level

### Message Reading
- Click the speaker icon (🔊) to hear the message read aloud
- Perfect for sharing with children or creating an immersive experience

## 🎨 Customization

### Messages
Edit `script.js` to customize daily messages:
```javascript
const messages = [
    "Your custom message for day 1",
    // Add more messages...
];
```

### Styling
Modify `styles.css` to change colors and themes:
```css
:root {
    --christmas-red: #c1121f;
    --christmas-dark-red: #780000;
    --christmas-green: #165B33;
    --christmas-dark-green: #0d3320;
    --gold: #FFD700;
    --cream: #FFF8E7;
}
```

### Music
Change the audio source in `index.html`:
```html
<audio id="christmas-music" loop>
    <source src="path-to-your-music.mp3" type="audio/mpeg">
</audio>
```

## 📱 Device Support

- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Android Chrome
- **Tablet**: All major browsers
- **Screen Readers**: NVDA, VoiceOver compatible

## 🔧 Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **APIs**: 
  - Web Speech API for text-to-speech
  - Web Audio API for music
  - Local Storage for progress saving
- **Animations**: CSS3 animations and transitions
- **Font**: Google Fonts (Mountains of Christmas, Poppins)

## 🌟 Best Practices

- **Performance**: Optimized animations and assets
- **Accessibility**: ARIA labels and keyboard navigation
- **Responsiveness**: Fluid design with CSS Grid
- **Code Quality**: Clean, documented, and maintainable code

## 🐛 Troubleshooting

### Common Issues
1. **Music not playing**: Check browser autoplay settings
2. **Text-to-speech not working**: Ensure browser supports Web Speech API
3. **Boxes not saving**: Check if cookies/local storage is enabled

### Browser Support
- Recommended: Latest versions of Chrome/Firefox
- Minimum: Browsers supporting ES6+ and modern CSS

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Snow animation inspired by various CSS animation tutorials
- Fonts provided by Google Fonts
- Icons and emojis for festive touch
- Community feedback and contributions

## 📞 Support

Need help? Have suggestions?
- Open an issue
- Email: support@example.com
- Twitter: [@YourHandle](https://twitter.com/yourhandle)

---

Made with ❤️ for spreading Christmas cheer | © 2023
