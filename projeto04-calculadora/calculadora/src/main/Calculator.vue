<template>
  <div class="calculator">
      <Display :value='value'/>
      <Button label="AC" triple @calcButtonClick="clearMemory"/>
      <Button label="/" operation @calcButtonClick="setOperation"/>
      <Button label="7"  @calcButtonClick="addDigit"/>
      <Button label="8" @calcButtonClick="addDigit"/>
      <Button label="9" @calcButtonClick="addDigit"/>
      <Button label="*" operation @calcButtonClick="setOperation"/>
      <Button label="4" @calcButtonClick="addDigit"/>
      <Button label="5" @calcButtonClick="addDigit"/>
      <Button label="6" @calcButtonClick="addDigit"/>
      <Button label="-" operation @calcButtonClick="setOperation"/>
      <Button label="1" @calcButtonClick="addDigit"/>
      <Button label="2" @calcButtonClick="addDigit"/>
      <Button label="3" @calcButtonClick="addDigit"/>
      <Button label="+" operation @calcButtonClick="setOperation"/>
      <Button label="0" double @calcButtonClick="addDigit"/>
      <Button label="." @calcButtonClick="addDigit"/>
      <Button label="=" operation  @calcButtonClick="setOperation"/>
  </div>
</template>

<script>
import Display from '../components/Display'
import Button from '../components/Button'

export default {
    components: { Button, Display },
    methods: {
        clearMemory() {
            this.value = '0'
            this.operationSelected = ''
            this.hasPoint = false
        },
        setOperation(operation) {
            if(operation == '='){
                this.calculateValue()
            } else {
                if(!this.operationsRegex.test(this.value)) {
                    this.value = `${this.value} ${operation} `
                    this.operationSelected = operation
                    this.hasPoint = false
                }
            }
        },
        addDigit(n) {
            if(n == '.') {
                if(!this.hasPoint) {
                    this.value = this.value + n
                    this.hasPoint = true
                }
            } else {
                this.value = this.value != '0' ? this.value + n : n
            }
        },
        calculateValue() {
            const operationIndex = this.value.search(this.operationsRegex)
            if(operationIndex != -1 && operationIndex != this.value.length-2) {
                const operationValues = [
                    parseFloat(this.value.substring(0, operationIndex).trim()),
                    parseFloat(this.value.substring(operationIndex + 1).trim()) 
                ]
                console.log(operationValues)
                switch (this.operationSelected) {
                    case '/':
                        
                        break;
                
                    case '*':
                        
                        break;
                
                    case '-':
                        
                        break;
                
                    case '+':
                        
                        break;
                
                    default:
                        break;
                }
            }
        }
    },
    data() {
        return {
            operationsRegex: /[*+/-]/,
            value: '0',
            operationSelected: '',
            hasPoint: false
        }
    }
}
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>