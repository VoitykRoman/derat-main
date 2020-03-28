
interface ITeamCard {
    name: string;
    position: string;
    age: number;
    phone: string;
    experience: number;
    avatarUrl: string;
    imageUrl: string;
    id: number;
    createdBy: string;
    createdAt: Date;
}
export class TeamCard {
    public name: string;
    public position: string;
    public age: number;
    public phone: string;
    public experience: number;
    public avatarUrl: string;
    public imageUrl: string;
    public id: number;
    public createdBy: string;
    public createdAt: Date;
    /**
     *
     */
    constructor(card: ITeamCard) {
        this.name = card.name;
        this.position = card.position;
        this.age = card.age;
        this.phone = card.phone;
        this.experience = card.experience;
        this.avatarUrl = card.avatarUrl;
        this.imageUrl = card.imageUrl;
        this.id = card.id;
        this.createdBy = card.createdBy;
        this.createdAt = card.createdAt;
    }
}