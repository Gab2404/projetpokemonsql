# Partie 3 - Génération de données pour la base Movies

## 📦 Prérequis

- Node.js installé (version 12 ou supérieure)
- Aucun package externe requis (utilise uniquement `fs` natif)

## 🚀 Installation

Aucune installation nécessaire, le script utilise uniquement des modules Node.js natifs.

## ▶️ Exécution

Pour générer le fichier SQL avec les données fakées :

```bash
node generate_data.js
```

Cette commande crée un fichier `fake_data.sql` contenant :
- 10 genres
- 10 mots-clés
- 5 langues
- 8 compagnies de production
- 8 départements
- 4 genres (gender)
- **150 personnes** (acteurs, réalisateurs, etc.)
- **120 films** avec métadonnées complètes
- Associations aléatoires entre films, genres, et cast

## 📊 Import dans MySQL

Pour importer les données générées dans votre base de données MySQL :

```bash
mysql -u root -p nom_de_votre_base < fake_data.sql
```

Ou depuis MySQL :

```sql
SOURCE /chemin/vers/fake_data.sql;
```

## 📝 Structure des données

- **Cohérence** : Les noms sont générés avec des combinaisons réalistes (prénom + nom)
- **Dates** : Comprises entre 1990 et 2023
- **Budgets/Revenus** : Valeurs réalistes avec corrélation budget → revenue
- **Relations** : Chaque film a 1-3 genres et 5-10 acteurs assignés aléatoirement

## 🔍 Exemple de sortie

```sql
INSERT INTO person (name) VALUES ('James Williams');
INSERT INTO movie (title, budget, ...) VALUES ('Dark Knight', 150000000, ...);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (1, 3);
INSERT INTO movie_cast (movie_id, person_id, ...) VALUES (1, 25, ...);
```
