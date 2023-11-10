<template>
     <form @submit="calculate" v-on:submit.prevent class="w-md">
          <input v-model.lazy="form.amplitudo" required placeholder="Amplitúdó (A) (méter)" type="number" step="0.01" :class="classList">
          <input v-model.lazy="form.szogsebesseg" required placeholder="Szögsebesség (ω) (°/s)" type="number" step="0.01" :class="classList">
          <select v-model.lazy="form.fuggveny" required :class="classList">
               <option value="sebesseg_ido">Sebesség-idő függvény: v(t) = Aω * cos(ω * t)</option>
               <option value="gyorsulas_ido">Gyorsulás-idő függvény: a(t) = Aω * sin(ω * t)</option>
               <option value="kiteres_ido">Kitérés-idő függvény: y(t) = A * sin(ω * t)</option>
          </select>
          <div class="grid grid-cols-3 gap-2">
               <input v-model.lazy="form.calc.from" required placeholder="-tól" type="number" min="0" :class="classList">
               <input v-model.lazy="form.calc.to" required placeholder="-ig" type="number" min="1" :class="classList">
               <input v-model.lazy="form.calc.steps" required placeholder="léptek" type="number" min="1" :class="classList">
          </div>
          <div class="grid grid-cols-4 gap-2">
               <button type="submit" class="col-span-3 transition-colors text-white duration-150 block w-full px-4 py-3 text-sm rounded bg-green-400 hover:bg-green-500 active:bg-green-600">
                    Grafikon generálása
               </button>
               <button @click="reset" type="button" class="transition-colors text-white duration-150 block w-full px-4 py-3 text-sm rounded bg-gray-400 hover:bg-gray-500 active:bg-gray-600">
                    <Clear />
               </button>
          </div>
     </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clear from '@/components/icons/Clear.vue'
import formData from '@/scripts/formData'
import { calculate } from '@/scripts/calculate'

export default defineComponent({
     data() {
          return formData()
     },
     name: 'FormComponent',
     components: {
          Clear
     },
     methods: {
          calculate() {
               this.$emit('calculated', calculate(this.form))
          },
          reset() {
               const data = formData()
               this.form = data.form
          }
     }
})
</script>
