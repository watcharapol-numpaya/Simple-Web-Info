<template>
  <div
    id="contact"
    class="
      h-full
      w-screen
      bg-gradient-to-r
      from-pink-500
      to-yellow-500
      border-b-4
    "
  >
    <Navbar />
    <p class="pt-6 grid justify-items-center text-xl font-bold">My Contact</p>
    <div class="grid justify-items-center object-cover p-4">
      <div class="text-lg md:w-1/2 p-4 pl-12 bg-white rounded-2xl mt-4">
        <p>
          <span class="font-bold">Email : </span>
          <span class="">{{ contact.Email }} </span>
        </p>
        <p class="">
          <span class="font-bold">LinkIn : </span>
          <a target="popup" :href="`${contact.LinkIn}`">
            <span class="material-icons"> open_in_new </span>
          </a>
        </p>
        <p>
          <span class="font-bold">Phone : </span>
          <span class="">{{ contact.Phone }} </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
  name: 'Contact',
  components: {
    Navbar: Navbar,
  },
  data: () => ({
    contact: {
      Email: 'watcharapol.numpaya@gmail.com',
      LinkIn: 'https://www.linkedin.com/in/watcharapol-numpaya-8ba905217/',
      Phone: '061-663-6349',
    },
  }),
};
</script>
<style>
#contact {
  height: 100%;
  min-height: 700px;
  background-repeat: no-repeat;
}
</style>
