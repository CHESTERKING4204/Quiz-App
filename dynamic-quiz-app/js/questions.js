// Questions Database - Organized by Category and Difficulty
const questionsDB = {
    general: {
        easy: [
            { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: 2 },
            { question: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], answer: 2 },
            { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
            { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
            { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], answer: 1 },
            { question: "How many days are there in a week?", options: ["5", "6", "7", "8"], answer: 2 },
            { question: "What color are bananas when ripe?", options: ["Green", "Yellow", "Red", "Blue"], answer: 1 },
            { question: "Which animal is known as the King of the Jungle?", options: ["Tiger", "Elephant", "Lion", "Bear"], answer: 2 },
            { question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: 1 },
            { question: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: 1 }
        ],
        medium: [
            { question: "Which country has the largest population?", options: ["USA", "India", "China", "Russia"], answer: 2 },
            { question: "What year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: 2 },
            { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], answer: 2 },
            { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: 1 },
            { question: "Which element has the chemical symbol 'Au'?", options: ["Silver", "Aluminum", "Gold", "Copper"], answer: 2 },
            { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
            { question: "How many bones are in the adult human body?", options: ["186", "206", "226", "246"], answer: 1 },
            { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 },
            { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2 },
            { question: "In which year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], answer: 1 }
        ],
        hard: [
            { question: "What is the speed of light in km/s (approximately)?", options: ["200,000", "300,000", "400,000", "500,000"], answer: 1 },
            { question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Brazil", "Italy"], answer: 2 },
            { question: "What is the rarest blood type?", options: ["O-", "A-", "B-", "AB-"], answer: 3 },
            { question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"], answer: 1 },
            { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
            { question: "Which element has the highest melting point?", options: ["Iron", "Tungsten", "Platinum", "Titanium"], answer: 1 },
            { question: "What year was the United Nations founded?", options: ["1942", "1945", "1948", "1950"], answer: 1 },
            { question: "Which country invented paper?", options: ["Japan", "India", "China", "Egypt"], answer: 2 },
            { question: "What is the deepest point in the ocean?", options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Philippine Trench"], answer: 0 },
            { question: "How many time zones does Russia have?", options: ["9", "10", "11", "12"], answer: 2 }
        ]
    },
    science: {
        easy: [
            { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
            { question: "What is the center of an atom called?", options: ["Electron", "Proton", "Nucleus", "Neutron"], answer: 2 },
            { question: "What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "110°C", "120°C"], answer: 1 },
            { question: "Which organ pumps blood through the body?", options: ["Brain", "Lungs", "Heart", "Liver"], answer: 2 },
            { question: "What is the closest star to Earth?", options: ["Proxima Centauri", "Sun", "Sirius", "Alpha Centauri"], answer: 1 },
            { question: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], answer: 1 },
            { question: "What force keeps us on the ground?", options: ["Magnetism", "Friction", "Gravity", "Inertia"], answer: 2 },
            { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Brain", "Skin"], answer: 3 },
            { question: "What type of animal is a dolphin?", options: ["Fish", "Mammal", "Reptile", "Amphibian"], answer: 1 },
            { question: "What is H2O commonly known as?", options: ["Salt", "Sugar", "Water", "Oxygen"], answer: 2 }
        ],
        medium: [
            { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"], answer: 2 },
            { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2", "MgCl2"], answer: 0 },
            { question: "Which planet is known for its rings?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 },
            { question: "What is the pH of pure water?", options: ["5", "6", "7", "8"], answer: 2 },
            { question: "What type of rock is formed from cooled lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "Ite"], answer: 2 },
            { question: "How many chromosomes do humans have?", options: ["23", "46", "48", "44"], answer: 1 },
            { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: 2 },
            { question: "What is the unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: 2 },
            { question: "Which vitamin is produced when skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], answer: 2 },
            { question: "What is the study of fossils called?", options: ["Archaeology", "Paleontology", "Geology", "Biology"], answer: 1 }
        ],
        hard: [
            { question: "What is the half-life of Carbon-14?", options: ["5,730 years", "10,000 years", "1,000 years", "50,000 years"], answer: 0 },
            { question: "What is the Schwarzschild radius related to?", options: ["Stars", "Black Holes", "Planets", "Galaxies"], answer: 1 },
            { question: "What is the most electronegative element?", options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"], answer: 2 },
            { question: "What is Avogadro's number approximately?", options: ["6.02 x 10^23", "3.14 x 10^23", "9.8 x 10^23", "1.6 x 10^23"], answer: 0 },
            { question: "What is the speed of sound in air at 20°C?", options: ["243 m/s", "343 m/s", "443 m/s", "543 m/s"], answer: 1 },
            { question: "Which particle has no electric charge?", options: ["Proton", "Electron", "Neutron", "Positron"], answer: 2 },
            { question: "What is the Heisenberg Uncertainty Principle about?", options: ["Energy", "Position and Momentum", "Mass", "Time"], answer: 1 },
            { question: "What is the most common isotope of Hydrogen?", options: ["Protium", "Deuterium", "Tritium", "Hydrogen-4"], answer: 0 },
            { question: "What is the Chandrasekhar limit?", options: ["1.4 solar masses", "2.4 solar masses", "3.4 solar masses", "0.4 solar masses"], answer: 0 },
            { question: "What is the process of cell division called?", options: ["Meiosis only", "Mitosis only", "Mitosis and Meiosis", "Binary Fission"], answer: 2 }
        ]
    },
    math: {
        easy: [
            { question: "What is 5 + 7?", options: ["10", "11", "12", "13"], answer: 2 },
            { question: "What is 9 x 6?", options: ["52", "54", "56", "58"], answer: 1 },
            { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: 2 },
            { question: "What is 100 ÷ 4?", options: ["20", "25", "30", "35"], answer: 1 },
            { question: "What is 15% of 100?", options: ["10", "15", "20", "25"], answer: 1 },
            { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: 1 },
            { question: "What is 3²?", options: ["6", "9", "12", "15"], answer: 1 },
            { question: "What is 50 - 23?", options: ["25", "26", "27", "28"], answer: 2 },
            { question: "What is the value of π (pi) approximately?", options: ["2.14", "3.14", "4.14", "5.14"], answer: 1 },
            { question: "What is 2 + 2 x 2?", options: ["6", "8", "4", "10"], answer: 0 }
        ],
        medium: [
            { question: "What is the derivative of x²?", options: ["x", "2x", "x²", "2x²"], answer: 1 },
            { question: "What is log₁₀(1000)?", options: ["2", "3", "4", "5"], answer: 1 },
            { question: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], answer: 1 },
            { question: "What is 7! (7 factorial)?", options: ["720", "5040", "40320", "362880"], answer: 1 },
            { question: "What is the area of a circle with radius 5?", options: ["25π", "10π", "50π", "5π"], answer: 0 },
            { question: "What is the next prime number after 17?", options: ["18", "19", "20", "21"], answer: 1 },
            { question: "What is sin(90°)?", options: ["0", "0.5", "1", "-1"], answer: 2 },
            { question: "What is the slope of a horizontal line?", options: ["1", "0", "Undefined", "-1"], answer: 1 },
            { question: "What is √(144)?", options: ["10", "11", "12", "13"], answer: 2 },
            { question: "What is 2⁵?", options: ["16", "32", "64", "128"], answer: 1 }
        ],
        hard: [
            { question: "What is the integral of 1/x?", options: ["x", "ln|x| + C", "1/x² + C", "e^x + C"], answer: 1 },
            { question: "What is the value of e (Euler's number) approximately?", options: ["2.718", "3.141", "1.618", "2.236"], answer: 0 },
            { question: "What is the determinant of a 2x2 identity matrix?", options: ["0", "1", "2", "4"], answer: 1 },
            { question: "What is lim(x→0) sin(x)/x?", options: ["0", "1", "∞", "Undefined"], answer: 1 },
            { question: "What is the sum of the first 100 natural numbers?", options: ["5000", "5050", "5100", "5500"], answer: 1 },
            { question: "What is i² (where i is imaginary unit)?", options: ["1", "-1", "i", "-i"], answer: 1 },
            { question: "What is the golden ratio approximately?", options: ["1.414", "1.618", "1.732", "2.236"], answer: 1 },
            { question: "What is d/dx(e^x)?", options: ["e^x", "xe^(x-1)", "e^(x-1)", "ln(x)"], answer: 0 },
            { question: "What is the Pythagorean theorem?", options: ["a+b=c", "a²+b²=c²", "a×b=c", "a/b=c"], answer: 1 },
            { question: "What is cos(0°)?", options: ["0", "0.5", "1", "-1"], answer: 2 }
        ]
    },
    history: {
        easy: [
            { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: 1 },
            { question: "In which year did World War I begin?", options: ["1912", "1914", "1916", "1918"], answer: 1 },
            { question: "Which ancient civilization built the pyramids?", options: ["Romans", "Greeks", "Egyptians", "Mayans"], answer: 2 },
            { question: "Who discovered America in 1492?", options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"], answer: 1 },
            { question: "What was the name of the ship that brought Pilgrims to America?", options: ["Mayflower", "Santa Maria", "Titanic", "Endeavour"], answer: 0 },
            { question: "Which country gifted the Statue of Liberty to the USA?", options: ["England", "Spain", "France", "Germany"], answer: 2 },
            { question: "Who wrote the Declaration of Independence?", options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"], answer: 2 },
            { question: "What ancient wonder was located in Egypt?", options: ["Hanging Gardens", "Colossus", "Great Pyramid", "Lighthouse"], answer: 2 },
            { question: "Which empire was ruled by Julius Caesar?", options: ["Greek", "Roman", "Persian", "Ottoman"], answer: 1 },
            { question: "In which city was the Titanic built?", options: ["London", "Liverpool", "Belfast", "Southampton"], answer: 2 }
        ],
        medium: [
            { question: "What year did the Berlin Wall fall?", options: ["1987", "1989", "1991", "1993"], answer: 1 },
            { question: "Who was the British Prime Minister during most of WWII?", options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"], answer: 1 },
            { question: "Which treaty ended World War I?", options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Vienna", "Treaty of Ghent"], answer: 1 },
            { question: "Who was the first woman to fly solo across the Atlantic?", options: ["Bessie Coleman", "Amelia Earhart", "Harriet Quimby", "Jacqueline Cochran"], answer: 1 },
            { question: "What was the Manhattan Project?", options: ["Space Program", "Atomic Bomb Development", "Bridge Construction", "City Planning"], answer: 1 },
            { question: "Which revolution began in 1789?", options: ["American", "French", "Russian", "Industrial"], answer: 1 },
            { question: "Who was the last Tsar of Russia?", options: ["Alexander III", "Nicholas II", "Peter the Great", "Ivan IV"], answer: 1 },
            { question: "What year did India gain independence?", options: ["1945", "1947", "1949", "1950"], answer: 1 },
            { question: "Which war was fought between the North and South in America?", options: ["Revolutionary War", "Civil War", "World War I", "War of 1812"], answer: 1 },
            { question: "Who was known as the 'Iron Lady'?", options: ["Queen Victoria", "Margaret Thatcher", "Indira Gandhi", "Angela Merkel"], answer: 1 }
        ],
        hard: [
            { question: "What year was the Magna Carta signed?", options: ["1066", "1215", "1415", "1515"], answer: 1 },
            { question: "Who was the first Holy Roman Emperor?", options: ["Constantine", "Charlemagne", "Otto I", "Frederick I"], answer: 1 },
            { question: "What was the code name for the D-Day invasion?", options: ["Operation Torch", "Operation Overlord", "Operation Barbarossa", "Operation Market Garden"], answer: 1 },
            { question: "Which dynasty built the Great Wall of China?", options: ["Han", "Ming", "Qin", "Tang"], answer: 2 },
            { question: "What year did the Byzantine Empire fall?", options: ["1204", "1453", "1492", "1517"], answer: 1 },
            { question: "Who led the Mongol Empire at its peak?", options: ["Genghis Khan", "Kublai Khan", "Tamerlane", "Attila"], answer: 0 },
            { question: "What was the Thirty Years' War primarily about?", options: ["Territory", "Religion", "Trade", "Succession"], answer: 1 },
            { question: "Which battle marked the end of Napoleon's rule?", options: ["Austerlitz", "Trafalgar", "Waterloo", "Leipzig"], answer: 2 },
            { question: "What year was the UN Universal Declaration of Human Rights adopted?", options: ["1945", "1948", "1950", "1952"], answer: 1 },
            { question: "Who was the first Emperor of unified China?", options: ["Qin Shi Huang", "Han Wudi", "Tang Taizong", "Kublai Khan"], answer: 0 }
        ]
    },
    programming: {
        easy: [
            { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: 0 },
            { question: "Which symbol is used for comments in JavaScript?", options: ["#", "//", "/*", "Both // and /*"], answer: 3 },
            { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], answer: 1 },
            { question: "Which language is used for web page structure?", options: ["CSS", "JavaScript", "HTML", "Python"], answer: 2 },
            { question: "What is the correct file extension for JavaScript?", options: [".java", ".js", ".javascript", ".jscript"], answer: 1 },
            { question: "Which tag is used for the largest heading in HTML?", options: ["<h6>", "<h1>", "<heading>", "<head>"], answer: 1 },
            { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Program Integration", "Automated Programming Interface", "Application Process Integration"], answer: 0 },
            { question: "Which company developed JavaScript?", options: ["Microsoft", "Google", "Netscape", "Apple"], answer: 2 },
            { question: "What is the output of: console.log(typeof 42)?", options: ["integer", "number", "float", "digit"], answer: 1 },
            { question: "Which HTML tag is used for creating a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1 }
        ],
        medium: [
            { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: 1 },
            { question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Linked List"], answer: 1 },
            { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"], answer: 0 },
            { question: "Which keyword is used to define a constant in JavaScript?", options: ["var", "let", "const", "constant"], answer: 2 },
            { question: "What is the result of 5 == '5' in JavaScript?", options: ["true", "false", "undefined", "error"], answer: 0 },
            { question: "Which HTTP method is used to update data?", options: ["GET", "POST", "PUT", "DELETE"], answer: 2 },
            { question: "What is Git primarily used for?", options: ["Database Management", "Version Control", "Web Hosting", "Testing"], answer: 1 },
            { question: "Which symbol is used for strict equality in JavaScript?", options: ["==", "===", "=", "!="], answer: 1 },
            { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Management", "Digital Ordinance Model", "Document Orientation Model"], answer: 0 },
            { question: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "foreach"], answer: 2 }
        ],
        hard: [
            { question: "What is the time complexity of quicksort (average case)?", options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], answer: 1 },
            { question: "What design pattern is React based on?", options: ["MVC", "MVVM", "Component-Based", "Singleton"], answer: 2 },
            { question: "What is a closure in JavaScript?", options: ["A function with no parameters", "A function that returns another function", "A function with access to outer scope", "A self-invoking function"], answer: 2 },
            { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Refers to global object", "Refers to current function", "Refers to execution context", "Refers to parent object"], answer: 2 },
            { question: "Which algorithm is used in JavaScript's Array.sort()?", options: ["Quicksort", "Mergesort", "Timsort", "Heapsort"], answer: 2 },
            { question: "What is the output of: console.log([] == ![])?", options: ["true", "false", "undefined", "error"], answer: 0 },
            { question: "What is the purpose of the 'use strict' directive?", options: ["Enable ES6 features", "Enable strict mode", "Enable debugging", "Enable modules"], answer: 1 },
            { question: "What is event bubbling?", options: ["Events propagate from child to parent", "Events propagate from parent to child", "Events don't propagate", "Events propagate randomly"], answer: 0 },
            { question: "What is the difference between null and undefined?", options: ["No difference", "null is assigned, undefined is default", "undefined is assigned, null is default", "Both are errors"], answer: 1 },
            { question: "What is a Promise in JavaScript?", options: ["A callback function", "An async operation result", "A synchronous operation", "A variable type"], answer: 1 }
        ]
    }
};

// Function to get questions based on category and difficulty
function getQuestions(category, difficulty) {
    return questionsDB[category][difficulty] || [];
}
