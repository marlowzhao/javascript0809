// app/javascript/controllers/typed_js_controller.js
import { Controller } from "@hotwired/stimulus"
// Don't forget to import the NPM package
import Typed from "typed.js"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["The pandemic is over", "Explore Prague", "the City of Surrealism", "this summer"],
      typeSpeed: 70,
      loop: true
    });
  }
}


AOS.init({




  duration: 1000, // values from 0 to 3000, with step 50ms


});
