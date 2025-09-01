import NumerologyCalculator from "@/components/numerology/NumerologyCalculator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <NumerologyCalculator />
      </main>
      <Footer />
    </div>
  );
}
