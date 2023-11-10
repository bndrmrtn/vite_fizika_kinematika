<template>
     <div class="p-3">
          <h1 class="text-xl text-center">A generált diagram</h1>
     </div>
     <div class="flex h-[80%] ">
          <div class="p-10 w-screen"> 
               <Line v-if="loaded" :data="chart.data" :options="chart.options"></Line>
          </div>
     </div>
     <button @click="$emit('back')" class="col-span-3 max-w-sm mx-auto transition-colors text-white duration-150 block w-full px-4 py-3 text-sm rounded bg-green-400 hover:bg-green-500 active:bg-green-600">
          Vissza
     </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import generateChartConfig from '@/scripts/generateChartConfig'
import { Line } from 'vue-chartjs'
import type { Point } from "node_modules/chart.js/dist/core/core.controller"
import type { ChartData } from "chart.js"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default defineComponent({
     name: 'ChartComponent',
     data() {
          return {
               loaded: false,
               chart: {
                    data: {} as ChartData<"line", (number | Point | null)[], unknown>,
                    options: {}
               }
          }
     },
     components: {
          // eslint-disable-next-line vue/no-reserved-component-names
          Line   
     },
     props: {
          dataset: Array as PropType<Array<number>>,
          labels:  Array as PropType<Array<string>>,
          label: String,
     },
     mounted() {
          this.chart = generateChartConfig(this.dataset || [], this.labels || [], this.label || '')
          this.loaded = true
     }
})
</script>
