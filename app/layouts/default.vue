<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>GetterBetter</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text> Making life better, a little bit at a time. </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'App',
          icon: 'app',
          to: { name: 'app' },
        },
      ],
    }
  },
}
</script>
