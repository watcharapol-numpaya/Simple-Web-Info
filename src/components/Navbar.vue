<template>
  <div id="navbar" class="bg-white h-16 w-full">
    <div
      class="
        flex
        items-center
        justify-center
        border-b-4
        p-4
        text-lg text-2xl
        font-bold
        italic
      "
    >
      <span>
        <router-link class="" to="/profile"> Profile</router-link>
        |
        <router-link to="/contact"> Contact </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
#navbar a.nav-active-class {
  color: #f7651c;
  border: 2px;
}
</style>
