<script setup>

// TODO: Declare props (input)


// TODO: Declare Emits (output) 
// an 'addcart' event to notify the parent component when items are added


// TODO: Handle button click to add selected items to the cart
function doClick() {
   
    // add code 

}
</script>

<template>
    <div>
        <!-- Display items table if there are items -->
        <div v-if="items.length > 0">
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Sub-Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> item name </td>
                        <td>$ item price </td>
                        <td>
                            <!-- Input for selecting item quantity -->
                            <input type="number" min="0" style="width:50px;">
                        </td>
                        <td>
                            <!-- Display subtotal for the item -->
                            $ subtotal
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Button to add selected items to the cart -->
            <button class="btn btn-primary" @click="doClick"><slot></slot></button>
        </div>

        <!-- Display when there are no items -->
        <p v-else>
            No item.
        </p>
    </div>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
