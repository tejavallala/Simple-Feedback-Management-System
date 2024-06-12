export interface Feedback {
    name: string;
    feedback: string;
  }
  
  export class FeedbackStore {
    private feedbacks: Feedback[] = [];
  
    getAllFeedback(): Feedback[] {
      return this.feedbacks;
    }
  
    addFeedback(feedback: Feedback): Feedback {
      this.feedbacks.push(feedback);
      return feedback;
    }
  }
  