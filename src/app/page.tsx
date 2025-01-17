import "./style.css";
// import 'themify-icons/themify-icons.css';
import Slider from "@/components/_slider/page";
import Service from "@/components/_service/page";
import FeaturedCourse from "../components/featuredCourses/page";
import {AboutA1, AboutA2, AboutA3} from "../components/desc/page";
import TopTopic from "../components/topSubject/page";
import Experts from "../components/experts/page";
function App() {
  return (
    <main>
      <Slider />

      {/* Service */}
      <Service />

      {/* Courses Area */}
      <FeaturedCourse />

      {/* About Area1 Start */}
      <AboutA1 />
      {/* <!-- About Area1 End --> */}

      {/* <!--? top subjects Area Start --> */}
      <TopTopic />
      {/* <!-- top subjects End --> */}

      {/* About Area3 Start */}
      <AboutA3 />
      {/* About Area3 End */}

      {/* <!--? Team Area Start --> */}
      <Experts />
      {/* Team Area End */}

      {/* <!--? About Area-2 Start --> */}
      <AboutA2 />
      {/* <!-- About Area2 End --> */}
    </main>
  );
}

export default App;
