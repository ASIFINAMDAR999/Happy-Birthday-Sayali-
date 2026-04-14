/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Sayali",
  photo: "./img/sayali.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "light",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "I really like your name btw!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's your birthday!! :D",
    },
    {
      type: "chatbox",
      message:
        "Happy Birthday to the most precious part of my life my love Sayali ❤️🎂
At this moment I just want to thank god for bringing you to me because meeting you was not planned but loving you became the most beautiful thing in my life 💖 you are not just someone special you are my feeling my peace and the part of my heart I never want to lose
You are my good luck charm  since you came into my life everything feels better and more meaningful
I may not always express it perfectly but you have changed me in the best way possible and having you in my life means everything to me 🥺❤️
I promise I will always stand by you in every situation I will respect you trust you and never give you a reason to doubt my love I will protect your heart take care of your smile and keep choosing you every single day no matter what happens I am never letting you go and I will never stop loving you. my love for you is infinite i told you yesterday not 2 3 4 5 its ♾️❤️.you are my first love i will make it last i loveing you to marry you i wan be your life partner 👩‍❤️‍💋‍👨 I wanna spend my whole life loving you ❤️  i am 100% sure 
You are my happiness my peace my forever and on your special day I just wish your smile never fades and your life is filled with everything you deserve and you wished (mr ai is included free for you in that wishes 🫣) ✨
I love you more than I can ever explain in words my love for you is infinite my love ❤️😘
I love youuuuuu ♾️ ❤️
Once again, wish you many many happy returns of the day my love ❤️",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "That's what I was going to do.",
        "But then I stopped.",
        "I realised, I wanted to do something <strong>special</strong>.",
        "Because,",
        "You are Special <span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
      author: "Oprah Winfrey",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "May the js.prototypes always be with you! ;)",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Okay, now come back and tell me if you liked it.",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
