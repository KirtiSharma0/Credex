import { testimonials } from "../constants";
import { AnimatedTestimonialsDemo } from "./Testi";

const Testimonials = () => {
  return (
    <div id="testimonials" className="mt-20 tracking-wide mb-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 dark:text-neutral-300">
        What People are saying
      </h2>
      <AnimatedTestimonialsDemo/>
    </div>
  );
};

export default Testimonials;
