import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/ui/AppImage';

const TrustSignals = () => {
  const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "College Student",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19fc27658-1767114493309.png",
    imageAlt: "Young woman with long brown hair smiling warmly wearing casual blue sweater in bright indoor setting",
    quote: "CareerCompass helped me discover my passion for data science. The assessment was incredibly accurate!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Recent Graduate",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b96df5c7-1763298849215.png",
    imageAlt: "Professional Asian man with short black hair in navy business suit smiling confidently against neutral background",
    quote: "The career recommendations aligned perfectly with my skills and interests. I landed my dream job!"
  }];


  const features = [
  {
    icon: 'Shield',
    title: 'Data Privacy',
    description: 'Your information is encrypted and never shared without permission'
  },
  {
    icon: 'Award',
    title: 'Scientifically Validated',
    description: 'Assessments backed by career psychology research'
  },
  {
    icon: 'Users',
    title: '50,000+ Students',
    description: 'Trusted by students and professionals worldwide'
  }];


  return (
    <div className="space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {features?.map((feature) =>
        <div
          key={feature?.title}
          className="flex flex-col items-center text-center p-4 md:p-6 bg-card rounded-lg border border-border">

            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
              <Icon name={feature?.icon} size={24} color="var(--color-primary)" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
              {feature?.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {feature?.description}
            </p>
          </div>
        )}
      </div>
      <div className="bg-muted/50 rounded-xl p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-6 text-center">
          What Students Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials?.map((testimonial) =>
          <div
            key={testimonial?.id}
            className="bg-card rounded-lg p-4 md:p-6 border border-border">

              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <Image
                src={testimonial?.image}
                alt={testimonial?.imageAlt}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" />

                <div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground">
                    {testimonial?.name}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {testimonial?.role}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-foreground italic">
                "{testimonial?.quote}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>);

};

export default TrustSignals;