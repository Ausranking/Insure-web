import Button from "./Button";
import Heroimgmob from "/src/assets/images/Hero-img-desk.jpg";

export default function HeroSection() {
  return (
    <main
      id="how-we-work"
      className=" relative bg-primary-violet md:grid grid-cols-2 bg-no-repeat bg-bg-intro-right-desk bg-right-top w-full h-max "
    >
      <div className=" md:absolute top-28 right-20 md:h-8   ">
        <img src={Heroimgmob} alt=" hero image" className="md:h-[30rem]" />
      </div>

      <section className="flex bg-primary-violet flex-1 flex-col space-y-5 items-center justify-center py-20 px-10 ">
        <h1 className=" max-sm:text-3xl md:text-7xl text-center tracking-tighter text-light-gray">
          Humanizing your insurance.
        </h1>
        <p className="text-center text-xl pb-3 ">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that&apos;s right
          for you. Ensure you and your loved ones are protected.
        </p>

        <Button id='hover-white' text="VIEW PLANS" />
      </section>
    </main>
  );
}
