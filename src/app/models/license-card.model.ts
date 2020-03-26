interface ILicenseCard {
    name: string;
    issuedBy: string;
    imageUrl: string;
    description: string;
    readMoreUrl: string;
    id: number;
    createdBy: string;
    createdAt: Date;
}
export class LicenseCard {
    public name: string;
    public issuedBy: string;
    public imageUrl: string;
    public description: string;
    public readMoreUrl: string;
    public  id: number;
    public createdBy: string;
    public createdAt: Date;
    /**
     *
     */
    constructor(card: ILicenseCard) {
        this.name = card.name;
        this.issuedBy = card.issuedBy;
        this.imageUrl = card.imageUrl;
        this.description = card.description;
        this.readMoreUrl = card.readMoreUrl;
        this.id = card.id;
        this.createdBy = card.createdBy;
        this.createdAt = card.createdAt;
    }
}