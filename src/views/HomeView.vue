<script lang="ts">
import { defineComponent } from 'vue';
import ChartComponent from '../components/ChartComponent.vue'
import FormComponent from '@/components/FormComponent.vue';

type FormReturnDataType = {
  data: Array<number>;
  labels: Array<string>;
  label: string;
}

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      isCalculated: false,
      dataset: [] as Array<number>,
      labels: [] as Array<string>,
      label: ''
    }
  },
  components: {
    ChartComponent,
    FormComponent,
  },
  methods: {
    setDiagram(data: FormReturnDataType) {
      this.dataset = data.data
      this.labels = data.labels
      this.label = data.label
      this.isCalculated = true
    },
    back() {
      this.dataset = []
      this.labels = []
      this.label = ''
      this.isCalculated = false
    }
  }
})
</script>

<template>
  <main v-if="isCalculated">
    <ChartComponent @back="back" :dataset="dataset" :labels="labels" :label="label" />
  </main>
  <main v-else class="m-auto z-10 sm:px-0 w-auto text-center w-full max-w-sm">
    <h1 class="text-xl mb-4">Fizikai grafikonok</h1>
    <FormComponent @calculated="setDiagram" />
  </main>
</template>
