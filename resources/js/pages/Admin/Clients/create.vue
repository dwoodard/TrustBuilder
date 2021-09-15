<template>
  <v-dialog v-model="show" max-width="500px" class="pa-3">
    <v-card>
      <form @submit.prevent="submit">
        <v-card-text>
          <v-text-field
            v-model="form.first_name"
            :error-messages="form.errors.first_name"
            label="First Name"
            required/>
          <v-text-field
            v-model="form.last_name"
            :error-messages="form.errors.last_name"
            label="Last Name"
            required/>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" text @click.stop="show=false">Close</v-btn>
          <v-spacer/>
          <v-btn type="submit" color="primary">Create</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>

  export default {
    props: {
      value: Boolean
    },
    data() {
      return {
        form: this.$inertia.form({
          first_name: '',
          last_name: ''
        })
      };
    },
    computed: {
      show: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit('input', value);
        }
      },
      title() {
        return this.form.title;
      }
    },
    methods: {
      submit() {
        this.form.post(route('admin.clients.create'), {
          onSuccess: (data) => {
            this.form.reset();
            this.show = false;
          },
          onFinish: () => {}
        });
      }
    }

  };
</script>
