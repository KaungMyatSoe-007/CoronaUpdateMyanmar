<template>
 <nav class="navbar navbar-expand-lg navbar-light mt-1" style="background-color: #89dee2;">
  <a class="navbar-brand" href="#">FIGHT TOGETHER</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/do-and-dont" class="nav-link">Do's and Don'ts</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    name:"MenuBar"
}
</script>
