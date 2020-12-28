class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score = 0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score: this.score
        });
    }
    static updatePlayer() {
        var score1 = database.ref("players/player1/score");
        score1.on("value", (data) => {
            score1 = data.val();
        })
        return score1;
    }

    static updatePlayer2() {
        var score2 = database.ref("players/player2/score");
        score2.on("value", (data) => {
            score2 = data.val();
        })
        return score2;
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    static player1Name() {
        var name1 = database.ref("players/player1/name")
        name1.on("value", (data) => {
            name1 = data.val();
        })
        return name1;
    }

    static player2Name() {
        var name2 = database.ref("players/player2/name")
        name2.on("value", (data) => {
            name2 = data.val();
        })
        return name2;
    }
}