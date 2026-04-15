<script setup>
import {ref} from 'vue';
import {isFileServingAllowed} from "vite";
import {Developer} from "./greetings/presentation/components/developer.entity.js";
import DeveloperRegistration from "./greetings/presentation/components/developer-registration.vue";
import DeveloperCountShow from "./greetings/presentation/components/developer-count-show.vue";

const firstname = ref('');
const lastname = ref('');
const developerCount = ref(0);
const hasRegistered = ref(false);

function updateRegisteredDeveloperInfo(developer) {
  firstname.value = developer.firstName;
  lastname.value = developer.lastName;
  hasRegistered.value = true;
  console.log('Developer registered:', developer);
  updateDeveloperCount(developer);
}

function resetRegisteredDeveloperInfo() {
  firstname.value = '';
  lastname.value = '';
  hasRegistered.value = false;
  console.log('Registration deferred:');
}

function updateDeveloperCount(developer) {
  const dev =new Developer(developer.firstName, developer.lastName);
  if (dev.fullName !== 'Unknown')
    developerCount.value++;
}


</script>

<template>
  <h1>Hello Vue Developer Application</h1>
  <developer-registration
    @developer-registered="updateRegisteredDeveloperInfo"
    @registrationDeferred="resetRegisteredDeveloperInfo"/>
  <developer-count-show developer-count=""/>

</template>
