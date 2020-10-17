<template>
  <div>
    <section class="section">
      <div class="container content">
        <h1 class="title">GettingBetter</h1>
        <h3 class="subtitle">
          <em> A systems-based framework for improving your life. </em>
        </h3>
        <blockquote class="border-left blockquote pl-3">
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
      <b-field grouped group-multiline>
        <b-button
          class="bg-danger"
          :disabled="!checkedRows.length"
          @click="checkedRows = []"
        >
          <b-icon icon="close"></b-icon>
          <span>Uncheck all</span>
        </b-button>
        <b-button class="bg-primary" @click="openAddNewTaskModal()">
          Launch component modal
        </b-button>
        <b-modal :active.sync="isAddNewTaskModalActive" has-modal-card>
          <add-new-task-modal></add-new-task-modal>
        </b-modal>
      </b-field>

      <b-table striped hover :fields="tableFields" :items="tableItems">
        <template v-slot:cell(selected)="{ rowSelected }">
          <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
          </template>
          <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
          </template>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    const data = [
      {
        order: 1,
        task: 'Jesse',
        routine: 'Male',
      },
      {
        order: 2,
        task: 'John',
        routine: 'Male',
      },
      {
        order: 3,
        task: 'Tina',
        routine: 'Female',
      },
    ]

    return {
      data,
      checkboxPosition: 'left',
      checkedRows: [data[0]],
      tableFields: ['CHECK', 'ORDER', 'TASK', 'ROUTINE'],
      isAddNewTaskModalActive: false,
      selectedTodo: {},
      isCreateNewTaskModalActive: false,
    }
  },
  methods: {
    openAddNewTaskModal() {
      this.isAddNewTaskModalActive = true
    },
  },
}
</script>

<style scoped></style>
