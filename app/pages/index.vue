<template>
  <div>
    <section>
      <div class="container">
        <h1>GettingBetter</h1>
        <h2 class="h3">
          <em> A systems-based framework for improving your life. </em>
        </h2>
        <blockquote class="pl-3 border-left blockquote">
          I've got to admit it's getting better (Better) <br />
          A little better all the time <br />
          <em
            ><a
              class="blockquote-footer"
              href="https://www.youtube.com/watch?v=EGlo9LzmOME"
              >Sung by Paul McCartney in the song "Getting Better" by the
              Beatles</a
            ></em
          >
        </blockquote>
      </div>
    </section>

    <section>
      <hr />
      <p>This is where you create your gettingbetter.toml schema!</p>
    </section>

    <section>
      <b-table
        :striped="striped"
        :bordered="bordered"
        :borderless="borderless"
        :outlined="outlined"
        :small="small"
        :hover="hover"
        :dark="dark"
        :fixed="fixed"
        :foot-clone="footClone"
        :no-border-collapse="noCollapse"
        :items="items"
        :fields="fields"
        :head-variant="headVariant"
        :table-variant="tableVariant"
      ></b-table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      fields: ['system', 'goal', 'routines'],
      items: [
        { system: 'morning', goal: 'Dickerson', last_name: 'Macdonald' },
        { system: 'night', goal: 'Larsen', last_name: 'Shaw' },
        { system: 'noon', goal: 'Geneva', last_name: 'Wilson' },
      ],
      tableVariants: [
        'primary',
        'secondary',
        'info',
        'danger',
        'warning',
        'success',
        'light',
        'dark',
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: '',
      noCollapse: false,
    }
  },
}
</script>

<style scoped></style>
