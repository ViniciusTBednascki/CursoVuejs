new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100
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
            this.monsterLife = 100
        },
        giveUp() {
            this.running = false
            this.playerLife = 0
        },
        getRandom(min, max) {
            const value = Math.random()*(max - min) + min
            return Math.round(value)
        },
        attack(especial) {
            this.hurt('playerLife', 7, 12, false)
            this.hurt('monsterLife', 5, 10, especial)
        },
        hurt(target, min, max, especial) {
            const bonus = especial ? 4 : 0
            const hurt = this.getRandom(min + bonus, max + bonus)
            this[target] = Math.max(this[target] - hurt, 0)
        }
    },
    watch: {
        hasResult(value) {
            if(value) {
                this.running = false
            }
        }
    }
})