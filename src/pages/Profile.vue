<template>
  <div
    id="profile"
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
     <p class="pt-6 grid justify-items-center text-xl font-bold">My Profile</p>
    <div class="grid justify-items-center p-4">
    
      <img
        class="border-4 w-56 h-78 rounded-tr rounded-tl rounded-full"
        v-bind:src="`${person.image}`"
        alt="Profile image"
      />

      <div class="text-lg md:w-1/2 p-4 pl-12 bg-white rounded-2xl mt-4">
        <p>
          <span class="font-bold">Name : </span>
          <span class="">{{ person.FirstName }} {{ person.LastName }}</span>
        </p>
        <p class="">
          <span class="font-bold">Age : </span>
          <span>{{ person.Age }} years old</span>
        </p>
        <p class="w-11/12 flex space-x-1">
          <span class="font-bold">Education: </span>
          <span> {{ person.Education }}</span>
        </p>
        <p class="w-11/12 flex space-x-1">
          <span class="font-bold">Skill:</span> <span> {{ person.Skill }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Profile',
  components: {
    Navbar: Navbar,
  },
  data: () => ({
    person: {
      FirstName: 'Watcharapol',
      LastName: 'Numpaya',
      Education:
        "Bachelor of Science in Information Technology – King Mongkut's University of Technology Thonburi, Thailand",
      Age: '21',
      Skill:
        '- Programming Language: Java, SQL, HTML, CSS, JavaScript ,- Library/frameworks: React.js, Vue.js ,- Responsive Design for desktop and mobile ,- Basic computer troubleshooting',
      image:
        'https://cdn.discordapp.com/attachments/634781256047001604/930462169835909130/20220111_203607.jpg',
    },
  }),
};
</script>

<style>
#profile {
  height: 100%;
  min-height: 700px;
  background-repeat: no-repeat;
}
</style>
