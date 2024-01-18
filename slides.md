<!-- slides.md -->

# GitHub Bootcamp

---

## This is my slide

---

## Happy Hacking


---

## Comment initialiser un nouveau dépôt

Pour initialiser un nouveau dépôt Git, utilisez la commande suivante dans votre terminal :

```bash
git init
```
---

## Comment réviser les changements

Pour voir quels fichiers ont été modifiés depuis le dernier commit, utilisez :

```bash
git status
```

Pour voir les différences dans les fichiers modifiés, utilisez :

```bash
git diff
```


---

## Comment commit des changements

Pour enregistrer vos modifications dans le dépôt, suivez ces étapes :

1. Ajoutez les fichiers modifiés à la zone de staging :

   ```bash
   git add <fichier>
   ```

2. Faites le commit des modifications :

   ```bash
   git commit -m "Votre message de commit"
   ```

---

## Créer une nouvelle branche

Pour créer une nouvelle branche dans Git, utilisez la commande suivante :

```bash
git branch <nom-de-branche>
```

---

## Travailler sur une branche

Pour travailler sur une branche spécifique, utilisez la commande suivante :

```bash
git checkout <nom-de-branche>
```

---

## Fusionner une branche sur `main`

Pour fusionner une branche sur `main`, utilisez la commande suivante :

```bash
git checkout main
git merge <nom-de-branche>
```

---

## Supprimer une branche

Pour supprimer une branche, utilisez la commande suivante :

```bash
git branch -d <nom-de-branche>
```

---

## Pousser des Changements vers un Dépôt Distant

Pour envoyer vos modifications locales à un dépôt distant sur GitHub, utilisez la commande :

```bash
git push origin <nom-de-branche>
```

---

## Récupérer les Changements depuis un Dépôt Distant

Pour récupérer les changements depuis un dépôt distant sur GitHub, utilisez la commande :

```bash
git pull origin <nom-de-branche>
```

---

## Texte

Ceci est un exemple de texte dans une diapositive Markdown. Vous pouvez utiliser le Markdown pour formater le texte, créer des listes, des liens, etc.

Voici un paragraphe d'exemple.

---

## Listes

- Élément de liste à puce
- Un autre élément

1. Élément de liste numérotée
2. Un autre élément numéroté

---

## Images

![image](https://placehold.co/400)

---

## En-têtes et Citations

### Ceci est un En-têtes

> Ceci est une citation.
> - Auteur

---

## Code

Vous pouvez afficher des blocs de code ou des snippets de code dans Markdown.

```javascript
console.log("Ceci est un snippet de code JavaScript.");
```


#### 6. Diapositive "Extras"

```markdown
---

## Extras

Markdown offre également des fonctionnalités supplémentaires comme les listes de tâches, parfaites pour les listes de vérification ou les objectifs.

- [x] Tâche accomplie
- [ ] Tâche en attente

