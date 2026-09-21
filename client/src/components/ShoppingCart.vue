<script setup>
import { computed } from "vue";

// Declare props
const props = defineProps(["cart_items"]);

// Declare emitted events
const emit = defineEmits(["checkout", "clearcart"]);

// Calculates the total price of all items in the cart
const cartTotalPrice = computed(() => {
  let total = 0;

  for (let cartItem of props.cart_items) {
    total += cartItem.price * cartItem.quantity;
  }

  return total;
});

// Emits a click event to trigger checkout in the parent component
function checkout() {
  emit("checkout");
}
</script>

<template>
  <div>
    <h3>Cart</h3>

    <!-- Table displaying cart contents -->
    <table class='table table-dark'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Price</th>
          <th scope='col'>Qty</th>
          <th scope='col'>Sub-Total</th>
        </tr>
      </thead>
      <tbody>

        <!-- Render each item in the cart -->
        <tr v-for='cartItem in cart_items'>
          <td>{{ cartItem.name }}</td>
          <td>${{ cartItem.price }}</td>
          <td>{{ cartItem.quantity }}</td>
          <td>{{ (cartItem.price * cartItem.quantity).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Display the computed total -->
    <p class='text-info'>
      Total ${{ cartTotalPrice.toFixed(2) }}
    </p>

    <!-- Checkout & Clear Cart buttons, only shown if cart is not empty -->
    <button v-if='cart_items.length > 0' class='btn btn-primary mx-1' @click='checkout'>
      <slot name="checkout-btn-label"></slot>
    </button>

     <button v-if='cart_items.length > 0' class='btn btn-danger mx-1' @click=' $emit("clearcart");'>
      <slot name="reset-btn-label"></slot>
    </button>
  </div>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
