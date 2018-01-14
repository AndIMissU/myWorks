<template>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{ product.title }} - {{ product.price }}
            <br>
            <button :disabled="!product.inventory" @click="addToCart(product)">Add to cart</button>
        </li>
    </ul>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
// this.$store.getters 是 mapGetters 的简写
// this.$store.actions 是 mapActions 的简写
export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  created () {
    this.$store.dispatch('getAllProducts')
  },
  methods: mapActions([
    'addToCart'
  ])
}
</script>
<style>
</style>
