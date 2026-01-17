import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import AssessmentProgressTracker from '../../components/navigation/AssessmentProgressTracker';
import QuestionCard from './components/QuestionCard';
import NavigationControls from './components/NavigationControls';
import SectionCompletionModal from './components/SectionCompletionModal';
import HelpPanel from './components/HelpPanel';
import AutoSaveIndicator from './components/AutoSaveIndicator';
import PauseConfirmationModal from './components/PauseConfirmationModal';

// 1. WE KEEP YOUR ORIGINAL QUESTIONS AS A BACKUP (SEED DATA)
// If the Admin hasn't added anything yet, these will load automatically.
const DEFAULT_QUESTIONS = [
    {
      id: 1,
      section: "Personality Traits",
      category: "Extraversion",
      type: "likert",
      text: "I enjoy being the center of attention in social gatherings",
      description: "Think about how you typically feel in group settings and social events.",
      helpText: "Consider your natural preference, not how you behave when required by circumstances."
    },
    {
      id: 2,
      section: "Personality Traits",
      category: "Extraversion",
      type: "likert",
      text: "I feel energized after spending time with large groups of people",
      description: "Reflect on your energy levels after social interactions."
    },
    {
      id: 3,
      section: "Personality Traits",
      category: "Conscientiousness",
      type: "likert",
      text: "I prefer to plan things in advance rather than being spontaneous",
      description: "Consider your approach to organizing activities and tasks.",
      helpText: "Think about your natural inclination in everyday situations."
    },
    {
      id: 4,
      section: "Personality Traits",
      category: "Conscientiousness",
      type: "likert",
      text: "I pay attention to details and rarely make careless mistakes",
      description: "Evaluate your typical approach to completing tasks and projects."
    },
    {
      id: 5,
      section: "Personality Traits",
      category: "Openness",
      type: "likert",
      text: "I enjoy exploring new ideas and unconventional approaches",
      description: "Think about your attitude toward innovation and creativity."
    },
    {
      id: 6,
      section: "Work Preferences",
      category: "Environment",
      type: "multiple-choice",
      text: "Which work environment appeals to you most?",
      description: "Select the setting where you feel you would be most productive and satisfied.",
      options: [
        { value: "structured", label: "Structured office with clear routines and schedules" },
        { value: "flexible", label: "Flexible workspace with autonomy and remote options" },
        { value: "collaborative", label: "Collaborative environment with frequent team interaction" },
        { value: "independent", label: "Independent setting with minimal supervision" }
      ]
    },
    {
      id: 7,
      section: "Work Preferences",
      category: "Tasks",
      type: "multiple-choice",
      text: "What type of work tasks do you find most fulfilling?",
      description: "Consider what gives you the greatest sense of accomplishment.",
      options: [
        { value: "analytical", label: "Analyzing data and solving complex problems" },
        { value: "creative", label: "Creating and designing new concepts or products" },
        { value: "interpersonal", label: "Working with people and building relationships" },
        { value: "technical", label: "Working with systems, tools, and technical processes" }
      ]
    },
    {
      id: 8,
      section: "Work Preferences",
      category: "Leadership",
      type: "likert",
      text: "I prefer to lead projects rather than follow others' directions",
      description: "Think about your comfort level with taking charge and making decisions."
    },
    {
      id: 9,
      section: "Values & Motivations",
      category: "Career Values",
      type: "multiple-choice",
      text: "What matters most to you in a career?",
      description: "Select the factor that would be most important in your ideal job.",
      options: [
        { value: "impact", label: "Making a positive impact on society or the environment" },
        { value: "growth", label: "Continuous learning and professional development" },
        { value: "stability", label: "Job security and financial stability" },
        { value: "innovation", label: "Working on cutting-edge projects and innovations" }
      ],
      helpText: "There's no wrong answer - choose what truly resonates with your personal values."
    },
    {
      id: 10,
      section: "Values & Motivations",
      category: "Work-Life Balance",
      type: "likert",
      text: "Maintaining work-life balance is more important to me than career advancement",
      description: "Consider your priorities regarding personal time versus professional growth."
    },
    {
        id: 11,
        section: "Values & Motivations",
        category: "Recognition",
        type: "likert",
        text: "I am motivated by public recognition and awards for my achievements",
        description: "Think about what drives you to perform well in your work."
      },
      {
        id: 12,
        section: "Problem-Solving Style",
        category: "Approach",
        type: "multiple-choice",
        text: "When facing a complex problem, what is your typical approach?",
        description: "Select the method that best describes your natural problem-solving style.",
        options: [
          { value: "systematic", label: "Break it down systematically and analyze each component" },
          { value: "intuitive", label: "Trust my intuition and look for creative solutions" },
          { value: "collaborative", label: "Discuss with others and gather multiple perspectives" },
          { value: "research", label: "Research extensively and learn from similar cases" }
        ]
      },
      {
        id: 13,
        section: "Problem-Solving Style",
        category: "Decision Making",
        type: "likert",
        text: "I make decisions quickly based on available information",
        description: "Consider your typical decision-making speed and confidence level."
      },
      {
        id: 14,
        section: "Problem-Solving Style",
        category: "Risk Taking",
        type: "likert",
        text: "I am comfortable taking calculated risks to achieve better outcomes",
        description: "Think about your attitude toward uncertainty and potential rewards."
      },
      {
        id: 15,
        section: "Communication Style",
        category: "Expression",
        type: "multiple-choice",
        text: "How do you prefer to communicate important information?",
        description: "Select your most comfortable method of professional communication.",
        options: [
          { value: "written", label: "Written communication (emails, reports, documentation)" },
          { value: "verbal", label: "Verbal communication (meetings, presentations, calls)" },
          { value: "visual", label: "Visual communication (charts, diagrams, presentations)" },
          { value: "mixed", label: "Combination of multiple communication methods" }
        ]
      },
      {
        id: 16,
        section: "Communication Style",
        category: "Feedback",
        type: "likert",
        text: "I prefer direct, straightforward feedback over diplomatic suggestions",
        description: "Consider how you like to receive constructive criticism and guidance."
      },
      {
        id: 17,
        section: "Communication Style",
        category: "Conflict",
        type: "likert",
        text: "I address conflicts directly rather than avoiding them",
        description: "Think about your natural response when disagreements arise."
      },
      {
        id: 18,
        section: "Learning & Growth",
        category: "Learning Style",
        type: "multiple-choice",
        text: "What is your preferred method of learning new skills?",
        description: "Select the approach that helps you learn most effectively.",
        options: [
          { value: "hands-on", label: "Hands-on practice and experimentation" },
          { value: "structured", label: "Structured courses and formal training programs" },
          { value: "self-directed", label: "Self-directed research and independent study" },
          { value: "mentorship", label: "Learning from mentors and experienced professionals" }
        ]
      },
      {
        id: 19,
        section: "Learning & Growth",
        category: "Adaptability",
        type: "likert",
        text: "I adapt easily to changes in plans or unexpected situations",
        description: "Consider your flexibility when facing unforeseen circumstances."
      },
      {
        id: 20,
        section: "Learning & Growth",
        category: "Challenge",
        type: "likert",
        text: "I actively seek out challenging tasks that push my abilities",
        description: "Think about your attitude toward difficult or unfamiliar work.",
        helpText: "Consider whether you prefer staying in your comfort zone or pushing boundaries."
      }
  ];

