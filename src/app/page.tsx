import Hero from "@/components/Hero";
import CourseSection from "@/components/CourseSection";
import InstructorSection from "@/components/InstructorSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <CourseSection />
      <InstructorSection />
      <ContactSection />
    </div>
  );
}
