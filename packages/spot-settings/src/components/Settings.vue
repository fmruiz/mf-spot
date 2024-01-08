<template>
  <div class="p-grid p-fluid dashboard">
    <Panel header="Settings Module With Vue" style="height: 100%">
      <ul class="task-list">
        <li>
          <Checkbox name="task" value="one" v-model="tasksCheckbox" />
          <span class="task-name">Option one</span>
        </li>
        <li>
          <Checkbox name="task" value="two" v-model="tasksCheckbox" />
          <span class="task-name">Option two</span>
        </li>
        <li>
          <Checkbox name="task" value="three" v-model="tasksCheckbox" />
          <span class="task-name">Option three</span>
        </li>
      </ul>
    </Panel>
  </div>
</template>

<script>
import Checkbox from "primevue/checkbox";
import Panel from "primevue/panel";
import Button from "primevue/button";

export default {
  components: {
    Checkbox,
    Panel,
    Button,
  },
  data() {
    return {
      tasksCheckbox: [],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.dashboard {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  background-color: #edf0f5;

  .task-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      padding: 0.5em 0.25em;
      border-bottom: 1px solid green;
    }

    .task-name {
      vertical-align: middle;
    }
  }
}
</style>
