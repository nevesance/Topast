export function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-palette",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-primary dark:text-blue-400",
      title: "Responsive Design",
      description: "Create websites that look perfect on any device, from mobile phones to desktop computers."
    },
    {
      icon: "fas fa-code",
      iconBg: "bg-green-100 dark:bg-green-900",
      iconColor: "text-secondary dark:text-green-400",
      title: "Modern JavaScript",
      description: "Add interactive features with clean, modern JavaScript that enhances user experience."
    },
    {
      icon: "fas fa-paint-brush",
      iconBg: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-accent dark:text-violet-400",
      title: "Tailwind Styling",
      description: "Utilize the power of Tailwind CSS for rapid styling without leaving your HTML."
    },
    {
      icon: "fas fa-moon",
      iconBg: "bg-yellow-100 dark:bg-yellow-900",
      iconColor: "text-yellow-500 dark:text-yellow-400",
      title: "Dark/Light Mode",
      description: "Support both dark and light themes with smooth transitions between modes."
    },
    {
      icon: "fas fa-check-circle",
      iconBg: "bg-red-100 dark:bg-red-900",
      iconColor: "text-red-500 dark:text-red-400",
      title: "Form Validation",
      description: "Implement client-side validation for contact forms and user input with clear feedback."
    },
    {
      icon: "fas fa-images",
      iconBg: "bg-indigo-100 dark:bg-indigo-900",
      iconColor: "text-indigo-500 dark:text-indigo-400",
      title: "Image Gallery",
      description: "Display your images in an interactive gallery with smooth transitions and controls."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Our platform provides everything you need to create exceptional web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`w-12 h-12 ${feature.iconBg} rounded-full flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} ${feature.iconColor} text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
