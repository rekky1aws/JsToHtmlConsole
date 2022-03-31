# Console JS to HTM
Cette parge vous permet d'executer du JavaScript, et devoir le resultat directement dans la page HTML et non dans la console accessible par F12.

## Comment l'utiliser
Mettre les fichiers dans un dossier. Par défaut, le code JavaScript se place dans le fichier "script.js", mais on peut modifier cela en changer le nom du fichier dans le fichier index.html en changeant la source du second script, ou en ajoutant un à la suite.

Dans le champ imput on peu saisir des commandes a executer en JavaScript qui seront envoyée une fois la touche Entrée enfoncée.

Les flèches du haut et du bas peuvent être utilisées pour accéder à l'historique des commandes tapées depuis le dernier chargement de la page.

L'affichage des objets est récursif. C'est à dire qu'un objet dans un objet s'affichera correctement.

## Bugs
Pour l'instant il n'est pas possible de sauvegarder des données depuis l'input de la fausse console. 

Il n'est pas non plus possible pour le moment de passer plusieurs arguments dans console.log(), il est conseillé d'opter pour des interpolations de strings.