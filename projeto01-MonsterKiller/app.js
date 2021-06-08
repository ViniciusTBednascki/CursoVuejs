new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        playerEnergy: 100,
        monsterLife: 100,
        monsterFury: 0,
        monsterEspecial: false,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.playerEnergy = 100
            this.monsterLife = 100
            this.monsterFury = 0
            this.logs = []
        },
        giveUp() {
            this.running = false
            this.playerLife = 0
            this.playerEnergy = 0
        },
        getRandom(min, max) {
            const value = Math.random()*(max - min) + min
            return Math.round(value)
        },
        attack(especial) {
            if(especial && this.playerEnergy < 25) {
                this.registerLog("Player doesn't have enough energy for a special attack", 'playerTired')
            }else {
                this.hurt(5, 10, especial, 'player', 'monster', 'playerAttack')
                if(this.monsterLife > 0) {
                    this.hurt(6, 11, this.monsterEspecial, 'monster', 'player', 'monsterAttack')
                }
            }
        },
        whatHappend(source, especial, cls) {
            if(source == 'player') {
                let energy
                if(especial) {
                    energy = 25
                    this.playerEnergy = Math.max(this.playerEnergy - energy, 0)
                    this.registerLog(`player used ${energy} energy`, cls)
                    return 4
                }else {
                    energy = 10
                    this.playerEnergy = Math.min(this.playerEnergy + energy, 100)
                    this.registerLog(`player gain ${energy} energy`, cls)
                    return 0
                }
            }else if(source == 'monster') {
                if(especial) {
                    this.monsterFury = 0
                    this.monsterEspecial = false
                    return 6
                }else {
                    const fury = 25
                    this.monsterFury = Math.min(this.monsterFury + fury, 100)
                    this.registerLog(`monster gain ${fury} fury`, cls)
                    return 0
                }
            }
        },
        hurt(min, max, especial,source, target, cls) {
            let bonus = this.whatHappend(source, especial, cls)
            const hurt = this.getRandom(min + bonus, max + bonus)
            this[target+'Life'] = Math.max(this[target+'Life'] - hurt, 0)
            this.registerLog(`${source} did ${hurt} damage on ${target}`, cls)
        },
        rest(min, max) {
            const heal = this.getRandom(min, max)
            const energy = 20
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.playerEnergy = Math.min(this.playerEnergy + energy, 100)
            this.registerLog(`player rested and received ${heal} health and ${energy} energy`, 'playerRest')
        },
        restAndHurt() {
            this.rest(4, 9)
            this.hurt(6, 11, this.monsterEspecial, 'monster', 'player', 'monsterAttack')
        },
        registerLog(text, cls) {
            this.logs.unshift({text, cls})
        }
    },
    watch: {
        hasResult(value) {
            if(value) {
                this.running = false
            }
        },
        monsterFury(value) {
            if(value == 100) {
                this.monsterEspecial = true
            }
        }
    }
})