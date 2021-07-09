<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card :class="{green: parentIsStocks, blue: !parentIsStocks}" class="darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{stock.name}} 
          <template v-if="parentIsStocks">
            <small>
              (Preço: {{stock.price}})
            </small>
          </template>
          <template v-else>
            <small>
              (Preço: {{stock.price}} | Qtde: {{stock.quantity}})
            </small>
          </template>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantity"/>
        <template v-if="parentIsStocks">
          <v-btn class="green darken-3 white--text"
            :disabled="quantity <= 0 || !Number.isInteger(quantity)"
            @click="buyStock">
            Comprar
            </v-btn>
        </template>
        <template v-else>
          <v-btn class="blue darken-3 white--text"
            :disabled="quantity <= 0 || quantity > stock.quantity || !Number.isInteger(quantity)"
            @click="sellStock">
            Vender
          </v-btn>
        </template>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    stock: Object,
    parent: {
      type: String,
      validator: function(value) {
        let validComponents = ['Portfolio', 'Stocks']
        return validComponents.indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    parentIsStocks() {
      return this.parent == 'Stocks' ? true : false
    }
  },
  methods: {
    ...mapActions({sellStockAction: 'sellStock', buyStockAction: 'buyStock'}),
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      }
      this.buyStockAction(order)
      this.quantity = 0
    },
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      }
      this.sellStockAction(order)
      this.quantity = 0
    }
    
  }
}
</script>

<style>

</style>