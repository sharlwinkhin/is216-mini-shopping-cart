<template>
  <nav>
    <RouterLink to="/">About</RouterLink>
    <RouterLink to="/menu">Menu</RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>
  </nav>

  <RouterView />

</template>

<style scoped>
* {
  margin: 10px;
}
</style>
