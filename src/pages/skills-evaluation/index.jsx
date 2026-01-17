import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import AssessmentProgressTracker from '../../components/navigation/AssessmentProgressTracker';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillCategoryTab from './components/SkillCategoryTab';
import SkillRatingScale from './components/SkillRatingScale';
import SkillRankingExercise from './components/SkillRankingExercise';
import ScenarioQuestion from './components/ScenarioQuestion';
import PortfolioUpload from './components/PortfolioUpload';
import ProgressSidebar from './components/ProgressSidebar';
import AdaptiveRecommendations from './components/AdaptiveRecommendations';

const SkillsEvaluation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);
  const [activeCategory, setActiveCategory] = useState('technical');
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const categories = [
    {
      id: 'technical',
      name: 'Technical Skills',
      completionPercentage: 75,
      estimatedTime: 8,
      skills: [
        {
          id: 'tech-1',
          name: 'Programming & Coding',
          description: 'Ability to write, debug, and maintain code in various programming languages'
        },
        {
          id: 'tech-2',
          name: 'Data Analysis',
          description: 'Proficiency in analyzing, interpreting, and visualizing data to derive insights'
        },
        {
          id: 'tech-3',
          name: 'Software Tools',
          description: 'Competence in using industry-standard software and digital tools'
        },
        {
          id: 'tech-4',
          name: 'Technical Writing',
          description: 'Ability to create clear technical documentation and specifications'
        }
      ]
    },
    {
      id: 'communication',
      name: 'Communication',
      completionPercentage: 50,
      estimatedTime: 10,
      skills: [
        {
          id: 'comm-1',
          name: 'Verbal Communication',
          description: 'Effectiveness in expressing ideas clearly through spoken words'
        },
        {
          id: 'comm-2',
          name: 'Written Communication',
          description: 'Ability to convey information clearly and professionally in writing'
        },
        {
          id: 'comm-3',
          name: 'Presentation Skills',
          description: 'Competence in delivering engaging and informative presentations'
        },
        {
          id: 'comm-4',
          name: 'Active Listening',
          description: 'Skill in understanding and responding appropriately to others'
        }
      ]
    },
    {
      id: 'leadership',
      name: 'Leadership',
      completionPercentage: 25,
      estimatedTime: 12,
      skills: [
        {
          id: 'lead-1',
          name: 'Team Management',
          description: 'Ability to coordinate, motivate, and guide team members effectively'
        },
        {
          id: 'lead-2',
          name: 'Decision Making',
          description: 'Competence in making informed and timely decisions under pressure'
        },
        {
          id: 'lead-3',
          name: 'Conflict Resolution',
          description: 'Skill in mediating disputes and finding constructive solutions'
        },
        {
          id: 'lead-4',
          name: 'Strategic Planning',
          description: 'Ability to develop and execute long-term organizational strategies'
        }
      ]
    },
    {
      id: 'creative',
      name: 'Creative Thinking',
      completionPercentage: 0,
      estimatedTime: 15,
      skills: [
        {
          id: 'cre-1',
          name: 'Innovation',
          description: 'Capacity to generate novel ideas and approaches to problems'
        },
        {
          id: 'cre-2',
          name: 'Design Thinking',
          description: 'Ability to approach problems with a user-centered design mindset'
        },
        {
          id: 'cre-3',
          name: 'Brainstorming',
          description: 'Skill in generating and developing creative ideas collaboratively'
        },
        {
          id: 'cre-4',
          name: 'Visual Communication',
          description: 'Competence in conveying ideas through visual media and design'
        }
      ]
    },
    {
      id: 'analytical',
      name: 'Analytical Skills',
      completionPercentage: 0,
      estimatedTime: 10,
      skills: [
        {
          id: 'ana-1',
          name: 'Problem Solving',
          description: 'Ability to identify issues and develop effective solutions'
        },
        {
          id: 'ana-2',
          name: 'Critical Thinking',
          description: 'Skill in evaluating information objectively and making reasoned judgments'
        },
        {
          id: 'ana-3',
          name: 'Research Skills',
          description: 'Competence in gathering, evaluating, and synthesizing information'
        },
        {
          id: 'ana-4',
          name: 'Logical Reasoning',
          description: 'Ability to think systematically and draw valid conclusions'
        }
      ]
    },
    {
      id: 'interpersonal',
      name: 'Interpersonal Skills',
      completionPercentage: 0,
      estimatedTime: 8,
      skills: [
        {
          id: 'inter-1',
          name: 'Collaboration',
          description: 'Ability to work effectively with others toward common goals'
        },
        {
          id: 'inter-2',
          name: 'Empathy',
          description: 'Capacity to understand and share the feelings of others'
        },
        {
          id: 'inter-3',
          name: 'Networking',
          description: 'Skill in building and maintaining professional relationships'
        },
        {
          id: 'inter-4',
          name: 'Cultural Awareness',
          description: 'Understanding and respect for diverse perspectives and backgrounds'
        }
      ]
    }
  ];

  const [skillRatings, setSkillRatings] = useState({});
  const [portfolioFiles, setPortfolioFiles] = useState({});
  const [scenarioAnswers, setScenarioAnswers] = useState({});

  const rankingSkills = [
    { id: 'rank-1', name: 'Problem Solving', description: 'Identifying and resolving complex issues' },
    { id: 'rank-2', name: 'Communication', description: 'Expressing ideas clearly and effectively' },
    { id: 'rank-3', name: 'Teamwork', description: 'Collaborating with others successfully' },
    { id: 'rank-4', name: 'Adaptability', description: 'Adjusting to new situations and challenges' },
    { id: 'rank-5', name: 'Time Management', description: 'Organizing and prioritizing tasks efficiently' },
    { id: 'rank-6', name: 'Leadership', description: 'Guiding and motivating team members' },
    { id: 'rank-7', name: 'Creativity', description: 'Generating innovative ideas and solutions' },
    { id: 'rank-8', name: 'Technical Expertise', description: 'Specialized knowledge in your field' }
  ];

  const scenarioQuestion = {
    id: 'scenario-1',
    context: "You're working on a critical project with a tight deadline. Your team member has fallen behind on their deliverables, which is affecting the entire project timeline.",
    question: "How would you handle this situation?",
    options: [
      {
        id: 'opt-1',
        text: "Immediately escalate the issue to management and request reassignment of tasks",
        isOptimal: false,
        explanation: "While escalation may be necessary eventually, this approach doesn't give the team member a chance to explain or improve, and may damage team morale."
      },
      {
        id: 'opt-2',
        text: "Have a private conversation to understand the challenges they\'re facing and offer support",
        isOptimal: true,
        explanation: "This demonstrates empathy and leadership. Understanding the root cause allows you to provide appropriate support and find collaborative solutions."
      },
      {
        id: 'opt-3',
        text: "Take over their tasks yourself to ensure the project stays on track",
        isOptimal: false,
        explanation: "While well-intentioned, this approach can lead to burnout and doesn't address the underlying issue or help the team member develop."
      },
      {
        id: 'opt-4',
        text: "Ignore the issue and hope they catch up on their own",
        isOptimal: false,
        explanation: "Avoiding the problem will likely result in missed deadlines and increased stress for the entire team."
      }
    ],
    feedback: "Effective leadership involves understanding team challenges and providing support while maintaining project goals."
  };

  const recommendations = [
    {
      icon: 'TrendingUp',
      priority: 'high',
      title: 'Strengthen Technical Skills',
      description: 'Based on your career interests in technology, focus on developing programming and data analysis capabilities.',
      actionItems: [
        'Complete online coding courses in Python or JavaScript',
        'Practice data analysis with real-world datasets',
        'Build a portfolio of technical projects'
      ]
    },
    {
      icon: 'Users',
      priority: 'medium',
      title: 'Develop Leadership Abilities',
      description: 'Your communication scores suggest potential for leadership roles. Consider opportunities to lead projects or mentor others.',
      actionItems: [
        'Volunteer to lead team projects',
        'Join student organizations in leadership positions',
        'Attend leadership development workshops'
      ]
    },
    {
      icon: 'Lightbulb',
      priority: 'medium',
      title: 'Enhance Creative Problem-Solving',
      description: 'Combining technical skills with creative thinking will set you apart in competitive fields.',
      actionItems: [
        'Participate in hackathons or design challenges',
        'Take courses in design thinking',
        'Practice brainstorming techniques regularly'
      ]
    }
  ];

  const handleSkillRating = (skillId, rating) => {
    setSkillRatings(prev => ({
      ...prev,
      [skillId]: rating
    }));
  };

  const handleRankingComplete = (rankedSkills) => {
    console.log('Ranked skills:', rankedSkills);
  };

  const handleScenarioAnswer = (scenarioId, optionId) => {
    setScenarioAnswers(prev => ({
      ...prev,
      [scenarioId]: optionId
    }));
  };

  const handlePortfolioUpload = (files) => {
    setPortfolioFiles(prev => ({
      ...prev,
      [activeCategory]: files
    }));
  };

  const handleSaveProgress = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Progress saved successfully!');
    }, 1000);
  };

  const handleCompleteEvaluation = () => {
    const overallProgress = calculateOverallProgress();
    if (overallProgress === 100) {
      navigate('/assessment-results');
    }
  };

  const calculateOverallProgress = () => {
    const totalProgress = categories?.reduce((sum, cat) => sum + cat?.completionPercentage, 0);
    return Math.round(totalProgress / categories?.length);
  };

  const calculateTimeRemaining = () => {
    return categories?.reduce((sum, cat) => {
      if (cat?.completionPercentage < 100) {
        return sum + cat?.estimatedTime;
      }
      return sum;
    }, 0);
  };

  const currentCategoryData = categories?.find(cat => cat?.id === activeCategory);
  const overallProgress = calculateOverallProgress();
  const timeRemaining = calculateTimeRemaining();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <AssessmentProgressTracker
        currentStep={currentStep}
        totalSteps={5}
        stepLabels={['Profile', 'Personality', 'Skills', 'Interests', 'Review']}
      />
      <main className="with-progress bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => navigate('/personality-assessment')}
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors touch-target"
                aria-label="Go back"
              >
                <Icon name="ArrowLeft" size={20} />
              </button>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Skills Evaluation
                </h1>
                <p className="text-sm md:text-base text-muted-foreground">
                  Assess your abilities across multiple skill categories to identify strengths and development areas
                </p>
              </div>
            </div>

            <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
              <div className="flex gap-3">
                <Icon name="Info" size={18} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">
                    Rate your proficiency honestly across all categories. Your responses will help generate personalized career recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-6">
              <div className="lg:hidden">
                <Button
                  variant="outline"
                  onClick={() => setShowMobileSidebar(!showMobileSidebar)}
                  iconName={showMobileSidebar ? "X" : "Menu"}
                  fullWidth
                >
                  {showMobileSidebar ? 'Close' : 'View Progress'}
                </Button>
              </div>

              {showMobileSidebar && (
                <div className="lg:hidden">
                  <ProgressSidebar
                    categories={categories}
                    currentCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    overallProgress={overallProgress}
                    estimatedTimeRemaining={timeRemaining}
                    onSave={handleSaveProgress}
                    onComplete={handleCompleteEvaluation}
                  />
                </div>
              )}

              <div className="bg-card rounded-xl border border-border p-4 md:p-6">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    Select Category
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {categories?.map((category) => (
                      <SkillCategoryTab
                        key={category?.id}
                        category={category}
                        isActive={activeCategory === category?.id}
                        onClick={() => setActiveCategory(category?.id)}
                        completionPercentage={category?.completionPercentage}
                        estimatedTime={category?.estimatedTime}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {currentCategoryData && (
                <>
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      Rate Your {currentCategoryData?.name}
                    </h3>
                    {currentCategoryData?.skills?.map((skill) => (
                      <SkillRatingScale
                        key={skill?.id}
                        skill={skill}
                        value={skillRatings?.[skill?.id] || 0}
                        onChange={handleSkillRating}
                      />
                    ))}
                  </div>

                  <PortfolioUpload
                    category={currentCategoryData?.name}
                    onUpload={handlePortfolioUpload}
                    existingFiles={portfolioFiles?.[activeCategory] || []}
                  />
                </>
              )}

              {activeCategory === 'technical' && (
                <>
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      Skill Ranking Exercise
                    </h3>
                    <SkillRankingExercise
                      skills={rankingSkills}
                      onComplete={handleRankingComplete}
                      maxSelections={5}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      Scenario-Based Assessment
                    </h3>
                    <ScenarioQuestion
                      scenario={scenarioQuestion}
                      onAnswer={handleScenarioAnswer}
                      currentAnswer={scenarioAnswers?.[scenarioQuestion?.id]}
                    />
                  </div>
                </>
              )}

              <AdaptiveRecommendations
                recommendations={recommendations}
                educationLevel="Undergraduate"
                careerInterests={['Technology', 'Innovation', 'Problem Solving']}
              />

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => navigate('/personality-assessment')}
                  iconName="ArrowLeft"
                  fullWidth
                >
                  Previous Step
                </Button>
                <Button
                  variant="default"
                  onClick={() => navigate('/assessment-results')}
                  iconName="ArrowRight"
                  iconPosition="right"
                  fullWidth
                >
                  Continue to Results
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <ProgressSidebar
                categories={categories}
                currentCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                overallProgress={overallProgress}
                estimatedTimeRemaining={timeRemaining}
                onSave={handleSaveProgress}
                onComplete={handleCompleteEvaluation}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SkillsEvaluation;