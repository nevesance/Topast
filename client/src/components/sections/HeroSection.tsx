import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Create Beautiful 
              <span className="text-primary dark:text-blue-400"> Modern Websites</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Build responsive, interactive websites with clean design and powerful functionality using modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollToElement('features')}
                className="px-6 py-3 bg-primary hover:bg-blue-600 text-white"
              >
                Explore Features
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
              <Button 
                onClick={() => scrollToElement('contact')}
                variant="outline"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Person working on modern website design" 
              className="rounded-lg shadow-xl"
              width="600" 
              height="400"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-colors duration-300">
              <div className="flex items-center">
                <div className="bg-green-500 h-3 w-3 rounded-full mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Live Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
