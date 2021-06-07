new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        playerEnergy: 100,
        monsterLife: 100,
        monsterFury: 0,
        monsterEspecial: false
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
            this.hurt('monsterLife', 5, 10, especial)
            this.hurt('playerLife', 5, 10, this.monsterEspecial)
            this.monsterFury = Math.min(this.monsterFury+20, 100)
        },
        whatHappend(target, especial) {
            if(especial && this.playerEnergy >= 25 && target == 'monsterLife') {
                this.playerEnergy = Math.max(this.playerEnergy-25, 0)
                return 4
            }else if(especial && target == 'playerLife') {
                this.monsterFury = 0
                this.monsterEspecial = false
                return 8
            }else if(target == 'monsterLife'){
                this.playerEnergy = Math.min(this.playerEnergy+10, 100)
            }
            return 0
        },
        hurt(target, min, max, especial) {
            let bonus = this.whatHappend(target, especial)
            const hurt = this.getRandom(min + bonus, max + bonus)
            this[target] = Math.max(this[target] - hurt, 0)
        },
        rest(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.playerEnergy = Math.min(this.playerEnergy + 20, 100)
        },
        restAndHurt() {
            this.rest(5, 10)
            this.hurt('playerLife', 5, 10, this.monsterEspecial)
            this.monsterFury = Math.min(this.monsterFury+20, 100)
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