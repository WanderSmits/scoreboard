score: number (dynamic), array of players dynamic, using state because its value gonna change

rest static, static is prop

manage state in the parent (highest) component and pass it to the children

in Player component updateScore is the callback prop of parent function updateScore (scoreboard)

and in AddPlayer you need updatePlayer callback prop of updatePlayers (scoreboard)

Player component (child):
-props: id, name, score, updateScore(callback prop)

scoreboard (parent):

- state : array of players
- function updateScore, addPlayer

addPlayer (form)

- props: addPlayer(callback prop)
  -state: name

  PROPS ARE OBJECTS

YOU USE LIFTING STATE SO YOU CAN MANIPULATE DATA (FILTER.SORT WHATEVER IN ONE FILE)
