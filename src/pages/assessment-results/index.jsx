import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/navigation/Header';
import ResultsNavigationPanel from '../../components/navigation/ResultsNavigationPanel';
import OverviewSummary from './components/OverviewSummary';
import PersonalityAnalysisCard from './components/PersonalityAnalysisCard';
import SkillsRadarChart from './components/SkillsRadarChart';
import CareerMatchCard from './components/CareerMatchCard';
import RecommendationsPanel from './components/RecommendationsPanel';
import ComparisonPanel from './components/ComparisonPanel';

const AssessmentResults = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const summaryData = {
    completionDate: "January 11, 2026",
    overallSummary: "Based on your comprehensive assessment, you demonstrate strong analytical thinking combined with excellent interpersonal skills. Your personality profile indicates a natural inclination toward structured problem-solving while maintaining collaborative team dynamics. These traits align exceptionally well with careers in technology leadership, project management, and strategic consulting.",
    personalityType: "INTJ - Architect",
    topSkill: "Analytical Thinking",
    careerMatches: 12,
    overallScore: 87
  };

  const personalityData = {
    type: "INTJ - The Architect",
    subtitle: "Strategic Thinker & Visionary Planner",
    icon: "Brain",
    color: "var(--color-primary)",
    description: "As an INTJ personality type, you are characterized by strategic thinking, independence, and a strong drive for competence and achievement. You excel at developing long-term plans and innovative solutions to complex problems. Your analytical mindset combined with creative vision makes you naturally suited for roles requiring both strategic planning and innovative problem-solving.",
    strengths: [
    "Strategic planning and long-term vision development",
    "Independent work style with strong self-motivation",
    "Analytical problem-solving and logical reasoning",
    "High standards for quality and competence",
    "Innovative thinking and creative solution generation"],

    developmentAreas: [
    "Patience with less structured or detail-oriented tasks",
    "Flexibility in adapting to unexpected changes",
    "Expressing emotions and building personal connections",
    "Delegating tasks and trusting others\' capabilities",
    "Balancing perfectionism with practical deadlines"],

    careerImplications: "Your INTJ personality type thrives in careers that offer intellectual challenges, autonomy, and opportunities for strategic impact. You are well-suited for roles in technology leadership, scientific research, strategic consulting, architecture, and systems analysis. Environments that value innovation, competence, and independent thinking will allow you to excel and find professional fulfillment."
  };

  const skillsData = [
  { name: "Analytical Thinking", score: 92 },
  { name: "Problem Solving", score: 88 },
  { name: "Communication", score: 78 },
  { name: "Leadership", score: 82 },
  { name: "Technical Skills", score: 85 },
  { name: "Creativity", score: 76 },
  { name: "Teamwork", score: 80 },
  { name: "Adaptability", score: 74 }];


  const careerMatches = [
  {
    title: "Software Engineering Manager",
    category: "Technology Leadership",
    matchScore: 94,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d067d043-1767353588083.png",
    imageAlt: "Professional software engineer working on multiple computer monitors in modern office with code displayed on screens",
    description: "Lead software development teams in designing, building, and maintaining complex software systems. Combine technical expertise with strategic planning and team management to deliver innovative technology solutions.",
    requirements: ["Computer Science Degree", "5+ years experience", "Team Leadership", "Agile Methodology"],
    educationLevel: "Bachelor\'s Degree",
    growthOutlook: "22% (Very High)",
    salaryRange: "$120,000 - $180,000"
  },
  {
    title: "Data Scientist",
    category: "Analytics & Research",
    matchScore: 91,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3895ecc-1764656426788.png",
    imageAlt: "Data analyst examining complex charts and graphs on large display screen showing statistical analysis and trends",
    description: "Analyze complex datasets to extract meaningful insights and drive business decisions. Use statistical methods, machine learning, and data visualization to solve challenging problems and create predictive models.",
    requirements: ["Statistics/Math Degree", "Python/R Programming", "Machine Learning", "Data Visualization"],
    educationLevel: "Master\'s Degree",
    growthOutlook: "36% (Much Faster)",
    salaryRange: "$95,000 - $150,000"
  },
  {
    title: "Management Consultant",
    category: "Business Strategy",
    matchScore: 88,
    image: "https://images.unsplash.com/photo-1716703435453-a7733d600d68",
    imageAlt: "Business consultant presenting strategic analysis on whiteboard to executive team in modern conference room",
    description: "Advise organizations on strategic planning, operational efficiency, and organizational transformation. Analyze business challenges, develop solutions, and guide implementation of strategic initiatives.",
    requirements: ["Business Degree", "Strategic Thinking", "Client Management", "Problem Solving"],
    educationLevel: "MBA Preferred",
    growthOutlook: "11% (Faster)",
    salaryRange: "$85,000 - $160,000"
  },
  {
    title: "UX Research Lead",
    category: "User Experience",
    matchScore: 85,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f7cd8420-1766245077735.png",
    imageAlt: "UX researcher conducting user testing session with participant while observing interaction with digital interface prototype",
    description: "Lead user research initiatives to understand user needs, behaviors, and motivations. Design and conduct research studies, analyze findings, and translate insights into actionable design recommendations.",
    requirements: ["Psychology/HCI Degree", "Research Methods", "User Testing", "Data Analysis"],
    educationLevel: "Bachelor\'s Degree",
    growthOutlook: "18% (Much Faster)",
    salaryRange: "$90,000 - $140,000"
  },
  {
    title: "Product Manager",
    category: "Product Development",
    matchScore: 83,
    image: "https://images.unsplash.com/photo-1595905156193-c6bed84f13eb",
    imageAlt: "Product manager leading team meeting with diverse group collaborating around table with laptops and product roadmap documents",
    description: "Define product vision and strategy, prioritize features, and coordinate cross-functional teams to deliver successful products. Balance user needs, business goals, and technical constraints to drive product success.",
    requirements: ["Technical Background", "Strategic Planning", "Stakeholder Management", "Agile Experience"],
    educationLevel: "Bachelor\'s Degree",
    growthOutlook: "14% (Faster)",
    salaryRange: "$100,000 - $165,000"
  },
  {
    title: "Systems Architect",
    category: "Technology Infrastructure",
    matchScore: 81,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c05718d0-1767681735940.png",
    imageAlt: "Systems architect reviewing complex network infrastructure diagram on large screen showing cloud architecture and data flow",
    description: "Design and oversee implementation of complex IT systems and infrastructure. Create technical architectures that meet business requirements while ensuring scalability, security, and performance.",
    requirements: ["Computer Science Degree", "System Design", "Cloud Platforms", "Security Knowledge"],
    educationLevel: "Bachelor\'s Degree",
    growthOutlook: "9% (Average)",
    salaryRange: "$110,000 - $170,000"
  }];


  const recommendations = [
  {
    category: "Skill Development",
    priority: "High",
    title: "Enhance Emotional Intelligence",
    description: "While your analytical skills are exceptional, developing emotional intelligence will significantly enhance your leadership effectiveness and team collaboration capabilities.",
    actionSteps: [
    "Enroll in an emotional intelligence workshop or online course",
    "Practice active listening in team meetings and one-on-one conversations",
    "Seek feedback from colleagues on your interpersonal communication style",
    "Read books on emotional intelligence and leadership communication"],

    resources: ["Coursera EQ Course", "LinkedIn Learning"]
  },
  {
    category: "Education",
    priority: "Medium",
    title: "Consider Advanced Technical Certifications",
    description: "Pursuing specialized certifications in your field of interest will strengthen your technical credibility and open doors to senior leadership positions.",
    actionSteps: [
    "Research industry-recognized certifications relevant to your career goals",
    "Create a study plan with realistic timelines for certification preparation",
    "Join study groups or online communities for certification candidates",
    "Schedule certification exams and allocate dedicated preparation time"],

    resources: ["AWS Certification", "PMP Certification", "Google Cloud"]
  },
  {
    category: "Career Exploration",
    priority: "High",
    title: "Conduct Informational Interviews",
    description: "Connect with professionals in your top career matches to gain real-world insights and build your professional network in target industries.",
    actionSteps: [
    "Identify 5-10 professionals in your target roles using LinkedIn",
    "Craft personalized outreach messages requesting 20-minute informational interviews",
    "Prepare thoughtful questions about career paths, daily responsibilities, and industry trends",
    "Follow up with thank-you notes and maintain connections for future opportunities"],

    resources: ["LinkedIn Premium", "Industry Events"]
  },
  {
    category: "Experience",
    priority: "Medium",
    title: "Build Portfolio Projects",
    description: "Create tangible demonstrations of your skills through personal projects or open-source contributions that showcase your capabilities to potential employers.",
    actionSteps: [
    "Identify 2-3 project ideas that align with your target career paths",
    "Set up a professional portfolio website or GitHub profile",
    "Document your projects with clear descriptions, technologies used, and outcomes",
    "Share your work on professional networks and in relevant online communities"],

    resources: ["GitHub", "Portfolio Sites"]
  },
  {
    category: "Networking",
    priority: "Medium",
    title: "Join Professional Communities",
    description: "Engage with professional associations and online communities in your target industries to stay current with trends and expand your network.",
    actionSteps: [
    "Research and join 2-3 professional associations relevant to your career interests",
    "Attend virtual or in-person industry conferences and networking events",
    "Participate actively in online forums and discussion groups",
    "Consider volunteering for committee roles to increase visibility and leadership experience"],

    resources: ["Meetup Groups", "Professional Associations"]
  }];


  const comparisonData = {
    chartData: [
    { date: "Jan 2025", technical: 78, communication: 72, leadership: 75 },
    { date: "Apr 2025", technical: 82, communication: 75, leadership: 78 },
    { date: "Jul 2025", technical: 84, communication: 77, leadership: 80 },
    { date: "Oct 2025", technical: 85, communication: 78, leadership: 82 },
    { date: "Jan 2026", technical: 85, communication: 78, leadership: 82 }],

    insights: [
    {
      category: "Technical Skills",
      trend: "up",
      change: 7,
      description: "Steady improvement in technical capabilities over the past year"
    },
    {
      category: "Communication",
      trend: "up",
      change: 6,
      description: "Notable growth in communication and interpersonal skills"
    },
    {
      category: "Leadership",
      trend: "up",
      change: 7,
      description: "Significant development in leadership and team management abilities"
    }]

  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleExport = () => {
    console.log('Exporting results...');
  };

  const handleShare = () => {
    console.log('Sharing results...');
  };

  const handleCompare = () => {
    setActiveTab('comparison');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewSummary summaryData={summaryData} />;

      case 'personality':
        return <PersonalityAnalysisCard personalityData={personalityData} />;

      case 'skills':
        return <SkillsRadarChart skillsData={skillsData} />;

      case 'careers':
        return (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                Your Top Career Matches
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Based on your personality assessment and skills evaluation, here are careers that align with your strengths and interests.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {careerMatches?.map((career, index) =>
              <CareerMatchCard key={index} career={career} rank={index + 1} />
              )}
            </div>
          </div>);


      case 'recommendations':
        return <RecommendationsPanel recommendations={recommendations} />;

      case 'comparison':
        return <ComparisonPanel comparisonData={comparisonData} />;

      default:
        return <OverviewSummary summaryData={summaryData} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Assessment Results - CareerCompass</title>
        <meta name="description" content="View your comprehensive career assessment results including personality analysis, skills breakdown, and personalized career recommendations." />
      </Helmet>

      <Header />
      
      <ResultsNavigationPanel
        onTabChange={handleTabChange}
        onExport={handleExport}
        onShare={handleShare}
        onCompare={handleCompare} />


      <main className="bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {renderTabContent()}
        </div>
      </main>
    </>);

};

export default AssessmentResults;