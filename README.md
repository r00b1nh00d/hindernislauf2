# Hindernislauf mit mehreren Hindernissen 
## ~avatar avatar @unplugged

Nachdem der erste Teil geschafft ist und das Spiel mit einem Hindernis programmiert wurde kommen jetzt noch zwei weitere Hindernisse hinzu. 

## Schritt 1 checke dein programm
um einfach weiter zu machen sollte dein Programm wie folgt aussehen. Überprüfe dein Programm mit dieser vorgabe.
```blocks
input.onButtonPressed(Button.B, function () {
    Spielfigur.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.A, function () {
    Spielfigur.change(LedSpriteProperty.X, -1)
})
let Spielfigur = game.createSprite(2, 4)
let Hindernis1 = game.createSprite(Math.randomRange(0, 4), 0)

Hindernis1.turn(Direction.Right, 90)

basic.forever(function () {
    if (Hindernis1.get(LedSpriteProperty.Y) == 4) {

        Hindernis1.set(LedSpriteProperty.Y, 0)
        Hindernis1.set(LedSpriteProperty.X, Math.randomRange(0, 4))
    } else {
        Hindernis1.move(1)
    }
    
    basic.pause(500)
    if (Spielfigur.isTouching(Hindernis1)) {
        game.gameOver()
    }
   
})
```
## Schritt 2 weitere Hindernisse einbinden.
Nun werden Hindernis 2 und 3 so erstellt wie bereits Hindernis 1 erstellt wurde
```blocks
let Hindernis2 = game.createSprite(Math.randomRange(0, 4), 0)
let Hindernis3 = game.createSprite(Math.randomRange(0, 4), 0)
Hindernis2.turn(Direction.Right, 90)
Hindernis3.turn(Direction.Right, 90)
```



## Schritt 3 Bewegung der Hindernisse
Die Hindernisse 2 und 3 werden wie das erste Hindnis bewegt. Auch hier muss vor dem beweegen überprüft werden, ob das Hindernis schon außerhalb des Bildschirms ist. 
Wichtig!: Wird ein ``||basic:Pausiere||`` Block nach dem Bewegen der drei Blöcke verwendet bewegen sich alle drei Hindernisse gleichzeitig wie eine Mauer. 
```blocks
let Spielfigur = game.createSprite(2, 4)
let Hindernis1 = game.createSprite(Math.randomRange(0, 4), 0)
let Hindernis2 = game.createSprite(Math.randomRange(0, 4), 0)
let Hindernis3 = game.createSprite(Math.randomRange(0, 4), 0)
Hindernis2.turn(Direction.Right, 90)
Hindernis3.turn(Direction.Right, 90)

basic.forever(function () {
   if (Hindernis1.get(LedSpriteProperty.Y) == 4) {

        Hindernis1.set(LedSpriteProperty.Y, 0)
        Hindernis1.set(LedSpriteProperty.X, Math.randomRange(0, 4))
    } else {
        Hindernis1.move(1)
    }
if (Hindernis2.get(LedSpriteProperty.Y) == 4) {
        Hindernis2.set(LedSpriteProperty.Y, 0)
        Hindernis2.set(LedSpriteProperty.X, Math.randomRange(0, 4))
    } else {
        Hindernis2.move(1)
    }
    if (Hindernis3.get(LedSpriteProperty.Y) == 4) {
        Hindernis3.set(LedSpriteProperty.Y, 0)
        Hindernis3.set(LedSpriteProperty.X, Math.randomRange(0, 4))
    } else {
        Hindernis3.move(1)
    }
  basic.pause(500)
})
```

## Schritt 4 Spiel Ende
Auch wenn die Spielfigur das Hindernis 2 oder 3 berührt soll das Spiel beendet werden.
```blocks
let Spielfigur = game.createSprite(2, 4)
let Hindernis1 = game.createSprite(Math.randomRange(0, 4), 0)
let Hindernis2 = game.createSprite(Math.randomRange(0, 4), 0)
let Hindernis3 = game.createSprite(Math.randomRange(0, 4), 0)
Hindernis2.turn(Direction.Right, 90)
Hindernis3.turn(Direction.Right, 90)
basic.forever(function () {
   if (Spielfigur.isTouching(Hindernis1)) {
        game.gameOver()
    }
     if (Spielfigur.isTouching(Hindernis2)) {
        game.gameOver()
    }
    if (Spielfigur.isTouching(Hindernis3)) {
        game.gameOver()
    }

})
```

## Schritt 5 Schwierigkeit erhöhen
Indem die eingestellte Zeit z.B. ``||basic:Pausiere 500 ||`` veringert wird läuft das Program schneller ab. Also um so kleiner die ``||basic:Pausiere||`` Zeit umso schwieriger ist das Spiel. Das Spiel kann auch von alleine schneller werden. Dafür muss die Zeit nur auf einer Variablen gespeichert werden und z.B. wenn ein Hinderniss den unteren Anzeigerand erreicht hat, diese Variable z.B. um 10 veringert werden.
```blocks
 let Spielfigur = game.createSprite(2, 4)
let Hindernis1 = game.createSprite(Math.randomRange(0, 4), 0)
    let Zeit = 500

    basic.forever(function () {
   if (Hindernis1.get(LedSpriteProperty.Y) == 4) {
        Zeit += -10
        Hindernis1.set(LedSpriteProperty.Y, 0)
        Hindernis1.set(LedSpriteProperty.X, Math.randomRange(0, 4))
        
```


## ~avatar avatar @unplugged
## Als Tutorial verwenden

Dieses Repository kann als **Tutorial** für MakeCode verwenden.

öffne dazu den Link: [https://makecode.calliope.cc/#tutorial:https://github.com/r00b1nh00d/hindernislauf2]
#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
