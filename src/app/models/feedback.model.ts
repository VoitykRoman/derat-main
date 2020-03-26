interface IFeedback {
avatarUrl: string;
userName: string;
description: string;
rating: number
    
}
export class Feedback {
    public avatarUrl: string;
    public userName: string;
    public description: string;
    public rating: number
        
    /**
     *
     */
    constructor(feedback: IFeedback) {
        this.avatarUrl = feedback.avatarUrl;
        this.userName = feedback.userName;
        this.description = feedback.description;
        this.rating = feedback.rating;
    }
}