const PersonalityAssessment = () => {
  const navigate = useNavigate();
  
  // 2. NEW STATE: Stores questions fetched from "Database"
  const [assessmentQuestions, setAssessmentQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Existing state...
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [showPauseModal, setShowPauseModal] = useState(false);
  const [completedSection, setCompletedSection] = useState(null);

  // 3. NEW EFFECT: Load data from LocalStorage on mount
  useEffect(() => {
    const loadQuestions = () => {
      const savedQuestions = localStorage.getItem('career_assessment_questions');
      
      if (savedQuestions) {
        // If Admin has set questions, use them
        setAssessmentQuestions(JSON.parse(savedQuestions));
      } else {
        // If not, use the DEFAULT set and initialize the "Database"
        setAssessmentQuestions(DEFAULT_QUESTIONS);
        localStorage.setItem('career_assessment_questions', JSON.stringify(DEFAULT_QUESTIONS));
      }
      setIsLoading(false);
    };

    loadQuestions();
  }, []);

  // 4. LOGIC UPDATE: All calculations now use 'assessmentQuestions' state instead of hardcoded var
  const sections = [...new Set(assessmentQuestions.map(q => q.section))];
  const currentQuestion = assessmentQuestions?.[currentQuestionIndex];
  const currentSection = sections?.indexOf(currentQuestion?.section) + 1;
  const totalSections = sections?.length;
  const progress = Math.round(((currentQuestionIndex + 1) / assessmentQuestions?.length) * 100);

  const sectionStepLabels = sections?.map((section, index) => 
    `${section?.split(' ')?.[0]} ${index + 1}`
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (answers?.[currentQuestion?.id] !== undefined) {
        handleAutoSave();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [answers, currentQuestionIndex, currentQuestion]);

  const handleAutoSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setLastSaved(new Date());
    }, 500);
  };

  const handleAnswerSelect = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion?.id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < assessmentQuestions?.length - 1) {
      const nextQuestion = assessmentQuestions?.[currentQuestionIndex + 1];
      const currentSectionName = currentQuestion?.section;
      const nextSectionName = nextQuestion?.section;

      if (currentSectionName !== nextSectionName) {
        const completedQuestions = assessmentQuestions?.filter(
          q => q?.section === currentSectionName
        )?.length;
        
        setCompletedSection({
          name: currentSectionName,
          questionsCompleted: completedQuestions
        });
        setShowSectionModal(true);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handlePause = () => {
    setShowPauseModal(true);
  };

  const handlePauseConfirm = () => {
    navigate('/assessment-dashboard');
  };

  const handleSectionModalContinue = () => {
    setShowSectionModal(false);
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const handleComplete = () => {
    setIsSaving(true);
    setTimeout(() => {
      // Save results to simulate backend submission
      localStorage.setItem('student_answers', JSON.stringify(answers));
      navigate('/skills-evaluation');
    }, 1000);
  };

  // 5. LOADING STATE: Prevent crashing while fetching questions
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl text-muted-foreground">Loading Assessment...</p>
      </div>
    );
  }

  // Safety check if questions are empty
  if (assessmentQuestions.length === 0) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <p className="text-xl text-muted-foreground">No questions found. Please contact Administrator.</p>
        </div>
    );
  }

  const canGoNext = answers?.[currentQuestion?.id] !== undefined;
  const canGoPrevious = currentQuestionIndex > 0;
  const isLastQuestion = currentQuestionIndex === assessmentQuestions?.length - 1;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AssessmentProgressTracker
        currentStep={currentSection}
        totalSteps={totalSections}
        stepLabels={sectionStepLabels}
      />
      <main className="with-progress pt-8 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Personality Assessment
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Answer honestly to receive accurate career recommendations tailored to your unique personality traits and preferences.
            </p>
          </div>

          <QuestionCard
            question={currentQuestion}
            selectedAnswer={answers?.[currentQuestion?.id]}
            onAnswerSelect={handleAnswerSelect}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={assessmentQuestions?.length}
          />

          <div className="mt-8">
            <NavigationControls
              onPrevious={handlePrevious}
              onNext={handleNext}
              onPause={handlePause}
              canGoPrevious={canGoPrevious}
              canGoNext={canGoNext}
              isLastQuestion={isLastQuestion}
              isSaving={isSaving}
            />
          </div>
        </div>
      </main>
      <AutoSaveIndicator isSaving={isSaving} lastSaved={lastSaved} />
      <HelpPanel />
      <SectionCompletionModal
        isOpen={showSectionModal}
        sectionName={completedSection?.name}
        questionsCompleted={completedSection?.questionsCompleted}
        onContinue={handleSectionModalContinue}
      />
      <PauseConfirmationModal
        isOpen={showPauseModal}
        onConfirm={handlePauseConfirm}
        onCancel={() => setShowPauseModal(false)}
        progress={progress}
      />
    </div>
  );
};

export default PersonalityAssessment;