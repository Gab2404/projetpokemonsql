const fs = require('fs');

const OUTPUT_FILE = 'fake_data.sql';

// Helper to get random item
const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 10);
};

// Data Pools
const firstNames = ['James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez'];
const genres = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller', 'Western', 'Sci-Fi'];
const keywords = ['superhero', 'sequel', 'based on novel', 'dystopia', 'space', 'aliens', 'magic', 'friendship', 'love', 'revenge'];
const languages = [['en', 'English'], ['fr', 'French'], ['es', 'Spanish'], ['de', 'German'], ['ja', 'Japanese']];
const companies = ['Warner Bros', 'Universal Pictures', 'Paramount', '20th Century Fox', 'Sony Pictures', 'Disney', 'Netflix', 'Amazon MGM'];
const adjectives = ['Dark', 'Bright', 'Lost', 'Found', 'Eternal', 'Last', 'First', 'Brave', 'Silent', 'Loud'];
const nouns = ['Knight', 'Day', 'Night', 'Star', 'War', 'Peace', 'Love', 'Dream', 'Journey', 'Legend'];

let sql = `-- Script de données fakées généré automatiquement\n\n`;

// 1. Generate Static Data (Genres, Keywords, Languages, Companies, Departments, Genders)
sql += `-- --- GENRES ---\n`;
genres.forEach(g => {
    sql += `INSERT INTO genre (name) VALUES ('${g}');\n`;
});

sql += `\n-- --- KEYWORDS ---\n`;
keywords.forEach(k => {
    sql += `INSERT INTO keyword (name) VALUES ('${k}');\n`;
});

sql += `\n-- --- LANGUAGES ---\n`;
languages.forEach(l => {
    sql += `INSERT INTO language (code, name) VALUES ('${l[0]}', '${l[1]}');\n`;
});

sql += `\n-- --- COMPANIES ---\n`;
companies.forEach(c => {
    sql += `INSERT INTO company (name) VALUES ('${c}');\n`;
});

sql += `\n-- --- DEPARTMENTS ---\n`;
['Directing', 'Production', 'Screenplay', 'Editing', 'Camera', 'Acting', 'Sound', 'Art'].forEach(d => {
    sql += `INSERT INTO department (name) VALUES ('${d}');\n`;
});

sql += `\n-- --- GENDERS ---\n`;
['Male', 'Female', 'Non-Binary', 'Unknown'].forEach(g => {
    sql += `INSERT INTO gender (name) VALUES ('${g}');\n`;
});

// 2. Generate People (min 100)
sql += `\n-- --- PEOPLE ---\n`;
for (let i = 0; i < 150; i++) {
    const name = `${randomElement(firstNames)} ${randomElement(lastNames)}`;
    sql += `INSERT INTO person (name) VALUES ('${name.replace("'", "''")}');\n`;
}

// 3. Generate Movies (min 100)
sql += `\n-- --- MOVIES ---\n`;
for (let i = 0; i < 120; i++) {
    const title = `${randomElement(adjectives)} ${randomElement(nouns)}`;
    const budget = randomNumber(1000000, 200000000);
    const revenue = Math.floor(budget * (Math.random() * 3));
    const date = randomDate(new Date(1990, 0, 1), new Date(2023, 0, 1));
    const runtime = randomNumber(80, 180);
    const vote = (Math.random() * 10).toFixed(1);
    const desc = `A ${title} story about ${randomElement(keywords)}.`;

    // Simple escape for single quotes
    sql += `INSERT INTO movie (title, budget, homepage, overview, popularity, release_date, revenue, runtime, status, tagline, vote_average, vote_count) VALUES ('${title}', ${budget}, 'https://example.com', '${desc}', ${randomNumber(1, 100)}, '${date}', ${revenue}, ${runtime}, 'Released', 'Just watch it', ${vote}, ${randomNumber(0, 5000)});\n`;
}

// 4. Generate Links
sql += `\n-- --- LINKS (Randomly assigned) ---\n`;
// Loop movies 1 to 120
for (let m = 1; m <= 120; m++) {
    // Genres
    const numGenres = randomNumber(1, 3);
    const myGenres = new Set();
    while (myGenres.size < numGenres) myGenres.add(randomNumber(1, genres.length));
    myGenres.forEach(g => {
        sql += `INSERT INTO movie_genre (movie_id, genre_id) VALUES (${m}, ${g});\n`;
    });

    // Cast
    const numCast = randomNumber(5, 10);
    const myCast = new Set();
    while (myCast.size < numCast) myCast.add(randomNumber(1, 150)); // People IDs
    let order = 1;
    myCast.forEach(p => {
        sql += `INSERT INTO movie_cast (movie_id, person_id, gender_id, department_id, character_name, cast_order) VALUES (${m}, ${p}, ${randomNumber(1, 4)}, 6, 'Character ${order}', ${order});\n`;
        order++;
    });
}

// Write file table
fs.writeFileSync(OUTPUT_FILE, sql);
console.log(`Successfully generated ${OUTPUT_FILE}`);
