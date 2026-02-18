import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
export default function TestimonialsSection() {
  return (
    <div className="ds-bg p-7 flex justify-center flex-col items-center">
      <Title>TestimonialsSection</Title>
      <Text size="md">
        This section represents the Testimonials Section of the website.
      </Text>
      <Text size="md" className="text-green-400">
        created by : Moaz Taha
      </Text>
    </div>
  );
}