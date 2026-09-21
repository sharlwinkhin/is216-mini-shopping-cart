<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"
import axios from "axios";
import ShoppingCart from "../components/ShoppingCart.vue";

const router = useRouter()

const receipt = ref(null);

// local storage
const STORAGE_KEY = "cart"
const cartItems = ref([]);

// Lifecycle hook: Fetch categories when the component is created
onMounted(async () => {
    // retrieve existing shopping cart items from local storage
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved !== null) {
        cartItems.value = JSON.parse(saved)
    }
});

// TODO: Checkout cart items
async function doCheckOut() {
   // add code
   
}

// Continue shopping
function doBuyMore() {
    receipt.value = null;
    router.push("/menu");
}

// clear cart items
function doClearCart() {
    cartItems.value = [];
    localStorage.removeItem(STORAGE_KEY)
}

</script>

<template>
    <h1>ShoppingCart</h1>

    <div class="container-fluid">
        <div class="row p-3" v-if='receipt === null'>
            <div class='col-md-6 text-center'>
                <br>
                <!-- TODO: show the shopping cart, using ShoppingCart comp -->
                 <button>Check Out</button>
                 <button>Clear Cart</button>
            </div>
        </div>
        <div class="row p-3" v-else>
            <div class='col text-start text-info'>
                <!-- TODO: display receipt info -->
                <h3>
                    ReceiptID: 
                </h3>
                Total: $ <br>
                <ul>
                    <li>
                         receiptname  x quantity 
                    </li>
                </ul>
                <button class='btn btn-primary' @click='doBuyMore'>Buy more</button>
            </div>
        </div>

        <div class="row row-cols-auto justify-content-start">
            <RouterLink to="/menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg> Menu
            </RouterLink>
        </div>
    </div>

</template>