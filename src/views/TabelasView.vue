<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th class="text-center">Col 1</th>
              <th class="text-center">Col 2</th>
              <th class="text-center">Col 3</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(data, index) in a1" :key="index">
              <td class="text-center">{{ data.a }}</td>
              <td class="text-center">{{ data.b }}</td>
              <td class="text-center">{{ data.c }}</td>
            </tr>
            <tr>
              <td class="text-center">A2</td>
              <td class="text-center">B2</td>
              <td class="text-center">C2</td>
            </tr>
            <tr>
              <td class="text-center">A3</td>
              <td class="text-center">B3</td>
              <td class="text-center">C3</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- <div class="col-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi est
        facilis accusantium ut quas ratione molestias. Ex minus voluptatem,
        tenetur quibusdam illum accusantium quos vitae dicta, nulla praesentium
        laborum? Esse quisquam magnam dolor quis, asperiores aliquam quo, quasi
        sit dolores placeat quos assumenda pariatur natus, exercitationem
        expedita aperiam. Perspiciatis ipsum corporis dignissimos perferendis
        repellendus id, accusamus quaerat cum sequi?
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a1: [{ a: "A1", b: "B1", c: "C1" }],
    };
  },
};
</script>

<style>
</style>