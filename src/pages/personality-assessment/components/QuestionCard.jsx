import React from 'react';
import Icon from '../../../components/AppIcon';


const QuestionCard = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect,
  questionNumber,
  totalQuestions 
}) => {
  const isLikertScale = question?.type === 'likert';
  const isMultipleChoice = question?.type === 'multiple-choice';

  const likertOptions = [
    { value: 1, label: 'Strongly Disagree', icon: 'ThumbsDown', color: 'var(--color-error)' },
    { value: 2, label: 'Disagree', icon: 'Minus', color: 'var(--color-warning)' },
    { value: 3, label: 'Neutral', icon: 'Minus', color: 'var(--color-muted-foreground)' },
    { value: 4, label: 'Agree', icon: 'Plus', color: 'var(--color-success)' },
    { value: 5, label: 'Strongly Agree', icon: 'ThumbsUp', color: 'var(--color-success)' }
  ];

  return (
    <div className="card w-full max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="caption text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          {question?.category && (
            <span className="caption px-3 py-1 rounded-full bg-primary/10 text-primary">
              {question?.category}
            </span>
          )}
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
          {question?.text}
        </h2>
        
        {question?.description && (
          <p className="text-base text-muted-foreground">
            {question?.description}
          </p>
        )}
      </div>
      <div className="space-y-3">
        {isLikertScale && (
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {likertOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => onAnswerSelect(option?.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-250 touch-target flex flex-col items-center gap-2 ${
                  selectedAnswer === option?.value
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-border hover:border-primary/50 hover:bg-muted'
                }`}
              >
                <Icon 
                  name={option?.icon} 
                  size={24} 
                  color={selectedAnswer === option?.value ? 'var(--color-primary)' : option?.color}
                />
                <span className={`text-sm font-medium text-center ${
                  selectedAnswer === option?.value ? 'text-primary' : 'text-foreground'
                }`}>
                  {option?.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {isMultipleChoice && (
          <div className="space-y-3">
            {question?.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswerSelect(option?.value)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-250 touch-target text-left ${
                  selectedAnswer === option?.value
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-border hover:border-primary/50 hover:bg-muted'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedAnswer === option?.value
                      ? 'border-primary bg-primary' :'border-border'
                  }`}>
                    {selectedAnswer === option?.value && (
                      <Icon name="Check" size={14} color="white" />
                    )}
                  </div>
                  <span className={`text-base font-medium ${
                    selectedAnswer === option?.value ? 'text-primary' : 'text-foreground'
                  }`}>
                    {option?.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      {question?.helpText && (
        <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">{question?.helpText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;