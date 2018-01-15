<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length">
      <i>
        Please add some products to cart.
      </i>
    </p>
    <ul v-for="product in products" :key="product.title">
      {{ product.title }} - {{ product.price | currency}} x {{ product.quantity }}
    </ul>
    <p>Total: {{ total | currency }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  }
}
</script>
<style>
</style>
