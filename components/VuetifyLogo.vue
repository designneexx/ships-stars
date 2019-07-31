<template>
  <div>
    <img class="VuetifyLogo" alt="Star Ship Logo" src="https://cdn.pixabay.com/photo/2017/09/25/15/05/spaceship-2785409_960_720.png">
    <span class="logo-name">Star Ships</span>
  </div>
</template>

<style lang="scss" scoped>
  .VuetifyLogo {
    width: 180px;
    display: block;
    margin: 40px auto 40px;
    transform: rotate(560deg);
    animation: turn 3.5s ease-out forwards 1s;
  }

  .logo-name {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    display: block;
    width: 100%;
  }

  @keyframes turn {
    100% {
      transform: rotate(0deg);
    }
  }
</style>
