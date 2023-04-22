import { Contact, Footer } from "@/common/components";
import { BaseLayout } from "@/common/layout";

export default function Home() {
  return (
    <BaseLayout>
      <Contact />
      <Footer />
    </BaseLayout>
  );
}
