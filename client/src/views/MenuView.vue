<script setup>
import { ref, onMounted } from "vue";
import ItemsBrowser from "../components/ItemsBrowser.vue";
import axios from "axios";


// Reactive data
const categories = ref([])
const selected_category = ref('fruit')
const items = ref([])
const cartItems = ref([]);

// local storage
const STORAGE_KEY = "cart"

// TODO: Fetch categories when the component is created
onMounted( async () => {
    let url = "http://127.0.0.1:3000/categories"

    try {
        // axios code must be inside try/catch block
        let response = await axios.get(url)

        console.log(response.data)

        categories.value = response.data

    } catch(e) {
        // to display the error message when there is a connection error
        console.log(e.message)
    }
} ) 


// TODO: Fetch items for the currently selected category
async function getItems() {
    // Add code
}

// Add selected items to cart
function doAddToCart(itemsToAdd) {
    for (const item of itemsToAdd) {
        let found = false;

        for (const cartItem of cartItems.value) {
            if (item.id == cartItem.id) {
                found = true;
                cartItem.quantity += item.quantity;
                break;
            }
        }
        if (!found) cartItems.value.push(item);
    }

    // TODO: store current cartitems into local storage
    // cartItems.value is a JS (complex) obj. We need to use JSON.stringify to convert the JS obj to JSON string
   
    
}

</script>

<template>
    <h1>Menu Items</h1>
  
    <!-- TODO: Category selection dropdown -->
    <label for="categories">Categories</label>
    <select class="form-control" id="categories" v-model="selected_category">
        <option v-for="v in categories" > {{ v }} </option>
    </select>
    <br>


    <div class="container-fluid">
        <div class="row p-3">
            <div class='col-md-6 text-center'>
                <!-- TODO: Show Items using ItemsBrowser-->
                <button>
                    Add to Cart
                </button>
            </div>
        </div>

        <div class="row row-cols-auto justify-content-end">
            <RouterLink to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg> Cart
            </RouterLink>
        </div>
    </div>

</template>

<style scoped></style>
