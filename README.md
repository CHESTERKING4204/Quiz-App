# Dynamic Quiz Application

A browser-based quiz application with timer, multiple categories, difficulty levels, and detailed result analysis.

## Features

- **Multiple Categories**: General Knowledge, Science, Mathematics, History, Programming
- **Difficulty Levels**: Easy (30s), Medium (20s), Hard (15s) per question
- **Countdown Timer**: Auto-submits when time runs out
- **Question Navigation**: Jump to any question, track answered questions
- **Result Analysis**:
  - Score percentage with color-coded feedback
  - Correct/incorrect answer count
  - Time spent per question
  - Interactive charts (pie chart & bar chart)
  - Question-wise detailed breakdown
- **Responsive Design**: Works on desktop, tablet, and mobile

## Tech Stack

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript
- Chart.js (for result visualization)

## Project Structure

```
dynamic-quiz-app/
├── index.html          # Main HTML file
├── README.md           # Documentation
└── js/
    ├── questions.js    # Question database
    └── quiz.js         # Quiz logic & functionality
```

## How to Run

1. Download/clone the project
2. Open `index.html` in any modern browser
3. No server or installation required!

## How to Use

1. Enter your name
2. Select a category
3. Choose difficulty level
4. Click "Start Quiz"
5. Answer questions within the time limit
6. Navigate between questions using number buttons
7. Submit quiz to see detailed results

## Screenshots

### Landing Page
- Category selection
- Difficulty selection
- User name input

### Quiz Page
- Timer countdown
- Progress bar
- Question navigation
- Answer options

### Results Page
- Score percentage
- Performance charts
- Question-wise analysis

## Adding New Questions

Edit `js/questions.js` to add questions:

```javascript
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0  // Index of correct answer (0-3)
}
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License - Free to use and modify
