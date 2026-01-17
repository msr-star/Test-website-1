import React from 'react';
import Icon from '../../../components/AppIcon';

const MotivationalSection = () => {
  const statistics = [
  {
    id: 1,
    value: '50,000+',
    label: 'Students Guided',
    icon: 'Users',
    color: 'var(--color-primary)'
  },
  {
    id: 2,
    value: '95%',
    label: 'Success Rate',
    icon: 'TrendingUp',
    color: 'var(--color-success)'
  },
  {
    id: 3,
    value: '200+',
    label: 'Career Paths',
    icon: 'Briefcase',
    color: 'var(--color-accent)'
  }];


  const testimonials = [
  {
    id: 1,
    text: "CareerCompass helped me discover my passion for data science. The assessment was incredibly accurate!",
    author: "Sarah Johnson",
    role: "Computer Science Student",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_103b528db-1763293982935.png",
    avatarAlt: "Professional headshot of young woman with long brown hair wearing white blouse smiling at camera"
  },
  {
    id: 2,
    text: "The personalized recommendations gave me clarity on my career path. I\'m now pursuing engineering with confidence.",
    author: "Michael Chen",
    role: "High School Senior",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0d320ce-1763293583041.png",
    avatarAlt: "Professional headshot of young Asian man with short black hair in blue shirt smiling confidently"
  }];


  return (
    <div className="space-y-8 md:space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Welcome Back to Your Career Journey
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Continue exploring your strengths, discovering new opportunities, and building the career path that's right for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {statistics?.map((stat) =>
        <div
          key={stat?.id}
          className="bg-card rounded-xl border border-border p-6 text-center space-y-3 hover:shadow-md transition-all duration-250">

            <div
            className="w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto flex items-center justify-center"
            style={{ backgroundColor: `${stat?.color}15` }}>

              <Icon name={stat?.icon} size={28} color={stat?.color} />
            </div>
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-foreground data-text">
                {stat?.value}
              </p>
              <p className="text-sm md:text-base text-muted-foreground caption">
                {stat?.label}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="bg-muted/50 rounded-xl p-6 md:p-8 space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center">
          What Our Students Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials?.map((testimonial) =>
          <div
            key={testimonial?.id}
            className="bg-card rounded-lg p-6 space-y-4 border border-border">

              <p className="text-sm md:text-base text-foreground italic">
                "{testimonial?.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                src={testimonial?.avatar}
                alt={testimonial?.avatarAlt}
                className="w-12 h-12 rounded-full object-cover" />

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial?.author}
                  </p>
                  <p className="text-xs text-muted-foreground caption">
                    {testimonial?.role}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

};

export default MotivationalSection;