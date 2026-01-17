import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import DashboardQuickActions from '../../components/navigation/DashboardQuickActions';
import AssessmentProgressCard from './components/AssessmentProgressCard';
import RecommendationCard from './components/RecommendationCard';
import AssessmentHistoryItem from './components/AssessmentHistoryItem';
import AchievementBadge from './components/AchievementBadge';
import QuickStatsCard from './components/QuickStatsCard';
import CareerMatchCard from './components/CareerMatchCard';
import ProfileStrengthCard from './components/ProfileStrengthCard';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const AssessmentDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const assessmentProgress = [
  {
    id: 1,
    title: "Personality Assessment",
    description: "Discover your personality type, strengths, and work preferences through scientifically-backed questions",
    progress: 75,
    status: "in-progress",
    estimatedTime: "15 min remaining",
    icon: "User",
    iconColor: "var(--color-primary)"
  },
  {
    id: 2,
    title: "Skills Evaluation",
    description: "Assess your technical, soft, and transferable skills to identify areas of expertise and growth",
    progress: 0,
    status: "not-started",
    estimatedTime: "25 min",
    icon: "Award",
    iconColor: "var(--color-accent)"
  },
  {
    id: 3,
    title: "Career Interests Questionnaire",
    description: "Explore your career interests and preferences to find paths that align with your passions",
    progress: 100,
    status: "completed",
    estimatedTime: null,
    icon: "Briefcase",
    iconColor: "var(--color-success)"
  }];


  const recommendations = [
  {
    id: 1,
    title: "Complete Your Personality Assessment",
    description: "You're 75% done! Finish to unlock personalized career recommendations",
    type: "Next Step",
    priority: "high",
    actionLabel: "Continue"
  },
  {
    id: 2,
    title: "New Career Match: Software Engineer",
    description: "Based on your completed assessments, this career shows 92% compatibility",
    type: "Career Match",
    priority: "medium",
    actionLabel: "Explore"
  },
  {
    id: 3,
    title: "Strengthen Your Profile",
    description: "Add your educational background to improve recommendation accuracy",
    type: "Profile",
    priority: "low",
    actionLabel: "Update"
  }];


  const assessmentHistory = [
  {
    id: 1,
    title: "Career Interests Questionnaire",
    completedDate: "2026-01-08T10:30:00",
    score: 88,
    type: "career"
  },
  {
    id: 2,
    title: "Initial Skills Assessment",
    completedDate: "2026-01-05T14:15:00",
    score: 76,
    type: "skills"
  }];


  const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Complete your first assessment",
    icon: "Award",
    earned: true,
    earnedDate: "2026-01-05T14:15:00"
  },
  {
    id: 2,
    title: "Career Explorer",
    description: "Explore 10 different career paths",
    icon: "Compass",
    earned: false,
    progress: 6,
    total: 10
  },
  {
    id: 3,
    title: "Assessment Master",
    description: "Complete all three core assessments",
    icon: "Trophy",
    earned: false,
    progress: 1,
    total: 3
  },
  {
    id: 4,
    title: "Profile Complete",
    description: "Achieve 100% profile strength",
    icon: "CheckCircle",
    earned: false,
    progress: 72,
    total: 100
  }];


  const quickStats = [
  {
    id: 1,
    label: "Assessments Completed",
    value: "2",
    icon: "ClipboardCheck",
    iconColor: "var(--color-primary)",
    trend: "up",
    trendValue: "+1 this week"
  },
  {
    id: 2,
    label: "Career Matches",
    value: "12",
    icon: "Target",
    iconColor: "var(--color-accent)",
    trend: "up",
    trendValue: "+3 new"
  },
  {
    id: 3,
    label: "Profile Strength",
    value: "72%",
    icon: "TrendingUp",
    iconColor: "var(--color-success)",
    trend: "up",
    trendValue: "+8%"
  }];


  const careerMatches = [
  {
    id: 1,
    title: "Software Engineer",
    matchScore: 92,
    category: "Technology",
    salary: "$85,000 - $130,000",
    growth: "22% projected",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dfbc27cd-1766500363073.png",
    imageAlt: "Professional software engineer working on multiple computer monitors with code displayed in modern office environment with natural lighting"
  },
  {
    id: 2,
    title: "UX Designer",
    matchScore: 88,
    category: "Design",
    salary: "$70,000 - $110,000",
    growth: "16% projected",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_106b2a44e-1766994291873.png",
    imageAlt: "Creative UX designer sketching wireframes and user interface designs on paper with colorful markers and digital tablet on wooden desk"
  },
  {
    id: 3,
    title: "Data Analyst",
    matchScore: 85,
    category: "Analytics",
    salary: "$65,000 - $95,000",
    growth: "25% projected",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3895ecc-1764656426788.png",
    imageAlt: "Data analyst reviewing complex charts and graphs on large computer screen showing business analytics and statistical data visualizations"
  }];


  const handleContinueAssessment = () => {
    navigate('/personality-assessment');
  };

  const handleStartAssessment = () => {
    navigate('/skills-evaluation');
  };

  const handleViewResults = () => {
    navigate('/assessment-results');
  };

  const handleRetakeAssessment = () => {
    navigate('/personality-assessment');
  };

  const handleCompleteProfile = () => {
    console.log('Complete profile clicked');
  };

  const tabs = [
  { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
  { id: 'history', label: 'History', icon: 'Clock' },
  { id: 'achievements', label: 'Achievements', icon: 'Award' }];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-4 pb-12 md:pt-6 md:pb-16 lg:pt-8 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Welcome Back, Alex
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
              Continue your career discovery journey. You're making great progress toward finding your ideal career path.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 lg:mb-12">
            {quickStats?.map((stat) =>
            <QuickStatsCard key={stat?.id} {...stat} />
            )}
          </div>

          {/* Quick Actions */}
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 md:mb-6 font-heading">
              Quick Actions
            </h2>
            <DashboardQuickActions
              onStartAssessment={handleStartAssessment}
              onContinueAssessment={handleContinueAssessment}
              onViewResults={handleViewResults}
              hasInProgressAssessment={true}
              hasCompletedAssessments={true} />

          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Assessments & History */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Assessment Progress */}
              <section>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground font-heading">
                    Your Assessments
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Plus"
                    iconPosition="left"
                    onClick={handleStartAssessment}>

                    New Assessment
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  {assessmentProgress?.map((assessment) =>
                  <AssessmentProgressCard
                    key={assessment?.id}
                    {...assessment}
                    onContinue={handleContinueAssessment}
                    onStart={handleStartAssessment}
                    onRetake={handleRetakeAssessment} />

                  )}
                </div>
              </section>

              {/* Tabs Navigation */}
              <div className="border-b border-border">
                <div className="flex items-center gap-2 overflow-x-auto">
                  {tabs?.map((tab) =>
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all duration-250 whitespace-nowrap ${
                    activeTab === tab?.id ?
                    'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`
                    }>

                      <Icon name={tab?.icon} size={16} />
                      <span>{tab?.label}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' &&
              <section>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 md:mb-6 font-heading">
                    Top Career Matches
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {careerMatches?.map((career) =>
                  <CareerMatchCard
                    key={career?.id}
                    {...career}
                    onExplore={() => console.log('Explore career:', career?.title)} />

                  )}
                  </div>
                </section>
              }

              {activeTab === 'history' &&
              <section>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 md:mb-6 font-heading">
                    Assessment History
                  </h2>
                  <div className="space-y-4">
                    {assessmentHistory?.map((item) =>
                  <AssessmentHistoryItem
                    key={item?.id}
                    {...item}
                    onViewResults={handleViewResults}
                    onRetake={handleRetakeAssessment} />

                  )}
                  </div>
                </section>
              }

              {activeTab === 'achievements' &&
              <section>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 md:mb-6 font-heading">
                    Your Achievements
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {achievements?.map((achievement) =>
                  <AchievementBadge key={achievement?.id} {...achievement} />
                  )}
                  </div>
                </section>
              }
            </div>

            {/* Right Column - Recommendations & Profile */}
            <div className="space-y-6 md:space-y-8">
              {/* Profile Strength */}
              <ProfileStrengthCard
                percentage={72}
                completedSections={5}
                totalSections={7}
                missingSections={[
                "Educational Background",
                "Work Experience"]
                }
                onComplete={handleCompleteProfile} />


              {/* Recommendations */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6 font-heading">
                  Recommendations
                </h2>
                <div className="space-y-4">
                  {recommendations?.map((recommendation) =>
                  <RecommendationCard
                    key={recommendation?.id}
                    {...recommendation}
                    onAction={() => {
                      if (recommendation?.priority === 'high') {
                        handleContinueAssessment();
                      }
                    }} />

                  )}
                </div>
              </section>

              {/* Share Section */}
              <div className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Share2" size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 font-heading">
                      Share Your Progress
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Share your assessment results with counselors or mentors for guidance
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Send"
                  iconPosition="left"
                  onClick={() => console.log('Share clicked')}>

                  Share Results
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>);

};

export default AssessmentDashboard;