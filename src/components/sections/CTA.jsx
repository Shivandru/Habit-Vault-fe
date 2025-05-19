import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20">
      <Container>
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-700 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 px-6 py-16 sm:px-12 md:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
              Ready to Transform Your Daily Habits?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of users who have built life-changing habits with
              Habit Vault. Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 group"
                onClick={() => navigate("/login")}
              >
                Get Started Free
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-blue-600 hover:bg-blue-700/30 hover:text-white"
                onClick={() => navigate("/login")}
              >
                View Plans
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center justify-center">
                <CheckCircle className="text-green-400 mr-2" size={18} />
                <span className="text-white">No credit card required</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="text-green-400 mr-2" size={18} />
                <span className="text-white">Free 14-day trial</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="text-green-400 mr-2" size={18} />
                <span className="text-white">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
