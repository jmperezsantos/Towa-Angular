export class BookModel {

    /*constructor() {
        this.title = '';
        this.author = '';
    }*/

    constructor(id: string, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    id: string;
    title: string;
    author: string;

    isValid(): boolean {
        return this.title.length > 0 && this.author.length > 0;
    }

}
