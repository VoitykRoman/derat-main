interface ILicenseCard {
    name: string;
    date: Date;
    issuedBy: string;
    imageUrl: string;
    description: string;
    readMoreUrl: string;
    
}
export class LicenseCard {
    public name: string;
    public date: Date;
    public issuedBy: string;
    public imageUrl: string;
    public description: string;
    public readMoreUrl: string;
    /**
     *
     */
    constructor(card: ILicenseCard) {
        this.name = card.name;
        this.date = card.date;
        this.issuedBy = card.issuedBy;
        this.imageUrl = card.imageUrl;
        this.description = card.description;
        this.readMoreUrl = card.readMoreUrl;
    }
}