<template>
  <v-dialog v-model="show" max-width="500px" class="pa-3">
    <v-card>
      <v-card-title>Add Project</v-card-title>
      <form @submit.prevent="submit">
        <v-card-text>
          <v-text-field
            v-model="form.name"
            :error-messages="form.errors.name"
            label="Name"
            placeholder="ABC Trust"
            required/>
          <v-select
            v-model="form.type"
            :error-messages="form.errors.type"
            label="Project Type"
            required
            :items="projectTypes"/>
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
  import {pascelToTitleCase} from '../../../helper';

  export default {
    props: {
      value: {
        type: Boolean
      },
      client: {
        type: Object,
        required: true
      }

    },
    data() {
      return {
        form: this.$inertia.form({
          client: this.client,
          name: '',
          type: ''
        })
      };
    },
    computed: {
      projectTypes() {
        return this.$page.props.projectTypes.map((type) => {
          return {text: pascelToTitleCase(type), value: type};
        });
      },
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
        this.form.post(route('admin.client.project.store', {
          client: this.client
        }), {
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
