<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
  </nav>
</template>
