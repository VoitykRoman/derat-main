interface IIndexImage {
    imageUrl: string;
    id: number;
    createdBy: string;
    createdAt: Date;
    title: string;
    description: string;

}
export class IndexImage {
    public imageUrl: string;
    public id: number;
    public createdBy: string;
    public createdAt: Date;
    public title: string;
    public description: string;

    /**
     *
     */
    constructor(index: IIndexImage) {
        this.imageUrl = index.imageUrl;
        this.id = index.id;
        this.createdBy = index.createdBy;
        this.createdAt = index.createdAt;
        this.title = index.title;
        this.description = index.description;
    }
}