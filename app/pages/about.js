import Profiles from "../components/Profiles";

function About() {
  return (
    <div className="">
      <br></br>
      <div className=" wt-title gap-2 space-y-2 align-center text-center">
        About Us
      </div>
      <br></br>
      {/* Call Profiles for display */}
      <Profiles />
    </div>
  );
}
export default About;
