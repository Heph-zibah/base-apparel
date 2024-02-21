<script setup>
import { ref,watch} from 'vue'

const email = ref('')

const isEmailValid = ref(true)

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isEmailValid.value = emailRegex.test(email.value)
}

const submitForm = () => {
  validateEmail();
  // Additional logic for form submission can be added here
  if (!isEmailValid.value) {
    // Handle the case when the email is not valid
    console.log('Invalid email! Please correct the email address.');
  } else {
    // Handle the case when the email is valid
    console.log('Form submitted successfully!');
  }
   email.value = '';
   isEmailValid.value = false
};

watch(email, validateEmail);

</script>

<template>
    <main class="md:h-screen">
        <section class="px-5 py-5 md:hidden">
                <img src="../assets/images/logo.svg" alt="company logo">
        </section>
        <section class="w-full md:hidden">
            <img src="../assets/images/hero-mobile.jpg" alt="a lady before flowers" class="w-full">
        </section>
        <section class=" md:flex">
            <div class="px-5 mt-10 max-w-md mx-auto">
                <img src="../assets/images/logo.svg" alt="company logo" class="hidden md:block">
                <h1 class="font-semibold uppercase text-6xl md:text-5xl text-center md:text-start leading-14 tracking-widest md:pt-20"><span>we're</span> coming soon</h1>
                <p class="mt-3 text-center md:text-start text-sm">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                <form action="" class="relative pt-5" @submit.prevent="submitForm">
                        <input v-model="email" type="text" placeholder="Email address" class="placeholder:text-xs rounded-3xl py-3  px-5 w-full bg-transparent">
                    <span class="text-start text-xs pl-2" v-if="!isEmailValid && email.length > 0">Please provide a valid email</span>
                    <img src="../assets/images/icon-error.svg" alt="error icon" class="absolute top-8 right-20" v-if="!isEmailValid && email.length > 0">
                    <button type="submit" class=" py-4 px-7 rounded-3xl absolute right-0 top-5">
                        <img src="../assets/images/icon-arrow.svg" alt=" forward arrow">
                    </button>
                </form>
                <h2 class="pt-7 text-center ">Challenge by <a href="https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0">Frontend Mentor</a>. Coded by <a href="https://www.frontendmentor.io/profile/Heph-zibah">OADaramola</a>.</h2>
            </div>
            <div class=" w-1/2 hidden md:block h-screen">
                <img src="../assets/images/hero-desktop.jpg" alt="a lady before flowers" class="w-full object-cover h-full">
            </div>
        </section>
    </main>
</template>

<style scoped>
main {
     background-image: linear-gradient(to right, hsl(0, 0%, 100%) , hsl(0, 100%, 98%));
     font-family: "Josefin Sans", sans-serif;
}



h1,h3 {
    color: hsl(0, 6%, 24%);
}
 p, span, ::placeholder, a{
    color:  hsl(0, 36%, 70%);
 }
 input {
    border: 1px solid  hsl(0, 36%, 70%);
 }

 button {
    background-image: linear-gradient(to right, hsl(0, 80%, 86%) , hsl(0, 74%, 74%));
    box-shadow: 0px 1px hsl(0, 80%, 86%);
 }
</style>
