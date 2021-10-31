<template>
  <div id="meeting-minutes">
    <!-- Add Minute -->
    <v-container fluid>
      <v-row>
        <v-col sm="4">
          <v-container fluid>
            <v-toolbar flat>
              <v-autocomplete
                v-model="selectedMinute"
                :items="meetingMinutes"
                hide-details
                label="Meeting Number"
                :item-value="(item) => {return item}"
                :item-text="item => item.meeting_number.toString().padStart(3, '0')"
                @change="setSelectedMinute">
                <template #label="{item}">
                  <span>item</span>
                </template>
              </v-autocomplete>

              <v-spacer/>
              <v-dialog v-model="dialog" max-width="500px">
                <template #activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>Add Minute</v-card-title>
                  <v-card-text>
                    <v-text-field
                      :value="nextNumber"
                      disabled
                      label="Meeting Number"
                      required/>
                    <v-menu
                      ref="menu"
                      v-model="menu_date"
                      :close-on-content-click="false"
                      :return-value.sync="form.date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto">
                      <template #activator="{ on, attrs }">
                        <v-text-field
                          v-model="form.date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"/>
                      </template>
                      <v-date-picker
                        v-model="form.date"
                        no-title
                        scrollable>
                        <v-spacer/>
                        <v-btn
                          text
                          color="primary"
                          @click="menu_date = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(form.date)">
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer/>
                    <v-btn color="blue" text @click="dialog = false">Cancel</v-btn>
                    <v-btn color="blue" text @click="addMinute">Add</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>

            <v-sheet>
              <v-card>
                <v-subheader>Meeting Minutes</v-subheader>
                <v-card-text>
                  <div v-if="selectedMinute">
                    <Wizard :meeting_minute="selectedMinute"/>
                  </div>
                </v-card-text>
              </v-card>
            </v-sheet>
          </v-container>
        </v-col>
        <v-col sm="8" style="overflow:scroll;">
          <div v-if="selectedMinute">
            <DocumentViewer :content="content"/>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  import moment from 'moment';
  import DocumentViewer from '@/components/DocumentViewer.vue';
  import Wizard from './Wizard';

  export default {
    data() {
      return {
        menu_date: false,
        dialog: false,
        selectedMinute: this.$page.props.project.document_data?.meeting_minutes?.[0] || null,
        form: this.$inertia.form({

          meeting_number: ''


        })
      };
    },
    computed: {
      content() {
        return [
          {
            template: () => import(`@/document_templates/Trust/MeetingMinute.vue`),
            props: {
              client: this.$page.props.client,
              project: this.$page.props.project,
              minute: this.selectedMinute
            }
          }];
      },
      meetingMinutes() {
        return this.$page.props.project.document_data.meeting_minutes || [];
      },
      nextNumber() {
        // if no length start at 3 or add 1
        if (this.meetingMinutes.length === 0) {
          return 3;
        }
        return this.meetingMinutes[this.meetingMinutes.length - 1].meeting_number + 1;
      }
    },
    methods: {
      setSelectedMinute(minute) {
        this.selectedMinute = this.meetingMinutes.find(
          (minute) => minute.meeting_number === this.selectedMinute.meeting_number
        );
      },
      addMinute() {
        this.dialog = false;

        this.form
          .transform((data) => ({
            ...data,
            meeting_number: this.nextNumber
          }))
          .post(
            `/admin/client/${this.$page.props.client.id}/project/${this.$page.props.project.id}/document_data/meeting_minutes`
          );
      }
    },
    components: {
      Wizard,
      DocumentViewer
    }
  };
</script>

<style scoped lang="scss">
#meeting-minutes{
  background: #F2F0EB;
}
</style>
