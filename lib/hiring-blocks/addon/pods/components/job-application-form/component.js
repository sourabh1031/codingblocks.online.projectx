import Component from '@ember/component';
import { action }  from '@ember-decorators/object';

export default class JobApplicationFormComponent extends Component {
  response = {}

  @action 
  saveForm() {
    console.log(...arguments)
  }
  
}
